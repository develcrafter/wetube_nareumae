export const home = (req, res) => res.send("home"); 
export const search = (req, res) => res.send("search"); 

/* 
const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEO_DETAIL = "/:id";
const EDIT_VIDEO = "/:id/edit"; // why this route is different with user's edit??
const DELETE_VIDEO = "/:id/delete";
*/

export const videos = (res, req) => req.send("videos");
export const upload = (res, req) => req.send("upload");
export const videoDetail = (res, req) => req.send("video detail");
export const editVideo = (res, req) => req.send("edit video");
export const deleteVideo = (res, req) => req.send("delete video");

