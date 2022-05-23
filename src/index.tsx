import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { registerLicense } from '@syncfusion/ej2-base';
import Welcome from './components/Welcome';
import {BrowserRouter,
  Route,
  Router,
  Routes,
  } from "react-router-dom";
import LoginForm from './components/Login';
import RegistrationForm from './components/Registration';
import {  } from 'react-router-dom';
import Dashboard from './components/Dashboard';

registerLicense('hhgfd')

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
   <BrowserRouter>
   <Routes>
     <Route path='/' element={<Welcome/>} />
     <Route path='/Login' element={<LoginForm/>} />
     <Route path='/Registration' element={<RegistrationForm/>} />
     <Route path='/dashboard' element = {<Dashboard/>} />
     <Route path='/board' element = {<App/>} />

   </Routes>
   </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
