import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  HomePage,
} from '@/pages';
import { routes } from '@/constants';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={routes.home} element={<HomePage/>}/>
      </Routes>
    </Router>
  );
};

export default AppRouter;
