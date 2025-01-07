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
        {/* <ul className="Lista">
          <li><a href="#">Home</a></li>
          <li><a href="#">Ingredientes</a></li>
          <li><a href="#">Mis Recetas</a></li>
        </ul> */}
      </div>
      <Copyright />
    </div>
  );
};

export default Footer;
