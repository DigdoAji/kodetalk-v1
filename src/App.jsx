import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import Layout from './layouts/Layout';
import RequireAuth from './layouts/RequireAuth';
import NotFound from './components/common/NotFound';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import AddPage from './pages/AddPage';
import LeaderboardsPage from './pages/LeaderboardsPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<NotFound />}>
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route element={<RequireAuth />}>
        <Route index element={<HomePage />} />
        <Route path="thread/:id" element={<DetailPage />} />
        <Route path="add-thread" element={<AddPage />} />
        <Route path="leaderboards" element={<LeaderboardsPage />} />
      </Route>
    </Route>,
  ),
);

const App = () => <RouterProvider router={router} />;

export default App;
