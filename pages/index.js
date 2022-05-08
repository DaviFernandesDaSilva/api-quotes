//import frases from './frases.json';
import { useEffect, useState } from 'react';
import frases from './frases.json';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

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

      useEffect(() => setAutor(autor), [setAutor])

      useEffect(() => setCita(cita), [setCita])

  return (
    <div className="bg-gray-800 all text-white mx-auto">
    <Header />
    <section className="text-center">
      <div className="flex justify-center">
        <div className="rounded-lg shadow-lg bg-gray-900 min-w-sm max-w-lg text-center ">
            <div className="py-3 px-6 border-b font-bold border-gray-300 text-white">
              Citação
            </div>
            <div className="p-6">
              <h5 className="text-white text-xl font-medium mb-2">{citA}</h5>
              <p className="text-white text-base mb-4">
                {autoR}
              </p>
            <button
            type="button" 
            value="Refresh Page"
            className="inline-block px-6 py-2.5 bg-gray-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-500 hover:shadow-lg focus:bg-gray-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out"
            >Gerar outra citação</button>
          </div>
        </div>
      </div>  
    </section>

    <Footer />
    </div>
    
  )
}
