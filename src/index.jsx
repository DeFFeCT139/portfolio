import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './store/store';
import { initializeApp } from "firebase/app";
import { QueryClient, QueryClientProvider } from 'react-query';

const firebaseConfig = {
  apiKey: "AIzaSyCj_AkcqhSKiFF3g4tecOf6S4rVrzclJ0U",
  authDomain: "portfolio-8c405.firebaseapp.com",
  databaseURL: "https://portfolio-8c405-default-rtdb.firebaseio.com",
  projectId: "portfolio-8c405",
  storageBucket: "portfolio-8c405.appspot.com",
  messagingSenderId: "619657492960",
  appId: "1:619657492960:web:7a4161eb21fb0f80b0d385"
};

const app = initializeApp(firebaseConfig);

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <App/>
        </QueryClientProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
