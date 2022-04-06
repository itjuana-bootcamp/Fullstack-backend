const validatePost = (req, res, next) => {
  const post = req.body;

  const title = post.title?.trim?.() ?? "";
  if (title === "") {
    return res.status(404).json({ message: "Title is required" });
  }

  next();
};

module.exports = {
  validatePost,
};
