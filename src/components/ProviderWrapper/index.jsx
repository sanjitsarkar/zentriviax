import React from "react";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";
import {
  AuthProvider,
  CategoryProvider,
  QuestionProvider,
  QuizProvider,
  ToastProvider,
} from "../../context";

const ProviderWrapper = ({ children }) => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ToastProvider>
        <AuthProvider>
          <CategoryProvider>
            <QuizProvider>
              <QuestionProvider>{children}</QuestionProvider>
            </QuizProvider>
          </CategoryProvider>
        </AuthProvider>
      </ToastProvider>
    </BrowserRouter>
  );
};

export default ProviderWrapper;
