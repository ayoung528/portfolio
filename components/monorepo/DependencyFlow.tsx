const before = [
  {
    name: '서버 매니저',
    react: 'React 18',
    version: 'v0.9.123-compact',
    color: 'blue',
  },
  {
    name: 'GUI',
    react: 'React 18',
    version: 'v0.9.123-compact',
    color: 'blue',
  },
  {
    name: '엔터프라이즈',
    react: 'React 19',
    version: 'v1.0.200',
    color: 'purple',
  },
  { name: '플러그인', react: 'React 19', version: 'v1.0.200', color: 'purple' },
];

const after = [
  { name: '서버 매니저', react: 'React 18', color: 'blue' },
  { name: 'GUI', react: 'React 18', color: 'blue' },
  { name: '엔터프라이즈', react: 'React 19', color: 'purple' },
  { name: '플러그인', react: 'React 19', color: 'purple' },
];

const moduleColors: Record<
  string,
  { bg: string; border: string; label: string; sub: string }
> = {
  blue: { bg: '#EEF4FC', border: '#B5D4F4', label: '#0C447C', sub: '#185FA5' },
  purple: {
    bg: '#F3F2FE',
    border: '#CECBF6',
    label: '#3C3489',
    sub: '#534AB7',
  },
};

export default function DependencyFlow() {
  return (
    <div
      className="mob-col1"
      style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}
    >
      {/* ── BEFORE ── */}
      <div>
        <p
          style={{
            fontSize: '0.7rem',
            letterSpacing: '0.12em',
            color: 'var(--color-ink-faint)',
            marginBottom: '16px',
          }}
        >
          BEFORE — 멀티레포
        </p>
        <div
          style={{
            background: '#FDF1EE',
            border: '1px solid #F0997B',
            borderRadius: '10px',
            padding: '12px 16px',
            textAlign: 'center',
            marginBottom: '8px',
          }}
        >
          <p style={{ fontSize: '0.82rem', fontWeight: 600, color: '#712B13' }}>
            @sprrow/components
          </p>
          <p
            style={{ fontSize: '0.72rem', color: '#993C1D', marginTop: '2px' }}
          >
            단일 번들 · 트리쉐이킹 없음
          </p>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '8px',
            marginBottom: '8px',
          }}
        >
          {[
            { v: 'v0.9.x', r: 'React 18' },
            { v: 'v1.0.x', r: 'React 19' },
          ].map(({ v, r }) => (
            <div
              key={v}
              style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: '8px',
                padding: '8px 12px',
                textAlign: 'center',
              }}
            >
              <p
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: 'var(--color-ink)',
                }}
              >
                {v}
              </p>
              <p
                style={{
                  fontSize: '0.7rem',
                  color: 'var(--color-ink-muted)',
                  marginTop: '2px',
                }}
              >
                {r}
              </p>
            </div>
          ))}
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '8px',
            marginBottom: '12px',
          }}
        >
          {before.map(({ name, react, version, color }) => {
            const c = moduleColors[color];
            return (
              <div
                key={name}
                style={{
                  background: c.bg,
                  border: `1px solid ${c.border}`,
                  borderRadius: '8px',
                  padding: '10px 12px',
                }}
              >
                <p
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    color: c.label,
                  }}
                >
                  {name}
                </p>
                <p
                  style={{ fontSize: '0.7rem', color: c.sub, marginTop: '2px' }}
                >
                  {react}
                </p>
                <p
                  style={{
                    fontSize: '0.68rem',
                    color: c.sub,
                    marginTop: '2px',
                    opacity: 0.8,
                  }}
                >
                  {version}
                </p>
              </div>
            );
          })}
        </div>
        <div
          style={{
            background: '#FCEBEB',
            border: '1px solid #F09595',
            borderRadius: '8px',
            padding: '8px 14px',
            fontSize: '0.75rem',
            color: '#A32D2D',
            textAlign: 'center',
          }}
        >
          버전 분리 관리 · 버그 수정 2중 배포
        </div>
      </div>

      {/* ── AFTER ── */}
      <div>
        <p
          style={{
            fontSize: '0.7rem',
            letterSpacing: '0.12em',
            color: 'var(--color-ink-faint)',
            marginBottom: '16px',
          }}
        >
          AFTER — 모노레포
        </p>
        <div
          style={{
            background: '#E8F5F0',
            border: '1px solid #5DCAA5',
            borderRadius: '10px',
            padding: '12px 16px',
            textAlign: 'center',
            marginBottom: '8px',
          }}
        >
          <p style={{ fontSize: '0.82rem', fontWeight: 600, color: '#085041' }}>
            @sp/monorepo
          </p>
          <p
            style={{ fontSize: '0.72rem', color: '#0F6E56', marginTop: '2px' }}
          >
            Yarn Workspaces · Nx · Changesets
          </p>
        </div>
        <div
          className="mob-col2"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '6px',
            marginBottom: '8px',
          }}
        >
          {['atoms', 'molecules', 'organisms', 'layout'].map((pkg) => (
            <div
              key={pkg}
              style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: '8px',
                padding: '8px 4px',
                textAlign: 'center',
              }}
            >
              <p
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  color: 'var(--color-ink)',
                }}
              >
                {pkg}
              </p>
              <p
                style={{
                  fontSize: '0.65rem',
                  color: 'var(--color-ink-faint)',
                  marginTop: '2px',
                }}
              >
                공용
              </p>
            </div>
          ))}
        </div>
        <p
          style={{
            fontSize: '0.7rem',
            color: '#0F6E56',
            textAlign: 'center',
            marginBottom: '8px',
          }}
        >
          peerDependencies로 버전 위임
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '8px',
            marginBottom: '12px',
          }}
        >
          {after.map(({ name, react, color }) => {
            const c = moduleColors[color];
            return (
              <div
                key={name}
                style={{
                  background: c.bg,
                  border: `1px solid ${c.border}`,
                  borderRadius: '8px',
                  padding: '10px 12px',
                }}
              >
                <p
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    color: c.label,
                  }}
                >
                  {name}
                </p>
                <p
                  style={{ fontSize: '0.7rem', color: c.sub, marginTop: '2px' }}
                >
                  {react}
                </p>
              </div>
            );
          })}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {[
            '단일 소스 · React 버전 충돌 해소',
            '트리쉐이킹 적용 · Parsed size −250KB',
          ].map((text) => (
            <div
              key={text}
              style={{
                background: '#E8F5F0',
                border: '1px solid #5DCAA5',
                borderRadius: '8px',
                padding: '8px 14px',
                fontSize: '0.75rem',
                color: '#085041',
                textAlign: 'center',
              }}
            >
              {text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
