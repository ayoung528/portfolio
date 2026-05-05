const categories = [
  {
    category: '언어 및 프레임워크',
    items: [
      { name: 'React 19', desc: 'useEffectEvent 활용' },
      { name: 'TypeScript', desc: '타입 안전성 확보' },
      { name: 'Next.js', desc: '프레임워크' },
    ],
  },
  {
    category: '데이터 상태 관리',
    items: [
      { name: 'TanStack Query', desc: 'useQuery enabled 옵션 활용' },
      { name: 'socket.io', desc: '실시간 통신 중앙화' },
    ],
  },
  {
    category: '최적화',
    items: [
      { name: 'debounce', desc: '데이터 배칭으로 렌더링 최소화' },
      { name: 'useRef', desc: '렌더링 없는 값 관리' },
      { name: 'memo', desc: '불필요한 리렌더링 방지' },
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

        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {categories.map(({ category, items }) => (
            <div key={category}>
              <p
                style={{
                  fontSize: '0.72rem',
                  letterSpacing: '0.12em',
                  color: 'var(--color-ink-faint)',
                  fontWeight: 500,
                  marginBottom: '12px',
                  textTransform: 'uppercase',
                }}
              >
                {category}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
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
                        lineHeight: 1.5,
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
