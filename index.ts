import express from "express";
import { Express, Request, Response, Router } from "express";
import axios from "axios";
const app: Express = express();
const router: Router = express.Router();

// 设置允许跨域
app.use("*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use("/api", router);
router.post("/list", async (req: Request, res: Response) => {
  const result = await axios.post(
    "https://api.inews.qq.com/newsqa/v1/query/inner/publish/modules/list?modules=localCityNCOVDataList,diseaseh5Shelf"
  );
  res.json({
    ...result.data.data,
  });
});

app.listen(8088, () => {
  console.log("服务器启动成功，正在监听: http://localhost:8088");
});
