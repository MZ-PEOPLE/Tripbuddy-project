const next = require("next");
const http = require("http");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = http.createServer((req, res) => {
    cors({
      origin: process.env.NEXT_PUBLIC_Front_IP,
      optionsSuccessStatus: 200,
    })(req, res, () => {
      return handle(req, res);
    });
  });

  const imagesPath = path.join(__dirname, "public", "img");
  fs.watch(imagesPath, (eventType, filename) => {
    if (eventType === "rename") {
      console.log(` ${filename}파일이 CRUD중 뭔가.. 뭔가됨`);
      // 여기에 추가 작업을 수행합니다.
    }
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log("3000번 포트 준비됨");
  });
});
