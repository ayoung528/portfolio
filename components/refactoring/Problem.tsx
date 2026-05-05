const problems = [
  {
    index: '01',
    title: '소켓 로직의 파편화',
    desc: '하나의 소켓 인스턴스에 여러 컴포넌트가 각자 리스너를 붙이고 있어, 이벤트 발생 시 실행 순서를 예측하기 어렵고 디버깅 추적이 힘든 구조였습니다.',
  },
  {
    index: '02',
    title: `UI와 비즈니스 로직의 혼재`,
    desc: 'TabController가 데이터 페칭, URL 상태 관리, 조건부 렌더링까지 모두 담당하여 가독성이 낮고, UI만 변경하려 해도 비즈니스 로직을 건드려야 하는 위험이 있었습니다.',
  },
  {
    index: '03',
    title: '클로저 및 리렌더링 이슈',
    desc: 'useEffect 내 소켓 리스너 등록 시, 의존성 배열 값이 바뀔 때마다 리스너가 중복 등록되거나 이전 상태를 참조하는 클로저 문제가 발생할 위험이 있었습니다.',
  },
  {
    index: '04',
    title: '불필요한 API 호출',
    desc: '탭이 변경될 때마다 분석 진행 여부와 관계없이 API를 호출하고 있었으며, useEffect + refetch 패턴으로 인해 의도치 않은 네트워크 요청이 발생하고 있었습니다.',
  },
];

export default function Problem() {
  return (
    <section
      className="px-16 mob-px py-20 mob-py-sm"
      style={{ borderTop: '1px solid var(--color-border)' }}
    >
      <p
        className="text-xs tracking-[0.2em] uppercase mb-8"
        style={{ color: 'var(--color-ink-faint)' }}
      >
        Problem
      </p>

      <h2
        className="serif mb-16 mob-h2"
        style={{ fontSize: '3rem', lineHeight: 1.1 }}
      >
        파편화된 구조가
        <br />
        만들어낸 문제들
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {problems.map(({ index, title, desc }, i) => (
          <div
            key={index}
            className="flex gap-12 py-8"
            style={{
              borderTop: '1px solid var(--color-border)',
              ...(i === problems.length - 1
                ? { borderBottom: '1px solid var(--color-border)' }
                : {}),
              flexWrap: 'wrap',
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

            <h3
              style={{
                fontSize: '1rem',
                fontWeight: 600,
                width: '180px',
                flexShrink: 0,
                color: 'var(--color-ink)',
              }}
            >
              {title}
            </h3>

            <p
              style={{
                fontSize: '0.875rem',
                color: 'var(--color-ink-muted)',
                lineHeight: 1.75,
                flex: 1,
                minWidth: '200px',
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
