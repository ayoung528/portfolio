const algorithms = [
  {
    index: '01',
    title: 'On-premise Llama로 비정형 데이터 정형화',
    desc: '2,000개에 달하는 취약점 검출 룰의 설명은 사람이 작성한 비정형 줄글 형태였습니다. 핵심 키워드를 일일이 추출하기에는 한계가 있었고, 이를 해결하기 위해 AI를 도입했습니다.\n\n보안 솔루션의 핵심 리소스인 검출 룰의 외부 유출을 차단하기 위해 외부 클라우드 API 대신 사내 GPU 서버에 Ollama를 활용하여 Llama 모델을 직접 구축(On-premise)했습니다. 모델이 외부 네트워크와 통신하지 않는 폐쇄 환경에서도 안정적으로 텍스트 분석 API를 호출할 수 있었으며, JSON Mode를 활성화하여 모델이 일관된 구조의 데이터를 반환하도록 했습니다.',
    before:
      '// 기존: 사람이 작성한 비정형 줄글\n"이 룰은 SQL Injection 및 XSS 공격을\n방어하기 위한 입력값 검증 체커입니다.\nOWASP Top 10 A03 항목과 관련이 있으며..."',
    after:
      '// AI 태그 추출 후: 정형화된 JSON\n{\n  "tags": ["SQL Injection", "XSS", "입력값 검증", "OWASP", "A03"]\n}',
  },
  {
    index: '02',
    title: '다중 태그 매칭 알고리즘으로 지원율 자동 산출',
    desc: '추출된 룰별 태그와 보안 레퍼런스의 메타데이터를 비교하는 다중 태그 매칭 알고리즘을 설계했습니다. 단일 키워드 매칭의 낮은 정확도를 보완하고자 룰과 레퍼런스 간의 일치하는 태그가 설정한 임계치 이상일 때만 매핑되도록 구현하여 데이터 신뢰도를 높였습니다.\n\n체커의 복잡도에 따라 임계치를 다르게 적용했습니다. 단순한 체커는 태그 3개 이상 일치 시, 복잡한 체커는 6개 이상 일치 시 매핑되도록 설계했습니다. 이를 통해 기존에는 수동 계산이 불가능했던 보안 가이드라인 대비 제품 지원율을 실시간으로 산출할 수 있게 되었습니다.',
    before:
      '// 기존: 수동 계산, 사실상 불가능\n// 담당자가 2,000개 룰을 일일이 확인하며\n// 레퍼런스 항목과 수동으로 대조',
    after:
      '// 다중 태그 매칭 알고리즘\nconst isMatched = (rule, reference) => {\n  const matchCount = rule.tags.filter(\n    tag => reference.tags.includes(tag)\n  ).length;\n  const threshold = rule.isComplex ? 6 : 3;\n  return matchCount >= threshold;\n};\n\n// 지원율 실시간 산출\nconst coverageRate = references.map(ref => ({\n  name: ref.name,\n  rate: rules.filter(r => isMatched(r, ref)).length / rules.length\n}));',
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

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {algorithms.map(({ index, title, desc, before, after }, i) => (
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
            <div
              className="flex gap-12 mob-stack"
              style={{ flexWrap: 'wrap', marginBottom: '20px' }}
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

            {(before || after) && (
              <div
                className="flex gap-4 mob-stack"
                style={{ paddingLeft: '44px' }}
              >
                <div className="flex-1 mob-full">
                  <p
                    style={{
                      fontSize: '0.65rem',
                      letterSpacing: '0.15em',
                      color: 'var(--color-ink-faint)',
                      fontWeight: 500,
                      marginBottom: '8px',
                    }}
                  >
                    BEFORE
                  </p>
                  <pre
                    style={{
                      fontSize: '0.78rem',
                      lineHeight: 1.75,
                      background: 'var(--color-surface)',
                      border: '1px solid var(--color-border)',
                      borderRadius: '10px',
                      padding: '16px',
                      overflowX: 'auto',
                      color: 'var(--color-ink-muted)',
                      whiteSpace: 'pre-wrap',
                      wordBreak: 'break-word',
                    }}
                  >
                    <code>{before}</code>
                  </pre>
                </div>

                <div className="flex-1 mob-full">
                  <p
                    style={{
                      fontSize: '0.65rem',
                      letterSpacing: '0.15em',
                      color: 'var(--color-accent)',
                      fontWeight: 500,
                      marginBottom: '8px',
                    }}
                  >
                    AFTER
                  </p>
                  <pre
                    style={{
                      fontSize: '0.78rem',
                      lineHeight: 1.75,
                      background: 'var(--color-accent-light)',
                      border: '1px solid var(--color-accent)',
                      borderRadius: '10px',
                      padding: '16px',
                      overflowX: 'auto',
                      color: 'var(--color-ink)',
                      whiteSpace: 'pre-wrap',
                      wordBreak: 'break-word',
                      opacity: 0.85,
                    }}
                  >
                    <code>{after}</code>
                  </pre>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
