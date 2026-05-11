const algorithms = [
  {
    index: '01',
    title: 'On-premise Llama로 비정형 데이터 정형화',
    desc: '2,000개에 달하는 취약점 검출 룰의 설명은 사람이 작성한 비정형 줄글 형태였습니다. 핵심 키워드를 일일이 추출하기에는 한계가 있었고, 이를 해결하기 위해 AI를 도입했습니다.\n\n보안 솔루션의 핵심 리소스인 검출 룰의 외부 유출을 차단하기 위해 외부 클라우드 API 대신 사내 GPU 서버에 Ollama를 활용하여 Llama 모델을 직접 구축(On-premise)했습니다. JSON Mode를 활성화하여 모델이 일관된 구조의 데이터를 반환하도록 했습니다.',
  },
  {
    index: '02',
    title: '다중 태그 매칭 알고리즘으로 지원율 자동 산출',
    desc: '추출된 룰별 태그와 보안 레퍼런스의 메타데이터를 비교하는 다중 태그 매칭 알고리즘을 설계했습니다. 단일 키워드 매칭의 낮은 정확도를 보완하고자 체커의 복잡도에 따라 임계치를 달리 적용했습니다. 단순한 체커는 태그 3개 이상 일치 시, 복잡한 체커는 6개 이상 일치 시 매핑되도록 설계하여 데이터 신뢰도를 높였습니다.',
  },
];

export default function AI() {
  return (
    <section
      className="px-16 mob-px py-20 mob-py-sm"
      style={{ borderTop: '1px solid var(--color-border)' }}
    >
      <p
        className="text-xs tracking-[0.2em] uppercase mb-8"
        style={{ color: 'var(--color-ink-faint)' }}
      >
        AI
      </p>

      <h2
        className="serif mb-4 mob-h2"
        style={{ fontSize: '3rem', lineHeight: 1.1 }}
      >
        AI로 불가능을
        <br />
        가능하게
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
        On-premise Llama 모델로 비정형 룰 데이터를 정형화하고, 다중 태그 매칭
        알고리즘으로 보안 레퍼런스 지원율을 자동 산출했습니다. 기존에는 수동으로
        계산이 불가능했던 지표를 실시간으로 제공합니다.
      </p>

      {/* 다이어그램 */}
      <div
        className="rounded-xl mb-16"
        style={{
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          padding: '32px',
          overflowX: 'auto',
        }}
      >
        <svg
          width="100%"
          viewBox="0 0 680 420"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>AI 태그 추출 및 다중 매칭 알고리즘</title>
          <desc>
            비정형 룰 데이터를 AI로 태그화하고 레퍼런스와 다중 매칭하는 흐름
          </desc>
          <defs>
            <marker
              id="arrow-ai"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path
                d="M2 1L8 5L2 9"
                fill="none"
                stroke="context-stroke"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </marker>
          </defs>

          {/* STEP 01 라벨 */}
          <text
            x="40"
            y="32"
            style={{
              fontSize: '11px',
              fontWeight: 500,
              fill: 'var(--color-ink-faint)',
              fontFamily: 'inherit',
              letterSpacing: '0.1em',
            }}
          >
            STEP 01 — AI 태그 추출
          </text>

          {/* 비정형 룰 설명 */}
          <rect
            x="40"
            y="48"
            width="160"
            height="80"
            rx="8"
            fill="var(--color-border)"
            opacity="0.3"
            stroke="var(--color-ink-faint)"
            strokeWidth="0.5"
          />
          <text
            x="120"
            y="78"
            textAnchor="middle"
            style={{
              fontSize: '12px',
              fontWeight: 600,
              fill: 'var(--color-ink)',
              fontFamily: 'inherit',
            }}
          >
            비정형 룰 설명
          </text>
          <text
            x="120"
            y="98"
            textAnchor="middle"
            style={{
              fontSize: '11px',
              fill: 'var(--color-ink-muted)',
              fontFamily: 'inherit',
            }}
          >
            사람이 작성한
          </text>
          <text
            x="120"
            y="114"
            textAnchor="middle"
            style={{
              fontSize: '11px',
              fill: 'var(--color-ink-muted)',
              fontFamily: 'inherit',
            }}
          >
            줄글 형태
          </text>

          <line
            x1="200"
            y1="88"
            x2="248"
            y2="88"
            stroke="var(--color-ink-faint)"
            strokeWidth="1.5"
            markerEnd="url(#arrow-ai)"
          />

          {/* Ollama */}
          <rect
            x="250"
            y="48"
            width="160"
            height="80"
            rx="8"
            fill="var(--color-accent-light)"
            stroke="var(--color-accent)"
            strokeWidth="0.8"
          />
          <text
            x="330"
            y="78"
            textAnchor="middle"
            style={{
              fontSize: '12px',
              fontWeight: 600,
              fill: 'var(--color-accent)',
              fontFamily: 'inherit',
            }}
          >
            Ollama (Llama)
          </text>
          <text
            x="330"
            y="98"
            textAnchor="middle"
            style={{
              fontSize: '11px',
              fill: 'var(--color-accent)',
              fontFamily: 'inherit',
            }}
          >
            On-premise 모델
          </text>
          <text
            x="330"
            y="114"
            textAnchor="middle"
            style={{
              fontSize: '11px',
              fill: 'var(--color-accent)',
              fontFamily: 'inherit',
            }}
          >
            JSON Mode 활성화
          </text>

          <line
            x1="410"
            y1="88"
            x2="458"
            y2="88"
            stroke="var(--color-ink-faint)"
            strokeWidth="1.5"
            markerEnd="url(#arrow-ai)"
          />

          {/* 정형화된 태그 */}
          <rect
            x="460"
            y="48"
            width="180"
            height="80"
            rx="8"
            fill="var(--color-surface)"
            stroke="var(--color-ink-faint)"
            strokeWidth="0.5"
          />
          <text
            x="550"
            y="72"
            textAnchor="middle"
            style={{
              fontSize: '12px',
              fontWeight: 600,
              fill: 'var(--color-ink)',
              fontFamily: 'inherit',
            }}
          >
            정형화된 태그
          </text>
          <text
            x="550"
            y="92"
            textAnchor="middle"
            style={{
              fontSize: '11px',
              fill: 'var(--color-ink-muted)',
              fontFamily: 'inherit',
            }}
          >{`["SQL Injection",`}</text>
          <text
            x="550"
            y="108"
            textAnchor="middle"
            style={{
              fontSize: '11px',
              fill: 'var(--color-ink-muted)',
              fontFamily: 'inherit',
            }}
          >{`"XSS", "OWASP"]`}</text>

          {/* 구분선 */}
          <line
            x1="40"
            y1="160"
            x2="640"
            y2="160"
            stroke="var(--color-border)"
            strokeWidth="0.5"
            strokeDasharray="4 3"
          />

          {/* STEP 02 라벨 */}
          <text
            x="40"
            y="184"
            style={{
              fontSize: '11px',
              fontWeight: 500,
              fill: 'var(--color-ink-faint)',
              fontFamily: 'inherit',
              letterSpacing: '0.1em',
            }}
          >
            STEP 02 — 다중 태그 매칭 알고리즘
          </text>

          {/* 룰 태그 */}
          <rect
            x="40"
            y="200"
            width="160"
            height="76"
            rx="8"
            fill="var(--color-surface)"
            stroke="var(--color-ink-faint)"
            strokeWidth="0.5"
          />
          <text
            x="120"
            y="224"
            textAnchor="middle"
            style={{
              fontSize: '12px',
              fontWeight: 600,
              fill: 'var(--color-ink)',
              fontFamily: 'inherit',
            }}
          >
            룰 태그
          </text>
          <text
            x="120"
            y="244"
            textAnchor="middle"
            style={{
              fontSize: '11px',
              fill: 'var(--color-ink-muted)',
              fontFamily: 'inherit',
            }}
          >{`["SQL", "XSS",`}</text>
          <text
            x="120"
            y="260"
            textAnchor="middle"
            style={{
              fontSize: '11px',
              fill: 'var(--color-ink-muted)',
              fontFamily: 'inherit',
            }}
          >{`"OWASP", "A03"]`}</text>

          {/* 레퍼런스 태그 */}
          <rect
            x="40"
            y="296"
            width="160"
            height="76"
            rx="8"
            fill="var(--color-surface)"
            stroke="var(--color-ink-faint)"
            strokeWidth="0.5"
          />
          <text
            x="120"
            y="320"
            textAnchor="middle"
            style={{
              fontSize: '12px',
              fontWeight: 600,
              fill: 'var(--color-ink)',
              fontFamily: 'inherit',
            }}
          >
            레퍼런스 태그
          </text>
          <text
            x="120"
            y="340"
            textAnchor="middle"
            style={{
              fontSize: '11px',
              fill: 'var(--color-ink-muted)',
              fontFamily: 'inherit',
            }}
          >{`["SQL", "XSS",`}</text>
          <text
            x="120"
            y="356"
            textAnchor="middle"
            style={{
              fontSize: '11px',
              fill: 'var(--color-ink-muted)',
              fontFamily: 'inherit',
            }}
          >{`"OWASP", "CSRF"]`}</text>

          {/* 화살표 → 임계치 */}
          <line
            x1="200"
            y1="238"
            x2="270"
            y2="280"
            stroke="var(--color-ink-faint)"
            strokeWidth="1.5"
            markerEnd="url(#arrow-ai)"
          />
          <line
            x1="200"
            y1="334"
            x2="270"
            y2="298"
            stroke="var(--color-ink-faint)"
            strokeWidth="1.5"
            markerEnd="url(#arrow-ai)"
          />

          {/* 임계치 비교 */}
          <rect
            x="272"
            y="260"
            width="156"
            height="76"
            rx="8"
            fill="var(--color-accent-light)"
            stroke="var(--color-accent)"
            strokeWidth="0.8"
          />
          <text
            x="350"
            y="284"
            textAnchor="middle"
            style={{
              fontSize: '12px',
              fontWeight: 600,
              fill: 'var(--color-accent)',
              fontFamily: 'inherit',
            }}
          >
            임계치 비교
          </text>
          <text
            x="350"
            y="304"
            textAnchor="middle"
            style={{
              fontSize: '11px',
              fill: 'var(--color-accent)',
              fontFamily: 'inherit',
            }}
          >
            단순 체커 ≥ 3개
          </text>
          <text
            x="350"
            y="320"
            textAnchor="middle"
            style={{
              fontSize: '11px',
              fill: 'var(--color-accent)',
              fontFamily: 'inherit',
            }}
          >
            복잡 체커 ≥ 6개
          </text>

          {/* 분기 화살표 */}
          <line
            x1="452"
            y1="288"
            x2="476"
            y2="264"
            stroke="var(--color-ink-faint)"
            strokeWidth="1.5"
            markerEnd="url(#arrow-ai)"
          />
          <line
            x1="452"
            y1="310"
            x2="476"
            y2="330"
            stroke="var(--color-ink-faint)"
            strokeWidth="1.5"
            markerEnd="url(#arrow-ai)"
          />

          {/* 매핑 성공 */}
          <rect
            x="478"
            y="240"
            width="152"
            height="48"
            rx="8"
            fill="var(--color-surface)"
            stroke="var(--color-ink-faint)"
            strokeWidth="0.5"
          />
          <text
            x="554"
            y="261"
            textAnchor="middle"
            style={{
              fontSize: '12px',
              fontWeight: 600,
              fill: 'var(--color-ink)',
              fontFamily: 'inherit',
            }}
          >
            ✓ 매핑 성공
          </text>
          <text
            x="554"
            y="279"
            textAnchor="middle"
            style={{
              fontSize: '11px',
              fill: 'var(--color-ink-muted)',
              fontFamily: 'inherit',
            }}
          >
            지원율에 포함
          </text>

          {/* 매핑 실패 */}
          <rect
            x="478"
            y="306"
            width="152"
            height="48"
            rx="8"
            fill="var(--color-border)"
            opacity="0.3"
            stroke="var(--color-ink-faint)"
            strokeWidth="0.5"
          />
          <text
            x="554"
            y="327"
            textAnchor="middle"
            style={{
              fontSize: '12px',
              fontWeight: 600,
              fill: 'var(--color-ink)',
              fontFamily: 'inherit',
            }}
          >
            ✗ 매핑 제외
          </text>
          <text
            x="554"
            y="345"
            textAnchor="middle"
            style={{
              fontSize: '11px',
              fill: 'var(--color-ink-muted)',
              fontFamily: 'inherit',
            }}
          >
            임계치 미달
          </text>

          {/* 지원율 산출 */}
          <rect
            x="160"
            y="390"
            width="360"
            height="24"
            rx="6"
            fill="var(--color-surface)"
            stroke="var(--color-border)"
            strokeWidth="0.5"
          />
          <text
            x="340"
            y="406"
            textAnchor="middle"
            style={{
              fontSize: '11px',
              fill: 'var(--color-ink-muted)',
              fontFamily: 'inherit',
            }}
          >
            매핑된 룰 수 / 전체 룰 수 = 보안 레퍼런스 지원율
          </text>
        </svg>
      </div>

      {/* 설명 텍스트 */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {algorithms.map(({ index, title, desc }, i) => (
          <div
            key={index}
            style={{
              padding: '32px 0',
              borderTop: '1px solid var(--color-border)',
              ...(i === algorithms.length - 1
                ? { borderBottom: '1px solid var(--color-border)' }
                : {}),
            }}
          >
            <div className="flex gap-12 mob-stack" style={{ flexWrap: 'wrap' }}>
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
              <div style={{ flex: 1, minWidth: '200px' }}>
                <h3
                  style={{
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: 'var(--color-ink)',
                    marginBottom: '10px',
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--color-ink-muted)',
                    lineHeight: 1.85,
                    whiteSpace: 'pre-line',
                  }}
                >
                  {desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
