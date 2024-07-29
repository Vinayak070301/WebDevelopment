import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CatFacts from './components/CatFacts/CatFacts';
import Cleanup from './components/Cleanup/Cleanup';
import Search from './components/Search/Search';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <CatFacts /> */}
    {/* <Cleanup /> */}
    <Search />
  </React.StrictMode>
);

