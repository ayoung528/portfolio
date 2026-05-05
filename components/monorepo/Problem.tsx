const problems = [
  {
    index: '01',
    title: '내부 구조 노출',
    desc: '전역 스타일, 폰트, 사내 아이콘 등 공통 자산을 사용하기 위해 개별 모듈에서 라이브러리의 빌드 결과물인 "dist" 내부 경로에 직접 접근하고 있었습니다. 이는 라이브러리의 내부 폴더 구조가 변경될 때마다 참조 경로가 깨질 위험이 컸으며, 모듈 간의 강한 결합도를 유발했습니다.',
  },
  {
    index: '02',
    title: '트리쉐이킹 미지원',
    desc: '105개의 컴포넌트 전체가 하나의 번들로 묶여 불필요한 코드까지 포함됐습니다. 특정 모듈에서 단 15개의 컴포넌트만 사용하더라도 105개 전체 구성 요소와 연관 의존성을 모두 설치해야 했습니다.',
  },
  {
    index: '03',
    title: '의존성 버전 파편화',
    desc: '특정 버전부턴 멀티레포가 React 19로 업그레이드되면서 React 18 기반의 모듈들은 최신 컴포넌트를 사용할 수 없었습니다. 결국 버그 수정이나 기능 추가를 위해 과거 버전 브랜치를 별도로 유지하며 수동 배포를 반복해야 했습니다.',
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
        className="serif mb-12 mob-h2"
        style={{ fontSize: '3rem', lineHeight: 1.1 }}
      >
        어떤 문제가 있었죠?
      </h2>

      <div style={{ borderTop: '1px solid var(--color-border)' }}>
        {problems.map(({ index, title, desc }) => (
          <div
            key={index}
            className="flex gap-12 py-8"
            style={{
              borderBottom: '1px solid var(--color-border)',
              flexWrap: 'wrap',
            }}
          >
            <span
              className="shrink-0"
              style={{
                fontSize: '0.7rem',
                color: 'var(--color-ink-faint)',
                fontWeight: 500,
                width: '32px',
                paddingTop: '4px',
              }}
            >
              {index}
            </span>
            <h3
              style={{
                fontSize: '1rem',
                fontWeight: 600,
                color: 'var(--color-ink)',
                width: '160px',
                flexShrink: 0,
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
