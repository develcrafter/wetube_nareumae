export const home = (req, res) => res.render("home", { pageTitle: "Home" });
export const search = (req, res) => {
  const {
    query: { term: searchingBy }
  } = req;
  res.render("search", { pageTitle: "Search", searchingBy });
};

/* 
const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEO_DETAIL = "/:id";
const EDIT_VIDEO = "/:id/edit"; // why this route is different with user's edit??
const DELETE_VIDEO = "/:id/delete";
*/

export const videos = (res, req) =>
  req.render("videos", { pageTitle: "Videos" });
export const upload = (res, req) =>
  req.render("upload", { pageTitle: "Upload" });
export const videoDetail = (res, req) =>
  req.render("videoDetail", { pageTitle: "Video Detail" });
export const editVideo = (res, req) =>
  req.render("editVideo", { pageTitle: "Edit Video" });
export const deleteVideo = (res, req) =>
  req.render("deleteVideo", { pageTitle: "Delete Video" });
