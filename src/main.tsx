import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { UserGamificationProvider } from './components/User/context/UserGamificationContext'; // adjust path if needed

createRoot(document.getElementById('root')!).render(
  <UserGamificationProvider>
    <App />
  </UserGamificationProvider>
);
