import type { Metadata } from 'next';
import {
  CaseHero,
  CaseProblem,
  CaseOverview,
  CaseProcess,
  CaseResult,
  CaseLearned,
  CaseTechStack,
} from '@/components/case/Sections';

export const metadata: Metadata = {
  title: '사내 개발 지원 플랫폼 - 정아영',
  description:
    '사람에게 묻던 담당자와 API 사용 화면을 Discord 봇과 Code RAG로 답하고, 장애 대응까지 AI 에이전트로 자동화한 사내 플랫폼',
};

const strong = (t: string) => (
  <strong style={{ color: 'var(--color-ink)', fontWeight: 600 }}>{t}</strong>
);

export default function DevPlatformPage() {
  return (
    <div style={{ background: 'var(--color-bg)', color: 'var(--color-ink)' }}>
      <div id="hero">
        <CaseHero
          category="AI Platform"
          title={
            <>
              사람에게 묻던 질문을
              <br />
              봇이 답하기까지
            </>
          }
          intro={
            <>
              &quot;이 일감 담당자는 누구죠?&quot;, &quot;이 API는 어느 화면에서
              쓰나요?&quot;
              <br className="mob-hide" />
              매번 특정 사람에게 몰리던 질문을 없애기 위해 직접 제안하고,
              <br className="mob-hide" />
              Discord 봇과 프론트엔드 Code RAG, 장애 대응 AI 에이전트까지 혼자
              만들어 운영한 과정을 공유합니다.
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
              title: '담당자는 파트장만 알았어요',
              desc: '일감의 FE·BE 담당자는 주간회의록에만 기록되어 있어, 개발자는 매번 파트장에게 Discord로 물어본 뒤 직접 스레드를 만들고 담당자를 초대해야 했습니다.',
            },
            {
              title: 'API 영향 범위는 코드를 따라가야 했어요',
              desc: '백엔드 개발자가 API를 바꿀 때마다 "이 API는 어느 화면에서 쓰나요?"를 프론트엔드 개발자에게 물었고, 답하려면 프론트엔드 개발자가 import를 직접 거슬러 올라가야 했습니다.',
            },
            {
              title: '도구가 늘수록 운영도 늘었어요',
              desc: '봇 하나 뒤에 워크플로, 배포 파이프라인, 외부 API가 함께 맞물려 있어, 기능이 늘어날수록 어디가 고장 났는지 확인하는 일이 새로운 부담이 됐습니다.',
            },
          ]}
        />
      </div>

      <div id="overview">
        <CaseOverview
          heading={
            <>
              하나의 입구,
              <br />
              다섯 개의 저장소
            </>
          }
          intro={
            <>
              사용자는 Discord {strong('슬래시 명령')} 하나로 질문하고, 실제 조회와
              해석은 역할별 저장소가 나눠 맡습니다. 다섯 저장소 모두 GitLab CI로
              사내 서버에 자동 배포되며, 별도의 {strong('관리자 에이전트')}가 전체
              연동을 감시합니다.
            </>
          }
          rows={[
            {
              stage: 'Entry',
              nodes: [
                {
                  title: 'Discord 봇',
                  desc: '/jira · /api · /schema · /status 명령과 버튼·스레드 응답',
                  accent: true,
                },
              ],
            },
            {
              stage: 'Workflow',
              nodes: [
                {
                  title: 'n8n Worker Gateway',
                  desc: '요청 ID 기반으로 기능별 워크플로에 라우팅',
                },
              ],
            },
            {
              stage: 'Services',
              nodes: [
                {
                  title: '담당자 동기화',
                  desc: 'Notion 회의록 → 담당자 마스터, 주 3회',
                },
                {
                  title: 'Code RAG',
                  desc: '코드 색인 · API 사용 화면 역추적 · MCP',
                },
                {
                  title: 'GraphQL 스키마',
                  desc: '서버별 스키마를 Discord에서 탐색',
                },
              ],
            },
            {
              stage: 'Operations',
              nodes: [
                {
                  title: '장애 대응 에이전트',
                  desc: '감지 → 조사 → 수정 · 검토 → 배포 → 복구 확인 → 롤백',
                  accent: true,
                },
              ],
            },
          ]}
        />
      </div>

      <div id="process">
        <CaseProcess
          heading="만들면서 부딪힌 것들"
          steps={[
            {
              title: '회의록을 데이터로 바꾸기',
              problem:
                '담당자 정보가 정리되지 않은 회의록 문서에만 있었고, 같은 티켓의 담당자가 회의마다 바뀌기도 했습니다.',
              body: 'FE·BE 주간회의록을 규칙 기반으로 파싱해 주 3회 담당자 마스터에 동기화했습니다. 새 티켓은 만들고 담당자가 바뀐 티켓만 갱신하며, 버전이 충돌하는 담당자는 자동으로 고르지 않고 사람이 확인할 항목으로 남겼습니다. 이제 Jira 티켓 하나만 입력하면 담당자 확인, 협업 스레드 생성, 요구사항 · Figma · 관련 명세 첨부까지 한 번에 처리됩니다.',
              tags: ['n8n', 'Notion API', 'Jira', '규칙 기반 파싱'],
            },
            {
              title: 'import 그래프로 화면을 거슬러 찾기',
              problem:
                '파일 경로만으로는 사용자가 보는 화면 이름을 알 수 없었고, 한국어 질의는 영어 코드와 임베딩 유사도가 낮았습니다.',
              body: '프론트엔드와 디자인 시스템 코드를 AST 단위로 나눠 pgvector에 색인하고, 벡터 유사도와 경로 · 심볼 키워드를 함께 쓰는 하이브리드 검색을 만들었습니다. API 호출 파일에서 import 관계를 거슬러 올라가 라우트 진입 파일을 찾고, 번역 리소스와 Next.js 라우팅 규칙, 메뉴 · 탭 · 슬라이드아웃 제목을 읽어 "메뉴 > 탭 > 상세 슬라이드아웃" 같은 실제 메뉴 경로로 보여줍니다. GitLab 푸시마다 변경된 파일만 다시 색인합니다.',
              tags: ['AST 청킹', 'pgvector', '하이브리드 검색', 'import 그래프'],
            },
            {
              title: '"연결됨"과 "호출됨"을 구분하기',
              problem:
                '공통 레이아웃을 거치는 API는 거의 모든 화면에 연결된 것처럼 나와, 답이 오히려 혼란을 줬습니다.',
              body: '여러 화면이 공유하는 공통 경로로만 연결된 API는 기본 목록에서 분리했습니다. 브라우저 자동화로 실제 화면을 순회하며 요청을 수집해 정적 분석 결과와 대조하고, 답변에는 "정적 코드 연결"과 "실제 관측"을 나눠 표시했습니다. 색인이 최신 커밋보다 뒤처졌거나 관측의 배포 커밋을 확인하지 못하면 경고를 함께 붙입니다.',
              tags: ['Stagehand', '정적 · 런타임 대조', '최신성 경고'],
            },
            {
              title: '같은 색인을 AI 에이전트에게도',
              body: '사람만 쓰는 도구로 끝내지 않고, 같은 색인을 MCP 서버로 열어 Claude Code 같은 코딩 에이전트가 저장소를 체크아웃하지 않고도 화면 위치, 컴포넌트 사용처, API 호출 화면을 조회할 수 있게 했습니다.',
              tags: ['MCP', 'Claude Code', 'OpenAPI'],
            },
            {
              title: 'HTTP 200을 믿지 않기',
              problem:
                '외부 워크플로가 내부에서 실패해도 빈 HTTP 200을 돌려줘, 사용자 화면의 버튼이 로딩 상태에 그대로 멈췄습니다.',
              body: '통신 성공과 업무 완료를 구분했습니다. 워크플로가 실제 작업 완료 응답을 보냈는지 확인해 성공을 판정하고, 확인되지 않으면 실패로 처리해 버튼을 다시 누를 수 있게 되돌렸습니다.',
              tags: ['성공 기준 재정의', '실패 복구 UX'],
            },
            {
              title: '"같은 문장인가"가 아니라 "같은 알림인가"',
              problem:
                'LLM이 만드는 Jira 초안은 요청마다 문장이 달라 본문 비교로는 중복 게시를 막을 수 없었고, 봇이 재시작되면 처리 기록도 사라졌습니다.',
              body: '중복의 기준을 생성 결과에서 업무 식별자로 바꿨습니다. 같은 알림 메시지의 요청을 순서대로 처리하고, 메모리 대신 Discord의 실제 게시 이력을 다시 조회해 재시작 후에도 첫 초안을 재사용합니다. 게시 이력 조회에 실패하면 새 초안을 임의로 보내지 않습니다.',
              tags: ['멱등성', '요청 직렬화', '부분 실패 처리'],
            },
            {
              title: 'AI에게 운영을 맡기되, 범위는 코드로',
              problem:
                '에이전트가 "수정 완료"라고 보고하는 것만으로는 운영 반영을 믿을 수 없었고, 파이프라인 성공이 실제 배포 성공을 뜻하지도 않았습니다.',
              body: '봇 로그, 파이프라인, 워크플로 오류를 수집해 장애를 이슈로 기록하는 관리자 서비스를 따로 만들었습니다. AI 수정은 운영 토큰과 Docker 권한이 없는 격리 컨테이너에서만 하고, 허용 경로 검사 · 별도 에이전트의 읽기 전용 검토 · 격리 테스트를 통과한 커밋만 배포합니다. 복구는 실패했던 노드의 실제 운영 성공과 재발 없는 관찰 기간으로 판정하고, 장애당 수정은 2회까지, 롤백이 실패하면 자동 배포를 동결합니다.',
              tags: ['Codex', '격리 실행', '독립 검토', '역순 롤백'],
            },
          ]}
        />
      </div>

      <div id="result">
        <CaseResult
          heading={
            <>
              질문이 몰리던
              <br />
              자리가 사라졌어요
            </>
          }
          intro="개발자들은 파트장이나 프론트엔드 개발자에게 묻지 않고 Discord에서 바로 답을 얻습니다. 장애 대응 에이전트는 자동 모드로 운영 중입니다."
          stats={[
            {
              value: '10명',
              label: '실제 사용 개발자',
              sub: 'FE · BE 개발자가 별도 서버 · 채널에서 사용',
            },
            {
              value: '5건',
              label: '자동 감지한 장애',
              sub: '그중 2건 복구 확인 후 자동 종료',
            },
            {
              value: '87개',
              label: '회귀 테스트',
              sub: '동시 요청 · 응답 유실 · 부분 배포 실패 시나리오',
            },
          ]}
        />
      </div>

      <div id="learned">
        <CaseLearned
          intro="누가 시킨 일이 아니라, 매일 받는 질문이 불편해서 시작한 일이었습니다. 그래서 만드는 것보다 계속 믿고 쓰게 만드는 데 더 오래 고민했습니다."
          items={[
            {
              title: '정확한 답보다 정직한 답',
              desc: '"이 화면에서 쓰입니다"보다 "코드로는 연결되어 있지만 실제 호출은 보장하지 않습니다"가 동료에게 더 쓸모 있었습니다. 답의 한계를 함께 보여주는 것이 신뢰를 만들었습니다.',
            },
            {
              title: '성공의 기준을 먼저 정하기',
              desc: 'HTTP 200, 파이프라인 성공, 에이전트의 완료 보고는 모두 성공처럼 보였지만 실제 업무 완료는 아니었습니다. 무엇을 성공으로 볼지 먼저 정의하는 것이 자동화의 출발점이었습니다.',
            },
            {
              title: 'AI에게 맡길 일과 멈출 지점',
              desc: 'AI가 할 수 있는 일을 늘리는 것만큼, 어디서 멈추고 사람에게 넘길지를 코드로 정해두는 것이 중요했습니다. 근거가 부족하면 기다리고, 실패하면 되돌리는 구조가 자동 모드를 켤 수 있게 해 줬습니다.',
            },
          ]}
        />
      </div>

      <div id="techstack">
        <CaseTechStack
          stack={[
            {
              category: '서버 & 봇',
              items: [
                { name: 'Node.js', desc: '봇 · API 서버 · 에이전트' },
                { name: 'TypeScript', desc: 'Code RAG 서버' },
                { name: 'Discord.js', desc: '슬래시 명령 · 스레드' },
                { name: 'n8n', desc: '워크플로 · Gateway' },
              ],
            },
            {
              category: 'AI & 검색',
              items: [
                { name: 'PostgreSQL + pgvector', desc: '코드 색인 · 하이브리드 검색' },
                { name: 'RAG', desc: '코드 근거 기반 답변' },
                { name: 'MCP', desc: '코딩 에이전트 연동' },
                { name: 'Codex', desc: '격리된 자동 수정 · 검토' },
                { name: 'Stagehand', desc: '실제 화면 요청 수집' },
              ],
            },
            {
              category: '운영',
              items: [
                { name: 'Docker Compose', desc: '서비스별 분리 배포' },
                { name: 'GitLab CI/CD', desc: '5개 저장소 자동 배포' },
                { name: 'SQLite', desc: '장애 상태 · 보고 대기열' },
              ],
            },
          ]}
        />
      </div>
    </div>
  );
}
