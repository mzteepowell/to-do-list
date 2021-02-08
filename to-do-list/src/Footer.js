import React from 'react';

export default function Footer() {
    const name = (  <div class="LI-profile-badge"  
    data-version="v1" 
    data-size="medium" 
    data-locale="en_US" 
    data-type="horizontal" 
    data-theme="dark" 
    data-vanity="tarah-agbokhana">
        <a class="LI-simple-link" 
        href='https://www.linkedin.com/in/tarah-agbokhana?trk=profile-badge'>
             Tarah Agbokhana
        </a>
    </div>
        );
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
    <p className="branded"> powered by {name} </p>
    </footer>
    </div>
    );
}


