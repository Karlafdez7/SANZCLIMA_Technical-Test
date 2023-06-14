'use client'
import {useState, useEffect} from 'react';
//importar useState y useEffect para poder trabajar las variables de estado y LocalStorage
export default function Calculator (){
    //Variables de estados necesarios:1) Una variable que guarde cada número de la usuaria 'currentNumber'--> number || Una variable que guarde el calculo de la suma de los números introducidos 'calculations' --> array || Número que guarde la lista de números del cálculo 'numbers' --> array
    const [currentNumber, setCurrentNumber] = useState ('');
    const [numbers,setNumbers] = useState([]);
    const [calculations, setCalculations] = useState ([]);

    //Función que recoja el valor que escriba el usuaria
    const handleUserNumber = (event) => {
        setCurrentNumber(event.target.value);
    }
    //Función que calcule la suma de los números que la usuaria recoja

    //Funcion para enviar para el LocalStorage

    //Estructura básica de HTML para saber las funciones y estados necesarios
    return (
        <div>
            <h1>Hola soy la calculadora</h1>
            <input type='number' value={currentNumber} onChange={handleUserNumber}></input>
            <button>Añadir número</button>
            <ul>Lista de números que se añaden</ul>
            <button>Sumar</button>
            <button>Guardar operación</button>
            <h2>Resultado del cálculo</h2>
            <ul>Calculo total</ul>
        </div>
    )
}


