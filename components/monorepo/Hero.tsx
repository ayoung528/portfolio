export default function Hero() {
  return (
    <section className="px-16 mob-px mob-pt-sm pt-24 pb-20 mob-py-sm">
      <p
        className="fade-up text-xs tracking-[0.2em] uppercase mb-10"
        style={{ color: 'var(--color-ink-faint)' }}
      >
        Architecture
      </p>

      <h1
        className="serif fade-up fade-up-delay-1 mob-h1"
        style={{ fontSize: '4.5rem', lineHeight: 1.05, marginBottom: '2rem' }}
      >
        멀티레포에서
        <br />
        모노레포로
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
        지속적으로 증가하는 컴포넌트 라이브러리의 유지보수 비용과 개발 효율성
        저하 문제를 해결하기 위해,
        <br className="mob-hide" /> 26년도 연구 과제로 지정하며 105개의 컴포넌트
        라이브러리를
        <br className="mob-hide" />
        멀티레포에서 모노레포로 전환한 과정과 결과를 공유합니다.
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
          { label: '기간', value: '2025년 12월 ~ 현재' },
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
