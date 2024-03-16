import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/root.jsx'
import Recipe from './routes/recipe.jsx'
import './assets/scss/index.scss'
import { PageRouter } from './components/PageRouter.jsx';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     children: [
//       {
//         path: "recipe",
//         element: <Recipe />,
//       },
//     ],
//   },
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <BrowserRouter>
      <PageRouter/>
    </BrowserRouter>
  // </React.StrictMode>,
)
