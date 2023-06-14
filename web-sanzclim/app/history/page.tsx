'use client'
import {useEffect, useState} from 'react';

export default function History (){
    //¿Qué variables necesito? necesito la variable de estado donde se recoge la operación: la variable de estado que se ha usado en el endpoint calc para guardar los números sumados y el resultado fue "calculations". Se va a reutilizar.
    const [calculations, setCalculations] = useState([]);

    //Get del LocalStorage para pintar los cálculos hechos en '/calc'
    useEffect(() => {
        const savedCalculations = JSON.parse(localStorage.getItem('calculations')) || [];
        setCalculations(savedCalculations);
    }, []);
    //Estructura básica de HTML para saber qué funciones o variables de estados necesito
    return(
        <div>
            <h1>Donde se guardan los cálculos</h1>
            {calculations.map((calculation, index) => (
            <div key={index}>
                <p>Numbers: {calculation.numbers.join(', ')}</p>
                <p>Result: {calculation.result}</p>
            </div>
            ))}
        </div>  
    )
}

