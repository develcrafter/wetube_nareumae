import express from "express";
import routes from "../routes";

const userRouter = express.Router();

/*
users: USERS,
  userDetail: USER_DETAIL,
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  */

userRouter.get(routes.users, (res, req) => req.send("user"));
userRouter.get(routes.userDetail, (res, req) => req.send("user Detail"));
userRouter.get(routes.editProfile, (res, req) => req.send("edit Profile"));
userRouter.get(routes.changePassword, (res, req) =>
  req.send("change Password")
);

export default userRouter;
