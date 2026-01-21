const rulesData = [
    { num: 1, text: "수업 시작 전 3분 전까지 준비 완료한다. (체육복, 운동화, 물, 개인 물품)", icon: "⏰" },
    { num: 2, text: "준비운동은 반드시 참여한다. (부상 예방이 최우선!)", icon: "🙆‍♂️" },
    { num: 3, text: "안전 수칙을 지키고 위험 행동은 하지 않는다. (밀기/장난/과격한 행동 금지)", icon: "⚠️" },
    { num: 4, text: "선생님의 신호(휘슬/손짓/구령)를 즉시 따른다.", icon: "📣" },
    { num: 5, text: "기구와 시설을 소중히 사용하고 사용 후 제자리에 둔다.", icon: "🏀" },
    { num: 6, text: "친구를 존중하며 비난·놀림·욕설은 하지 않는다.", icon: "🤝" },
    { num: 7, text: "팀 활동에서는 협력하며 규칙을 지키고 정정당당하게 경기한다.", icon: "🏆" },
    { num: 8, text: "수업 중 휴대폰은 사용하지 않는다. (필요 시 교사 안내에 따름)", icon: "📱" },
    { num: 9, text: "몸이 아프거나 다치면 즉시 교사에게 알린다.", icon: "🩹" },
    { num: 10, text: "정리운동과 마무리 정돈까지가 수업이다. (끝까지 참여)", icon: "🧹" }
];

const standardsData = [
    // 9체01: 건강
    { code: "9체01-01", desc: "체력 증진의 의미를 이해하고 원리를 분석한다.", cat: "9체01" },
    { code: "9체01-02", desc: "자신의 체력 수준에 맞는 체력 증진 운동을 실천한다.", cat: "9체01" },
    { code: "9체01-03", desc: "체력 관리의 의미를 이해하고 원리를 분석한다.", cat: "9체01" },
    { code: "9체01-04", desc: "자신의 체력을 진단하고 적합한 체력 관리 방법을 실천한다.", cat: "9체01" },
    { code: "9체01-05", desc: "운동 처방의 의미를 이해하고 원리를 분석한다.", cat: "9체01" },
    { code: "9체01-06", desc: "자신의 신체 조건이나 체력에 맞게 운동 처방 계획을 수립하고 안전하게 실천한다.", cat: "9체01" },
    { code: "9체01-07", desc: "신체 건강의 의미를 이해하고 신체 건강 활동의 종류와 특성을 분석한다.", cat: "9체01" },
    { code: "9체01-08", desc: "자신에게 적합한 신체 건강 활동 방법을 실천한다.", cat: "9체01" },
    { code: "9체01-09", desc: "정신 건강의 의미를 이해하고 정신 건강 활동의 종류와 특성을 분석한다.", cat: "9체01" },
    { code: "9체01-10", desc: "자신에게 적합한 정신 건강 활동 방법을 실천한다.", cat: "9체01" },
    { code: "9체01-11", desc: "사회적 건강의 의미를 이해하고 사회적 건강을 위한 활동의 종류와 특성을 분석한다.", cat: "9체01" },
    { code: "9체01-12", desc: "사회적으로 적합한 건강 활동 방법을 실천한다.", cat: "9체01" },
    { code: "9체01-13", desc: "체력 운동을 하며 실천 의지와 인내심을 보이고 자기 주도적으로 문제를 해결한다.", cat: "9체01" },
    { code: "9체01-14", desc: "건강 활동을 자율적으로 실천하며 자신과 공동체에 대한 안전을 추구한다.", cat: "9체01" },
    // 9체02: 도전/경쟁
    { code: "9체02-01", desc: "동작형 스포츠의 역사와 특성을 탐색하고 비교한다.", cat: "9체02" },
    { code: "9체02-02", desc: "동작형 스포츠의 수행 원리를 적용하여 경기 기능을 수련하고 향상한다.", cat: "9체02" },
    { code: "9체02-03", desc: "동작형 스포츠의 경기 방법을 이해하고 경기 전략을 상황에 맞게 활용하며 안전하게 경기한다.", cat: "9체02" },
    { code: "9체02-04", desc: "기록형 스포츠의 역사와 특성을 탐색하고 비교한다.", cat: "9체02" },
    { code: "9체02-05", desc: "기록형 스포츠의 수행 원리를 적용하여 경기 기능을 수련하고 향상한다.", cat: "9체02" },
    { code: "9체02-06", desc: "기록형 스포츠의 경기 방법을 이해하고 경기 전략을 활용하며 안전하게 경기한다.", cat: "9체02" },
    { code: "9체02-07", desc: "투기형 스포츠의 역사와 특성을 탐색하고 비교한다.", cat: "9체02" },
    { code: "9체02-08", desc: "투기형 스포츠의 수행 원리를 적용하여 경기 기능을 수련하고 향상한다.", cat: "9체02" },
    { code: "9체02-09", desc: "투기형 스포츠의 경기 방법을 이해하고 경기 전략을 상황에 맞게 활용하며 안전하게 경기한다.", cat: "9체02" },
    { code: "9체02-10", desc: "영역형 스포츠의 역사와 특성을 탐색하고 비교한다.", cat: "9체02" },
    { code: "9체02-11", desc: "영역형 스포츠의 수행 원리를 적용하여 경기 기능을 수행하고 향상한다.", cat: "9체02" },
    { code: "9체02-12", desc: "영역형 스포츠의 경기 방법을 이해하고 경기 전략을 활용하며 안전하게 경기한다.", cat: "9체02" },
    { code: "9체02-13", desc: "필드형 스포츠의 역사와 특성을 탐색하고 비교한다.", cat: "9체02" },
    { code: "9체02-14", desc: "필드형 스포츠의 수행 원리를 적용하여 경기 기능을 수행하고 향상한다.", cat: "9체02" },
    { code: "9체02-15", desc: "필드형 스포츠의 경기 방법을 이해하고 경기 전략을 활용하며 안전하게 경기한다.", cat: "9체02" },
    { code: "9체02-16", desc: "네트형 스포츠의 역사와 특성을 탐색하고 비교한다.", cat: "9체02" },
    { code: "9체02-17", desc: "네트형 스포츠의 수행 원리를 적용하여 경기 기능을 수행하고 향상한다.", cat: "9체02" },
    { code: "9체02-18", desc: "네트형 스포츠의 경기 방법을 이해하고 경기 전략을 활용하며 안전하게 경기한다.", cat: "9체02" },
    { code: "9체02-19", desc: "생활환경형 스포츠의 역사와 특성을 탐색하고 비교한다.", cat: "9체02" },
    { code: "9체02-20", desc: "생활환경형 스포츠의 수행 원리를 적용하여 기능을 수행하고 향상한다.", cat: "9체02" },
    { code: "9체02-21", desc: "생활환경형 스포츠의 활동 방법을 이해하고 활동 전략을 활용하며 안전하게 경기한다.", cat: "9체02" },
    { code: "9체02-22", desc: "자연환경형 스포츠의 역사와 특성을 탐색하고 비교한다.", cat: "9체02" },
    { code: "9체02-23", desc: "자연환경형 스포츠의 수행 원리를 적용하여 기능을 수행하고 향상한다.", cat: "9체02" },
    { code: "9체02-24", desc: "자연환경형 스포츠의 활동 방법을 이해하고 활동 전략을 활용하며 안전하게 경기한다.", cat: "9체02" },
    { code: "9체02-25", desc: "스포츠의 연습과 경기 과정에서 인내심을 발휘하여 적극적으로 도전한다.", cat: "9체02" },
    { code: "9체02-26", desc: "스포츠의 연습과 경기 과정에서 구성원 간에 서로 신뢰하며 팀 목표를 달성하기 위해 노력하고 경기 예절을 갖추며 정정당당하게 참여한다.", cat: "9체02" },
    { code: "9체02-27", desc: "스포츠 환경에 대한 친화적 태도와 지속가능한 스포츠 환경을 만들기 위한 공동체 의식을 발휘한다.", cat: "9체02" },
    // 9체03: 표현
    { code: "9체03-01", desc: "스포츠 표현의 역사와 특성을 탐색하고 비교한다.", cat: "9체03" },
    { code: "9체03-02", desc: "스포츠 표현의 원리를 적용하여 동작을 심미적으로 표현한다.", cat: "9체03" },
    { code: "9체03-03", desc: "스포츠 표현의 특성과 원리를 반영한 작품을 창작하고 표현 요소를 고려하여 감상한다.", cat: "9체03" },
    { code: "9체03-04", desc: "전통 표현의 역사와 특성을 탐색하고 비교한다.", cat: "9체03" },
    { code: "9체03-05", desc: "전통 표현의 원리를 적용하여 동작을 심미적으로 표현한다.", cat: "9체03" },
    { code: "9체03-06", desc: "전통 표현의 특성과 원리를 반영한 작품을 창작하고 표현 요소를 고려하여 감상한다.", cat: "9체03" },
    { code: "9체03-07", desc: "현대 표현의 역사와 특성을 탐색하고 비교한다.", cat: "9체03" },
    { code: "9체03-08", desc: "현대 표현의 원리를 적용하여 동작을 심미적으로 표현한다.", cat: "9체03" },
    { code: "9체03-09", desc: "현대 표현의 특성과 원리를 반영한 작품을 창작하고 표현 요소를 고려하여 감상한다.", cat: "9체03" },
    { code: "9체03-10", desc: "움직임을 표현하고 창작하는 과정에서 독창적이고 개방적인 태도를 갖고 표현 활동 작품을 공감하고 비평한다.", cat: "9체03" }
];

const booksData = [
    { code: "9체01-01", kw: "체력 증진", url: "https://search.kyobobook.co.kr/search?keyword=체력%20증진", icon: "💪" },
    { code: "9체01-01", kw: "청소년 체력 운동", url: "https://search.kyobobook.co.kr/search?keyword=청소년%20체력%20운동", icon: "🏃" },
    { code: "9체01-03", kw: "체력 관리", url: "https://search.kyobobook.co.kr/search?keyword=체력%20관리", icon: "📊" },
    { code: "9체01-05", kw: "운동처방", url: "https://search.kyobobook.co.kr/search?keyword=운동처방", icon: "💊" },
    { code: "9체01-09", kw: "스포츠 심리", url: "https://search.kyobobook.co.kr/search?keyword=스포츠%20심리", icon: "🧠" },
    { code: "9체01-11", kw: "스포츠와 공동체", url: "https://search.kyobobook.co.kr/search?keyword=스포츠와%20공동체", icon: "👥" },
    { code: "9체02-04", kw: "육상 트레이닝", url: "https://search.kyobobook.co.kr/search?keyword=육상%20트레이닝", icon: "👟" },
    { code: "9체02-07", kw: "태권도 교본", url: "https://search.kyobobook.co.kr/search?keyword=태권도%20교본", icon: "🥋" },
    { code: "9체02-10", kw: "농구 전술", url: "https://search.kyobobook.co.kr/search?keyword=농구%20전술", icon: "🏀" },
    { code: "9체02-10", kw: "축구 전술", url: "https://search.kyobobook.co.kr/search?keyword=축구%20전술", icon: "⚽" },
    { code: "9체02-13", kw: "야구 기본기", url: "https://search.kyobobook.co.kr/search?keyword=야구%20기본기", icon: "⚾" },
    { code: "9체02-13", kw: "티볼 수업 지도", url: "https://search.kyobobook.co.kr/search?keyword=티볼%20수업%20지도", icon: "🏏" },
    { code: "9체02-16", kw: "배드민턴 교본", url: "https://search.kyobobook.co.kr/search?keyword=배드민턴%20교본", icon: "🏸" },
    { code: "9체02-16", kw: "배구 교본", url: "https://search.kyobobook.co.kr/search?keyword=배구%20교본", icon: "🏐" },
    { code: "9체02-19", kw: "줄넘기 걷기 운동", url: "https://search.kyobobook.co.kr/search?keyword=줄넘기%20걷기%20운동", icon: "➰" },
    { code: "9체02-22", kw: "캠핑 안전", url: "https://search.kyobobook.co.kr/search?keyword=캠핑%20안전", icon: "⛺" },
    { code: "9체02-22", kw: "오리엔티어링 등산 안전", url: "https://search.kyobobook.co.kr/search?keyword=오리엔티어링%20등산%20안전", icon: "🗺️" },
    { code: "9체03-01", kw: "댄스스포츠 역사", url: "https://search.kyobobook.co.kr/search?keyword=댄스스포츠%20역사", icon: "💃" },
    { code: "9체03-03", kw: "치어리딩 안무", url: "https://search.kyobobook.co.kr/search?keyword=치어리딩%20안무", icon: "📣" },
    { code: "9체03-04", kw: "전통 놀이", url: "https://search.kyobobook.co.kr/search?keyword=전통%20놀이", icon: "🎭" },
    { code: "9체03-07", kw: "스트리트댄스 힙합", url: "https://search.kyobobook.co.kr/search?keyword=스트리트댄스%20힙합", icon: "🔥" }
];

const quizData = [
    {
        question: "1. 체육 수업 준비는 언제까지 완료해야 하나요?",
        options: ["수업 시작 직전", "수업 시작 3분 전", "수업 시작 후 5분 이내", "종소리가 들릴 때"],
        correct: 1
    },
    {
        question: "2. 부상 예방을 위해 반드시 참여해야 하는 활동은?",
        options: ["개인 연습", "정리 운동", "준비 운동", "전술 회의"],
        correct: 2
    },
    {
        question: "3. 수업 중 선생님의 휘슬이나 구령이 들리면 어떻게 해야 하나요?",
        options: ["하던 활동을 계속한다", "즉시 멈추고 주목한다", "친구와 대화한다", "천천히 걸어온다"],
        correct: 1
    },
    {
        question: "4. 다음 중 체육 수업 복장으로 가장 적절하지 않은 것은?",
        options: ["운동복", "슬리퍼나 구두", "운동화", "신축성 있는 바지"],
        correct: 1
    },
    {
        question: "5. 신체적 건강뿐만 아니라 마음의 안정을 추구하는 건강 영역은?",
        options: ["사회적 건강", "신체적 건강", "지적 건강", "정신 건강"],
        correct: 3
    },
    {
        question: "6. 축구, 농구와 같이 일정한 공간에서 팀 간에 상호작용하는 스포츠 유형은?",
        options: ["기록형", "필드형", "영역형", "네트형"],
        correct: 2
    },
    {
        question: "7. 야구, 티볼과 같이 공격과 수비가 교대되는 스포츠 유형은?",
        options: ["필드형", "영역형", "투기형", "네트형"],
        correct: 0
    },
    {
        question: "8. 배드민턴, 배구와 같이 중앙의 선을 두고 경합하는 스포츠 유형은?",
        options: ["기록형", "네트형", "투기형", "동작형"],
        correct: 1
    },
    {
        question: "9. 수업 중 몸이 아프거나 다쳤을 때 가장 먼저 해야 할 행동은?",
        options: ["보건실로 바로 간다", "참고 계속 수업을 듣는다", "교사에게 즉시 알린다", "친구에게 부탁한다"],
        correct: 2
    },
    {
        question: "10. 정리 운동과 마무리 정돈은 수업의 어느 단계에 해당하나요?",
        options: ["수업 외 시간", "수업의 시작", "수업의 중간", "수업의 마무리(참여 필수)"],
        correct: 3
    }
];

let currentQuizIndex = 0;
let score = 0;

const gagneEventsData = [
    { num: 1, title: "1. 주의 획득(Gain Attention)", time: 4, teacher: "짧은 상황 질문/사진/영상 또는 미니 미션으로 관심을 끌고 안전의 중요성을 강조한다.", learner: "질문에 반응하고 간단 동작(예: 제자리 점프 10회)을 수행한다.", activity: "흥미 유발 퀴즈+짧은 움직임" },
    { num: 2, title: "2. 목표 제시(Inform Objectives)", time: 3, teacher: "오늘 수업 목표(안전·기술·건강 실천)를 한 문장으로 제시하고 성공 기준을 안내한다.", learner: "목표를 듣고 오늘의 개인 목표를 1개 정한다.", activity: "개인 목표 설정" },
    { num: 3, title: "3. 선수학습 회상(Stimulate Recall)", time: 4, teacher: "이전에 해본 운동 경험, 자신이 어려워했던 점을 떠올리게 질문한다.", learner: "짝/모둠으로 경험을 공유하고 오늘 적용할 점을 말한다.", activity: "선수학습 회상 토의" },
    { num: 4, title: "4. 자극 제시(Present Stimulus)", time: 7, teacher: "핵심 개념(체력·운동 원리·기술 수행 원리)과 안전 포인트를 시범과 함께 제시한다.", learner: "시범을 관찰하고 핵심 포인트 1~2개를 기록/말로 정리한다.", activity: "핵심 내용 제시(시범/설명)" },
    { num: 5, title: "5. 학습 안내(Provide Guidance)", time: 5, teacher: "수준별 성공 기준(쉬움/보통/도전)을 제시하고 오류를 줄이는 팁(자세·호흡·리듬)을 안내한다.", learner: "자기 수준을 선택하고 수행 계획(횟수/강도)을 정한다.", activity: "스테이션 실습" },
    { num: 6, title: "6. 수행 유도(Elicit Performance)", time: 12, teacher: "스테이션 활동을 운영하며 개인별 피드백을 제공하고 안전을 통제한다.", learner: "각 구역에서 운동/기술/표현 활동을 직접 수행한다.", activity: "스테이션 실습" },
    { num: 7, title: "7. 피드백 제공(Provide Feedback)", time: 5, teacher: "교사 관찰 피드백 + 짝 피드백 기준(루브릭)을 제공한다.", learner: "짝의 피드백을 반영하여 동작을 1회 수정 수행한다.", activity: "짝 피드백(코칭)" },
    { num: 8, title: "8. 수행 평가(Assess Performance)", time: 7, teacher: "간단 적용 과제(미니게임/기록도전/표현발표)를 통해 성취 수준을 확인한다.", learner: "배운 원리를 적용해 과제를 수행하고 결과를 공유한다.", activity: "미니 게임/활동 적용" },
    { num: 9, title: "9. 파지·전이 촉진(Enhance Retention)", time: 3, teacher: "다음 차시/생활 적용 과제를 제시하고 개인 실천 계획을 연결한다.", learner: "정리운동 후 자기점검지에 '다음 목표 1개'를 작성한다.", activity: "정리운동+성찰" }
];

document.addEventListener('DOMContentLoaded', () => {
    initRules();
    initStandards('all');
    initBooks();
    initQuiz();
    initSearch();
    initLessonPlanner();

    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelector('.tab-btn.active').classList.remove('active');
            btn.classList.add('active');
            const category = btn.dataset.category;
            initStandards(category);
            focusGraph(category);
        });
    });
});

function initLessonPlanner() {
    const selector = document.getElementById('stdSelector');
    selector.innerHTML = '<option value="">-- 성취기준을 선택하세요 --</option>' +
        standardsData.map(s => `<option value="${s.code}">${s.code}: ${s.desc.substring(0, 30)}...</option>`).join('');

    selector.addEventListener('change', (e) => {
        const selectedCode = e.target.value;
        if (!selectedCode) {
            document.getElementById('lessonContent').classList.add('hidden');
            return;
        }

        const std = standardsData.find(s => s.code === selectedCode);
        document.getElementById('targetStdText').innerText = `[${std.code}] ${std.desc}`;

        const timeline = document.getElementById('gagneTimeline');
        timeline.innerHTML = gagneEventsData.map(event => `
            <div class="gagne-card">
                <span class="gagne-time">${event.time}분</span>
                <h4>${event.title}</h4>
                <p style="color: var(--accent); margin-bottom: 1rem; font-weight: 600;">활동: ${event.activity}</p>
                <div class="gagne-details">
                    <div class="gagne-actor">
                        <strong>👨‍🏫 교사 활동</strong>
                        <span>${event.teacher}</span>
                    </div>
                    <div class="gagne-actor">
                        <strong>🙋‍♂️ 학습자 활동</strong>
                        <span>${event.learner}</span>
                    </div>
                </div>
            </div>
        `).join('');

        document.getElementById('lessonContent').classList.remove('hidden');
    });
}

function showView(viewId) {
    document.querySelectorAll('.view').forEach(view => view.classList.remove('active'));
    const target = document.getElementById(viewId);
    if (target) {
        target.classList.add('active');
        target.scrollTop = 0;
    }
}

let currentRuleIndex = 0;

function initRules() {
    currentRuleIndex = 0;
    updateRuleDisplay();
}

function updateRuleDisplay() {
    const slider = document.getElementById('ruleSlider');
    const progress = document.getElementById('ruleProgress');
    const rule = rulesData[currentRuleIndex];

    slider.innerHTML = `
        <div class="rule-animate">
            <span style="font-size: 5rem; display: block; margin-bottom: 2rem;">${rule.icon}</span>
            <h3 style="font-size: 2.5rem; color: var(--primary); margin-bottom: 1.5rem;">규칙 ${rule.num}</h3>
            <p style="font-size: 1.6rem; font-weight: 600; line-height: 1.4;">${rule.text}</p>
        </div>
    `;

    progress.innerText = `${currentRuleIndex + 1} / ${rulesData.length}`;
}

window.nextRule = () => {
    currentRuleIndex = (currentRuleIndex + 1) % rulesData.length;
    updateRuleDisplay();
}

function initStandards(category) {
    const list = document.getElementById('standardsList');
    const filtered = category === 'all' ? standardsData : standardsData.filter(s => s.cat === category);
    list.innerHTML = filtered.map(s => `
        <div class="standard-item">
            <div style="display:flex; justify-content:space-between; align-items:center;">
                <span style="font-weight:800; color:var(--accent); font-size:1.2rem;">${s.code}</span>
                <span class="cat-badge" style="background:${getCatColor(s.cat)}; color:white; padding:2px 8px; border-radius:10px; font-size:0.7rem;">${getCatName(s.cat)}</span>
            </div>
            <p style="font-size:1.1rem; margin-top:0.5rem;">${s.desc}</p>
        </div>
    `).join('');
}

function getCatColor(cat) {
    switch (cat) {
        case '9체01': return '#f26a1b';
        case '9체02': return '#2d6a4f';
        case '9체03': return '#0077b6';
        default: return '#666';
    }
}

function getCatName(cat) {
    switch (cat) {
        case '9체01': return '건강';
        case '9체02': return '도전/경쟁';
        case '9체03': return '표현';
        default: return '';
    }
}

function focusGraph(category) {
    const graphFrame = document.getElementById('graphFrame');
    if (graphFrame && graphFrame.contentWindow) {
        graphFrame.contentWindow.postMessage({ type: 'focus', category: category }, '*');
    }
}

function initBooks() {
    const grid = document.getElementById('booksGrid');
    grid.innerHTML = booksData.map(book => `
        <div class="book-card" style="margin-bottom:1rem;">
            <div>
                <span class="book-tag">${book.code}</span>
                <div style="font-size: 3rem; margin-bottom: 1rem;">${book.icon}</div>
                <h4 style="font-size: 1.2rem; margin-bottom: 0.5rem;">${book.kw}</h4>
            </div>
            <a href="${book.url}" target="_blank" class="back-btn" style="text-align:center; text-decoration:none; margin-top:1rem; background: var(--primary); color: white; border:none; padding: 0.7rem; display: block; width: 100%;">도서 검색 결과 ➔</a>
        </div>
    `).join('');
}

function initQuiz() {
    currentQuizIndex = 0;
    score = 0;
    renderQuiz();
}

function renderQuiz() {
    const container = document.getElementById('quizContainer');
    const q = quizData[currentQuizIndex];
    container.innerHTML = `
        <div class="quiz-progress" style="margin-bottom: 1rem; opacity: 0.6;">문제 ${currentQuizIndex + 1} / ${quizData.length}</div>
        <p class="quiz-question" style="font-size: 1.4rem; font-weight: 700; margin-bottom: 2rem;">${q.question}</p>
        <div class="options">
            ${q.options.map((opt, i) => `
                <button class="option-btn" onclick="checkQuiz(${i})" style="width: 100%; text-align: left; margin-bottom: 0.8rem; padding: 1rem; border-radius: 10px;">${opt}</button>
            `).join('')}
        </div>
    `;
}

window.checkQuiz = (index) => {
    if (index === quizData[currentQuizIndex].correct) {
        score++;
    }

    if (currentQuizIndex < quizData.length - 1) {
        currentQuizIndex++;
        renderQuiz();
    } else {
        showQuizResult();
    }
}

function showQuizResult() {
    document.getElementById('quizContainer').classList.add('hidden');
    const resultDiv = document.getElementById('quizResult');
    resultDiv.classList.remove('hidden');
    const performance = (score / quizData.length) * 100;
    let message = performance >= 80 ? "완벽합니다! 체육 수업 준비 완료! 🏅" : performance >= 50 ? "좋은 출발입니다! 규칙을 조금 더 확인해볼까요? 😊" : "다시 한번 오리엔테이션 내용을 확인해봐요! 🏃";

    resultDiv.querySelector('h4').innerText = `총점: ${score} / ${quizData.length} 점`;
    resultDiv.querySelector('p').innerText = message;
}

window.resetQuiz = () => {
    document.getElementById('quizContainer').classList.remove('hidden');
    document.getElementById('quizResult').classList.add('hidden');
    initQuiz();
}

function initSearch() {
    const searchInput = document.getElementById('mainSearch');
    const resultsOverlay = document.getElementById('searchResults');

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.trim().toLowerCase();
        if (!query) {
            resultsOverlay.style.display = 'none';
            return;
        }

        const filteredRules = rulesData.filter(r => r.text.toLowerCase().includes(query));
        const filteredStandards = standardsData.filter(s => s.desc.toLowerCase().includes(query));
        const filteredBooks = booksData.filter(b => b.kw.toLowerCase().includes(query));

        let html = '';
        filteredRules.forEach(r => html += `<div class="search-item" style="padding:15px; border-bottom:1px solid #333; cursor:pointer;" onclick="showView('rules')"><b>[규칙]</b> ${r.text.substring(0, 42)}...</div>`);
        filteredStandards.forEach(s => html += `<div class="search-item" style="padding:15px; border-bottom:1px solid #333; cursor:pointer;" onclick="showView('standards')"><b>[성취기준]</b> ${s.desc.substring(0, 42)}...</div>`);
        filteredBooks.forEach(b => html += `<div class="search-item" style="padding:15px; border-bottom:1px solid #333; cursor:pointer;" onclick="showView('books')"><b>[도서]</b> ${b.kw}</div>`);

        if (html) {
            resultsOverlay.innerHTML = html;
            resultsOverlay.style.display = 'block';
        } else {
            resultsOverlay.innerHTML = '<div class="search-item" style="padding:15px;">결과가 없습니다.</div>';
            resultsOverlay.style.display = 'block';
        }
    });

    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !resultsOverlay.contains(e.target)) {
            resultsOverlay.style.display = 'none';
        }
    });
}
window.showView = showView;
