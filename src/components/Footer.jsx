import { useAuth } from '../context/AuthContext';
import { FaGithub, FaLinkedin, FaGlobe } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const { user } = useAuth();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <p>© 2025 Osman Demir. Tüm hakları saklıdır.</p>
        </div>
        <div className="footer-links">
          <a href="https://osmandemir2533.github.io/" target="_blank" rel="noopener noreferrer">
            <FaGlobe /> Web Sitesi
          </a>
          <a href="https://www.linkedin.com/in/osmandemir2533/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
          <a href="https://github.com/osmandemir2533" target="_blank" rel="noopener noreferrer">
            <FaGithub /> GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 