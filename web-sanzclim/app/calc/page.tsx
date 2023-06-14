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
    //Función que calcule la suma de los números que la usuaria escriba. Una vez se añade el número, se vuelve a poner en blanco para añadir un nuevo número. 
    //En HTML se ha puesto el type text, ya que en el ejercicio ofrecido por la empresa se especifica que no solo va a recibirse types number. 
    const handleAddNumber = () => {
        setNumbers([...numbers, parseFloat(currentNumber)]);
        setCurrentNumber('')
    }
    //Funcion para enviar para el LocalStorage

    //Estructura básica de HTML para saber las funciones y estados necesarios
    return (
        <div>
            <h1>Hola soy la calculadora</h1>
            <input type='text' value={currentNumber} onChange={handleUserNumber}></input>
            <button onClick={handleAddNumber}>Añadir número</button>
            <ul>Lista de números que se añaden
                {numbers.map((number, index) => (
                    <li key={index}>{number}</li>
                ))}
            </ul>
            <button>Sumar</button>
            <button>Guardar operación</button>
            <h2>Resultado del cálculo</h2>
            <ul>Calculo total</ul>
        </div>
    )
}


