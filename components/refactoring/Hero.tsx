export default function Hero() {
  return (
    <section className="px-16 mob-px py-20 mob-py-sm">
      <p
        className="text-xs tracking-[0.2em] uppercase mb-8 fade-up"
        style={{ color: 'var(--color-ink-faint)' }}
      >
        Refactoring
      </p>

      <h1
        className="serif fade-up fade-up-delay-1 mob-h1"
        style={{
          fontSize: '4.5rem',
          lineHeight: 1.05,
          marginBottom: '2rem',
        }}
      >
        실시간 데이터 화면
        <br />
        렌더링 최적화
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
        여러 컴포넌트에 파편화된 소켓 통신 로직을 중앙화하고,
        <br /> UI와 비즈니스 로직을 분리하여 유지보수성과 렌더링 성능을 개선한
        리팩토링 작업입니다.
      </p>

      <div
        className="fade-up fade-up-delay-3 flex gap-12 mob-gap-sm mt-12 pt-12"
        style={{
          borderTop: '1px solid var(--color-border)',
          fontSize: '0.8rem',
          flexWrap: 'wrap',
        }}
      >
        {[
          { label: '역할', value: '프론트엔드 개발자' },
          { label: '기간', value: '2026년 1월' },
          { label: '부서 / 직급', value: '개발센터 / 전임(대리)' },
        ].map(({ label, value }) => (
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
