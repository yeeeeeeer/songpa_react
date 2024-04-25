import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Songparouter';
// import App from './Ex3';

// react:
//    yarn start(빠르다): yarn add
//    npm start(느리다): npm install


// import: 해당하는 파일에 대한 펑션이나 모듈을 입력받는다
// import App from './Ex1';
// import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    {/* function export Page 처리 */}
    <App />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// reportWebVitals();
