export default function Overview() {
  return (
    <div id="overview">
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
          className="serif mb-12 mob-h2"
          style={{ fontSize: '3rem', lineHeight: 1.1 }}
        >
          어떤 화면인가요?
        </h2>

        <p
          style={{
            fontSize: '0.875rem',
            color: 'var(--color-ink-muted)',
            lineHeight: 1.85,
            maxWidth: '640px',
            marginBottom: '48px',
          }}
        >
          보안 분석 도구에서 분석 작업의 상세 정보를 보여주는 슬라이드 아웃
          패널입니다. 5개의 탭으로 구성되어 있으며,
          <br />
          분석이 진행되는 동안{' '}
          <strong style={{ color: 'var(--color-ink)', fontWeight: 600 }}>
            일반 정보 탭과 Footer 영역
          </strong>
          이 socket.io를 통해 실시간으로 업데이트됩니다.
        </p>

        {/* 다이어그램 */}
        <div
          className="rounded-xl"
          style={{
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            padding: '32px',
            overflowX: 'auto',
          }}
        >
          <svg
            width="100%"
            viewBox="0 0 680 370"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>작업 상세 슬라이드 아웃 구조</title>
            <desc>
              보안 분석 도구의 작업 상세 슬라이드 아웃 화면 구조 다이어그램
            </desc>
            <defs>
              <marker
                id="arr2"
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
                  stroke="var(--color-ink-faint)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </marker>
            </defs>

            {/* ── 메인 화면 ── */}
            <rect
              x="20"
              y="20"
              width="160"
              height="330"
              rx="8"
              fill="var(--color-border)"
              opacity="0.2"
              stroke="var(--color-ink-faint)"
              strokeWidth="0.5"
            />
            <text
              x="100"
              y="42"
              textAnchor="middle"
              style={{
                fontSize: '11px',
                fill: 'var(--color-ink-faint)',
                fontFamily: 'inherit',
              }}
            >
              메인 화면
            </text>
            <rect
              x="34"
              y="52"
              width="132"
              height="18"
              rx="4"
              fill="var(--color-ink-faint)"
              opacity="0.3"
            />
            <rect
              x="34"
              y="78"
              width="132"
              height="10"
              rx="4"
              fill="var(--color-ink-faint)"
              opacity="0.2"
            />
            <rect
              x="34"
              y="96"
              width="132"
              height="10"
              rx="4"
              fill="var(--color-ink-faint)"
              opacity="0.2"
            />
            <rect
              x="34"
              y="114"
              width="132"
              height="10"
              rx="4"
              fill="var(--color-ink-faint)"
              opacity="0.2"
            />

            {/* ── 클릭 화살표 ── */}
            <line
              x1="182"
              y1="200"
              x2="208"
              y2="200"
              stroke="var(--color-ink-faint)"
              strokeWidth="1.5"
              markerEnd="url(#arr2)"
            />
            <text
              x="195"
              y="192"
              textAnchor="middle"
              style={{
                fontSize: '10px',
                fill: 'var(--color-ink-faint)',
                fontFamily: 'inherit',
              }}
            >
              클릭
            </text>

            {/* ── 슬라이드 아웃 컨테이너 ── y=20, height=360 */}
            <rect
              x="210"
              y="20"
              width="450"
              height="330"
              rx="10"
              fill="var(--color-accent-light)"
              stroke="var(--color-accent)"
              strokeWidth="0.8"
              opacity="0.6"
            />
            <text
              x="435"
              y="42"
              textAnchor="middle"
              style={{
                fontSize: '12px',
                fontWeight: 600,
                fill: 'var(--color-accent)',
                fontFamily: 'inherit',
              }}
            >
              TaskDetailSlideOut
            </text>

            {/* ── 탭 컨트롤러 ── y=52, height=32 */}
            <rect
              x="224"
              y="52"
              width="422"
              height="32"
              rx="6"
              fill="var(--color-border)"
              opacity="0.5"
              stroke="var(--color-ink-faint)"
              strokeWidth="0.5"
            />
            {[
              { x: 240, w: 66, label: '일반 정보', active: true },
              { x: 330, w: 40, label: '이슈', active: false },
              { x: 400, w: 40, label: '자산', active: false },
              { x: 470, w: 60, label: '컴포넌트', active: false },
              { x: 540, w: 76, label: '작업 메시지', active: false },
            ].map(({ x, w, label, active }) => (
              <g key={label}>
                <rect
                  x={x}
                  y={56}
                  width={w}
                  height={22}
                  rx="4"
                  fill={active ? 'var(--color-accent)' : 'transparent'}
                  opacity={active ? 0.8 : 1}
                />
                <text
                  x={x + w / 2}
                  y={70}
                  textAnchor="middle"
                  style={{
                    fontSize: '10px',
                    fill: active ? 'white' : 'var(--color-ink-muted)',
                    fontFamily: 'inherit',
                  }}
                >
                  {label}
                </text>
              </g>
            ))}

            {/* ── 일반 정보 탭 영역 ── y=92, height=208 */}
            <rect
              x="224"
              y="92"
              width="422"
              height="114"
              rx="6"
              fill="var(--color-border)"
              opacity="0.15"
              stroke="var(--color-ink-faint)"
              strokeWidth="0.5"
            />

            {/* 실시간 뱃지 + 일반 정보 탭 제목 (한 줄) */}
            <rect
              x="234"
              y="104"
              width="72"
              height="16"
              rx="8"
              fill="var(--color-accent)"
              opacity="0.15"
            />
            <text
              x="270"
              y="115"
              textAnchor="middle"
              style={{
                fontSize: '9px',
                fill: 'var(--color-accent)',
                fontFamily: 'inherit',
                fontWeight: 600,
              }}
            >
              실시간 업데이트
            </text>
            <text
              x="316"
              y="115"
              textAnchor="start"
              style={{
                fontSize: '11px',
                fontWeight: 600,
                fill: 'var(--color-ink)',
                fontFamily: 'inherit',
              }}
            >
              일반 정보 탭
            </text>

            {/* 실시간 업데이트 항목 4개 (2×2 그리드) */}
            {[
              { x: 234, y: 130, w: 200, label: '분석 진행률' },
              { x: 442, y: 130, w: 196, label: '수집된 URL 수' },
              { x: 234, y: 172, w: 200, label: '요청 횟수' },
              { x: 442, y: 172, w: 196, label: '사전 분석 결과' },
            ].map(({ x, y, w, label }) => (
              <g key={label}>
                <rect
                  x={x}
                  y={y}
                  width={w}
                  height={32}
                  rx="4"
                  fill="var(--color-accent-light)"
                  stroke="var(--color-accent)"
                  strokeWidth="0.5"
                  opacity={0.8}
                />
                <text
                  x={x + w / 2}
                  y={y + 20}
                  textAnchor="middle"
                  style={{
                    fontSize: '10px',
                    fill: 'var(--color-accent)',
                    fontFamily: 'inherit',
                    fontWeight: 600,
                  }}
                >
                  {label}
                </text>
              </g>
            ))}

            {/* ── Footer 영역 ── y=214, height=106 */}
            <rect
              x="224"
              y="214"
              width="422"
              height="106"
              rx="6"
              fill="#FEE2E2"
              opacity="0.5"
              stroke="#F87171"
              strokeWidth="0.5"
            />
            {/* Footer 실시간 뱃지 + 제목 */}
            <rect
              x="234"
              y="224"
              width="72"
              height="16"
              rx="8"
              fill="#F87171"
              opacity="0.25"
            />
            <text
              x="270"
              y="235"
              textAnchor="middle"
              style={{
                fontSize: '9px',
                fill: '#991B1B',
                fontFamily: 'inherit',
                fontWeight: 600,
              }}
            >
              실시간 업데이트
            </text>
            <text
              x="316"
              y="235"
              textAnchor="start"
              style={{
                fontSize: '11px',
                fontWeight: 600,
                fill: '#991B1B',
                fontFamily: 'inherit',
              }}
            >
              Footer
            </text>

            {/* 분석 상태에 따라 버튼이 달라진다는 설명 */}
            <text
              x="234"
              y="256"
              textAnchor="start"
              style={{
                fontSize: '9px',
                fill: '#991B1B',
                fontFamily: 'inherit',
                opacity: 0.7,
              }}
            >
              분석 상태에 따라 노출되는 버튼이 달라집니다
            </text>

            {/* 푸터 버튼들 — 흐리게 처리해서 조건부 노출 표현 */}
            {[
              { label: '중지', visible: true },
              { label: '일시정지', visible: true },
              { label: '재개', visible: false },
              { label: '삭제', visible: false },
            ].map(({ label, visible }, i) => (
              <g key={label}>
                <rect
                  x={234 + i * 100}
                  y={268}
                  width={88}
                  height={34}
                  rx="4"
                  fill="white"
                  opacity={visible ? 0.9 : 0.3}
                  stroke={
                    visible ? 'var(--color-border)' : 'var(--color-ink-faint)'
                  }
                  strokeWidth="0.5"
                  strokeDasharray={visible ? 'none' : '3 2'}
                />
                <text
                  x={234 + i * 100 + 44}
                  y={289}
                  textAnchor="middle"
                  style={{
                    fontSize: '10px',
                    fill: visible
                      ? 'var(--color-ink-muted)'
                      : 'var(--color-ink-faint)',
                    fontFamily: 'inherit',
                    opacity: visible ? 1 : 0.4,
                  }}
                >
                  {label}
                </text>
              </g>
            ))}
          </svg>
        </div>
      </section>
    </div>
  );
}
