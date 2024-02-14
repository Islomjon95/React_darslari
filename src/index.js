import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App"




const root = ReactDOM.createRoot(document.getElementById('root'));
const data = [
  {ism: "Alisher", yoshi: 19},
  {ism: "Kama" , yoshi: 12},
  {ism: "John" , yoshi: 20}
]
root.render(
  <Fragment>
    <App>
      <h1>SAlom Children</h1>
    </App>
  </Fragment>
 
)