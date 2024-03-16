import { Route, Routes } from "react-router-dom";
import Recipe from "../routes/recipe";
import App from "./App";

function PageRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/api/recipes/v2/:id" element={<Recipe />} />
      </Routes>
    </>
  );
}
export {PageRouter}