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
    - Crear módulo que llame a contador

![image](https://user-images.githubusercontent.com/88061350/206170856-8265b1ba-5c1a-4d34-a33b-be008b01e439.png)

## EJERCICIO 3: LISTADO DE HEROES

    - Crear componente en carpeta listado mediante cli: ng generate component listado
    - Crear un array con datos de superheroes
    - Listar el contenido con ngFor en formato , declarar el índice y mostrarlo concatenado con el contenido
    - Crear botón borrar que borre el último elemento de la lista
    - Cuando se borra un elemento mostrar el elemento borrado en un div (únicamente cuando se pulsa borrar y se borra elemento), cuando se añade elemento se debe dejar de mostrar el div de borrar elemento
    - Crear botón añadir que añada el argumento pasado por parámetro en la función
    - Crear módulo que llame a heroes y a listado
### Cuando borra el último elemento
![image](https://user-images.githubusercontent.com/88061350/206181182-370f4c69-b14c-48ce-87b6-7130137cca92.png)
### Cuando añade un elemento a la lista pasado por argumento
![image](https://user-images.githubusercontent.com/88061350/206181259-75ddc2d9-66e9-49d6-a1d1-c61dfe4443da.png)

## EJERCICIO 4: DRAGON BALL Z
    - Crear componente en carpeta dbz mediante cli: meter en carpeta main-page dentro de dbz los estilos y el component-html
    - Crear módulo que llame a dbz
    -Crear dos bloques con flexbox de filas: Personajes y Agregar
    - En agregar rear un formulario en el que se recogen los datos y se muestran en el bloque itulado como Personajes
    - Crear servicio que coja los datos y los agrege al listado, los componentes se van a conectar a este servicio para coger el listado de personajes
![image](https://user-images.githubusercontent.com/88061350/206242374-b540834e-7fa9-441a-9caa-db0949f505f9.png)

## EJERCICIO 5: CREAR APP DE GIF RANDOM

    - Crear dos componentes el principal es giff-app y el componente hijo es imprimir
    - El componente giff-app es el que hace la petición a la api de ghipy
    - El componente hijo es el que muestra los resultados
    - Al pulsar un botón se muestra el título, imagen y el username del gif de manera aleatoria
![image](https://user-images.githubusercontent.com/88061350/206713723-f2713b0f-90fa-4c6c-9be2-fa8116c42aa1.png)

## EJERCICIO 6: CREAR APP QUE IMPRIME USUARIO
    - Crear component llamado user que tenga un input que recoge el id
    - Crear un servicio llamado userService y hacer una llamada a la api https://reqres.in/api/users/2 para obtener un usuario
    - Imprimir los resultados obtenidos del id del input cuando se presiona enter en el componente maquetando con flexbox
    - Crear efecto de carga, cuando los datos aún no se han renderizado
![image](https://user-images.githubusercontent.com/88061350/207029911-cf34d9b4-98ea-44a2-9801-0438b5dca921.png)

## EJERCICIO 7: PRACTICAR CON NG TEMPLATE

    - Crear componente identificar
    - Crer button identificar que al pulsar enter muestra otra vista que es que se ha identificado correctamente
    - En la vista de la identificación correcta poner button de volver que vuelva a la vista anterior.

### Vista de no estar identificado

![image](https://user-images.githubusercontent.com/88061350/207041905-1c1b4822-c7df-4cde-b624-51bc4d28551d.png)

### Vista de estar identificado

![image](https://user-images.githubusercontent.com/88061350/207046880-15d0753e-112d-4168-958b-b378af2dce99.png)