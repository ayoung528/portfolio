const steps = [
  {
    step: '01',
    title: 'TabController UI 로직 및 책임 분리',
    body: '"무엇을 보여줄 것인가(UI)"와 "어떻게 데이터를 가져올 것인가(Business Logic)"를 철저히 분리했습니다.\n기존 블랙박스 구조에서 상위에서 아래로 데이터가 흐르는 단방향 구조로 전환하여 디버깅이 쉬운 Stateless 컴포넌트로 개선했습니다.',
    tags: ['단일 책임 원칙', 'Props Drilling 제거', 'memo'],
    before: `const WorkInfoTabController = () => {
  const [workMessageFilter, setWorkMessageFilter] = useState({...});
  const { data: countsPerWorkTab } = useQuery({...});

  useEffect(() => {
    if (router?.query?.workTab) {
      setTab(router?.query?.workTab);
    }
  }, [router.query]);

  useEffect(() => {
    setWorkMessageFilter({...});
    queryClient.invalidateQueries({
      queryKey: ['countsPerWorkTab'],
    });
  }, [tab]);

  return (
    <>
      <TabController options={...} value={tab} onChange={handleChangeTab} />
      {tab === 'general' && <WorkMessageAlert />}
      {tab === 'issue' && <WorkIssueTable />}
      {tab === 'asset' && <WorkAssetTable />}
    </>
  );
};`,
    after: `const WorkInfoTabController = memo((props) => {
  const { type, tab, countsPerWorkTab, handleChangeTab } = props;
  const { t } = useTranslation('common');

  // 오직 UI 렌더링만 담당
  return (
    <Col span={24}>
      <TabController
        options={getTabOptions(type, countsPerWorkTab ?? {}, t)}
        value={tab}
        onChange={handleChangeTab}
      />
    </Col>
  );
});`,
  },

  {
    step: '02',
    title: 'useRef + debounce 데이터 배칭으로 렌더링 최적화',
    body: '실시간으로 쏟아지는 소켓 데이터를 처리하기 위해 Ref와 Debounce를 조합한 배칭 로직을 구현했습니다.\n짧은 시간 내에 발생하는 잦은 상태 변경을 하나로 묶어 처리함으로써 브라우저 렌더링 부하를 최소화했습니다.',
    tags: ['useRef', 'debounce', '렌더링 최적화', '데이터 배칭'],
    before: `// 소켓 메시지마다 즉시 setState → 잦은 리렌더링
ws.current.on('progress', (args) => {
  setStatus((prev) => ({
    ...prev,
    ...(args?.status && { status: args.status }),
    ...(args?.progress && { progress: args.progress }),
  }));
});`,
    after: `// pendingRef에 누적 후 한 번에 배치 업데이트
const pendingUpdatesRef = useRef({ statusInfo: {}, dastInfo: {} });
const debouncedUpdate = useRef(null);

debouncedUpdate.current = debounce(() => {
  const { statusInfo, dastInfo } = pendingUpdatesRef.current;

  if (Object.keys(statusInfo).length > 0)
    setAnalysisStatus((prev) => ({ ...prev, ...statusInfo }));
  if (Object.keys(dastInfo).length > 0)
    setDastAnalysis((prev) => ({ ...prev, ...dastInfo }));

  pendingUpdatesRef.current = { statusInfo: {}, dastInfo: {} };
}, 300);`,
  },
  {
    step: '03',
    title: '소켓 통신 중앙화 및 useEffectEvent 도입',
    body: '모든 소켓 이벤트 리스너를 TaskDetailSlideOut으로 집중시키고 React 19의 useEffectEvent를 도입하여 소켓 연결은 유지하면서도 리스너 내부에서 항상 최신 state를 참조할 수 있는 구조를 만들었습니다.\n결과적으로 단 한 번의 연결로 끊김 없는 실시간 데이터 수집이 가능해졌습니다.',
    tags: ['useEffectEvent', 'socket.io', '소켓 생명주기 관리'],
    before: `// DetailSlideOut과 GeneralInfoTab 각각에서 소켓 연결
useEffect(() => {
  if (isRunning && !ws.current) {
    ws.current = io('/status:analysis');
    ws.current.on('progress', (args) => {
      // 상태가 바뀔 때마다 소켓 재연결 발생
      setStatus((prev) => ({ ...prev, ...args }));
    });
  }
  // 의존성 배열에 많은 변수 → 잦은 재연결
}, [info, isFetching, analysisId, onDastProgress]);

// GeneralInfoTab에서도 별도 리스너 등록
webSocket.on('progress', (args) => {
  setDynamicInfo((prev) => ({ ...prev, ...args }));
});`,
    after: `// 소켓 연결 로직을 useEffectEvent로 분리 → 재연결 없음
const setupSocket = useEffectEvent(() => {
  if (ws.current) return;
  const socket = io('/status:analysis', { reconnectionAttempts: 5 });
  ws.current = socket;

  socket.on('progress', (args) => {
    // 항상 최신 state 참조 보장
    pendingUpdatesRef.current = { ...args };
    debouncedUpdate.current();
  });
});

// isRunning 값에만 바인딩 → 명확한 생명주기
useEffect(() => {
  if (!isRunning) return;
  setupSocket();
  return () => cleanupSocket();
}, [isRunning]);`,
  },
  {
    step: '04',
    title: 'useQuery enabled 옵션으로 불필요한 API 호출 제거',
    body: 'useEffect + refetch 패턴으로 인해 발생하던 불필요한 API 호출을 useQuery의 enabled 옵션으로 대체했습니다.\n분석이 진행 중일 때만, 그리고 필요한 조건이 충족될 때만 API가 호출되도록 선언적으로 제어했습니다.',
    tags: ['TanStack Query', 'enabled 옵션', 'API 최적화'],
    before: `// useEffect로 조건을 직접 판단 후 refetch
useEffect(() => {
  const isStatusChanged = prevStatusRef.current !== status;
  if (isStatusChanged && status !== undefined && ...) {
    refetch();
  }
  prevStatusRef.current = status;
}, [status, projectKey, type, refetch]);`,
    after: `// enabled 옵션으로 선언적 제어
const { data: compareBaseWorks } = useQuery({
  queryKey: ['compareBaseWorks', projectKey],
  queryFn: getCompareOptionList(projectKey),
  enabled:
    !!projectKey &&
    status !== undefined &&
    (type === 'TOTAL_ANALYSIS' || type === 'PARTIAL_ANALYSIS'),
});`,
  },
];

export default function Process() {
  return (
    <section
      className="px-16 mob-px py-20 mob-py-sm"
      style={{ borderTop: '1px solid var(--color-border)' }}
    >
      <p
        className="text-xs tracking-[0.2em] uppercase mb-8"
        style={{ color: 'var(--color-ink-faint)' }}
      >
        Process
      </p>

      <h2
        className="serif mb-16 mob-h2"
        style={{ fontSize: '3rem', lineHeight: 1.1 }}
      >
        단방향 흐름과
        <br />
        단일 책임으로
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {steps.map(({ step, title, body, tags, before, after }, i) => (
          <div
            key={step}
            className="mob-step-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '80px 1fr',
              gap: '32px',
              padding: '32px 0',
              borderTop: '1px solid var(--color-border)',
              ...(i === steps.length - 1
                ? { borderBottom: '1px solid var(--color-border)' }
                : {}),
            }}
          >
            <div style={{ paddingTop: '2px' }}>
              <span
                style={{
                  fontSize: '0.65rem',
                  letterSpacing: '0.15em',
                  color: 'var(--color-ink-faint)',
                  fontWeight: 500,
                }}
              >
                STEP {step}
              </span>
            </div>

            <div>
              <h3
                style={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: 'var(--color-ink)',
                  marginBottom: '12px',
                }}
              >
                {title}
              </h3>

              <p
                style={{
                  fontSize: '0.875rem',
                  color: 'var(--color-ink-muted)',
                  lineHeight: 1.85,
                  marginBottom: '20px',
                  whiteSpace: 'pre-line',
                }}
              >
                {body}
              </p>

              {/* Before / After 코드 비교 */}
              <div
                className="flex gap-4 mob-stack"
                style={{ marginBottom: '16px' }}
              >
                <div className="flex-1 mob-full">
                  <p
                    style={{
                      fontSize: '0.65rem',
                      letterSpacing: '0.15em',
                      color: 'var(--color-ink-faint)',
                      fontWeight: 500,
                      marginBottom: '8px',
                    }}
                  >
                    BEFORE
                  </p>
                  <pre
                    style={{
                      fontSize: '0.78rem',
                      lineHeight: 1.75,
                      background: 'var(--color-surface)',
                      border: '1px solid var(--color-border)',
                      borderRadius: '10px',
                      padding: '16px',
                      overflowX: 'auto',
                      color: 'var(--color-ink-muted)',
                      whiteSpace: 'pre-wrap',
                      wordBreak: 'break-word',
                    }}
                  >
                    <code>{before}</code>
                  </pre>
                </div>

                <div className="flex-1 mob-full">
                  <p
                    style={{
                      fontSize: '0.65rem',
                      letterSpacing: '0.15em',
                      color: 'var(--color-accent)',
                      fontWeight: 500,
                      marginBottom: '8px',
                    }}
                  >
                    AFTER
                  </p>
                  <pre
                    style={{
                      fontSize: '0.78rem',
                      lineHeight: 1.75,
                      background: 'var(--color-accent-light)',
                      border: '1px solid var(--color-accent)',
                      borderRadius: '10px',
                      padding: '16px',
                      overflowX: 'auto',
                      color: 'var(--color-ink)',
                      whiteSpace: 'pre-wrap',
                      wordBreak: 'break-word',
                      opacity: 0.85,
                    }}
                  >
                    <code>{after}</code>
                  </pre>
                </div>
              </div>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: '0.72rem',
                      background: 'var(--color-surface)',
                      color: 'var(--color-ink-muted)',
                      border: '1px solid var(--color-border)',
                      borderRadius: '6px',
                      padding: '3px 10px',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
