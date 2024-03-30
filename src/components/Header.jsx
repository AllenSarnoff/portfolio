import React from 'react'
import './Header.css'

const header = () => {
  return (
    <header>
    <div class="container">
      <ul class="nav">
        <li class="nav-itrm act"><a href="#" class="nav-link">Accueil</a></li>
        <li class="nav-itrm"><a href="#" class="nav-link">A propos</a></li>
        <li class="nav-itrm"><a href="#" class="nav-link">Services</a></li>
        <li class="nav-itrm"><a href="#" class="nav-link">Contact</a></li>
      </ul>
      <a href="../assets/CvTsaravalyAllenSarnoff.pdf" target='_blank' class="button">Mon CV</a>
    </div>
</header>
  );
}

export default header