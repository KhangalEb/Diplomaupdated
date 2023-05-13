const jwt = require("jsonwebtoken");

const middleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  try {
    if (authHeader) {
      const token = authHeader.split(" ")[1];

      jwt.verify(token, "secret123", (err, user) => {
        if (err) {
          return res.sendStatus(403);
        }
        req.user = user;
        next();
      });
    } else {
      res.sendStatus(401);
    }
  } catch (error) {
    res.send("INVALID REQUEST")
  }
};

module.exports = middleware;
