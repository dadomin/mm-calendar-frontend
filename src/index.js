import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Root from './client/Root';
import './css/index.css'

const rootNode = document.getElementById('root');
ReactDOM.createRoot(rootNode).render(
    <Root />
);

reportWebVitals();
