const express = require("express");
const app = express();
const port = process.env.PORT || 9900;

const indexRouter = require("./routers/indexRouter");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(indexRouter);

app.get("/", async (req, res) => {
  res.send("Halo Novatech!");
});

app.listen(port, () => {
  console.log(`server running at port ${port}`);
});
