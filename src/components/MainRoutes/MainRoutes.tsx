import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from '../../pages/HomePage';
import { NotFoundPage } from '../../pages/NotFoundPage';
import { PeoplePage } from '../../pages/PeoplePage';

export const MainRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="home" element={<Navigate to="/" replace />} />
    <Route path="people">
      <Route index element={<PeoplePage />} />
      <Route path=":slug" element={<PeoplePage />} />
    </Route>
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);
