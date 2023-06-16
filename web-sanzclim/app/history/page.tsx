'use client'
import {useEffect, useState} from 'react';
import style from './history.module.css'

export default function History (){
    //¿Qué variables necesito? necesito la variable de estado donde se recoge la operación: la variable de estado que se ha usado en el endpoint calc para guardar los números sumados y el resultado fue "calculations". Se va a reutilizar.

    //TYPESCRIPT: adaptación de las variables de estado para un mejor controlde los datos guardados.
      const [savedCalculations, setSavedCalculations] = useState<{ numbers: number[]; result: number }[]>([]);


    //Get del LocalStorage para pintar los cálculos hechos en '/calc'
    //TYPESCRIPT: se añade ?? '[]' -->si localStorage.getItem('calculations') es null, se utilizará '[]' como valor predeterminado para el JSON.parse(). 
    useEffect(() => {
    const savedCalculations = JSON.parse(localStorage.getItem('calculations') ?? '[]');
    setSavedCalculations(savedCalculations);
    }, []);
    //Estructura básica de HTML para saber qué funciones o variables de estados necesito
    return(
        <div className={style.body_history}>
            <h1 className={style.title}>Tus sumas guardadas:</h1>
            <section className={style.container_history}>
                {savedCalculations.map((calculation, index) => (
                <div className={style.calculation} key={index}>
                    <p>Números: {calculation.numbers.join('+ ')}</p>
                    <p>Resultados: {calculation.result}</p>
                </div>
                ))}
            </section>
            
        </div>  
    )
}

