import React from "react";
import "./PracticaTwo.css";

const PracticaTwo = () => {
  return (
    <div className="contenedor">
      <header>
        <div className="logo">
          <img
            className="center"
            src="https://www.gstatic.com/classroom/empty_states_home.svg"
            alt="imgBegin"
            width={150}
          />
          <a href="#">RobertRodriguez</a>
        </div>

        <nav>
          <a href="#">Inicio</a>
          <a href="#">Blog</a>
          <a href="#">Proyectos</a>
          <a href="#">Contacto</a>
        </nav>
      </header>

      <section className="main">
        <article>
          <h2 className="titulo">Lorem ipsum dolor sit amet.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </article>
        <article>
          <h2 className="titulo">Lorem ipsum dolor sit amet.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </article>

        <article>
          <h2 className="titulo">Lorem ipsum dolor sit amet.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </article>
      </section>

      <aside>
        <div className="widget">
          <div className="imagen"></div>
        </div>

        <div className="widget">
          <div className="imagen"></div>
        </div>
        <div className="widget">
          <div className="imagen"></div>
        </div>
      </aside>

      <footer>
        <section className="links">
          <a href="#">Inicio</a>
          <a href="#">Blog</a>
          <a href="#">Proyectos</a>
          <a href="#">Contacto</a>
        </section>

        <div className="social">
          <a href="#">FB</a>
          <a href="#">TW</a>
        </div>
      </footer>
    </div>
  );
};

export default PracticaTwo;
