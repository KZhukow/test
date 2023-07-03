import { Route, Routes } from 'react-router-dom';
import MainLayout from './components/MainLayout/MainLayout';
import RegistrationFormContainer from './components/RegistrationFormContainer/RegistrationFormContainer';
import RegisteredPage from './components/RegisteredPage/RegisteredPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<RegistrationFormContainer />} />
        <Route path="signup" element={<RegistrationFormContainer />} />
        <Route path="registered" element={<RegisteredPage />} />
        <Route path="*" element="Page not found" />
      </Route>
    </Routes>
  );
}
