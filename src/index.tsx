import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CssBaseline from '@mui/material/CssBaseline';
import ResponsiveAppBar from './components/ResponsiveAppBar'
import Container from '@mui/material/Container';

import Home from './pages/Home'
import Projects from './pages/Projects'
import Project from './pages/Project'
import Pricing from './pages/Pricing'
import Blog from './pages/Blog'

const elem = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(elem);

root.render(
  <React.StrictMode>
    <React.Fragment>

      <Container maxWidth="xl">
        <BrowserRouter>
          
          <ResponsiveAppBar />
          <CssBaseline />          

          <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/Projects" element={<Projects />}></Route>
            <Route path="/Project/:id" element={<Project />}></Route>
            <Route path="/Pricing" element={<Pricing />}></Route>
            <Route path="/Blog" element={<Blog />}></Route>
          </Routes>

          <App />
        </BrowserRouter>

      </Container>

    </React.Fragment>

  </React.StrictMode>
);
