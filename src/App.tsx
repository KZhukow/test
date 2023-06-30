import { Route, Routes } from 'react-router-dom';
import MainLayout from './components/MainLayout/MainLayout';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<RegistrationForm />} />
        <Route path="signup" element={<RegistrationForm />} />
        <Route path="registered" element="{<Registered />}" />
        <Route path="*" element="Page not found" />
      </Route>
    </Routes>
  );
}
