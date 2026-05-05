'use client';

const metrics = [
  {
    label: 'Parsed Size',
    before: 1040,
    after: 790,
    unit: 'KB',
    change: '−250KB',
    positive: true,
  },
  {
    label: 'Stat Size',
    before: 3.31,
    after: 1.51,
    unit: 'MB',
    change: '−1.80MB',
    positive: true,
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

      <div className="flex gap-20 items-start mob-stack">
        {/* 왼쪽 */}
        <div className="mob-full" style={{ flex: '0 0 260px' }}>
          <h2
            className="serif mb-3 mob-h2"
            style={{ fontSize: '3rem', lineHeight: 1.1 }}
          >
            번들 사이즈
            <br />
            비교
          </h2>
          <p
            style={{
              fontSize: '0.84rem',
              color: 'var(--color-ink-muted)',
              lineHeight: 1.8,
              marginBottom: '2.5rem',
            }}
          >
            모노레포 적용 전후, ERB 모듈의 실제 번들 사이즈 변화입니다.
          </p>
          <div
            className="rounded-2xl p-7"
            style={{ background: 'var(--color-surface)' }}
          >
            <p
              className="serif"
              style={{
                fontSize: '3.5rem',
                color: 'var(--color-ink)',
                lineHeight: 1,
              }}
            >
              −250KB
            </p>
            <p
              style={{
                fontSize: '0.78rem',
                color: 'var(--color-ink-muted)',
                marginTop: '8px',
              }}
            >
              Parsed size 감소
            </p>
          </div>
        </div>

        {/* 오른쪽 */}
        <div className="flex-1 mob-full flex flex-col gap-10 pt-2">
          {metrics.map(({ label, before, after, unit, change, positive }) => {
            // 각 항목의 before 값을 100%로 기준 삼아 비율 계산
            const afterRatio = (after / before) * 100;
            return (
              <div key={label}>
                <div className="flex items-center justify-between mb-4">
                  <span
                    style={{
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      color: 'var(--color-ink)',
                    }}
                  >
                    {label}
                  </span>
                  <span
                    className="rounded-full px-3 py-1"
                    style={{
                      fontSize: '0.72rem',
                      background: '#E6F0E9',
                      color: '#2A6B3A',
                      fontWeight: 500,
                    }}
                  >
                    {change}
                  </span>
                </div>

                {/* Before */}
                <div className="flex items-center gap-4 mb-2">
                  <span
                    className="w-12 text-right shrink-0"
                    style={{
                      fontSize: '0.7rem',
                      color: 'var(--color-ink-faint)',
                    }}
                  >
                    Before
                  </span>
                  <div className="flex-1 relative h-9 flex items-center">
                    <div
                      className="h-full rounded-lg"
                      style={{
                        width: '100%',
                        background: 'var(--color-surface)',
                        border: '1px solid var(--color-border)',
                      }}
                    />
                    <span
                      className="absolute left-3"
                      style={{
                        fontSize: '0.72rem',
                        color: 'var(--color-ink-muted)',
                      }}
                    >
                      {before}
                      {unit}
                    </span>
                  </div>
                </div>

                {/* After */}
                <div className="flex items-center gap-4">
                  <span
                    className="w-12 text-right shrink-0"
                    style={{
                      fontSize: '0.7rem',
                      color: 'var(--color-ink-faint)',
                    }}
                  >
                    After
                  </span>
                  <div className="flex-1 relative h-9 flex items-center">
                    <div
                      className="h-full rounded-lg"
                      style={{
                        width: `${afterRatio}%`,
                        background: '#D4EAD8',
                        border: '1px solid #A8D4AE',
                      }}
                    />
                    <span
                      className="absolute left-3"
                      style={{
                        fontSize: '0.72rem',
                        color: '#2A6B3A',
                        fontWeight: 600,
                      }}
                    >
                      {after}
                      {unit}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
