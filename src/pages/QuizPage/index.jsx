import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Layout, Loader, NotAvailable } from "../../components";
import QuizCard from "../../components/QuizCard";
import { useCategory, useQuiz } from "../../hooks";
import "./QuizPage.css";

const QuizPage = () => {
  const { quizzes, fetchQuizzesByCategoryId } = useQuiz();
  const {
    activeCategory,
    setActiveCategory,
    categoryInfo,
    fetchCategoryInfo,
    clearCategoryInfo,
  } = useCategory();
  const location = useLocation();
  let pathName = location.pathname.split("/");
  let categoryId = pathName[pathName.length - 1];
  const isQuestionIsOfcategoryId = (quizzes, categoryId) => {
    return quizzes.data.findIndex((quiz) => quiz.categoryId === categoryId) ===
      -1
      ? false
      : true;
  };
  useEffect(() => {
    clearCategoryInfo();
  }, []);
  useEffect(() => {
    if (
      quizzes.data.length === 0 ||
      !isQuestionIsOfcategoryId(quizzes, categoryId)
    )
      fetchQuizzesByCategoryId(categoryId);
  }, [location]);
  useEffect(() => {
    if (activeCategory === "") fetchCategoryInfo(categoryId);
  }, [activeCategory]);
  useEffect(() => {
    if (!categoryInfo.loading && categoryInfo.data.length !== 0) {
      setActiveCategory(categoryInfo.data.name);
    }
  }, [categoryInfo]);

  return (
    <Layout>
      <main className="col items-center mt-4">
        <h1 className="text-3xl text-bold mb-3  text-center">
          {quizzes.data.length} Quiz{quizzes.data.length > 1 && "zes"} on{" "}
          <span className="text-primary">{activeCategory}</span>
        </h1>
        {quizzes.loading && <Loader />}
        <div className="col gap-2 justify-center mb-4">
          {!quizzes.loading &&
            quizzes.data.length > 0 &&
            quizzes.data.map((quiz) => <QuizCard quiz={quiz} key={quiz._id} />)}
          {!quizzes.loading && quizzes.data.length === 0 && <NotAvailable />}
        </div>
      </main>
    </Layout>
  );
};

export default QuizPage;
