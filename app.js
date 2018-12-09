import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";

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

//middleware

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

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
