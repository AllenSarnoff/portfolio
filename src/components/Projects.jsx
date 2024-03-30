import React from 'react'
import img1 from '../assets/pro1.PNG'
import img2 from '../assets/pro2.png'
import img3 from '../assets/pro3.png'
import img4 from '../assets/pro4.png'
import img5 from '../assets/pro5.jpg'
import img6 from '../assets/pro6.PNG'
const projects = () => {
  return (
    <div className="projects">
      <div className="section">
        <ul>
          <li className='active'>Tous les projets</li>
          <li>Web</li>
          <li>Logiciels</li>
          <li>Designs</li>
        </ul>
      </div>
      <div className="demo">
        
          <div className="dbox">  
            <a href="https://github.com/AllenSarnoff/SAYNA-REACT-SUPERMAN-112022.git"><img src={img1} alt="Aperçu du projet" />
            <p>Site basé sur l'univers fictif de Superman avec un e-shop et une page de quizz<br />Technologie : React Js</p></a>
          </div>
        
          <div className="dbox">
            <a href="https://github.com/AllenSarnoff/SAYNA-REACTJS-BATMANREACT.git"><img src={img2} alt="Aperçu du projet" />
            <p>Site basé sur l'univers fictif de Batman avec un e-shop et une page de quizz <br />Technologie : React Js</p></a>
          </div>
        
          <div className="dbox">
            <a href='https://github.com/AllenSarnoff/SAYNA-JSTSCANVAS-PANTHER-072022.git'><img src={img3} alt="Aperçu du projet" />
            <p>Site basé sur l'univers fictif de Black Panther et du wakanda avec une page d'énigmes <br />Technologie : HTML, CSS, JavaScript</p></a>
          </div>
          
        <div className="dbox">
          <a href=""><img src={img4} alt="Aperçu du projet" />
          <p>Application Desktop pour un service d'immatriculation <br />Technologie : Java</p></a>
        </div>
        <div className="dbox">
          <a href=""><img src={img5} alt="Aperçu du projet" />
          <p>La même application Car Register mais cette fois en version web <br />Technologie : Symfony</p></a>
        </div>
        <div className="dbox">
            <img src={img6} alt="Aperçu du projet" />
            <a href="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FZgioxHlGHrKEmIlNcbO5Mg%2FSAYNA-Mobile%3Ftype%3Ddesign%26node-id%3D2-2%26t%3D75W7Etf5QJ7w7STn-1%26scaling%3Dscale-down%26page-id%3D0%253A1%26mode%3Ddesign">
              <p>Design d'une application mobile SAYNA Mobile, montrant les parcours pour apprendre les métiers du numérique gamifiés</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default projects