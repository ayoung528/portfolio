const meta = [
  { label: '역할', value: '기획 · 와이어프레임 · 프론트엔드 개발' },
  { label: '기간', value: '2025.05 ~ 2025.11' },
  { label: '팀 구성', value: '프론트 3명 · 백엔드 1명 · 기획/디자인 1명' },
];

export default function Hero() {
  return (
    <section className="px-16 mob-px py-20 mob-py-sm">
      <p
        className="text-xs tracking-[0.2em] uppercase mb-8 fade-up"
        style={{ color: 'var(--color-ink-faint)' }}
      >
        Integrated System
      </p>

      <h1
        className="serif fade-up fade-up-delay-1 mob-h1"
        style={{
          fontSize: '4.5rem',
          lineHeight: 1.05,
          marginBottom: '2rem',
        }}
      >
        흩어진 리소스를
        <br />
        하나의 플랫폼으로
      </h1>

      <p
        className="fade-up fade-up-delay-2"
        style={{
          fontSize: '1rem',
          color: 'var(--color-ink-muted)',
          lineHeight: 1.8,
          maxWidth: '630px',
        }}
      >
        소스코드에 하드코딩된 2,000개 이상의 취약점 검출 룰을 DB화하고, AI 기반
        태그 추출과 다중 매칭 알고리즘으로 보안 레퍼런스 지원율을 자동 산출하는
        사내 통합 관리 시스템입니다.
      </p>

      <div
        className="fade-up fade-up-delay-3 flex gap-12 mob-gap-sm mt-12 pt-12"
        style={{
          borderTop: '1px solid var(--color-border)',
          fontSize: '0.8rem',
          flexWrap: 'wrap',
        }}
      >
        {meta.map(({ label, value }) => (
          <div key={label}>
            <p
              style={{
                color: 'var(--color-ink-faint)',
                letterSpacing: '0.1em',
                marginBottom: '4px',
              }}
            >
              {label.toUpperCase()}
            </p>
            <p style={{ color: 'var(--color-ink)', fontWeight: 500 }}>
              {value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
