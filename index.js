const express = require("express");
const app = express();

const userRouter = require("./routers/user");

app.listen(3000);

app.use(userRouter);