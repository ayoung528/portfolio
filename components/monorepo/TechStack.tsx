const stack = [
  {
    category: '빌드 & 번들링',
    items: [
      { name: 'Yarn Workspaces', desc: '모노레포 선언' },
      { name: 'Nx', desc: '캐싱 기반 빌드' },
      { name: 'Rollup', desc: '컴포넌트 번들링' },
      { name: 'ESM', desc: '트리쉐이킹 지원' },
    ],
  },
  {
    category: '릴리즈 관리',
    items: [
      { name: 'Changesets', desc: '버전 & 릴리즈 관리' },
      { name: 'GitLab CI/CD', desc: '자동 배포 파이프라인' },
    ],
  },
  {
    category: '협업 도구',
    items: [
      { name: 'Notion', desc: '파트 내 공유 문서' },
      { name: 'Jira', desc: '다른 부서와 공유' },
    ],
  },
  {
    category: 'AI & 테스트',
    items: [
      { name: 'Claude Code', desc: 'AI 코딩 어시스턴트' },
      { name: 'Playwright', desc: 'UI 자동화 테스트' },
    ],
  },
];

export default function TechStack() {
  return (
    <>
      <section
        className="px-16 mob-px py-20 mob-py-sm"
        style={{ borderTop: '1px solid var(--color-border)' }}
      >
        <p
          className="text-xs tracking-[0.2em] uppercase mb-8"
          style={{ color: 'var(--color-ink-faint)' }}
        >
          Tech Stack
        </p>
        <h2
          className="serif mb-12 mob-h2"
          style={{ fontSize: '3rem', lineHeight: 1.1 }}
        >
          사용한 기술
        </h2>
        <div
          style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}
        >
          {stack.map(({ category, items }) => (
            <div key={category}>
              <p
                style={{
                  fontSize: '0.7rem',
                  letterSpacing: '0.12em',
                  color: 'var(--color-ink-faint)',
                  marginBottom: '12px',
                }}
              >
                {category.toUpperCase()}
              </p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                {items.map(({ name, desc }) => (
                  <div
                    key={name}
                    className="rounded-xl px-5 py-4"
                    style={{
                      background: 'var(--color-surface)',
                      minWidth: '140px',
                    }}
                  >
                    <p
                      style={{
                        fontSize: '0.84rem',
                        fontWeight: 600,
                        color: 'var(--color-ink)',
                        marginBottom: '4px',
                      }}
                    >
                      {name}
                    </p>
                    <p
                      style={{
                        fontSize: '0.72rem',
                        color: 'var(--color-ink-faint)',
                      }}
                    >
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer
        className="px-16 mob-px py-12 flex items-center justify-end"
        style={{ borderTop: '1px solid var(--color-border)' }}
      >
        <p style={{ fontSize: '0.75rem', color: 'var(--color-ink-faint)' }}>
          ✉️ ay052884@gmail.com
        </p>
      </footer>
    </>
  );
}
