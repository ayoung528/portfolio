import type { Metadata } from 'next';
import {
  CaseHero,
  CaseProblem,
  CaseOverview,
  CaseTable,
  CaseProcess,
  CaseResult,
  CaseLearned,
  CaseTechStack,
} from '@/components/case/Sections';

export const metadata: Metadata = {
  title: '오픈소스 취약점 영향 분석 자동화 - 정아영',
  description:
    '사내 LLM이 실제 코드 영향을 판정하되, 최종 결론은 규칙 코드가 내리도록 설계한 프론트엔드 취약점 알림 자동화',
};

const strong = (t: string) => (
  <strong style={{ color: 'var(--color-ink)', fontWeight: 600 }}>{t}</strong>
);

export default function SecurityImpactPage() {
  return (
    <div style={{ background: 'var(--color-bg)', color: 'var(--color-ink)' }}>
      <div id="hero">
        <CaseHero
          category="AI Reliability"
          title={
            <>
              LLM의 판단을
              <br />
              믿을 수 있게
            </>
          }
          intro={
            <>
              여러 보안 커뮤니티를 직접 확인하고 Jira 이슈를 손으로 쓰던 일을
              자동화하면서,
              <br className="mob-hide" />
              &quot;LLM이 영향 없다고 하면 정말 없는 걸까?&quot;라는 질문에 답하기
              위해
              <br className="mob-hide" />
              LLM의 역할을 좁히고 판정을 규칙으로 통제한 과정을 공유합니다.
            </>
          }
          meta={[
            { label: '역할', value: '기획 · 설계 · 개발 · 운영 (단독)' },
            { label: '기간', value: '2026년 9월 ~ 현재' },
            { label: '부서 / 직급', value: '개발센터 / 전임(대리)' },
          ]}
        />
      </div>

      <div id="problem">
        <CaseProblem
          heading="어떤 문제가 있었죠?"
          items={[
            {
              title: '보안 공지를 사람이 찾아다녔어요',
              desc: '프론트엔드 의존성의 보안 이슈를 확인하려면 여러 커뮤니티와 공지를 직접 찾아보고, 우리 코드에 영향이 있는지 판단한 뒤 Jira 이슈를 손으로 작성해야 했습니다.',
            },
            {
              title: '같은 근거, 다른 판정',
              desc: '사내 LLM에게 코드 영향을 판정하게 하자, 같은 근거를 넣어도 실행할 때마다 "영향 없음"과 "조건 불충족" 사이를 오가며 결과가 흔들렸습니다.',
            },
            {
              title: '"못 찾음"을 "안전"으로 읽는 위험',
              desc: '처음에는 코드 근거가 부족한 후보를 알림에서 제외했습니다. 하지만 이는 호출을 찾지 못한 것을 안전하다고 해석하는 셈이라, 보안 관점에서 가장 위험한 실수였습니다.',
            },
          ]}
        />
      </div>

      <div id="overview">
        <CaseOverview
          heading={
            <>
              LLM은 근거만,
              <br />
              결론은 코드가
            </>
          }
          intro={
            <>
              매일 아침 release 브랜치를 검사하고, LLM은 두 단계에서만 쓰입니다.
              권고문에서 {strong('찾아볼 식별자')}를 뽑고, 수집된 근거로{' '}
              {strong('조건별 충족 여부')}를 답하는 것까지입니다. 최종 판정은 검증
              노드의 규칙이 계산합니다.
            </>
          }
          rows={[
            {
              stage: 'Scan',
              nodes: [
                {
                  title: '의존성 검사',
                  desc: 'package.json · yarn.lock을 OSV 오프라인 검사와 공식 공지로 확인',
                },
              ],
            },
            {
              stage: 'LLM ①',
              nodes: [
                {
                  title: '검색 식별자 추출',
                  desc: '권고문에서 옵션 · 함수 · 설정 키 등 취약 경로의 식별자를 추출',
                  accent: true,
                },
              ],
            },
            {
              stage: 'Evidence',
              nodes: [
                {
                  title: '앱 코드',
                  desc: 'AST import 그래프 탐색 · 식별자 전수 검색',
                },
                {
                  title: '상위 패키지',
                  desc: '취약 패키지 import 여부 · 내장 사본 확인',
                },
                {
                  title: '취약 패키지 원본',
                  desc: '관련 함수만 원본 줄 번호 그대로 발췌',
                },
              ],
            },
            {
              stage: 'LLM ②',
              nodes: [
                {
                  title: '조건 판정',
                  desc: '취약 코드 도달 여부와 조건별 met / not_met / unknown, 근거 인용 필수',
                  accent: true,
                },
              ],
            },
            {
              stage: 'Rule',
              nodes: [
                {
                  title: '검증 노드',
                  desc: '인용 검증 후 규칙으로 최종 판정 계산 → Discord 알림 · Jira 초안',
                },
              ],
            },
          ]}
          note="모든 사내 LLM 노드는 temperature 0으로 실행하고, LLM이 실패하거나 형식이 틀려도 검사를 멈추지 않고 '업데이트 필요' 알림으로 이어집니다."
        />
      </div>

      <div id="decision">
        <CaseTable
          eyebrow="Decision"
          heading={
            <>
              판정은 숨기지 않고
              <br />
              우선순위만 나눠요
            </>
          }
          intro="취약 버전은 판정과 관계없이 모두 알립니다. 판정은 알림을 걸러내는 필터가 아니라, 무엇부터 할지 정하는 기준입니다."
          columns={['판정', '알림', '다음 조치']}
          rows={[
            ['영향 있음', '🚨 현재 코드에 영향이 있습니다', '수정 버전을 바로 적용하고 핫픽스 배포를 검토'],
            ['영향 가능', '⚠️ 현재 코드에 영향이 있을 수 있습니다', '다음 릴리스 전에 수정 버전 적용'],
            ['영향 없음', '✅ 현재 코드에는 영향이 없습니다', '다음 릴리스 때 함께 업데이트 (이후 해당 기능 사용 시 바로 영향을 받으므로)'],
            ['분석 실패', '🚨 업데이트 필요', '숨기지 않고 실패 요약과 함께 검토 요청'],
          ]}
        />
      </div>

      <div id="process">
        <CaseProcess
          heading="만들면서 부딪힌 것들"
          steps={[
            {
              title: 'LLM이 결론을 고르지 못하게',
              problem:
                '같은 근거에서도 LLM이 고르는 최종 상태가 실행마다 달랐습니다.',
              body: 'LLM에게 "영향 있음/없음"을 묻지 않고, 취약 코드에 도달하는지(yes / no / unknown)와 발생 조건별 충족 여부(met / not_met / unknown)만 답하게 했습니다. 최종 상태는 검증 노드가 계산합니다. 도달하지 않으면 영향 없음, 모든 조건이 충족되면 영향 있음, 근거로 확인된 불충족이 하나라도 있으면 조건 불충족, 그 밖에는 영향 가능입니다.',
              tags: ['역할 분리', '규칙 기반 판정', 'temperature 0'],
            },
            {
              title: '인용 없는 판단은 낮추기',
              problem:
                'LLM이 그럴듯한 근거를 들지만, 실제로는 수집 자료에 없는 파일이나 줄을 인용하는 경우가 있었습니다.',
              body: '판단마다 근거 파일 · 줄, 검색 위치, 0건 검색 결과 중 하나를 인용하도록 했고, 인용이 실제 수집 근거에 없으면 그 조건을 "알 수 없음"으로 낮췄습니다. 분석 전체를 실패시키지 않고 근거가 있는 판단만 남깁니다. 환경 변수 이름이 코드에 없다는 사실처럼, 증거가 될 수 없는 것은 판단 근거로 인정하지 않습니다.',
              tags: ['근거 인용 검증', 'Unknown 강등'],
            },
            {
              title: '"못 찾음"은 "안전"이 아니다',
              problem:
                '근거가 부족한 후보를 알림에서 빼는 정책이, 결과적으로 위험을 숨기고 있었습니다.',
              body: '알림 정책을 바꿔 취약 버전 후보는 코드 판정과 관계없이 모두 알리고, 판정은 대응 우선순위로만 쓰도록 했습니다. 호출 경로를 찾지 못했거나 분석 모델이 실패한 경우도 "업데이트 필요" 알림으로 이어지며, 영향 없음 판정에도 업데이트가 필요한 이유를 함께 적습니다.',
              tags: ['보수적 기본값', '알림 정책 재설계'],
            },
            {
              title: '취약 코드는 어디에 숨어 있나',
              problem:
                '앱이 취약 패키지를 직접 쓰지 않아도, 상위 패키지가 그 코드를 자기 번들 안에 복사해 두는 경우가 있었습니다.',
              body: '앱 코드는 AST import 그래프를 양방향으로 탐색하고, 권고문에서 뽑은 식별자를 앱 전체와 상위 패키지 원본에서 단어 단위로 검색했습니다. 상위 패키지가 취약 코드를 내장했다면 업데이트 대상을 상위 패키지로 안내합니다. 사내 패키지는 사내 레지스트리에서만 받고, 공개 패키지는 설치 스크립트 실행 없이 SHA-512를 검증한 뒤 메모리에서만 읽었습니다.',
              tags: ['AST import 그래프', '내장 사본 탐지', '공급망 안전'],
            },
            {
              title: '동시 실행에서 사라지는 초안',
              problem:
                '여러 분석이 동시에 끝나면 워크플로 저장소가 통째로 덮어써져, 다른 분석의 초안 기록이 사라졌습니다.',
              body: '초안 기록과 사용자별 작성 메모리를 초안 토큰 단위의 행으로 분리해 저장하고, 실행마다 바뀐 행만 저장하도록 바꿨습니다. 기존 기록은 배포 스크립트가 새 저장소로 옮겼습니다.',
              tags: ['n8n Data Table', '행 단위 저장'],
            },
            {
              title: '자동 등록에서 사람의 확정으로',
              body: 'Jira API와 사용자별 OAuth로 이슈를 완전 자동 등록하는 방식까지 구현했지만, 최종 확인 없이 이슈가 만들어지는 구조는 맞지 않다고 판단했습니다. 지금은 Discord 스레드에서 대화로 초안을 다듬고, 주요 필드가 채워진 Jira 생성 화면으로 이동해 사용자가 본인 계정으로 등록합니다.',
              tags: ['Human-in-the-loop', 'LLM 대화형 수정'],
            },
            {
              title: '감이 아니라 지표로',
              body: '사람이 정답을 따로 만들지 않고, 기록된 실행을 현재 검증 코드로 다시 판정해 품질을 측정하는 도구를 만들었습니다. 근거 인용 유효율, 판단 불가 비율, 같은 커밋 반복 분석의 재현성, 코드로 직접 확인한 회귀 사례 통과 여부를 보고, 흔들리는 권고를 찾아 근거 수집 범위를 개선합니다.',
              tags: ['LLM Evaluation', '재현성', '회귀 사례'],
            },
          ]}
        />
      </div>

      <div id="result">
        <CaseResult
          heading={
            <>
              알림이 아니라
              <br />
              다음 행동을 받아요
            </>
          }
          intro="매일 아침 검사 결과가 대응 우선순위와 Jira 초안으로 Discord에 도착합니다. 초안에는 권고별 판정과 근거 코드 위치가 담겨, 개발자가 다시 분석하지 않고 바로 대조할 수 있습니다."
          stats={[
            {
              value: '매일',
              label: 'release 브랜치 자동 검사',
              sub: 'OSV 오프라인 검사 + 공식 공지 확인',
            },
            {
              value: '4단계',
              label: '판정별 대응 안내',
              sub: '영향 있음 · 가능 · 없음 · 분석 실패',
            },
            {
              value: '4종',
              label: 'LLM 품질 지표',
              sub: '인용 유효율 · 판단 불가 · 재현성 · 회귀 사례',
            },
          ]}
        />
      </div>

      <div id="learned">
        <CaseLearned
          intro="보안 회사에서 일하며 배운 원칙을 AI에 그대로 적용했습니다. 확인하지 못한 것은 안전한 것이 아니라, 아직 모르는 것입니다."
          items={[
            {
              title: 'LLM에게는 좁은 질문을',
              desc: '"영향이 있나요?"처럼 넓은 질문은 답이 흔들렸지만, "이 조건이 이 줄에서 충족되나요?"처럼 좁히자 근거를 대며 답했습니다. 결론은 사람이 정한 규칙이 내리게 하는 편이 일관됐습니다.',
            },
            {
              title: '모른다는 답도 결과다',
              desc: '"알 수 없음"을 실패로 숨기지 않고 그대로 보여주자, 어디서 근거 수집이 부족한지가 드러났고 개선 방향이 생겼습니다.',
            },
            {
              title: '자동화의 끝에는 사람의 확정',
              desc: '완전 자동 등록까지 만들어 본 뒤에야, 사용자가 마지막에 확인하는 한 단계가 왜 필요한지 분명해졌습니다. 자동화할 범위를 줄이는 것도 설계의 일부였습니다.',
            },
          ]}
        />
      </div>

      <div id="techstack">
        <CaseTechStack
          stack={[
            {
              category: '분석',
              items: [
                { name: 'OSV', desc: '오프라인 취약점 검사' },
                { name: 'TypeScript AST', desc: 'import 그래프 · 호출 탐색' },
                { name: 'Node.js', desc: '근거 수집기' },
              ],
            },
            {
              category: 'AI',
              items: [
                { name: '사내 LLM', desc: '식별자 추출 · 조건 판정' },
                { name: '품질 측정 도구', desc: '실행 기록 재판정' },
              ],
            },
            {
              category: '워크플로 & 배포',
              items: [
                { name: 'n8n', desc: '일정 · 분석 · 초안 워크플로' },
                { name: 'GitLab CI', desc: '검사 · 분석 파이프라인' },
                { name: 'Discord', desc: '알림 · 초안 스레드' },
                { name: 'Jira', desc: '사용자 확정 등록' },
              ],
            },
          ]}
        />
      </div>
    </div>
  );
}
