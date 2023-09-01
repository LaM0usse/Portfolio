import React, { useEffect } from 'react';
import Typewriter from 'typewriter-effect';

export default function About() {
  useEffect(() => {
  }, [])

  return (
    <section id="about" className="scrolled">
      <h2 className="subtitle-section">INTRODUCTION</h2>
      <h3 className="title-section">A propos</h3>
      <div className="about-section">
        <img src="./assets/images/photoprofil.png" className="about-photo" alt="photoprofil" />
        <p className="about-text">
            <span className='bonjour'>
            <Typewriter
              options={{
                strings: ['Bonjour, je suis Sarah, développeuse web full stack !'],
                autoStart: true,
                loop: true,
                delay: 70,
                deleteSpeed: 70
              }}
            />
            </span>
            <span>
                Mon parcours dans le monde du code a débuté en autodidacte, c'est en 2023 que j'ai formalisé mes compétences en suivant une formation sur OpenClassrooms. 
                Cette expérience m'a permis d'acquérir des connaissances solides en 
                développement FrontEnd et BackEnd, ainsi qu'en gestion de projet et optimisation 
                de code.
            </span>
            <span>
                Passionnée par la création, j'aime donner vie à des idées en créant des 
                sites web à la fois fonctionnels et esthétiquement plaisants. Mon objectif 
                 est d'élargir mes connaissances et compétences en relevant de nouveaux 
                défis. En dehors du code, je nourris une passion pour l'illustration 
                et la créativité.
            </span>
        </p>
      </div>
    </section>
  )
}
