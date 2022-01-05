const express = require("express");
const cors = require("cors");
const config = require("config");
const userRouter = require("./routes/user.routes");

const PORT = process.env.PORT || config.get("serverPort");

const app = express();

const start = () => {
  try {
    app.listen(PORT, () => console.log(`server start on post ${PORT}`));
  } catch {}
};
app.use(express.json());
app.use(cors());
app.use("/api", userRouter);

app.get("/api", (req, res) => {
  res.send("Hello from backend!!!");
});

start();
