// server.js
const express = require('express');
const bodyParser = require('body-parser');
const nicknameRouter = require('./routes/nickname');

const app = express();
const ip = '3.38.228.18';
const port = 3000;

app.use(bodyParser.json());

// 서버 실행시 루트 경로에서 간단한 메시지를 반환하도록 설정
app.get('/', (req, res) => {
  const ct = new Date().toLocaleString(); // 현재 시간을 로컬 시간대 문자열로 변환
  res.send(`This is \'Vegan Lens\' server.<br>Current time is: ${ct}`);
});


app.use('/api', nicknameRouter); // '/api' 경로에 nicknameRouter를 연결

// 서버 시작
app.listen(port, () => {
  console.log(`서버가 http://${ip}:${port} 에서 실행 중입니다.`);
});
