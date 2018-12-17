import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import express from "express";
import helmet from "helmet";
import { localsMiddleware } from "./middlewares";

import morgan from "morgan";
import routes from "./routes";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";

const app = express();

// function handleListening() {
//   console.log(`Listening on http://localhost:${PORT}`);
// }

// const handleListening = () =>
//   console.log(`Lisgening on: http://localhost:${PORT}`); => move to init.js

// function handleHome(req, res) {
//   console.log("homepage");
//   res.send("Hello, this is Home!");
// }

//setting

app.set("view engine", "pug");
//middleware

app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(localsMiddleware);
//router?

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

// const handleHome = (req, res) => {
//   console.log("/root");
//   res.send("Hello, this is Home!\n Thank you to come");
// };

// app.get("/", handleHome);

// const handleProfile = (req, res) => res.send("This is profile page, maybe!");

// app.get("/profile", handleProfile);

// app.use("/user", userRouter);

// app.listen(PORT, handleListening); => move to init.js

export default app;
