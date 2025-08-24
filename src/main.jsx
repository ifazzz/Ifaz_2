import React from 'react';
import ReactDom from 'react-dom/client';
import { App } from './App.jsx';
// import Profile from './components/Profile.jsx';
// import { Practice } from './Practiec.jsx';
import "./index.css"

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  {/* <Practice />> */}
  {/* Profile /> */}
  </React.StrictMode>
);
