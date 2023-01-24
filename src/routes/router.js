const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");
const bookController = require("../controllers/bookController");
const {authentication,authorization} = require("../middleware/middleware");

router.post("/register", userController.createUser);
router.post("/books", authentication, bookController.createBook);
router.post("/login", userController.loginUser);
router.get("/books", authentication , bookController.getBooks);
router.delete("/books/:bookId", bookController.deleteBookPathParam)



router.all("/*", function (req, res) {
  return res
    .status(400)
    .send({ status: false, message: "invlalid http request" });
});

module.exports = router;
