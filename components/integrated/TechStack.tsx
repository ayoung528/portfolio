const stack = [
  {
    category: '프론트엔드',
    items: [
      { name: 'React', desc: '컴포넌트 기반 UI 구성' },
      { name: 'Next.js', desc: '프레임워크' },
      { name: 'TypeScript', desc: '타입 안전성 확보' },
      { name: 'Tailwind', desc: '유틸리티 기반 스타일링' },
      { name: 'shadcn/ui', desc: '공용 컴포넌트 라이브러리' },
    ],
  },
  {
    category: '데이터 & API',
    items: [
      { name: 'GraphQL', desc: '백엔드 API 통신' },
      { name: 'TanStack Query', desc: '서버 상태 관리' },
    ],
  },
  {
    category: 'AI & 인프라',
    items: [
      { name: 'Ollama (Llama)', desc: 'On-premise 모델 서빙 및 태그 추출' },
    ],
  },
  {
    category: '협업 & 모니터링',
    items: [
      { name: 'Storybook', desc: '컴포넌트 설계 공유' },
      { name: 'Sentry', desc: '에러 로그 모니터링' },
      { name: 'Figma', desc: '와이어프레임 설계' },
      { name: 'Jira', desc: '일감 및 브랜치 관리' },
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
