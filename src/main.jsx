import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  // eslint-disable-next-line no-undef
  <BrowserRouter basename={process.env.NODE_ENV === 'production' ? '/i-loom-elegant-clothes-website/' : '/'}>
    <App />
  </BrowserRouter>,
)
