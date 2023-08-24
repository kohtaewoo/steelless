const buildingData = [
    {
        lat: 37.7142845,
        lng: 126.7080357,
        apartment: "파주운정 A34",
        etc: "입주 완료",
        missingRebars: 12, // 누락된 철근 개수
        totalRebars: 331, // 전체 철근 개수
        cause: "구조계산 누락 (계획 변경구간의 계산누락)",
        reinforcement: "슬래브보완",
        architect: "에스아이그룹, 에이유종합건축사사무소, 한림구조엔지니어링",
        constructor: "대보건설, 일신건설 대보실업",
        supervisor: "건원엔지니어링, 신화엔지니어링, 한빛엔지니어링",
    },

    {
        lat: 36.642735,
        lng: 126.6804324,
        apartment: "충남도청이전신도시 RH11",
        etc: "입주 중",
        missingRebars: 13, // 누락된 철근 개수
        totalRebars: 336, // 전체 철근 개수
        cause: "도면표현 누락 (전단보강상세도에 누락)",
        reinforcement: "슬래브보완",
        architect: "범도시건축사사무소, 씨에이치구조엔지니어링",
        constructor: "대림건설, 성지기공, 신원종합개발",
        supervisor: "건축사사무소 광장, 대성씨엠, 에스아이그룹건축",
    },

    {
        lat: 37.4767533,
        lng: 127.1073737,
        apartment: "수서역세권 A3",
        etc: "입주 중",
        missingRebars: 5, // 누락된 철근 개수
        totalRebars: 345, // 전체 철근 개수
        cause: "도면표현 누락 (전단보강상세도에 누락)",
        reinforcement: "기둥신설, 슬래브보완",
        architect: "숨비, 노드플랜건축사사무소, 광장구조",
        constructor: "양우종합건설, 구산토건, 현도종합건설",
        supervisor: "명시에 없음",
    },

    {
        lat: 37.2880282,
        lng: 126.9405576,
        apartment: "수원당수 A3",
        etc: "입주 중",
        missingRebars: 9, // 누락된 철근 개수
        totalRebars: 325, // 전체 철근 개수
        cause: "구조계산 누락 (계획 변경구간의 계산누락)",
        reinforcement: "슬래브보완",
        architect: "이어담건축사사무소, 개명구조",
        constructor: "한라, 경안종합건설, 남양진흥기업",
        supervisor: "명시에 없음",
    },

    {
        lat: 37.1497316,
        lng: 127.0527419,
        apartment: "오산세교2 A6",
        etc: "입주 예정",
        missingRebars: 75, // 누락된 철근 개수
        totalRebars: 90, // 전체 철근 개수
        cause: "착공도서(상세도) 누락",
        reinforcement: "슬래브보완",
        architect: "종합건축사사무소건원, 케이구조",
        constructor: "동문건설, 현대아산주식회사, 동산테크, 건희건설",
        supervisor: "광장, 지에스엠엔지니어링건축사사무소",
    },
//////////////////////////////////////////////
    {
        lat: 37.6669461,
        lng: 127.1219613,
        apartment: "남양주별내 A25",
        etc: "입주 완료",
        missingRebars: 126, // 누락된 철근 개수
        totalRebars: 302, // 전체 철근 개수
        cause: "다른층 도면으로 배근",
        reinforcement: "슬래브보완",
        architect: "케이디엔지니어링과 태경구조",
        constructor: "삼환기업, 일신건설",
        supervisor: "대성종합건축사사무소, 목양종합건축사사무소",
    },

    {
        lat: 36.9904921,
        lng: 127.6059166,
        apartment: "음성금석 A2",
        etc: "입주 완료",
        missingRebars: 101, // 누락된 철근 개수
        totalRebars: 123, // 전체 철근 개수
        cause: "다른층 도면으로 배근",
        reinforcement: "슬래브보완",
        architect: "건축사사무소두올아키텍츠와 한림이엔지",
        constructor: "이수건설, 세진건설, 강산산업개발",
        supervisor: "행림, 선엔지니어링, 다인그룹엔지니어링",
    },

    {
        lat: 36.472435,
        lng: 127.1512474,
        apartment: "공주월송 A4",
        etc: "입주 완료",
        missingRebars: null, // 누락된 철근 개수
        totalRebars: 345, // 전체 철근 개수
        cause: "단순누락",
        reinforcement: "미정",
        architect: "목양디자인그룹, 휴먼플랜, 태경에스",
        constructor: "남영건설, 제일건설, 성원건설, 도림토건",
        supervisor: "명시 없음",
    },

    {
        lat: 36.7792884,
        lng: 127.0984333,
        apartment: "아산탕정 2-A14",
        etc: "입주 완료",
        missingRebars: null, // 누락된 철근 개수
        totalRebars: 362, // 전체 철근 개수
        cause: "단순누락",
        reinforcement: "미정",
        architect: "피에이씨건축사사무소, 포은구조엔지니어링",
        constructor: "양우조합건설, 흥진건설, 보성테크",
        supervisor: "대성종합건축사사무소, 목양종합건축, 지에스엠엔지니어링",
    },

    {
        lat: 37.843513,
        lng: 127.0704178,
        apartment: "양주회천 A15",
        etc: "입주 예정",
        missingRebars: 154, // 누락된 철근 개수
        totalRebars: 154, // 전체 철근 개수
        cause: "구조계산 누락 (전구간 전단계산누락)",
        reinforcement: "기둥신설, 슬래브보완",
        architect: "범도시와 유엔피",
        constructor: " 한신공영",
        supervisor: "다인그룹, 에스아이",
    },

    {
        lat: 35.1486676,
        lng: 126.7844682,
        apartment: "광주선운2 A2",
        etc: "입주 예정",
        missingRebars: 42, // 누락된 철근 개수
        totalRebars: 112, // 전체 철근 개수
        cause: "구조계산 오류 (계산식 오류)",
        reinforcement: "슬래브보완",
        architect: "유탑건축사사무소",
        constructor: "효성중공업",
        supervisor: "LH",
    },

    {
        lat: 35.3147741,
        lng: 129.0747703,
        apartment: "양산사송 A2BL",
        etc: "입주 예정",
        missingRebars: 7, // 누락된 철근 개수
        totalRebars: 650, // 전체 철근 개수
        cause: "단순누락",
        reinforcement: "철근콘크리트 상부보완",
        architect: "나우동인",
        constructor: "에이스건설",
        supervisor: "LH",
    },

    {
        lat: 35.3123838,
        lng: 129.0636193,
        apartment: "양산사송 A8-BL",
        etc: "입주 예정",
        missingRebars: 72, // 누락된 철근 개수
        totalRebars: 241, // 전체 철근 개수
        cause: "구조계산 오류 (보강근 적용구간 오류)",
        reinforcement: "철근콘크리트 상부보완",
        architect: "포스트원",
        constructor: "대우산업개발",
        supervisor: "목양",
    },

    {
        lat: 37.7278784,
        lng: 126.7315647,
        apartment: "파주운정3 A23",
        etc: "입주 예정",
        missingRebars: 6, // 누락된 철근 개수
        totalRebars: 304, // 전체 철근 개수
        cause: "구조계산 누락 (계획 변경구간의 계산누락)",
        reinforcement: "철근콘크리트 상부보완",
        architect: "다인",
        constructor: "대보건설",
        supervisor: "무영",
    },

    {
        lat: 37.5387416,
        lng: 126.6649558,
        apartment: "인천가정2 A1",
        etc: "입주 예정",
        missingRebars: 37, // 누락된 철근 개수
        totalRebars: 109, // 전체 철근 개수
        cause: "구조계산 누락 (전단보강 철근량 부족)",
        reinforcement: "기둥신설",
        architect: "케이디",
        constructor: "태평양개발",
        supervisor: "무동일, 에스아이, 바탕",
    },

    {
        lat: 37.2045371,
        lng: 126.8416539,
        apartment: "화성남양뉴타운 B10",
        etc: "명시 없음",
        missingRebars: 3, // 누락된 철근 개수
        totalRebars: 386, // 전체 철근 개수
        cause: "명시 없음",
        reinforcement: "기둥신설",
        architect: "명시 없음",
        constructor: "명시 없음",
        supervisor: "명시 없음",
    },

    {
        lat: 37.0011137,
        lng: 127.1036392,
        apartment: "평택소사벌 A7",
        etc: "명시 없음",
        missingRebars: 3, // 누락된 철근 개수
        totalRebars: 156, // 전체 철근 개수
        cause: "명시 없음",
        reinforcement: "슬래브보완",
        architect: "명시 없음",
        constructor: "명시 없음",
        supervisor: "명시 없음",
    },

    {
        lat: 37.7295762,
        lng: 126.72645,
        apartment: "파주운정3 A37",
        etc: "명시 없음",
        missingRebars: 4, // 누락된 철근 개수
        totalRebars: 654, // 전체 철근 개수
        cause: "명시 없음",
        reinforcement: "슬래브보완",
        architect: "명시 없음",
        constructor: "명시 없음",
        supervisor: "명시 없음",
    },

    {
        lat: 37.6509059,
        lng: 126.7497881,
        apartment: "고양장항 A4",
        etc: "명시 없음",
        missingRebars: 4, // 누락된 철근 개수
        totalRebars: 1507, // 전체 철근 개수
        cause: "명시 없음",
        reinforcement: "상부보완",
        architect: "명시 없음",
        constructor: "명시 없음",
        supervisor: "명시 없음",
    },

    {
        lat: 35.9355602,
        lng: 126.9483373,
        apartment: "익산평화",
        etc: "명시 없음",
        missingRebars: 4, // 누락된 철근 개수
        totalRebars: 1326, // 전체 철근 개수
        cause: "명시 없음",
        reinforcement: "상부보완",
        architect: "명시 없음",
        constructor: "명시 없음",
        supervisor: "명시 없음",
    },
    //...
];
