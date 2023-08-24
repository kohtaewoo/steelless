const newsData = {
    '2023-07-30': [
    { title: '철근 빠진 \'순살 아파트\' 더 있었다... LH 단지서 무더기 누락', link: 'https://www.yna.co.kr/view/AKR20230730032351003' }, 
    { title: '철근 빠진 아파트 LH 15곳 무더기 확인', link: 'https://imnews.imbc.com/replay/2023/nwdesk/article/6509191_36199.html' },
    { title: '\'철근 누락\' LH 15개 단지서 확인... 5곳은 이미 입주했다', link: 'https://news.sbs.co.kr/news/endPage.do?news_id=N1007289004' },
    { title: 'LH 아파트 긴급 점검…“15개 단지서 철근 누락”', link: 'https://news.kbs.co.kr/news/view.do?ncd=7736165' }
],
'2023-07-31': [
{ title: '154개 기둥 전체 철근 누락도 나왔다... "부실 모두 조사', link: 'https://news.sbs.co.kr/news/endPage.do?news_id=N1007290387' }, 
{ title: '\'순살 아파트\' 15곳 공개... 민간 아파트도 전수조사', link: 'https://imnews.imbc.com/replay/2023/nwdesk/article/6509577_36199.html' },
{ title: '\"도색하는 줄, 속았다\" 입주민들 분노... 보강 공사 어떻게', link: 'https://news.sbs.co.kr/news/endPage.do?news_id=N1007290388' },
{ title: '\'무량판\'구조가 뭐길래...\'전관 실태\' 직접 밝힌 LH 사장', link: 'https://news.sbs.co.kr/news/endPage.do?news_id=N1007290389' },
{ title: '철근 빠진 ‘무량판’ 15개 단지 공개…8개 단지는 ‘전관 업체’가 감리', link: 'https://news.kbs.co.kr/news/view.do?ncd=7737072' },
{ title: '“전관 업체가 LH 용역계약 사실상 독점”', link: 'https://news.kbs.co.kr/news/view.do?ncd=7737074' },
{ title: '무량판에 보강철근은 ‘필수’…감리 무력화 이유는?', link: 'https://news.kbs.co.kr/news/view.do?ncd=7737075' },
],
'2023-08-01': [
{ title: '철근 154개 전부 누락…놀란 주민 "찰흙 아파트 안전하겠냐"', link: 'https://news.mt.co.kr/mtview.php?no=2023080114012754574' }, 
{ title: '\'철근 누락\' 주민들 패닉…\"지진나면 어쩌나, 당장 이사도 어려워\"', link: 'https://news.mt.co.kr/mtview.php?no=2023080115015710982' },
{ title: '철근 누락 아파트 가보니 \"무서워 못 살겠다…누가 이 집 사겠나\"', link: 'https://newsis.com/view/?id=NISX20230801_0002398490' },
{ title: '\"설계대로 시공했는데\" 억울한 건설사, 그래도 말 아끼는 이유', link: 'https://news.mt.co.kr/mtview.php?no=2023080110330350160' },
{ title: ' 철근 빠진 아파트 14곳 배후에 \'LH 전관\' 있었다', link: 'https://news.jtbc.co.kr/article/article.aspx?news_id=NB12137693' },
{ title: '설계도 감리도 \'LH 고위직 출신\' 손에…양주는 100% 전관', link: 'https://news.jtbc.co.kr/article/article.aspx?news_id=NB12137696' },
{ title: '철판 덧대 보강한다지만…전문가 \"임시 기둥부터 잘못돼\"', link: 'https://news.jtbc.co.kr/article/article.aspx?news_id=NB12137692' },
{ title: '부실 아파트, 절반 이상 입주‥보강한다지만 주민들 불안 여전', link: 'https://imnews.imbc.com/replay/2023/nwdesk/article/6509929_36199.html' }, 
{ title: '무량판 구조 민간아파트 293곳‥\'최소 석 달 걸릴 듯\'', link: 'https://imnews.imbc.com/replay/2023/nwdesk/article/6509931_36199.html' },
{ title: '철근 누락 아파트 가보니 \"무서워 못 살겠다…누가 이 집 사겠나\"', link: 'https://newsis.com/view/?id=NISX20230801_0002398490' },
{ title: '무량판 구조 뭐기에‥\"장점 많지만 충분한 보강이 필수\"', link: 'https://imnews.imbc.com/replay/2023/nwdesk/article/6509932_36199.html' },
{ title: ' 철근 빠진 아파트 14곳 배후에 \'LH 전관\' 있었다', link: 'https://news.jtbc.co.kr/article/article.aspx?news_id=NB12137693' },
{ title: '윤 대통령 "건설업 이권 카르텔 깨부수어야" LH 전관 문제도 촉각', link: 'https://imnews.imbc.com/replay/2023/nwdesk/article/6509933_36199.html' },
{ title: '부실 투성이 LH 무량판 주차장…\“셀프 점검 못믿겠다\”', link: 'https://news.kbs.co.kr/news/view.do?ncd=7738102' },
{ title: '철근 누락 감리업체, 6번이나 부실 감리 적발', link: 'https://news.kbs.co.kr/news/view.do?ncd=7738103' },
],

'2023-08-02': [
{ title: '영업정지 1년 받고도 \'LH 사업\' 수주…어떻게 가능했나', link: 'https://news.jtbc.co.kr/article/article.aspx?news_id=NB12137870' }, 
{ title: '\'철근 빠진\' LH 아파트 입주예정자에 계약해지권 부여', link: 'https://news.jtbc.co.kr/article/article.aspx?news_id=NB12137890' },
{ title: '철근 누락 아파트 가보니 \"무서워 못 살겠다…누가 이 집 사겠나\"', link: 'https://newsis.com/view/?id=NISX20230801_0002398490' },
{ title: '\"철근 빼먹어도 모른 척\"‥건설업계 "터질 게 터졌다"', link: 'https://imnews.imbc.com/replay/2023/nwdesk/article/6510311_36199.html' },
{ title: '부실 이면엔 \'전관\'‥LH \"제안서에 전관 명단 적어내라\"', link: 'https://imnews.imbc.com/replay/2023/nwdesk/article/6510312_36199.html' },
{ title: 'LH 파주 예비입주자 계약금 환불‥기존 입주자들은 \'전면 재시공\' 요구도', link: 'https://imnews.imbc.com/replay/2023/nwdesk/article/6510313_36199.html' },
{ title: '철근 누락 검단 아파트, 무자격 업체가 도면 작성', link: 'https://news.sbs.co.kr/news/endPage.do?news_id=N1007293406' },
{ title: 'LH \"건설 카르텔 철폐 · 수사 의뢰\"…이번에는 달라질까?', link: 'https://news.sbs.co.kr/news/endPage.do?news_id=N1007293408' }, 
{ title: '무자격 업체 도면 작성, 국토부 조사에서 왜 안 드러났나', link: 'https://news.sbs.co.kr/news/endPage.do?news_id=N1007293409' },
{ title: 'LH 자체 감리도 부실, 설계는 무자격 업체?…드러나는 총체적 부실', link: 'https://news.kbs.co.kr/news/view.do?ncd=7739132' },
{ title: 'LH에 ‘반카르텔 본부’ 설치, 전관 유착 끊을 수 있나?', link: 'https://news.kbs.co.kr/news/view.do?ncd=7739133' },
{ title: '당정 “부실시공 아파트 입주자 손배·예정자 계약해지권”', link: 'https://news.kbs.co.kr/news/view.do?ncd=7739134' },
],

'2023-08-03': [
{ title: '\'무량판 검사\' 입주민한테만 통보… 반쪽 조치에 불안 여전', link: 'https://v.daum.net/v/20230803175422327' }, 
{ title: '\'무량판\' 민간 아파트 59곳, 사람 살고 있어... \"명단은 비공개\"', link: 'https://v.daum.net/v/20230803190045442' },
{ title: '무량판 구조 확인된 강남 아파트도 술렁…293개 단지 조사', link: 'https://news.jtbc.co.kr/article/article.aspx?news_id=NB12138072' },
{ title: '단서 내건 보상책?…\"철근 적게 빠지면 그냥 살라는 거냐\" 분통', link: 'https://news.jtbc.co.kr/article/article.aspx?news_id=NB12138065' },
{ title: '민간아파트 293곳 전수조사‥15만 세대는 이미 \'거주 중\'', link: 'https://imnews.imbc.com/replay/2023/nwdesk/article/6510716_36199.html' },

{ title: '\"철근 부실? 민간이 더 심할 것\"‥불법하도급에 부실한 감리까지', link: 'https://imnews.imbc.com/replay/2023/nwdesk/article/6510717_36199.html' },
{ title: '\'주거동 무량판\' 105곳 조사…주민들 \"불안해요\"', link: 'https://news.sbs.co.kr/news/endPage.do?news_id=N1007294927' },
{ title: '무량판 구조 민간 아파트 293곳 다음 주부터 \‘긴급 안전점검\’', link: 'https://news.kbs.co.kr/news/view.do?ncd=7740200' }, 
{ title: '\“우리 아파트는 괜찮나?\”…입주민 불안', link: 'https://news.kbs.co.kr/news/view.do?ncd=7740201' },
],

'2023-08-04': [
{ title: 'LH 전관 업체 내부고발 "발주계획서 미리 받아 사전 담합"', link: 'https://news.jtbc.co.kr/article/article.aspx?news_id=NB12138225' }, 
{ title: '\"무량판은 죄가 없다\"…부실 철근 \'진짜 이유\'', link: 'https://news.jtbc.co.kr/article/article.aspx?news_id=NB12138224' },
],

'2023-08-06': [
{ title: '\'철근 누락\' 계약해지 위약금 면제 검토…입주자 불안 여전', link: 'https://news.jtbc.co.kr/article/article.aspx?news_id=NB12138386' }, 
{ title: '\"\'철근 누락\' 아파트 계약, 원하면 해지·위약금 면제\"', link: 'https://news.jtbc.co.kr/article/article.aspx?news_id=NB12138224' },
],

'2023-08-07': [
{ title: '무량판은 억울하다…전문가들 \"후진적 관행이 문제\"', link: 'https://news.sbs.co.kr/news/endPage.do?news_id=N1007299081' }, 
{ title: '혜택 주며 권하더니 논란 되자 \"전면 점검\"', link: 'https://news.sbs.co.kr/news/endPage.do?news_id=N1007299082' },
{ title: '\‘난항\’ 예고된 민간 아파트 \‘무량판\’ 조사', link: 'https://news.kbs.co.kr/news/view.do?ncd=7742821' },
],

'2023-08-09': [
{ title: '무량판 LH 아파트 10곳 추가 확인…안전점검 대상부터 누락', link: 'https://news.kbs.co.kr/news/view.do?ncd=7744983' }, 
],

'2023-08-11': [
{ title: '\'철근 빠진\' 아파트 5곳 더 있었는데…LH \"경미해서 발표 제외\"', link: 'https://news.jtbc.co.kr/article/article.aspx?news_id=NB12139392' }, 
{ title: '옷 벗는 LH 임원들, 혁신 외쳤지만…2년 전 \'땅 투기\' 판박이', link: 'https://news.jtbc.co.kr/article/article.aspx?news_id=NB12139391' }, 
{ title: '\"철근 누락 또 숨겼다\"‥LH 임원 전원 사직서 제출', link: 'https://imnews.imbc.com/replay/2023/nwdesk/article/6513542_36199.html' }, 
{ title: '\'철근 누락\' 5곳 더 확인…LH, \'임원 사표\'로 해결?', link: 'https://news.sbs.co.kr/news/endPage.do?news_id=N1007305441' }, 
{ title: 'LH \‘철근 누락\’ 5곳 추가…\“임원 7명 중 4명 면직\”', link: 'https://news.kbs.co.kr/news/view.do?ncd=7746662' }, 
{ title: '숨기고 속이고 보고도 누락…잇따른 LH 혁신안 퇴색', link: 'https://news.kbs.co.kr/news/view.do?ncd=7746667' }, 
],

'2023-08-14': [
{ title: '카르텔 깨부순다더니…LH 전관이 감리·설계 또 \'싹쓸이\'', link: 'https://news.jtbc.co.kr/article/article.aspx?news_id=NB12139704' }, 
{ title: '\'철근 빠진 아파트\' 감리·설계한 전관업체들, 또 일감 따냈다', link: 'https://news.jtbc.co.kr/article/article.aspx?news_id=NB12139703' }, 
],

'2023-08-15': [
{ title: '원희룡, LH 전관 싹쓸이 용역에 "전면 중단하라" 지시', link: 'https://news.jtbc.co.kr/article/article.aspx?news_id=NB12139838' }, 
{ title: 'LH 임원들 \'꼼수 사퇴\' 논란…임기 끝났거나 만료 임박', link: 'https://news.jtbc.co.kr/article/article.aspx?news_id=NB12139837' }, 
{ title: '이미 임기 끝났는데 사직서 수리?…\'LH 꼼수 사퇴\' 비난', link: 'https://news.sbs.co.kr/news/endPage.do?news_id=N1007308717' }, 
],

'2023-08-16': [
{ title: '\"이래서 철근누락 못찾았나\"…LH 공사현장 81% 감리인원 미달', link: 'https://v.daum.net/v/20230816163252664' }, 
{ title: '\“이러니 순살 못잡았지\” LH 직접 감리한 현장 81%가 \‘인원부족\’ ', link: 'https://v.daum.net/v/20230816233000637' }, 
{ title: '\"전관특혜 근절\" 헛구호…땅투기 사태 뒤 더 커진 장악력', link: 'https://news.jtbc.co.kr/article/article.aspx?news_id=NB12140010' }, 
{ title: '\'0.5%\' 전관업체가 LH 사업 독식…방지책 검토하지만 실효성 의문', link: 'https://news.jtbc.co.kr/article/article.aspx?news_id=NB12140009' }, 
{ title: '\'철근 누락\' LH 본사 압수수색‥\'해체론\' 대두된 LH', link: 'https://imnews.imbc.com/replay/2023/nwdesk/article/6515086_36199.html' }, 
{ title: '압수수색 당한 LH…공공주택 공급 차질 빚나?', link: 'https://news.kbs.co.kr/news/view.do?ncd=7749949' }, 
],

'2023-08-17': [
{ title: '\'철근 누락\' 단지도 무자격 수두룩…LH는 몰랐다', link: 'https://news.sbs.co.kr/news/endPage.do?news_id=N1007311712' }, 
],
    // ...
};

function getNewsLinksByDate(date) {
    // 날짜별 기사 정보를 저장합니다. 'title'에 기사 제목, 'link'에 기사 URL을 표시하세요.
    return newsData[date] || [];
}