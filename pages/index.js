import styles from '../styles/Home.module.css';
import frases from './frases.json';
import { useEffect, useState } from 'react';


export default function Home() {
  var i,autor,cita;

  const [autoR, setAutor] = useState();
  const [citA, setCita] = useState();

    //for (i = 0; i < frases.frases.length; i++) { 
     //console.log(frases.frases[i].nome);
      //console.log(frases.frases[i].idade);
    //}
    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
      var max = frases.frases.length - 1;

      var randomFrase = getRandomIntInclusive(0,max);

      autor = frases.frases[randomFrase]?.autor;

      cita = frases.frases[randomFrase]?.cita;

      useEffect(() => setAutor(autor), [])

      useEffect(() => setCita(cita), [])


  return (
    <div className={styles.container}>
      <h1>Citação</h1>
      <h3>{citA}</h3>
      <h2>{autoR}</h2>
      
      
    </div>
    
  )
}
