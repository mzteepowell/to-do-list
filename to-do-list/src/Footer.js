import React from 'react';

export default function Footer() {
    return (
    <div>
    <footer className="footer"> 
    <p>Follow Me:</p>
    <div className="footer-items">
        <section>
        <a
        className="App-link"
        href="https://github.com/mzteepowell/to-do-list"
        target="_blank"
        rel="noopener noreferrer"
        >
        <i className="fab fa-github"></i>
        </a>
        </section>
        <section>
        <a
        className="App-link"
        href="https://twitter.com/AgbokhanaTarah"
        target="_blank"
        rel="noopener noreferrer"
        >
        <i className="fab fa-twitter"></i>
        </a>
        </section>
        <section>
        <a
        className="App-link"
        href="https://www.linkedin.com/in/tarah-agbokhana/"
        target="_blank"
        rel="noopener noreferrer"
        >
        <i className="fab fa-linkedin-in"></i>
        </a>
        </section>
    </div>
    <p className="branded">powered by Tarah Agbokhana</p>
    </footer>
    </div>
    );
}


