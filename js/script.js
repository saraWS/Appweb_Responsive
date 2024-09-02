document.addEventListener("DOMContentLoaded", function() {
    const selects = {
        typescript: {
            element: document.getElementById('typescript-select'),
            info: document.getElementById('typescript-info'),
            content: {
                definicion: "TypeScript es un lenguaje de programación desarrollado y mantenido por Microsoft. TypeScript es un superset de JavaScript que añade tipos estáticos. Permite detectar errores durante el desarrollo y mejorar la mantenibilidad del código.",
                sintaxis: "La sintaxis de TypeScript es muy similar a la de JavaScript, pero con anotaciones de tipo(son una forma de especificar el tipo de datos que una variable, función o propiedad puede tener.)<br><br>Ejemplo: let nombre: string = 'Juan';",
                variables: "En TypeScript, las variables pueden ser de diferentes tipos:<br><br>let num: number = 5; // Tipo número<br>let name: string = 'John'; // Tipo cadena<br>let isActive: boolean = true; // Tipo booleano",
                clases_metodos_interfaces: 
                "TypeScript soporta la definición de clases, métodos, interfaces y tipos para mejorar la estructura del código.<br><br>" +
                "CLASES:<br>Una clase es como un plano para crear objetos. Define qué propiedades y métodos tendrán esos objetos.<br><br>" +
                "class Persona {<br>  nombre: string;<br>  edad: number;<br><br>  constructor(nombre: string, edad: number) {<br>    this.nombre = nombre;<br>    this.edad = edad;<br>  }<br><br>  saludar() {<br>    console.log(`Hola, soy ${this.nombre}`);<br>  }<br>}<br><br>" +
                "METODOS:<br>Los métodos son funciones que están definidas dentro de una clase y que pueden hacer cosas con las propiedades de esa clase.<br>" +
                "Ejemplo (en la clase Persona anterior, saludar es un método):<br><br>" +
                "saludar() {<br>  console.log(`Hola, soy ${this.nombre}`);<br>}<br><br>" +
                "INTERFACES:<br>Una interfaz es una forma de definir la estructura de un objeto, especificando qué propiedades y métodos debe tener, pero sin implementar estos métodos.<br><br>" +
                "interface IAnimal {<br>  nombre: string;<br>  hacerSonido(): void;<br>}",
                ciclos_metodos: "CICLOS: Los ciclos en TypeScript permiten ejecutar un bloque de código varias veces. Son útiles cuando necesitas repetir una operación para un conjunto de datos.<br><br>"+
                "Ejemplo de ciclo for:<br><br>" + 
                "for (let i = 1; i <= 5; i++) {<br> console.log(i);<br>}<br><br>"+
                "CONDICIONALES:Los condicionales permiten tomar decisiones en el código basadas en condiciones. Permiten ejecutar diferentes bloques de código dependiendo de si una condición es verdadera o falsa.<br><br>" +
                "Ejemplo de condicional if:<br><br>" + 
                "let edad: number = 18;<br>" +
                "if (edad >= 18) {<br> console.log(\"Eres mayor de edad.\");<br>} else {<br> console.log(\"Eres menor de edad.\");<br>}<br><br>"+
                "METODOS: Los métodos son funciones definidas dentro de una clase que pueden operar sobre las propiedades de esa clase y realizar acciones específicas.<br><br>" + 
                "Ejemplo de método en una clase:<br><br>" + 
                "class Persona {<br> nombre: string;<br><br> constructor(nombre: string) {<br> this.nombre = nombre;<br> }<br><br> saludar(): void {<br> console.log(Hola, soy ${this.nombre});<br> }<br>}<br><br>" + 
                "let persona = new Persona(\"Juan\");<br>persona.saludar(); // Imprime: Hola, soy Juan<br>",
                arrays_funciones: "En TypeScript, los arrays son colecciones de elementos del mismo tipo. Puedes definir un array tipado para asegurarte de que todos los elementos cumplen con un tipo específico.<br><br>"+
                "Ejemplo de array tipado:<br>let lista: number[] = [1, 2, 3];<br><br>"+
                "Las funciones son bloques de código reutilizables que realizan una tarea específica. En TypeScript, puedes tipar los parámetros y el valor de retorno de una función para mayor seguridad.<br><br>"+
                "Ejemplo de función simple:<br>function sumar(a: number, b: number): number {<br>  return a + b;<br>}"
                }            
        },
        angular: {
            element: document.getElementById('angular-select'),
            info: document.getElementById('angular-info'),
            content: {
                definicion: "Angular es un framework de desarrollo web de código abierto creado por Google. Es usado principalmente para construir aplicaciones web de una sola página (SPA). Permite la creación de aplicaciones complejas con un código más estructurado y mantenible.",
                caracteristicas: "Angular tiene varias características destacadas:<br><br>"+ 
                "-Binding bidireccional: Los cambios en el modelo de datos se reflejan automáticamente en la vista, y viceversa.<br>"+ 
                "-Componentes: Angular organiza la aplicación en componentes reutilizables y modulares, lo que facilita la organización y el mantenimiento del código.<br>"+ 
                "-Inyección de dependencias: Facilita la gestión de servicios y recursos que pueden ser compartidos entre diferentes partes de la aplicación.<br>"+ 
                "-Routing: Angular permite la navegación dentro de una aplicación, cargando componentes específicos sin necesidad de recargar toda la página.<br>"+
                "-CLI de Angular: Herramienta que simplifica la creación, configuración y prueba de aplicaciones.",
                configuracion: "Para empezar a trabajar con Angular, necesitas instalar su CLI (Command Line Interface) y crear un nuevo proyecto:<br><br>"+ 
                "1. Instalación de la CLI de Angular:<br>"+ 
                "npm install -g @angular/cli<br><br>"+ 
                "2. Crear un nuevo proyecto de Angular:<br>"+ 
                "ng new nombre-proyecto<br><br>"+ 
                "3. Ejecutar la aplicación:<br>"+ 
                "ng serve<br>"+ 
                "Esto iniciará un servidor de desarrollo y podrás ver tu aplicación en http://localhost:4200.",
                signal: "Signal es una característica que permite la comunicación en tiempo real entre el servidor y el cliente."
            }
        },
        ionic: {
            element: document.getElementById('ionic-select'),
            info: document.getElementById('ionic-info'),
            content: {
                definicion: "Ionic es un framework de desarrollo de aplicaciones móviles y web que permite crear aplicaciones híbridas utilizando tecnologías web como HTML, CSS y JavaScript. Ofrece una amplia gama de componentes de interfaz de usuario que se adaptan a diferentes plataformas.",
                caracteristicas: "Ionic tiene varias características destacadas:<br><br>"+ 
                "Componentes UI preconstruidos: Incluye una colección de componentes y temas que imitan el estilo nativo de iOS y Android, facilitando el diseño de aplicaciones atractivas.<br><br>"+ 
                "Desarrollo multiplataforma: Permite desarrollar aplicaciones para iOS, Android y la web desde una única base de código.<br><br>"+ 
                "Integración con Angular y React: Ionic se puede usar junto con frameworks como Angular y React, aprovechando sus capacidades para crear aplicaciones interactivas.<br><br>"+ 
                "CLI de Ionic: Proporciona herramientas para crear, desarrollar y desplegar aplicaciones rápidamente.<br><br>"+ 
                "Soporte para Capacitor: Capacitor es una plataforma de runtime que facilita el acceso a funciones nativas del dispositivo como la cámara, GPS y almacenamiento.",
                configuracion: "Para comenzar a trabajar con Ionic, necesitas instalar su CLI y crear un nuevo proyecto. Aquí está el proceso básico:<br><br>"+ 
                "1. Instalación de la CLI de Ionic:<br>"+ 
                "npm install -g @ionic/cli<br><br>"+ 
                "2. Crear un nuevo proyecto Ionic:<br>"+ 
                "ionic start nombre-proyecto<br>"+ 
                "Esto te pedirá que elijas una plantilla (como blank, tabs, etc.) y configurará un nuevo proyecto con esa plantilla.<br><br>"+ 
                "3. Navegar al directorio del proyecto:<br>"+ 
                "cd nombre-proyecto<br><br>"+ 
                "4. Ejecutar la aplicación en un servidor de desarrollo:<br>"+ 
                "ionic serve<br>"+ 
                "Esto iniciará un servidor local y podrás ver tu aplicación en http://localhost:8100.<br><br>"+ 
                "5. Ejecutar en un dispositivo o emulador:<br>"+ 
                "Para probar la aplicación en un dispositivo o emulador, primero asegúrate de tener configurados los entornos de desarrollo para iOS o Android.<br>"+ 
                "Luego usa:<br>"+ 
                "ionic capacitor run android<br>"+ 
                "ionic capacitor run ios<br>"+ 
                "Dependiendo del dispositivo o emulador en el que quieras probar."
            }
        }
    };

    function updateInfo(selectElement, infoElement, content) {
        selectElement.addEventListener('change', function() {
            const selectedValue = this.value;
            // Utiliza innerHTML en lugar de textContent para permitir HTML
            //en este caso es para que pueda hacer saltos de linea o poner imagenes aqui en el js
            infoElement.innerHTML = content[selectedValue] || '';
        });
    }    

    Object.values(selects).forEach(({ element, info, content }) => {
        updateInfo(element, info, content);
    });
});
