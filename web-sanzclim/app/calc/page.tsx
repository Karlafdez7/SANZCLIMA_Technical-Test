'use client'
import {useState, useEffect} from 'react';
import style from './style.module.css'
//importar useState y useEffect para poder trabajar las variables de estado y LocalStorage
export default function Calculator (){
    //Variables de estados necesarios:1) Una variable que guarde cada número de la usuaria 'currentNumber'--> number || Una variable que guarde el calculo de la suma de los números introducidos 'calculations' --> array || Número que guarde la lista de números del cálculo 'numbers' --> array

    //TYPESCRIPT: adaptación de las variables de estado para un mejor controlde los datos guardados.
    const [currentNumber, setCurrentNumber] = useState ('');
    const [numbers, setNumbers] = useState<number[]>([]);
    const [calculations, setCalculations] = useState<{ numbers: number[]; result: number }[]>([]);
    
    //Función que recoja el valor que escriba la usuaria.
    //TYPESCRIPT: Para escribir el evento onChange del elemento se debe usar "React.ChangeEvent<HTMLInputElement>" || el "ChangeEvent" ayuda a acceder al valor del elemento en event-target-value.
    const handleUserNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentNumber(event.target.value);
    }
    //Función que añade los números que la usuaria escriba. Una vez se añade el número, se vuelve a poner en blanco para añadir un nuevo número. 
    //En HTML se ha puesto el type text, ya que en el ejercicio ofrecido por la empresa se especifica que no solo va a recibirse types number.
    //Para mejorar la experiencia de usuario: se pueden introducir no solo valores numéricos. Para no afectar en el calculo, todos los valores no numéricos se convierten en el número 0.  
    const handleAddNumber = () => {
    const parsedNumber = parseFloat(currentNumber);
    const numberToAdd = isNaN(parsedNumber) ? 0 : parsedNumber;
    setNumbers([...numbers, numberToAdd]);
    setCurrentNumber('');
    };

    //Función que calcula la suma: se deben sumar los valores que la usaria previamente ha puesto en la lista de "añadir número".
    //Mediante el console.log(sum) se puede apreciar que la suma de diferentes números se realiza correctamente.
    //Se tiene que realizar una función que nos ayude a que esta operación se refleje el html "calculo total". La lógica a seguir debería se crear un objeto que guarde los números y el resultado. 
    //¿qué pasa cuando se pulsa el botón sumar? --> el espacio para escribir el número se limpia || la lista de números añadidos se borra || El calculo para que se recorra debe guardarse en la variable estado calculations (esto debería ayudarnos a que se pueda guardar más tarde en el LocalStorage)
    //La variable calculation nos va ayudar a guardar los números de la operación y el resultado, mediante el uso del array (numbers) y el resultado de la constante sum se guarde  "result".

    const handleCalculate = () => {
    const sanitizedNumbers = numbers.map((number) => number ?? 0);
    const sum = sanitizedNumbers.reduce((accumulator, number) => accumulator + number, 0);
    const calculation = {
        numbers: [...numbers],
        result: sum,
    };
    setCalculations([...calculations, calculation]);
    setNumbers([]);
    setCurrentNumber('');
    };

    //Funcion para enviar para guardar en el LocalStorage
    const handleSaveCalculations = () => {
        localStorage.setItem('calculations', JSON.stringify(calculations));
        
    };
    //Estructura básica de HTML para saber las funciones y estados necesarios
    return (
        <div className={style.body_calculator}>
            <h2 className={style.title}>Calcula tus sumas +</h2>
            <form className={style.form}>
                <section className={style.container_add}>
                    <label className={style.number_add}>
                        Introduce tu número:
                        <input 
                            className={style.input_add}
                            placeholder="789"
                            type="text"
                            value={currentNumber}
                            onChange={handleUserNumber}
                        />
                    </label>
                    <button className={style.button_add} type="button" onClick={handleAddNumber}>
                        Añadir número
                    </button>
                </section>
                <ul className={style.container_list}>
                    Lista de números que se añaden
                    {numbers.map((number, index) => (
                        <li className={style.number_list} key={index}>{number}</li>
                    ))}
                </ul>
                <section className={style.container_buttons}> 
                    <p className={style.text_buttons}>¿Qué hacemos con estos números?</p>
                    <button 
                    className={style.buttons}
                    type="button" onClick={handleCalculate}>
                        Sumar
                    </button>
                    <button 
                    className={style.buttons}
                    type="button" onClick={handleSaveCalculations}>
                        Guardar operación
                    </button>
                </section>
            </form>
            <section className={style.container_operation}>
                <h3 className={style.text_operation}>Resultado del cálculo</h3>
                <ul>
                    <li className={style.operation}>
                        {calculations.length > 0 ? (
                        <>
                            Cálculo: {calculations[calculations.length - 1]?.numbers.join(' + ')} ={' '}
                            {calculations[calculations.length - 1]?.result}
                        </>
                        ) : (
                        <></>
                        )}
                    </li>
                </ul>
            </section>
        </div>
    )
}

//Modificación en el HTML: Para que solo se visualice la operación que está realizando el usuario (último array) --> se cambia el método 'maps' por recoger la última posición del array mediante .length -1.

//Cuando no hay cáculo hecho no se vea nada --> condicional.

