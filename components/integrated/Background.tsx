const situations = [
  {
    label: '문제 01 — 하드코딩된 리소스',
    desc: '취약점 검출 룰에 대한 설명과 보안 레퍼런스가 소스코드 내에 하드코딩되어 있었습니다. 룰을 검색하거나 수정할 때마다 코드를 직접 확인해야 했고, 2,000개 이상의 룰을 관리하는 데 큰 비효율이 발생했습니다.',
  },
  {
    label: '문제 02 — 지원율 계산 불가',
    desc: '국내외 컴플라이언스 등 보안 레퍼런스 대비 제품의 지원율을 수동으로 계산해야 했습니다. 데이터가 비정형 줄글 형태로 흩어져 있어 정확한 수치 산출이 사실상 불가능했고, 사업팀의 영업·마케팅 활동에도 지장을 주었습니다.',
  },
];

export default function Background() {
  return (
    <section
      className="px-16 mob-px py-20 mob-py-sm"
      style={{ borderTop: '1px solid var(--color-border)' }}
    >
      <p
        className="text-xs tracking-[0.2em] uppercase mb-8"
        style={{ color: 'var(--color-ink-faint)' }}
      >
        Background
      </p>

      <h2
        className="serif mb-12 mob-h2"
        style={{ fontSize: '3rem', lineHeight: 1.1 }}
      >
        하드코딩의 한계,
        <br />
        중앙화의 필요성
      </h2>

      <div className="flex gap-20 items-start mob-stack">
        <div className="mob-full" style={{ flex: '0 0 300px' }}>
          <p
            style={{
              fontSize: '0.875rem',
              color: 'var(--color-ink-muted)',
              lineHeight: 1.85,
            }}
          >
            산재해 있던 모든 제품의 리소스를 DB화하여 중앙 집중형으로 관리하자는
            목표로 프로젝트를 시작했습니다. 컨설팅팀, 엔진개발팀, 취약점연구팀
            별 고충을 인터뷰하여 요구사항을 도출했습니다.
          </p>
        </div>

        <div className="flex-1 mob-full flex flex-col gap-4">
          {situations.map(({ label, desc }, i) => (
            <div
              key={i}
              className="rounded-xl px-6 py-5"
              style={{ background: 'var(--color-surface)' }}
            >
              {label && (
                <p
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    color: 'var(--color-accent)',
                    letterSpacing: '0.1em',
                    marginBottom: '6px',
                  }}
                >
                  {label}
                </p>
              )}
              <p
                style={{
                  fontSize: '0.875rem',
                  color: 'var(--color-ink-muted)',
                  lineHeight: 1.85,
                }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
