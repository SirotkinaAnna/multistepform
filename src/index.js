import './index.css';
import React from "react";
import ReactDOM from "react-dom/client";
import App from './App';
import { NavigationProvider } from './components/context/Navigation';

const el = document.querySelector('#root');
const root = ReactDOM.createRoot(el);
root.render(
  <NavigationProvider><App /></NavigationProvider>
)