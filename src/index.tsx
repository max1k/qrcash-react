import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {OperationChoosePage} from "./page/OperationChoosePage";
import WithdrawCreatePage from "./page/withdraw/WithdrawCreatePage";
import DepositCreatePage from "./page/deposit/DepositCreatePage";
import {store} from "./store";
import {Provider} from "react-redux";
import {ErrorPage} from "./page/ErrorPage";
import {AtmCodeInputPage} from "./page/withdraw/AtmCodeInputPage";

export const pages = {
  operationChoose: "/",
  withdraw: "/withdraw",
  atmCode: "/atm-code",
  deposit: "/deposit",
  error: "/error"
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <OperationChoosePage />,
    errorElement: <ErrorPage />
  },
  {
    path: pages.withdraw,
    element: <WithdrawCreatePage />
  },
  {
    path: pages.atmCode,
    element: <AtmCodeInputPage />
  },
  {
    path: pages.deposit,
    element: <DepositCreatePage />
  },
  {
    path: pages.error,
    element: <ErrorPage />
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
