# EJERCICIOS BÁSICOS ANGULAR

## EJERCICIO 1: CREAR CONTADOR
    - Crear componente en carpeta contador mediante cli:  ng generate component contador
    - Crear contador que se inicializa a 20
    - Crear una base que se inicializa en 5
    - Crear un botón que incremente con el valor de la base
    - Crear un botón que decremente con el valor de la base
    - Al pulsar reset se resetea a 20
    - Instalar boostrap: npm install bootstrap jquery @popperjs/core
    - En angular.json en styles poner "node_modules/bootstrap/dist/css/bootstrap.min.css"
![image](https://user-images.githubusercontent.com/88061350/206145585-977f5c5d-2a4a-42a7-a452-5ebc1d98cdd4.png)

## EJERCICIO 2: HEROES
    - Crear componente en carpeta herore mediante cli: ng generate component heroe
    - Crear tabla con datos de nombre y edad
    - Crear columna de tabla que concatene nombre y edad
    - Crear columna de tabla que capitaliza el nombre
    - Crear botón que al pulsarlo cambie el dato de nombre
    - Crear botón que al pulsarlo cambie el dato de edad

![image](https://user-images.githubusercontent.com/88061350/206170856-8265b1ba-5c1a-4d34-a33b-be008b01e439.png)

## EJERCICIO 3: LISTADO DE HEROES

    - Crear componente en carpeta listado mediante cli: ng generate component listado
    - Crear un array con datos de superheroes
    - Listar el contenido con ngFor en formato , declarar el índice y mostrarlo concatenado con el contenido
    - Crear botón borrar que borre el último elemento de la lista
    - Cuando se borra un elemento mostrar el elemento borrado en un div (únicamente cuando se pulsa borrar y se borra elemento), cuando se añade elemento se debe dejar de mostrar el div de borrar elemento
    - Crear botón añadir que añada el argumento pasado por parámetro en la función
### Cuando borra el último elemento
![image](https://user-images.githubusercontent.com/88061350/206181182-370f4c69-b14c-48ce-87b6-7130137cca92.png)
### Cuando añade un elemento a la lista pasado por argumento
![image](https://user-images.githubusercontent.com/88061350/206181259-75ddc2d9-66e9-49d6-a1d1-c61dfe4443da.png)