import './Footer.scss'
import { Link } from 'react-router-dom';

function Footer() {

  return (
<footer className="footer-container">
    <section className="follow-us"></section>
        <ul>
            <li><Link to="#">Facebook</Link></li>
            <li><Link to="#">Instagram</Link></li>
            <li><Link to="#">Twitter</Link></li>
        </ul>
    <section className="about-us">
        <ul>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            <li>
                <Link to="/faq">FAQ</Link>
            </li>
            <li>
                <Link to="/rgpd">RGPD</Link>
            </li>
        </ul>
    </section>
    <section className="categories">
        <ul>
            <li><Link to="/categorie-1">Catégorie 1</Link></li>
            <li><Link to="/categorie-2">Catégorie 2</Link></li>
            <li><Link to="/categorie-3">Catégorie 3</Link></li>
        </ul>
    </section>
</footer>
  );
}

export default Footer;
