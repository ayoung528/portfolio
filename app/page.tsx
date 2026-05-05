import Link from 'next/link';

export default function LandingPage() {
  const projects = [
    {
      href: '/monorepo',
      index: '01',
      category: 'Architecture',
      title: '멀티레포에서\n모노레포로',
      desc: '트리쉐이킹 미지원, 의존성 파편화 문제를 Nx 기반 모노레포로 해결하고 Parsed Size를 250KB 감소시킨 대규모 마이그레이션 작업입니다.',
      tags: ['Nx', 'Changesets', 'Rollup', 'GitLab CI/CD'],
      result: 'Parsed Size 24% 감소',
    },
    {
      href: '/refactoring',
      index: '02',
      category: 'Refactoring',
      title: '실시간 데이터 화면\n렌더링 최적화',
      desc: '여러 컴포넌트에 파편화된 소켓 통신 로직을 중앙화하고, UI와 비즈니스 로직을 분리하여 유지보수성과 렌더링 성능을 개선한 리팩토링 작업입니다.',
      tags: ['React 19', 'useEffectEvent', 'socket.io', 'TanStack Query'],
      result: '소켓 재연결 n회 → 1회',
    },
  ];

  return (
    <div
      style={{
        background: 'var(--color-bg)',
        color: 'var(--color-ink)',
        minHeight: '100vh',
      }}
    >
      <style>{`
        .project-card {
          transition: background 0.2s ease;
          border-radius: 4px;
          margin: 0 -16px;
          padding: 48px 16px;
          flex-wrap: wrap;
        }
        .project-card:hover {
          background: var(--color-surface);
        }
        @media (max-width: 768px) {
          .hero-profile-img {
            width: 3rem !important;
            height: 3rem !important;
          }
          .hero-title-row {
            gap: 16px !important;
          }
        }
      `}</style>

      {/* ─────────────────── Hero ─────────────────── */}
      <section
        className="px-16 mob-px"
        style={{ paddingTop: '120px', paddingBottom: '80px' }}
      >
        <p
          className="text-xs tracking-[0.2em] uppercase mb-8 fade-up"
          style={{ color: 'var(--color-ink-faint)' }}
        >
          Portfolio
        </p>

        <div
          className="hero-title-row"
          style={{
            display: 'flex',
            gap: '30px',
          }}
        >
          <h1
            className="serif fade-up fade-up-delay-1 mob-h1"
            style={{
              fontSize: '4.5rem',
              lineHeight: 1.05,
              marginBottom: '2rem',
            }}
          >
            정아영
          </h1>

          <img
            src="/profile.jpg"
            alt="프로필"
            className="hero-profile-img"
            style={{
              width: '5rem',
              height: '5rem',
              borderRadius: '50%',
              objectFit: 'cover',
              flexShrink: 0,
            }}
          />
        </div>

        <p
          className="fade-up fade-up-delay-2"
          style={{
            fontSize: '1rem',
            color: 'var(--color-ink-muted)',
            lineHeight: 1.8,
            maxWidth: '560px',
          }}
        >
          사용자와 개발자 모두를 위한 경험을 개선하는 웹 프론트엔드
          개발자입니다.
        </p>

        <p
          className="fade-up fade-up-delay-3 mt-6"
          style={{
            fontSize: '0.875rem',
            color: 'var(--color-ink-faint)',
            lineHeight: 1.9,
            maxWidth: '480px',
          }}
        >
          안녕하세요 :) 귀한 시간 내어 제 포트폴리오에 방문해 주셔서 감사합니다.
          <br />
          모쪼록 흥미롭게 읽어주시길 바라며, 당사와 컬쳐핏이 잘 맞았으면
          좋겠습니다.
        </p>
      </section>

      {/* ─────────────────── Projects ─────────────────── */}
      <section
        className="px-16 mob-px"
        style={{
          borderTop: '1px solid var(--color-border)',
          paddingBottom: '120px',
        }}
      >
        <p
          className="text-xs tracking-[0.2em] uppercase"
          style={{
            color: 'var(--color-ink-faint)',
            paddingTop: '48px',
            marginBottom: '48px',
          }}
        >
          Projects
        </p>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {projects.map(
            ({ href, index, category, title, desc, tags, result }, i, arr) => (
              <Link
                key={href}
                href={href}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div
                  className="project-card flex gap-12"
                  style={{
                    borderTop: '1px solid var(--color-border)',
                    ...(i === arr.length - 1
                      ? { borderBottom: '1px solid var(--color-border)' }
                      : {}),
                  }}
                >
                  {/* 인덱스 */}
                  <span
                    className="shrink-0"
                    style={{
                      fontSize: '0.7rem',
                      width: '32px',
                      paddingTop: '6px',
                      color: 'var(--color-ink-faint)',
                      letterSpacing: '0.1em',
                    }}
                  >
                    {index}
                  </span>

                  {/* 카테고리 + 제목 */}
                  <div style={{ flex: '0 0 360px', minWidth: '240px' }}>
                    <p
                      style={{
                        fontSize: '0.72rem',
                        letterSpacing: '0.15em',
                        color: 'var(--color-ink-faint)',
                        fontWeight: 500,
                        textTransform: 'uppercase',
                        marginBottom: '12px',
                      }}
                    >
                      {category}
                    </p>
                    <h2
                      className="serif"
                      style={{
                        fontSize: '1.75rem',
                        lineHeight: 1.2,
                        color: 'var(--color-ink)',
                        whiteSpace: 'pre-line',
                      }}
                    >
                      {title}
                    </h2>
                  </div>

                  {/* 설명 + 태그 + 성과 */}
                  <div style={{ flex: 1, minWidth: '200px' }}>
                    <p
                      style={{
                        fontSize: '0.875rem',
                        color: 'var(--color-ink-muted)',
                        lineHeight: 1.8,
                        marginBottom: '20px',
                      }}
                    >
                      {desc}
                    </p>

                    {/* 태그 */}
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '6px',
                        marginBottom: '16px',
                      }}
                    >
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

                    {/* 성과 */}
                    <p
                      style={{
                        fontSize: '0.78rem',
                        color: 'var(--color-accent)',
                        fontWeight: 600,
                      }}
                    >
                      ✦ {result}
                    </p>
                  </div>

                  {/* 화살표 */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      color: 'var(--color-ink-faint)',
                      fontSize: '1.25rem',
                      flexShrink: 0,
                    }}
                  >
                    →
                  </div>
                </div>
              </Link>
            ),
          )}
        </div>
      </section>

      {/* ─────────────────── Footer ─────────────────── */}
      <footer
        className="px-16 mob-px py-12 flex items-center justify-end"
        style={{ borderTop: '1px solid var(--color-border)' }}
      >
        <p style={{ fontSize: '0.78rem', color: 'var(--color-ink-faint)' }}>
          단순히 작동하는 코드보다, 동료가 이해하기 쉬운 코드를 지향합니다.
        </p>
      </footer>
    </div>
  );
}
