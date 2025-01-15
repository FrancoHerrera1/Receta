import "./footer.css";

const Copyright = () => {
  const currentYear = new Date().getFullYear(); 
  return (
    <footer className="FooterCopyright">
      <p>© {currentYear} Al Horno.com. Todos los derechos reservados.</p>
    </footer>
  );
};

const Footer = () => {
  return (
    <div className="FooterF">
      <div className="NavBar">
      </div>
      <Copyright />
    </div>
  );
};

export default Footer;
