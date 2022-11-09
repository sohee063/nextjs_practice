export default function handler(req, res) {
  //   res.statusCode = 200;
  //   res.json({ name: null });
  res.setHeader("Set-Cookie", "a_name=Mike;MAx-Age=0;HttpOnly,Secure");
  res.statusCode = 200;
  res.json({ message: "ok" });
}
