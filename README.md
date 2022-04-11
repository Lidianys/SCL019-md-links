# Md-Links

## Índice

* [1. Características de la librería](#1-características-de-la-librería-📋)
* [2.  Diagrama de flujo](#2-Diagrama-de-flujo)
* [3. Modo de uso](#3Modo-de-uso-📘)
* [4.Autora](#4-autor-👩💻)

***

## 1.  Características de la librería  📋
##md-links-Lidianys## es una librería para poder determinar links válidos e inválidos y estadística de estos, en un archivo de extensión md, a traves de las opciones:
 > --validate , --stats o ambas. 

 **Tegnologias** | JavaScript, Node.js, NPM, File System, Path, Process, Git, GitHub, Jest, ESLint |
 --- | --- |


## 2. Diagrama de flujo
El diagrama de flujo de la librería es este:
![diagrama](/img/diagramaDeFlujo.png) 


## 3. Modo de uso 📘

## 3.1 Instalación 🔧
  Coloque el siguiente comando en la terminal
### npm i md-links-lidianys

## 3.2 Sintaxis
> **mdlink <*Ruta*> [*Opciones*]**

** *Ruta* **: 
Ruta absoluta o relativa del archivo a revisar links. 

** *Opciones* **:
- **-sin-opción** 
Si no se coloca ninguna opción se mostrará si el archivo tiene extension md o no. 
![noOpcion](/img/ruta.png) 

-  **-validate**: 
Si se coloca --validate se mostraran los links válidos en color verde y los links inválidos en color rojo.
![validate](/img/validate.png)

- **-stats**:
Si se coloca --stats se mostrara cantidad de links en total, cantidad de links válidos en verde y cantidad de liks inválidos en rojo 
![stats](/img/stats.png)

- **-validate-stats**
Si se colocan ambas opciones --validate --stats se mostrara toda la informacion: links válidos en verde, links inválidos en rojo y la estadística.
![validate-stats](/img/validatestats.png)

## 3. Autora 👩💻 

Lidianys Rodríguez [( Lidianys )](hhttps://github.com/Lidianys)
