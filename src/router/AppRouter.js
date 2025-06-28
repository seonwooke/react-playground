import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import UsersPage from '../pages/UsersPage';
import UserDetailPage from '../pages/UserDetailPage';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/users" element={<UsersPage/>} />
      <Route path="/users/:id" element={<UserDetailPage/>} />
    </Routes>
  );
}