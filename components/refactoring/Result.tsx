const metrics = [
  {
    index: '01',
    value: 'n → 1',
    label: '소켓 재연결 횟수',
    desc: '기존에는 useEffect 의존성 배열의 값이 변경될 때마다 소켓이 재연결됐습니다. 실시간 분석 중엔 이 값들이 빈번하게 바뀌기 때문에 재연결 횟수를 예측할 수 없었습니다. useEffectEvent 도입으로 isRunning 상태에만 소켓 생명주기를 바인딩해 단 한 번의 연결로 개선했습니다.',
  },
  {
    index: '02',
    value: 'n → 1',
    label: '탭 전환 시 불필요한 API 호출',
    desc: 'useQuery enabled 옵션으로 분석이 완료된 상태에서 탭을 전환해도 API가 호출되지 않도록 개선했습니다.',
  },
  {
    index: '03',
    value: '즉시 → 배칭',
    label: 'setState 처리 방식',
    desc: 'useRef + debounce 조합으로 소켓 메시지가 쏟아질 때 잦은 setState를 300ms 단일 배치로 통합해 렌더링 부하를 최소화했습니다.',
  },
];

export default function Result() {
  return (
    <section
      className="px-16 mob-px py-20 mob-py-sm"
      style={{ borderTop: '1px solid var(--color-border)' }}
    >
      <p
        className="text-xs tracking-[0.2em] uppercase mb-8"
        style={{ color: 'var(--color-ink-faint)' }}
      >
        Result
      </p>

      <h2
        className="serif mb-16 mob-h2"
        style={{ fontSize: '3rem', lineHeight: 1.1 }}
      >
        안정적인 실시간 통신과
        <br />
        렌더링 효율화
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {metrics.map(({ index, value, label, desc }, i, arr) => (
          <div
            key={index}
            className="flex gap-12 py-8"
            style={{
              borderTop: '1px solid var(--color-border)',
              ...(i === arr.length - 1
                ? { borderBottom: '1px solid var(--color-border)' }
                : {}),
              flexWrap: 'wrap',
              alignItems: 'flex-start',
            }}
          >
            {/* 인덱스 */}
            <span
              className="shrink-0"
              style={{
                fontSize: '0.7rem',
                width: '32px',
                paddingTop: '4px',
                color: 'var(--color-ink-faint)',
                letterSpacing: '0.1em',
              }}
            >
              {index}
            </span>

            {/* 수치 */}
            <p
              className="serif shrink-0"
              style={{
                fontSize: '2rem',
                lineHeight: 1,
                color: 'var(--color-ink)',
                width: '200px',
                paddingTop: '2px',
              }}
            >
              {value}
            </p>

            {/* 라벨 + 설명 */}
            <div style={{ flex: 1, minWidth: '200px' }}>
              <p
                style={{
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: 'var(--color-ink)',
                  marginBottom: '8px',
                }}
              >
                {label}
              </p>
              <p
                style={{
                  fontSize: '0.84rem',
                  color: 'var(--color-ink-muted)',
                  lineHeight: 1.75,
                }}
              >
                {desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
