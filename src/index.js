import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import { FavoriteContextProvider } from './store/favorite-context';

ReactDOM.render(
 <FavoriteContextProvider>   
<BrowserRouter basename={process.env.PUBLIC_URL}>
<App />
</BrowserRouter>
</FavoriteContextProvider>
, document.getElementById('root')
);
