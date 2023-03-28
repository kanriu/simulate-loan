# Code Challenge: Simulador Instacach

## Ejecutar el proyecto

Luego de clonar el repositorio, primeramente se tiene que instalar las dependencias, se debe ejecutar este comando.

    npm install

Ahora para ejecutar el proyecto que por defecto se abre en [http://localhost:3000](http://localhost:3000), se debe ejecutar este comando.

    npm start

Si quiere verificar que las pruebas unitarias esten correctas, se debe ejecutar este comando.

    npm test

Para generar la build, se debe ejecutar este comando.

    npm run build

---

## Librerías

- TypeScript
- Jest
- React Testing Library
- Moment
- RC Slider

---

## Explicación del Proyecto

Este proyecto se compone de una sola pagina, es un simulador de pago por mes, primeramente se debe consumir una API(en este caso solo es un simulador con timeout) usando un hook personalizado `useService`, también se creo un hook personalizado `useForm`, se usa para manejar los estados locales a los diferentes componentes hijos.

El componente `Card` debe recibir monto del mes, un booleano con la condición de que si el monto ingresado es menor o mayor de lo disponible no se debe mostrar el monto del mes,un componente hijo llamado `CardSmall`, ya que necesita renderizarse las cuotas, TEA, Pago de la primera cuota.

El componente `TextInput` es un input donde solo permite numeros positivos, debe recibir el monto minimo, el monto maximo, un monto inicial, un estado local de un booleano para gestionar los errores y una función del hook `useForm`, cada vez que se ingresa un numero hay una condición de que si se deja escribir por 0.5 segundos recién consumira una API(simulado) todo esto gracias al hook personalizado `useDebouncedValue`, tiene validaciones que no se puede quitar el "S/", se permite el ingreso hasta 2 decimales, si se ingresa un monto que no es permitido, ya no consumira la API.

El componente `SectionSlider` es la parte final de la page, debe recibir un titulo, la minima cuota, la maxima cuota y una función del hook `useForm`. Se hizo uso de la líbreria `RC Slider`, para que se pueda renderizar un slider, de igual manera como el `TextInput` se hace uso del hook `useDebouncedValue`.
