import type { ReactNode } from 'react';

/* 모노레포 페이지의 섹션 스타일을 그대로 옮긴 공용 섹션 컴포넌트입니다. */

const label = (text: string, mb = 'mb-8') => (
  <p
    className={`text-xs tracking-[0.2em] uppercase ${mb}`}
    style={{ color: 'var(--color-ink-faint)' }}
  >
    {text}
  </p>
);

const sectionClass = 'px-16 mob-px py-20 mob-py-sm';
const sectionStyle = { borderTop: '1px solid var(--color-border)' };

const Tag = ({ children }: { children: ReactNode }) => (
  <span
    style={{
      fontSize: '0.72rem',
      background: 'var(--color-surface)',
      color: 'var(--color-ink-muted)',
      border: '1px solid var(--color-border)',
      borderRadius: '6px',
      padding: '3px 10px',
    }}
  >
    {children}
  </span>
);

/* ─────────────── Hero ─────────────── */
export function CaseHero({
  category,
  title,
  intro,
  meta,
}: {
  category: string;
  title: ReactNode;
  intro: ReactNode;
  meta: { label: string; value: string }[];
}) {
  return (
    <section className="px-16 mob-px mob-pt-sm pt-24 pb-20 mob-py-sm">
      <p
        className="fade-up text-xs tracking-[0.2em] uppercase mb-10"
        style={{ color: 'var(--color-ink-faint)' }}
      >
        {category}
      </p>
      <h1
        className="serif fade-up fade-up-delay-1 mob-h1"
        style={{ fontSize: '4.5rem', lineHeight: 1.05, marginBottom: '2rem' }}
      >
        {title}
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
        {intro}
      </p>
      <div
        className="fade-up fade-up-delay-3 flex gap-12 mob-gap-sm mt-12 pt-12"
        style={{
          borderTop: '1px solid var(--color-border)',
          fontSize: '0.8rem',
          flexWrap: 'wrap',
        }}
      >
        {meta.map(({ label: l, value }) => (
          <div key={l}>
            <p
              style={{
                color: 'var(--color-ink-faint)',
                letterSpacing: '0.1em',
                marginBottom: '4px',
              }}
            >
              {l.toUpperCase()}
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

/* ─────────────── Problem ─────────────── */
export function CaseProblem({
  heading,
  items,
}: {
  heading: string;
  items: { title: string; desc: string }[];
}) {
  return (
    <section className={sectionClass} style={sectionStyle}>
      {label('Problem')}
      <h2
        className="serif mb-12 mob-h2"
        style={{ fontSize: '3rem', lineHeight: 1.1 }}
      >
        {heading}
      </h2>
      <div style={{ borderTop: '1px solid var(--color-border)' }}>
        {items.map(({ title, desc }, i) => (
          <div
            key={title}
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
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3
              style={{
                fontSize: '1rem',
                fontWeight: 600,
                color: 'var(--color-ink)',
                width: '200px',
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

/* ─────────────── Overview (흐름도) ─────────────── */
export type FlowNode = { title: string; desc: string; accent?: boolean };

const FlowBox = ({ title, desc, accent }: FlowNode) => (
  <div
    className="rounded-xl px-5 py-4"
    style={{
      background: accent ? 'var(--color-accent-light)' : 'var(--color-surface)',
      border: `1px solid ${accent ? '#c9d4ec' : 'var(--color-border)'}`,
      flex: 1,
      minWidth: '160px',
    }}
  >
    <p
      style={{
        fontSize: '0.84rem',
        fontWeight: 600,
        color: accent ? 'var(--color-accent)' : 'var(--color-ink)',
        marginBottom: '4px',
      }}
    >
      {title}
    </p>
    <p
      style={{
        fontSize: '0.74rem',
        color: 'var(--color-ink-muted)',
        lineHeight: 1.6,
      }}
    >
      {desc}
    </p>
  </div>
);

export function CaseOverview({
  heading,
  intro,
  rows,
  note,
}: {
  heading: ReactNode;
  intro: ReactNode;
  /** 위에서 아래로 흐르는 단계. 한 단계 안의 노드는 나란히 놓입니다. */
  rows: { stage: string; nodes: FlowNode[] }[];
  note?: ReactNode;
}) {
  return (
    <section className={sectionClass} style={sectionStyle}>
      {label('Overview')}
      <h2
        className="serif mb-4 mob-h2"
        style={{ fontSize: '3rem', lineHeight: 1.1 }}
      >
        {heading}
      </h2>
      <p
        className="mb-12"
        style={{
          fontSize: '0.9rem',
          color: 'var(--color-ink-muted)',
          lineHeight: 1.85,
          maxWidth: '620px',
        }}
      >
        {intro}
      </p>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {rows.map(({ stage, nodes }, i) => (
          <div key={stage}>
            <div
              className="mob-step-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: '120px 1fr',
                gap: '24px',
                alignItems: 'center',
              }}
            >
              <span
                style={{
                  fontSize: '0.65rem',
                  letterSpacing: '0.15em',
                  color: 'var(--color-ink-faint)',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                }}
              >
                {stage}
              </span>
              <div className="mob-stack" style={{ display: 'flex', gap: '12px' }}>
                {nodes.map((n) => (
                  <FlowBox key={n.title} {...n} />
                ))}
              </div>
            </div>
            {i < rows.length - 1 && (
              <div
                className="mob-step-grid"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '120px 1fr',
                  gap: '24px',
                }}
              >
                <span />
                <p
                  aria-hidden
                  style={{
                    color: 'var(--color-ink-faint)',
                    fontSize: '1rem',
                    lineHeight: 1,
                    padding: '10px 0 10px 20px',
                  }}
                >
                  ↓
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {note && (
        <p
          className="mt-10"
          style={{
            fontSize: '0.8rem',
            color: 'var(--color-ink-faint)',
            lineHeight: 1.8,
            maxWidth: '620px',
          }}
        >
          {note}
        </p>
      )}
    </section>
  );
}

/* ─────────────── Decision table ─────────────── */
export function CaseTable({
  eyebrow,
  heading,
  intro,
  columns,
  rows,
}: {
  eyebrow: string;
  heading: ReactNode;
  intro: ReactNode;
  columns: string[];
  rows: string[][];
}) {
  return (
    <section className={sectionClass} style={sectionStyle}>
      {label(eyebrow)}
      <h2
        className="serif mb-4 mob-h2"
        style={{ fontSize: '3rem', lineHeight: 1.1 }}
      >
        {heading}
      </h2>
      <p
        className="mb-10"
        style={{
          fontSize: '0.9rem',
          color: 'var(--color-ink-muted)',
          lineHeight: 1.85,
          maxWidth: '620px',
        }}
      >
        {intro}
      </p>
      <div style={{ overflowX: 'auto' }}>
        <table
          style={{
            width: '100%',
            minWidth: '560px',
            borderCollapse: 'collapse',
            fontSize: '0.84rem',
          }}
        >
          <thead>
            <tr>
              {columns.map((c) => (
                <th
                  key={c}
                  style={{
                    textAlign: 'left',
                    fontSize: '0.68rem',
                    letterSpacing: '0.12em',
                    color: 'var(--color-ink-faint)',
                    fontWeight: 500,
                    padding: '0 16px 12px 0',
                    borderBottom: '1px solid var(--color-border)',
                  }}
                >
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r[0]}>
                {r.map((cell, j) => (
                  <td
                    key={j}
                    style={{
                      padding: '16px 16px 16px 0',
                      borderBottom: '1px solid var(--color-border)',
                      color: j === 0 ? 'var(--color-ink)' : 'var(--color-ink-muted)',
                      fontWeight: j === 0 ? 600 : 400,
                      lineHeight: 1.7,
                      verticalAlign: 'top',
                    }}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

/* ─────────────── Process ─────────────── */
export function CaseProcess({
  heading,
  steps,
}: {
  heading: string;
  steps: { title: string; problem?: string; body: string; tags: string[] }[];
}) {
  return (
    <section className={sectionClass} style={sectionStyle}>
      {label('Process')}
      <h2
        className="serif mb-16 mob-h2"
        style={{ fontSize: '3rem', lineHeight: 1.1 }}
      >
        {heading}
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {steps.map(({ title, problem, body, tags }, i) => (
          <div
            key={title}
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
                STEP {String(i + 1).padStart(2, '0')}
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
              {problem && (
                <p
                  className="rounded-lg px-4 py-3"
                  style={{
                    fontSize: '0.82rem',
                    color: 'var(--color-ink-muted)',
                    lineHeight: 1.75,
                    background: 'var(--color-surface)',
                    marginBottom: '12px',
                  }}
                >
                  <span style={{ color: 'var(--color-ink)', fontWeight: 600 }}>
                    부딪힌 문제
                  </span>
                  {'  '}
                  {problem}
                </p>
              )}
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
                {tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────── Result ─────────────── */
export function CaseResult({
  heading,
  intro,
  stats,
}: {
  heading: ReactNode;
  intro: ReactNode;
  stats: { value: string; label: string; sub: string }[];
}) {
  return (
    <section className={sectionClass} style={sectionStyle}>
      {label('Result')}
      <h2
        className="serif mb-4 mob-h2"
        style={{ fontSize: '3rem', lineHeight: 1.1 }}
      >
        {heading}
      </h2>
      <p
        style={{
          fontSize: '0.9rem',
          color: 'var(--color-ink-muted)',
          lineHeight: 1.85,
          maxWidth: '620px',
        }}
      >
        {intro}
      </p>
      <div
        className="mob-col1 mt-12"
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${stats.length}, 1fr)`,
          gap: '16px',
        }}
      >
        {stats.map(({ value, label: l, sub }) => (
          <div
            key={l}
            className="rounded-2xl p-7"
            style={{ background: 'var(--color-surface)' }}
          >
            <p
              className="serif"
              style={{
                fontSize: '2.5rem',
                color: 'var(--color-ink)',
                lineHeight: 1,
              }}
            >
              {value}
            </p>
            <p
              style={{
                fontSize: '0.82rem',
                fontWeight: 600,
                color: 'var(--color-ink)',
                marginTop: '12px',
              }}
            >
              {l}
            </p>
            <p
              style={{
                fontSize: '0.75rem',
                color: 'var(--color-ink-faint)',
                marginTop: '4px',
                lineHeight: 1.6,
              }}
            >
              {sub}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────── Learned ─────────────── */
export function CaseLearned({
  intro,
  items,
}: {
  intro: string;
  items: { title: string; desc: string }[];
}) {
  return (
    <section className={sectionClass} style={sectionStyle}>
      {label('Learned')}
      <div className="flex gap-20 items-start mob-stack">
        <div className="mob-full" style={{ flex: '0 0 320px' }}>
          <h2
            className="serif mb-6 mob-h2"
            style={{ fontSize: '3rem', lineHeight: 1.1 }}
          >
            배운 것들
          </h2>
          <p
            style={{
              fontSize: '0.9rem',
              color: 'var(--color-ink-muted)',
              lineHeight: 1.85,
            }}
          >
            {intro}
          </p>
        </div>
        <div className="flex-1 mob-full flex flex-col">
          {items.map(({ title, desc }) => (
            <div
              key={title}
              className="flex gap-6 py-7"
              style={{ borderBottom: '1px solid var(--color-border)' }}
            >
              <div
                className="shrink-0"
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: 'var(--color-accent)',
                  marginTop: '8px',
                }}
              />
              <div>
                <h3
                  className="mb-2"
                  style={{
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: 'var(--color-ink)',
                  }}
                >
                  {title}
                </h3>
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
      </div>
    </section>
  );
}

/* ─────────────── Tech Stack ─────────────── */
export function CaseTechStack({
  stack,
}: {
  stack: { category: string; items: { name: string; desc: string }[] }[];
}) {
  return (
    <>
      <section className={sectionClass} style={sectionStyle}>
        {label('Tech Stack')}
        <h2
          className="serif mb-12 mob-h2"
          style={{ fontSize: '3rem', lineHeight: 1.1 }}
        >
          사용한 기술
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {stack.map(({ category, items }) => (
            <div key={category}>
              <p
                style={{
                  fontSize: '0.7rem',
                  letterSpacing: '0.12em',
                  color: 'var(--color-ink-faint)',
                  marginBottom: '12px',
                }}
              >
                {category.toUpperCase()}
              </p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                {items.map(({ name, desc }) => (
                  <div
                    key={name}
                    className="rounded-xl px-5 py-4"
                    style={{ background: 'var(--color-surface)', minWidth: '140px' }}
                  >
                    <p
                      style={{
                        fontSize: '0.84rem',
                        fontWeight: 600,
                        color: 'var(--color-ink)',
                        marginBottom: '4px',
                      }}
                    >
                      {name}
                    </p>
                    <p style={{ fontSize: '0.72rem', color: 'var(--color-ink-faint)' }}>
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <footer
        className="px-16 mob-px py-12 flex items-center justify-end"
        style={{ borderTop: '1px solid var(--color-border)' }}
      >
        <p style={{ fontSize: '0.75rem', color: 'var(--color-ink-faint)' }}>
          ✉️ ay052884@gmail.com
        </p>
      </footer>
    </>
  );
}
