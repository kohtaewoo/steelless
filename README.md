# 🏢 순살 아파트 - 건설 정보 시각화 웹 서비스
## 📌 프로젝트 개요

**순살 아파트**는 전국 아파트 건설 현장의 철근 누락, 설계사, 시공사 등의 정보를 시각화하고  
관련 뉴스를 날짜별로 제공하며, 공지사항까지 한눈에 확인할 수 있도록 구성된 웹 서비스입니다.

> 🏗️ *2023년 검단신도시 붕괴 사고를 계기로 드러난 전국 LH 아파트 철근 누락 사건을 바탕으로 기획된 프로젝트입니다.*


## 🗂️ 폴더 구조

```
project-root/
├── html/
│   ├── index.html         # 메인 페이지 (iframe 구조)
│   ├── map.html           # 지도 페이지
│   ├── news.html          # 관련 기사 페이지
│   └── notice.html        # 공지사항 페이지
├── js/
│   └── data/
│       ├── buildingData.js  # 건물 및 철근 데이터
│       ├── newsData.js      # 날짜별 뉴스 기사 데이터
│       └── noticeData.js    # 공지사항 데이터
├── server/
│   └── server.js          # Node.js Express 서버 코드
├── .env                   # 환경 변수 (Kakao API Key 등)
└── README.md              # 설명 파일
```

## 🚀 실행 방법

### 1. 저장소 클론 및 이동

```bash
git clone https://github.com/your-repo/sunsal-apartment.git
cd sunsal-apartment/server
```

### 2. 의존성 설치

```bash
npm install
```

### 3. 환경 변수 설정

`.env` 파일 생성 후 다음 내용 추가:

```
KAKAO_API_KEY=여기에_카카오_앱키_입력
```

### 4. 서버 실행

```bash
node server.js
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 접속

---

## 🗺️ 주요 기능

### ✅ 지도 페이지 (`map.html`)
- 아파트 위치 마커 표시
- 누락 철근 수, 설계사, 시공사 등 상세 정보 제공
- `buildingData.js` 사용
- 카카오 지도 SDK 활용

### ✅ 뉴스 페이지 (`news.html`)
- 날짜별 기사 버튼 클릭 시 기사 목록 표시
- `newsData.js` 기반 기사 로딩

### ✅ 공지사항 페이지 (`notice.html`)
- 공지 제목/내용 렌더링
- `noticeData.js` 사용

---

## 🔌 서버 API 명세

| 경로                     | 설명                                      |
|--------------------------|-------------------------------------------|
| `/`                      | 메인 페이지(index.html) 제공             |
| `/map.html`              | 지도 페이지                               |
| `/news.html`             | 뉴스 페이지                               |
| `/notice.html`           | 공지사항 페이지                           |
| `/buildingData.js`       | 철근 관련 데이터 JS 파일 제공             |
| `/newsData.js`           | 뉴스 데이터 JS 파일 제공                  |
| `/noticeData.js`         | 공지 데이터 JS 파일 제공                  |
| `/getKakaoMapData`       | 위경도 → 주소 변환 (카카오 API 호출)     |
| `/loadKakaoScript`       | 카카오 지도 SDK 삽입용 스크립트 제공     |

---

## 📦 사용 기술 스택

- **프론트엔드**: HTML, CSS, JavaScript
- **지도 시각화**: Kakao Maps JavaScript SDK
- **백엔드**: Node.js, Express.js
- **API 호출**: axios
- **배포 및 실행**: 로컬 서버 또는 클라우드 인스턴스 (ex. AWS EC2)

---

## 🔐 참고 사항

- `.env` 파일에 반드시 **KAKAO_API_KEY** 값을 입력해야 지도 및 주소 변환 기능이 정상 작동합니다.
- 카카오 API 키는 [카카오 개발자센터](https://developers.kakao.com/)에서 발급 가능

---
