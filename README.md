# ApiRestNodeJs
Api Rest creada en NodeJs usando el Framework Express
## **Sobre el Autor**
Mi nombre es **Eliezer Polidor**, soy Desarrollador WEB, estoy en permanente formación consultando Block, foros, cursos online y la documentación oficial de las Tecnologías y Framework mas requeridos en el mercado laboral. 
___ 
## **Que me Motiva hacer públicaciones.....
Lo principal es que me da satisfación personal el poder ayudar a otros, aparte de realizar un aporte a la comunidad de Desarrolladores el otro motivo es que sirve de guia de referencia para aquellas personas que deseen contratar mis servicios como Desarrollador WEB, esto les permite informar cual es mi domino a nivel profesional de las diferentes tecnologias que manejo.  
Pero MI MOTIVACIÓN PRINCIPAL ES Como dice Linus Torvalds el creado del S.O. Linux has de la programación un pasatiempo un hobby esto es lo que mas me motiva la pasión de Programar.
___
# **Importante.....
---
Aqui les traigo un sencillo ejemplo de ApiRest creada en NodeJs usando el framework Express. En este ejemplo desarrolle ApiRest usando NodeJs el primer ejemplo alimente la apirest de un json y en el segundo ejemplo si tome los datos de una api externa. Despues que clones el repositorio vas a correr en tú terminal "npm run dev". Esto es solo la parte del Backend los cuales estan para que cliente los consuma.  
___
**Espero este material te sea de algúna utilidad, Te pido por favor me disculpes por los errores que tengo, y te invito a realizar las correciones para mejorar este material.**
___
## **Programas y Dependencias Usados en el ejemplo:**
1. **NodeJs.**
2. **Framework Express.**
3. **Git** y **GitHub** para crear, actualizar y mantener mi repositorio.
4. **Markdown** como editor de texto donde cree la documentación del ejemplo.
5. **Json**  
6. **Visual Studio Code,** es el editor que use para escribir mi programa.**
7. **Dependencias:** express4.18.1, morgan1.10.0, node-fetch2.6.7, underscore1.13.4", nodemon2.0.19.  
8. Utilice la Api jsonPlaceholder las cuales son Api falsa gratuita para pruebas y prototipos. Te invito a que entre y conozcas la dirección url es: https://jsonplaceholder.typicode.com/users / por si quieres practicar las Api que vayas a desarrollar.
___

## **Estructura del Proyecto y Consejos Practicos**

1. Antes de hechar código "Aclara que es lo que vas hacer y como lo vas hacer", escribe dentro del editor que vas a usar para codificar, todo los pasos que te llevan a la solución del PROYECTO, haz una visión macro de la solución y despues te vas al detalle.  
2. Para nuestro ejemplo lo primero seria estructurar las carpetas y crear 2 archivos importantes uno es el package.json el cual lleva las caracteristicas de tú programa y en general información tecnica de tú proyecto y el segundo archivo es el archivo principal que monta tú proyecto por convención se denomina **"index.js"**, empecemos creando la carpeta que contendra a tú proyecto en mi caso yo la llame "ApiRestNodeJs" y dentro de esta crea una carpeta que llamaremos src y dentro de esta crea la carpeta "routes" y los archivos index.js y el objeto json que llame "sample.json".  
3. **"CREAR EL SERVIDOR"** para esto vamos a usar dos paquetes que son "express" y "morgan" este último esta pendiente de las petecciones que se hagan al servidor, empecemos entonces creando el archivo "PACKAGE.JSON" escribe en la terminal del nodejs "npm init --yes" y llena los siguientes campos:  
a.- **"name":** escribe el nombre de tu apì  en mi caso coloque esto "apirest".  
b.- **"version":** escribe la versión  en mi caso coloque esto "1.0.0".  
c.- **"description":** indica brevemente el objetivo de tú api en mi caso coloque esto "Dos ejemplos practicos para presentar datos: 1) lo hago con un json, 2) tomo datos de una apirest externa".  
d.- **"main":** aqui debes colocar el nombre del archivo principal de tú proyecto  en mi caso coloque esto "index.js".
e.- **"scripts":** aqui debes colocar el comando con el que se correra tú proyecto  en mi caso coloque esto {"dev": "nodemon src/index.js"}.
f.- **"author":** coloca tú nombre en este campo  en mi caso coloque "Eliezer Polidor".  
4. **"CREA EL ARCHIVO PRINCIPAL"**, por convención llamalo "index.js" y guardalo dentro de la carpeta "src", este archivo lo vamos a usar para crear el servidor y en el mismo te sugiero crear varias secciones como te indico a continuación:  
a) //setting: aqui define las configuraciones del servidor;  
b) //middlewares: aqui defines los archivos encargados de realizar  
c)//routes aqui defines todas las rutas y peticiones que usara tú servidor.  
d)//starting the server en esta sección estan los comandos que iniciaran tú sección.

5. Dentro de la carpeta "routes". coloque los archivos indes.js, movies.js y users.js, la carpeta "node_modules" la agregor directamente Express cuando lo intale aqui siempre encontraras las dependencias que se intalan para el programa, no modifique esa carpeta.
