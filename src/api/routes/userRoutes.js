const express = require("express");
const { auth } = require("../middlewares");

const { fetchAllQuizByCreatorId } = require("../controllers/quizController");
const {
  fetchAllCategoryByCreatorId,
} = require("../controllers/categoryController");
const { searchQuestion } = require("../controllers/questionController");
const {
  addScore,
  updateScore,
  deleteScore,
  fetchAllScore,
  fetchScore,
  getRank,
} = require("../controllers/scoreController");
const res = require("express/lib/response");
const { getUserInfo } = require("../controllers/authController");
const router = express.Router();

router.get("/quizzes", auth, fetchAllQuizByCreatorId);
router.get("/quizzes/:id/", auth, searchQuestion);
router.get("/categories", auth, fetchAllCategoryByCreatorId);
router.get("/:id/categories", auth, fetchAllCategoryByCreatorId);
router.get("/scores", auth, fetchAllScore);
router.get("/scores/:id", auth, fetchScore);
router.post("/scores/", auth, addScore);
router.put("/scores/:id", auth, updateScore);
router.get("/rank", auth, getRank);
router.get("/", auth, getUserInfo);
router.delete("/scores/:id", auth, deleteScore);

module.exports = router;
