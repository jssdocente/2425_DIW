# UT4. Boletin 5.1 - Primeros pasos con Astro (práctica guiada)

El objetivo de esta práctica consiste en transformar una página web creada utilizando técnicas profesionales de diseño (SCSS, BEM, arquitecturas,  etc.), a través de la aplicación de un framework como Astro.

Un framework nos permite trabajar de forma más rápida y eficiente, ya que nos proporciona una serie de herramientas y componentes que nos facilitan el trabajo. En este caso, Astro nos permite lo mejor de todo, permitiendo crear contenido estático y dinámico, pudiendo combinar diferentes tecnologías como React, Svelte, Vue, etc.

En esta práctica guiada transformaremos la página web de la práctica 3.4 (Barber Shop) a Astro.

### 📂 Entrega

- Crea una carpeta en tu repositorio `UT5\TE\5.1-bs-Astro`.
- Entrega el enlace de la carpeta en el Moodle.

### 🎯 Objetivos

- Transformar una página web creada creada con técnicas profesionales de diseño a Astro.
- Conocer Astro y sus ventajas.
- Aprender el proceso de construcción de una página web con Astro.

## 📦Recursos

- [Documentación Astro](https://astro.build/)
- [Libro web: Understanding Astro](https://understanding-astro-webook.vercel.app/)
  

## 📝 Proceso

Para realizar la transformación iremos realizando una serie de pasos. Para cada paso, incluir un commit en vuestro repositorio, indicando *[TE-5.1 X/Y ] en el mensaje del commit. Don X es el paso, y Y el subpaso* (si fuese necesario)

### Paso 0: Instalación de Astro

Para instalar astro, vamos a necesitar una serie de pasos y requisitos que se detallan en su documentación

[Instalar Astro](https://docs.astro.build/en/install-and-setup/)

También es neceario tener instalado un gestor de paquetes como npm o yarn. En nuestro caso, vamos a utilizar `pnpm` que es un gestor de paquetes más rápido y eficiente. Para instalarlo, ejecutamos el siguiente comando:

```bash
npm install -g pnpm
```

### Paso 1: Crear un nuevo proyecto Astro

El proyecto lo vamos a crear dentro del repositorio oficial de la asigntura. Para ello, nos situamos dentro de la carpeta `UT5\TE\5.1-bs-Astro` y ejecutamos el siguiente comando:

```bash
pnpx create-astro@4.11
```

En este video se muestra el proceso de creación del proyecto:

<img src="_res/01.create-project.gif" width="600px">


Una vez finalizado correctamente, accedemos a la nueva carpeta creada `cd 5.1-bs-Astro` y abrimos nuestro editor de código `code .`:

Ahora, lo primero y más importante es revisar la estructura de archivos y carpetas que nos ha creado Astro.

- `src`: Carpeta donde se encuentra todo el código fuente de nuestra aplicación.
  - `src/pages`: Carpeta donde se encuentran las páginas de nuestra aplicación.
  - `src/layouts` : Carpeta donde se encuentran los layouts de nuestra aplicación.
  - `src/components`: Carpeta donde se encuentran los componentes de nuestra aplicación.
- `public`: Carpeta donde se encuentran los archivos estáticos de nuestra aplicación.

También tenemos otros ficheros de configuración:

- `astro.config.mjs`: Fichero de configuración de Astro.
- `package.json`: Fichero de configuración de npm donde está la configuración principal de nuestro proyecto.
- `pnpm-lock.yaml`: Fichero de configuración de pnpm.
- `tsconfig.json`: Fichero de configuración de TypeScript.

Y por supuesto una carpeta muy importante, `node_modules` donde se encuentran todas las dependencias de nuestro proyecto.

Por defecto Astro, nos ha creado también un fichero `.gitignore` para que no se suban al repositorio los ficheros que no queremos.


#### 1.1: Flujo de trabajo

El flujo de trabajo con astro es relativamente sencillo, ya que tiene una característica fundamental, y es que tiene `hot reload` que nos permite ver los cambios en tiempo real.

- 1. Iniciar el servidor de desarrollo: `pnpm run dev`

    Para arrancar el servidor de desarrollo, ejecutamos el comando `pnpm run dev` y si todo va bien, deberíamos ver un enlace del tipo `http://localhost:4321` en la consola. Si accedemos a ese enlace en un navegador, deberíamos ver la página de inicio de Astro.

- 2. Compilar el proyecto: `pnpm run build`

    Para compilar el proyecto, ejecutamos el comando `pnpm run build`. Este comando nos generará una carpeta `dist` con el código optimizado para producción.
    Esta carpeta la podemos subir a un servidor estático como Vercel, Netlify, etc.

- 3. Previsualizar el proyecto: `pnpm run preview`

    Para previsualizar el proyecto, ejecutamos el comando `pnpm run preview`. Este comando nos permite previsualizar el proyecto en un entorno de producción, pero sin tener que subirlo a un servidor.


> Fin del paso 1. Realiza el commit. Muy importante, comprueba que nos subes la carpeta `node_modules` al repositorio.


### Paso 2: Copiar la página web de la práctica 3.4

En esta paso vamos a copiar la página web de la práctica 3.4 a nuestro proyecto Astro. Para ello, vamos a copiar los archivos a las siguientes carpetas.

- `src/pages/index.astro`: Copiar el contenido del `index.html` a este fichero.
- `src/assets/scss`: Copiar el contenido de la carpeta `scss` a la carpeta `src/assets/scss`.
- `src/assets/img`: Copiar el contenido de la carpeta `img` a la carpeta `src/assets/img`.
- `src/assets/js`: Copiar el contenido de la carpeta `js` a la carpeta `src/assets/js`.

En Astro, para que pueda compilar SCSS, necesitamos instalar una libreria que pueda compilar SCSS de forma automática, sin tener que utilizar ninguna herramienta adicional como Prepros, etc. Para ello, vamos a instalar la librería `pnpm add scss`. Para más información sobre este punto, consultar la [guía](https://docs.astro.build/en/guides/styling/) de Astro.

Y según nos indica la guía, debemos importar el fichero `app.scss` en el fichero `src/pages/index.astro`, de la siguiente forma:

```astro
---
import '../assets/scss/app.scss';
---
```

Además también, tenemos que importar las imágenes y el componente para las imágenes, de la siguiente forma:

```astro
---
import '../assets/scss/app.scss'
import { Image } from 'astro:assets'
import logo from '../assets/img/logo.svg'
import hairCut from '../assets/img/hair-cut.jpg'
---

//Para usar la imagen, simplemente la llamamos de la siguiente forma:
<Image src={logo} alt="Logo" />
```

Aplicamos estos cambios dentro del fichero `src/pages/index.astro` y cambia las rutas de las imágenes por la forma indicada.

### SCSS. Cambiar las rutas de las importaciones.

Otro tema que seguramente dará error, son las importaciones que hemos realizado en los componentes, como las secciones, o el componente `header`, etc.. ya que estas importaciones se debe corregir para que accedan correctamente a los ficheros.

> Aplica los cambios necesarios para que las importaciones de los ficheros SCSS sean correctas.


### Javacript. No funciona

Si has importado algún fichero JS, seguramente no funcione. Esto es debido a que las importaciones en Astro de ficheros JS no son iguales que en un proyecto normal ([guía de importaciones](https://docs.astro.build/en/guides/imports/#javascript)), por lo que en este punto del proceso, vamos a incluir dentro de la página `index.astro` el fichero `.js` en una etiqueta `<script lang="js">` y le vamos a indicar que el lenguaje es javascript `js`, ya que si no, por defecto Astro lo toma como TypeScript.

> Aplica este cambio, y ahora debería funcionar la parte de javascript.


**Una vez corregidos todos los errores, comprueba que la página se visualiza correctamente.**


> Fin del paso 2. Realiza el commit. Ahora nuestro proyecto YA ES ESTÁ FUNCIONANDO CON ASTRO