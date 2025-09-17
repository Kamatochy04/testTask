import { FormPage, WelcomePage } from "@/pages";
import { Route, Routes } from "react-router-dom";
import { store } from "./store";
import { Provider } from "react-redux";

import "./styles/global.scss";

export const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/form" element={<FormPage />} />
      </Routes>
    </Provider>
  );
};
