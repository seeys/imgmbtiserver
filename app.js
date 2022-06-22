const express = require("express");
const app = express();
const port = 4000;
require("dotenv").config();
const cors = require("cors");
const { default: axios } = require("axios");

//body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//cors 허용
let corsOptions = {
  origin: "https://openapi.naver.com",
  credentials: true,
};

app.use(cors(corsOptions));

// 네이버 API 정보 (환경변수 사용)
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

app.post("/api/img", (req, res) => {
  const imgData = req.body;
  console.log(req);
  res.send("hi");
  /*const api_url = "https://openapi.naver.com/v1/vision/face";
  const _form = { image: "image" };
  axios
    .post({
      url: api_url,
      formData: _form,
      headers: {
        ..._form.getHeaders(),
        "X-Naver-Client-Id": CLIENT_ID,
        "X-Naver-Client-Secret": CLIENT_SECRET,
      },
    })
    .then((res) => {
      const { data } = res;
      res.send(data.items);
      console.log(res);
    })
    .catch((err) => console.log(err));*/
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
