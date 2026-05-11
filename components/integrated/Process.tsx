const steps = [
  {
    step: '01',
    phase: 'Interview',
    title: '현장 인터뷰를 통한 요구사항 도출',
    body: '컨설팅팀, 엔진개발팀, 취약점연구팀 등 사내 여러 팀과 심층 인터뷰를 진행했습니다. 각 팀의 실제 고충과 니즈를 수집하고 Notion으로 문서화하여 기능 요구사항을 정의했습니다.\n\n주 사용자인 검출 룰 설계자와 고객을 응대하는 엔지니어의 공통 니즈인 "손쉬운 룰 검색 및 수정"을 핵심 요구사항으로 반영했고, 사업팀의 의견을 수렴하여 "보안 레퍼런스 지원율 자동 계산" 기능을 추가로 기획했습니다.',
    tags: ['요구사항 분석', '사용자 인터뷰', 'Notion'],
  },
  {
    step: '02',
    phase: 'Planning',
    title: '와이어프레임 설계 및 일감 관리',
    body: 'Figma를 활용해 체커·룰팩·레퍼런스 3개 페이지의 와이어프레임을 구축했습니다. 각 페이지의 목록 조회, 상세 조회, 수정, 삭제 흐름을 시각화하여 팀 전체가 동일한 맥락을 공유할 수 있도록 했습니다.\n\nJira로 일감을 관리하여 기능 단위로 브랜치를 생성하고, 개발 완료 후 MR을 통한 코드 리뷰를 진행해 코드 품질을 유지했습니다.',
    tags: ['Figma', 'Jira', '와이어프레임', '코드 리뷰'],
  },
  {
    step: '03',
    phase: 'Development',
    title: '컴포넌트 설계 및 기능 구현',
    body: 'React + Next.js + shadcn/ui + Tailwind 스택으로 페이지와 컴포넌트를 개발했습니다. Storybook을 통해 컴포넌트 설계 화면을 팀원과 공유하며 UI 일관성을 확보했습니다.\n\nGraphQL 기반 API 통신 환경에서 TanStack Query로 서버 상태를 관리하고, 각 페이지의 CRUD 기능과 실시간 지원율 산출 UI를 구현했습니다.',
    tags: [
      'React',
      'Next.js',
      'shadcn/ui',
      'Tailwind',
      'Storybook',
      'TanStack Query',
      'GraphQL',
    ],
  },
  {
    step: '04',
    phase: 'Deploy',
    title: '배포 및 에러 모니터링 도입',
    body: '제품 릴리즈 이후 Sentry를 도입하여 프론트엔드 에러 로그를 실시간으로 추적할 수 있는 환경을 구축했습니다. 배포 후 발생하는 예외 상황을 빠르게 감지하고 대응할 수 있어 서비스 안정성을 높였습니다.',
    tags: ['Sentry', '에러 모니터링', '서비스 안정성'],
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
        인터뷰에서 배포까지,
        <br />전 과정을 주도하다
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {steps.map(({ step, phase, title, body, tags }, i) => (
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
                  display: 'block',
                  marginBottom: '4px',
                }}
              >
                STEP {step}
              </span>
              <span
                style={{
                  fontSize: '0.6rem',
                  letterSpacing: '0.1em',
                  color: 'var(--color-accent)',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                }}
              >
                {phase}
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
                  marginBottom: '16px',
                  whiteSpace: 'pre-line',
                }}
              >
                {body}
              </p>

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
