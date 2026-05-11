const pages = [
  {
    label: '체커 페이지',
    desc: '취약점 검출 룰(Checker)을 조회·수정·삭제할 수 있는 페이지. AI가 추출한 태그를 확인하고 직접 편집할 수 있습니다.',
  },
  {
    label: '룰팩 페이지',
    desc: '여러 체커를 묶은 룰팩(Rule Pack)을 관리하는 페이지. 룰팩 단위로 제품에 적용하거나 버전을 관리할 수 있습니다.',
  },
  {
    label: '레퍼런스 페이지',
    desc: '국내외 컴플라이언스 등 보안 레퍼런스를 관리하는 페이지. 체커와의 태그 매핑을 통해 지원율을 실시간으로 산출합니다.',
  },
];

export default function Overview() {
  return (
    <section
      className="px-16 mob-px py-20 mob-py-sm"
      style={{ borderTop: '1px solid var(--color-border)' }}
    >
      <p
        className="text-xs tracking-[0.2em] uppercase mb-8"
        style={{ color: 'var(--color-ink-faint)' }}
      >
        Overview
      </p>

      <h2
        className="serif mb-4 mob-h2"
        style={{ fontSize: '3rem', lineHeight: 1.1 }}
      >
        어떤 시스템인가요?
      </h2>

      <p
        className="mb-16"
        style={{
          fontSize: '0.9rem',
          color: 'var(--color-ink-muted)',
          lineHeight: 1.85,
          maxWidth: '520px',
        }}
      >
        취약점 검출 솔루션의 핵심 리소스인 룰·룰팩·보안 레퍼런스를 중앙에서
        관리하는 사내 플랫폼입니다. 기획부터 디자인, 개발, 배포까지 사내 TF로
        구성된 팀이 전 과정을 주도했습니다.
      </p>

      <p
        className="text-xs tracking-[0.2em] uppercase mb-6"
        style={{ color: 'var(--color-ink-faint)' }}
      >
        페이지 구조
      </p>

      <div className="flex gap-4 mob-stack" style={{ marginBottom: '0' }}>
        {pages.map(({ label, desc }, i) => (
          <div
            key={i}
            className="flex-1 mob-full rounded-xl"
            style={{
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              padding: '24px',
              minHeight: '160px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}
          >
            <p
              style={{
                fontSize: '0.65rem',
                letterSpacing: '0.15em',
                color: 'var(--color-ink-faint)',
                fontWeight: 500,
              }}
            >
              PAGE {String(i + 1).padStart(2, '0')}
            </p>
            <p
              style={{
                fontSize: '0.9rem',
                fontWeight: 600,
                color: 'var(--color-ink)',
              }}
            >
              {label}
            </p>
            <p
              style={{
                fontSize: '0.8rem',
                color: 'var(--color-ink-muted)',
                lineHeight: 1.7,
              }}
            >
              {desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
