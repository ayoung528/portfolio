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
        장애에서 시작된
        <br />
        구조적 의문
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
            URL 분석이 진행 중인 상태에서 이슈 탭을 새로고침하면 푸터의
            "일시정지" 버튼이 사라지는 장애가 발견되었습니다.
            <br />
            단순한 setState 위치 변경으로 장애는 해결됐지만, 코드 구조에 대한
            근본적인 의문이 남았습니다.
          </p>
        </div>

        <div className="flex-1 mob-full">
          <div
            className="rounded-xl px-6 py-5"
            style={{ background: 'var(--color-surface)' }}
          >
            <p
              style={{
                fontSize: '0.875rem',
                color: 'var(--color-ink-muted)',
                lineHeight: 1.85,
              }}
            >
              💡 왜 화면 상에서는 5개 탭으로 나뉘어 있는데, 코드에서는 "일반
              정보"와 "그 외 탭"으로만 분리되어 있는가?
              <br />
              <br />
              💡 왜 TaskDetailSlideOut과 TaskGeneralInfoTab, 두 컴포넌트
              각각에서 WebSocket을 연결하는가?
              <br />
              <br />이 의문을 출발점으로 기존 로직을 전면 리팩토링하기로
              결정했습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
