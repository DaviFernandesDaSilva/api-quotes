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

      function refreshPage(){
        window.location.reload();
      }

  return (
    <div className="flex justify-center m-auto h-screen bg-gradient-to-br from-gray-600 to-gray-800 text-white mx-auto leading-relaxed">
    <section className="flex justify-center scale-75 xl:scale-100 text-center min-w-6 items-center">
      <div className="flex justify-center">
        <div className="
        transform hover:bg-gray-800 hover:scale-105 hover:shadow-gray-900 hover:shadow-xl 
        rounded-lg shadow-lg bg-gradient-to-tl from-gray-800 to-gray-900 shadow-gray-900 min-w-minmotion-safe:transition
        motion-safe:ease-in-out duration-300 min-w-sm max-w-2xl text-center ">
            <div className="tracking-widest py-3 px-6 border-b font-medium  border-gray-900 text-white">
              Citação
            </div>
            <div className="p-7">
              <h5 className="whitespace-normal transition rounded-xl p-5 ease-in duration-300 text-white text-justify text-xl font-medium mb-2">
              <nobr className="text-2xl">“</nobr> {citA} <nobr className="text-2xl">”</nobr>
              </h5>
              <p className="text-right text-white text-base mb-4">
                - {autoR}
              </p>
          <button
          type="button" 
            value="Refresh Page"
            onClick={() => refreshPage()}
          className="
          hover:scale-105 hover:font-bold transform
          transition ease-out duration-300
          relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-gray-600 to-gray-700 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white">
          <span className="relative px-5 py-2.5 text-xs leading-tight uppercase transition-all ease-in duration-75 bg-gray-800 rounded-md group-hover:bg-opacity-0">
            Encontrar outra CITAÇÃO
          </span>
          </button>
            
          </div>
        </div>
      </div>  
    
    </section>
    <Footer />
    
    
    </div>
    
  )
}
