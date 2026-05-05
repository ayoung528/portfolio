const steps = [
  {
    step: '01',
    title: '인프라 및 폴더 구조 수립',
    body: 'Yarn Workspaces 기반 모노레포 환경을 선언하고, 빌드 성능 최적화를 위한 Nx와 자동화된 버전 관리를 위한 Changesets를 도입했습니다. Atomic Design 원칙을 적용해 atoms / molecules / layout / organisms 구조로 105개 컴포넌트를 재배치했습니다.',
    tags: ['Yarn Workspaces', 'Nx', 'Changesets', 'Atomic Design'],
  },
  {
    step: '02',
    title: '유연한 의존성 관리 전략',
    body: '초기에는 dependencies로 의존성을 설정했으나 Changesets의 \'버전 전파\' 현상이 라이브러리 사용자가 하나의 컴포넌트를 업데이트할 때마다 의도치 않게 다른 컴포넌트들까지 상위 버전으로 마이그레이션해야 하는 관리 복잡성을 초래할 수 있음을 파악했습니다. 해당 이슈를 파트 내 공유하여 "호스트 모듈에 설치된 라이브러리를 공유하여 사용함으로써 버전 충돌을 방지하고 업데이트 효율을 높이자"는 리더의 기술적 조언을 수용해 peerDependencies에 의존성을 명시하도록 변경해 개별 컴포넌트의 독립적인 배포 유연성을 확보했습니다.',
    tags: ['peerDependencies', '버전 전파 해소', '팀 협업'],
  },
  {
    step: '03',
    title: '시맨틱 버저닝 규칙 수립',
    body: '컴포넌트의 초기 버전은 1.0.0으로 정의하고, 기능 추가 시 Minor, 버그 수정 시 Patch를 업데이트하는 규칙을 제안 및 시행했습니다. 버전 전파 이슈 방지를 위해 리더와의 기술적 합의를 거쳐 Major 버전을 1.x.x 대에서 관리하는 전략을 채택했습니다.',
    tags: ['Semantic Versioning', 'Major 1.x.x 고정', 'Changesets 자동화'],
  },
  {
    step: '04',
    title: '트리쉐이킹으로 번들 최적화',
    body: '라이브러리 경량화를 위해 ESM 문법 적용, 선택적 import, Rollup의 preserveModules: true, sideEffects: false 설정으로 트리쉐이킹을 구성했습니다. lodash를 lodash-es로 전면 교체하여 실제 사용되는 코드만 번들에 포함되도록 개선했습니다.',
    tags: ['ESM', 'preserveModules', 'sideEffects: false', 'lodash-es'],
  },
  {
    step: '05',
    title: 'DX 도구 및 가이드라인 제공',
    body: '새로운 환경 도입 시 동료들이 겪을 수 있는 초기 학습 비용을 최소화하고자 상세한 트러블슈팅 문서와 공유용 기술 가이드를 작성하고, 누락된 peerDependencies를 자동으로 탐색·설치하거나 전체 라이브러리를 한 번에 업데이트하는 커스텀 자동화 스크립트를 배포했습니다.',
    tags: ['트러블슈팅 문서', '자동화 스크립트', '팀 DX'],
  },
  {
    step: '06',
    title: 'CI/CD 파이프라인',
    body: '멀티레포 운영 당시의 로컬 수동 배포 방식은 배포 이력 공유 미흡으로 인한 버전 충돌이 빈번했습니다. GitLab CI/CD를 구축하여 원격 저장소 푸시 시 빌드 및 배포가 자동 수행되도록 개선하고, Discord 웹훅으로 배포 완료 알림을 연동했습니다.',
    tags: ['GitLab CI/CD', 'Discord 웹훅'],
  },
  {
    step: '07',
    title: '품질 검증 체계',
    body: '대규모 리뉴얼 제품의 품질을 보장하기 위해 Playwright를 활용한 시각적 회귀 테스트 환경을 구축했습니다. 모노레포 컴포넌트 적용 전후의 서버 화면을 정밀하게 캡처 및 비교하여 의도치 않은 UI 변경 사항을 사전에 검출하고 안정적인 릴리즈 기반을 마련했습니다.',
    tags: ['Playwright', '시각적 회귀 테스트'],
  },
];

export default function Process() {
  return (
    <section
      className="px-16 mob-px py-20 mob-py-sm"
      style={{ borderTop: '1px solid var(--color-border)' }}
    >
      <p
        className="text-xs tracking-[0.2em] uppercase mb-8"
        style={{ color: 'var(--color-ink-faint)' }}
      >
        Process
      </p>

      <h2
        className="serif mb-16 mob-h2"
        style={{ fontSize: '3rem', lineHeight: 1.1 }}
      >
        전환 여정기
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {steps.map(({ step, title, body, tags }, i) => (
          <div
            key={step}
            className="mob-step-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '80px 1fr',
              gap: '32px',
              padding: '32px 0',
              borderTop: '1px solid var(--color-border)',
              ...(i === steps.length - 1
                ? { borderBottom: '1px solid var(--color-border)' }
                : {}),
            }}
          >
            <div style={{ paddingTop: '2px' }}>
              <span
                style={{
                  fontSize: '0.65rem',
                  letterSpacing: '0.15em',
                  color: 'var(--color-ink-faint)',
                  fontWeight: 500,
                }}
              >
                STEP {step}
              </span>
            </div>
            <div>
              <h3
                style={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: 'var(--color-ink)',
                  marginBottom: '12px',
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  fontSize: '0.875rem',
                  color: 'var(--color-ink-muted)',
                  lineHeight: 1.85,
                  marginBottom: '16px',
                }}
              >
                {body}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
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
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
