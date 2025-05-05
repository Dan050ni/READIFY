const Home = () => {
    return (
      <div className="home-container">
        <header className="hero">
          <div className="hero-text">
            <h1>Bienvenido a READIFY</h1>
            <p>Descubre y organiza tus libros favoritos para un futuro lleno de conocimiento.</p>
            <a href="/register" className="cta-button">Únete ahora</a>
          </div>
        </header>
  
        <section className="features">
          <h2>Nuestras características</h2>
          <div className="feature-cards">
            <div className="card">
              <img src="/images/bookshelf.svg" alt="Libros" />
              <h3>Organiza tus lecturas</h3>
              <p>Clasifica tus libros y realiza seguimientos de tu progreso de lectura.</p>
            </div>
            <div className="card">
              <img src="/images/community.svg" alt="Comunidad" />
              <h3>Comunidad</h3>
              <p>Únete a nuestra comunidad de lectores para compartir y descubrir nuevos libros.</p>
            </div>
            <div className="card">
              <img src="/images/motivation.svg" alt="Motivación" />
              <h3>Motivación constante</h3>
              <p>Recibe recomendaciones personalizadas y mantén tu motivación alta.</p>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default Home;
  