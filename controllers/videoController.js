export const home = (req, res) => res.render("home"); 
export const search = (req, res) => res.render("search"); 

/* 
const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEO_DETAIL = "/:id";
const EDIT_VIDEO = "/:id/edit"; // why this route is different with user's edit??
const DELETE_VIDEO = "/:id/delete";
*/

export const videos = (res, req) => req.render("videos");
export const upload = (res, req) => req.render("upload");
export const videoDetail = (res, req) => req.render("videoDetail");
export const editVideo = (res, req) => req.render("editVideo");
export const deleteVideo = (res, req) => req.render("deleteVideo");

