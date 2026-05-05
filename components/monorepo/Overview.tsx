import DependencyFlow from '@/components/monorepo/DependencyFlow';

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
        무엇이
        <br />
        달라졌죠?
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
        Yarn Workspaces를 기반으로 모노레포를 선언하고, 캐싱이 지원되는{' '}
        <strong style={{ color: 'var(--color-ink)', fontWeight: 600 }}>
          Nx
        </strong>
        로 빌드를 최적화했습니다. 버전 변경 이력 관리를 위해{' '}
        <strong style={{ color: 'var(--color-ink)', fontWeight: 600 }}>
          Changesets
        </strong>
        을 도입해 릴리즈 프로세스를 체계화했습니다.
      </p>

      <p
        className="text-xs tracking-[0.2em] uppercase mb-6 font-bold"
        style={{ color: 'var(--color-ink-faint)' }}
      >
        의존성 구조 변화
      </p>
      <div className="mb-20">
        <DependencyFlow />
      </div>
    </section>
  );
}
