import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {OperationChoosePage} from "./page/OperationChoosePage";
import ErrorRoutingPage from "./page/ErrorRoutingPage";
import WithdrawCreatePage from "./page/withdraw/WithdrawCreatePage";
import DepositCreatePage from "./page/deposit/DepositCreatePage";
import {store} from "./store";
import {Provider} from "react-redux";

export const pages = {
  withdraw: "withdraw",
  deposit: "deposit"
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <OperationChoosePage />,
    errorElement: <ErrorRoutingPage />
  },
  {
    path: pages.withdraw,
    element: <WithdrawCreatePage />
  },
  {
    path: pages.deposit,
    element: <DepositCreatePage />
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
