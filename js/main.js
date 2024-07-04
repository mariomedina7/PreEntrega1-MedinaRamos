function calcularGradosCelsiusToFahrenheit(grados) {
    return grados * 1.8 + 32; 
}

function calcularGradosFahrenheitToCelsius(grados) {
    return (grados - 32) / 1.8;
}

const formateoGrados = (grados) => {return grados.toFixed(2)};

function convertirGrados() {
    let continuar = true;

    while (continuar) {
        let opcion = prompt("Bienvenido! Esta es una calculadora de conversión de grados.\n - Ingresa 'C' para convertir de grados Celsius a Fahrenheit.\n - Ingresa 'F' para convertir de grados Fahrenheit a Celsius.\n - Ingresa 'Salir' para salir.").toLocaleLowerCase();
        
        if (opcion === "c") {
            let grados;
            while (true) {
                grados = parseFloat(prompt("Ingresa los grados Celsius (°C)"));
                if (!isNaN(grados)) {
                    break; 
                } else {
                    alert("Ingresa un número válido para los grados Celsius.");
                }
            }
            
            let resultado = calcularGradosCelsiusToFahrenheit(grados);
            alert(`La conversión de grados Celsius °C ${grados} a Fahrenheit es: °F ${formateoGrados(resultado)}`);
        } else if (opcion === "f") {
            let grados;
            while (true) {
                grados = parseFloat(prompt("Ingresa los grados Fahrenheit (°F)"));
                if (!isNaN(grados)) {
                    break; 
                } else {
                    alert("Ingresa un número válido para los grados Fahrenheit.");
                }
            }
            
            let resultado = calcularGradosFahrenheitToCelsius(grados);       
            alert(`La conversión de grados Fahrenheit °F ${grados} a Celsius es: °C ${formateoGrados(resultado)}`);
        } else if (opcion === 'salir') {
            continuar = false;
            alert("Hasta pronto!");
        } else {
            alert("Opción inválida.");
        }
        
        if (continuar) {
            let seguir;
            while (true) {
                seguir = prompt("Presiona 'Si' para realizar otra conversión, o 'Salir' para salir.").toLocaleLowerCase();
                if (seguir === 'si' || seguir === 'salir') {
                    break;
                } else {
                    alert("Opción inválida.");
                }
            }
            
            if (seguir === 'salir') {
                continuar = false;
                alert("Hasta pronto!");
            }
        }
    }
}

convertirGrados();
