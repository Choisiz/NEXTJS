export default function handler(req, res) {
  if (req.query.token !== "cky" || !req.query.post) {
    return res.status(401).json({ message: "not token" });
  }

  res.setPreviewData({});

  res.redirect(`/posts/${req.query.post}`);
}
