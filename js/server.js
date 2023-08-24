const axios = require("axios");
const express = require("express");
const app = express();
const path = require("path");

// CORS 헤더 설정
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

// 정적 파일 경로 설정
app.use(express.static(path.join(__dirname, "..")));

// 라우팅 설정
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "html", "index.html"));
});

app.get("/map.html", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "html", "map.html"));
});

app.get("/buildingData.js", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "js", "data", "buildingData.js"));
});

app.get("/news.html", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "html", "news.html"));
});

app.get("/newsData.js", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "js", "data", "newsData.js"));
});

app.get("/notice.html", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "html", "notice.html"));
});

app.get("/noticeData.js", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "js", "data", "noticeData.js"));
});

// 서버 포트 설정
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// 카카오 맵 정보 가져오기
app.get("/getKakaoMapData", async (req, res) => {
  const { lat, lng } = req.query;

  try {
    const response = await axios.get(
      `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${lng}&y=${lat}`,
      {
        headers: {
          Authorization: `KakaoAK ${process.env.KAKAO_API_KEY}`,
        },
      },
    );

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "서버 오류 발생" });
  }
});

// 카카오 지도 스크립트 불러오기
app.get("/loadKakaoScript", (req, res) => {
  res.set("Content-Type", "text/javascript");
  res.send(
    `document.write('<script src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.KAKAO_API_KEY}&libraries=services,clusterer"><\\/script>');`,
  );
});

