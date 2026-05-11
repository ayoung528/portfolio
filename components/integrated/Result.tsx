const cards = [
  {
    index: '01',
    value: '제품 경량화',
    label: '데이터 통합 및 리소스 최적화',
    desc: '소스코드 및 애플리케이션 취약점 검출 룰의 중복 데이터를 통합하여 제품 자체가 훨씬 가벼워지는 성능 향상을 달성했습니다.',
  },
  {
    index: '02',
    value: '불가능 → 실시간',
    label: '보안 레퍼런스 지원율 자동 산출',
    desc: '기존에는 수동 계산이 불가능했던 보안 가이드라인 대비 제품 지원율을 실시간으로 산출할 수 있게 되었습니다. 사업팀의 영업·마케팅 의사결정을 돕는 핵심 데이터 기반 시스템으로 자리 잡았습니다.',
  },
  {
    index: '03',
    value: 'AI 연동 기반',
    label: '제품 고도화 및 확장성 확보',
    desc: '구축된 DB를 AI와 연동하여 취약점 검출 솔루션 고도화의 기반을 마련했습니다. 현재 개발·사업 부문 모두에서 없어서는 안 될 핵심 시스템으로 활용되고 있습니다.',
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
        개발과 사업 모두를
        <br />
        바꾼 플랫폼
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {cards.map(({ index, value, label, desc }, i, arr) => (
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
