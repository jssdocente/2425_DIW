# Ejemplo práctico de aplicación de Arquitectura CSS

En este ejemplo práctico vamos a poner en práctica los conceptos de arquitectura CSS que hemos visto en la unidad.

En este ejemplo vamos a aplicar la arquitectura Atomic+ITCSS.

Esta arquitectura presenta las siguientes capas:

1. **Settings**: Variables de configuración.
2. **Tools**: Mixins y funciones.
3. **Generic**: Estilos base.
4. **Elements**: Estilos de elementos HTML.
5. **Objects**: Patrones de diseño.
6. **Components**:  Subdivisión aplicando concepto Atomic Design.
   1. atomos
   2. moleculas
   3. organismos
7. **Utilities**: Utilidades de diseño.

<img src="https://www.arsys.es/blog/wp-content/uploads/2017/11/ITCS.png" width="80%" style="text-align: center">

Como se aprecia en la imagen, las capas superiores tiene un alcance más global, son menos específicas, y son más genéricas. A medida que bajamos en la jerarquía, los estilos son más específicos y tienen un alcance más local.

En base a lo anterior, vamos a crear una estructura de carpetas y archivos para aplicar esta arquitectura en un proyecto web.

```plaintext
styles
├── settings
│      ├── _colors.scss
│      └── _typography.scss 
├── tools
│      └── _mixins.scss
├── generic
│   ├── _normalize.scss 
│   └── _box-sizing.scss 
├── elements
│      ├── _headings.scss
│      └── _links.scss
├── objects
│      ├── _container.scss
│      └── _ui-list.scss
└── components
       ├──
       ├── atoms
       │      ├── _button.scss
       │      ├── _image.scss
       │      └── _pill.scss
       ├── molecules
       │      ├── _card.scss
       │      └── _form.scss
       └── organisms
           ├── _gallery.scss
           └── _header.scss
       
├── utilities
│      ├── _typography.scss
│      └── _error.scss
└── index.scss
```

### 📂 Recursos

Este ejemplo práctico se acompaña de toda la estructura de carpetas y archivos que se mencionan en esta guía. Todos estos recursos están disponibles en el [siguiente enlace](./scss/).


## 🎈 Trabajando con estilos globales

Los estilos globales son aquellos que se aplican a toda la aplicación, y que no tienen una salida en CSS, sino que se aplican a través de variables, mixins y funciones.

### 🛠️ Cómo utilizar variables, mixins y funciones

En las capas de `Settings y Tools` vamos a definir las variables de nuestro preprocesador, en este caso SASS, así como mixins y funciones.

Con las variables, es interesante usar `variables privadas` para definir valores, y variables públicas para definir sus aplicaciones.

#### Configurando los Tokens de nuestra sistema

Como estudiamos en el tema 1, en figma, trabajamos con el concepto de tokens. Los tokens tienen varios niveles de jerarquía, los `primitivos` son los valores más básicos, como colores, tipografías, espaciados, etc. Los `compuestos` son combinaciones de primitivos, como un botón, que tiene un color de fondo, un color de texto, un espaciado, etc. Los `componentes` son combinaciones de compuestos, como un formulario, que tiene varios botones, campos de texto, etc.

Los tokens primitivos están el el 1º nivel, y por tanto, estos tokens no deben ser utilizados directamente en el código, sino que deben ser utilizados a través de los tokens de 2º nivel, que son los compuestos.

**Implementar Tokens primitivos con variables privadas**

Para evitar que las variables correspondientes a los tokens primitivos sean utilizadas directamente en el código, vamos a definir estas variables como privadas.

> 🌈 Colores

```scss
// settings/_colors.scss

/* Tokens primitivos */
$_eucalyptus: #289f5f;
$_green-pea: #19623b;
$_baltic-sea: #282729;
$_cod-gray: #181818;
$_dove-gray: #666;
$_boulder: #777;
$_white: #fff;
$_alabaster: #fafafa;
$_gallery: #ececec;

/* Tokens compuestos */
$primary-color: $_eucalyptus;
$primary-dark-color: $_green-pea;

$background-dark-color: $_baltic-sea;
$background-darker-color: $_cod-gray;
$background-light-color: $_alabaster;
$background-lighter-color: $_white;

$text-color: $_cod-gray;
$border-color: $_dove-gray;
```
> 🔠 Tipografía

```scss
// settings/_typography.scss
$_ff-main: "Open Sans", sans-serif;

/* Tokens primitivos */
// Escala tipográfica
$fs-base: 16;

$_fs-9: 9 / $fs-base + rem;
$_fs-12: 12 / $fs-base + rem;
$_fs-14: 14 / $fs-base + rem;
$_fs-19: 19 / $fs-base + rem;
$_fs-25: 25 / $fs-base + rem;
$_fs-33: 33 / $fs-base + rem;
$_fs-44: 44 / $fs-base + rem;

/* Tokens de estilos (2º nivel) */
$fs-pill: $_fs-9;
$fs-btn: $_fs-12;
$fs-footer: $_fs-12;
$fs-menu: $_fs-14;
$fs-body: $_fs-14;
$fs-lead: $_fs-19;
$fs-title-s: $_fs-25;
$fs-title-m: $_fs-33;
$fs-title-l: $_fs-44;
```
> 🧰 Spaciado

```scss
// settings/_spacing.scss
$max-width: 71.25rem;

/* Tokens primitivos */
$spacing-s: 1rem;
$spacing: 1.6rem;
$spacing-l: 3.25rem;
$spacing-xl: 6.5rem;
```

> 🎨 Z-index

```scss
// settings/_z-index.scss
$_z1: 1;
$_z2: 2;
$_z3: 3;
$_z4: 4;
$_z5: 5;
$_z6: 6;
$_z7: 7;
$_z8: 8;
$_z9: 9;
$_z10: 10;

$z-menu: $_z9;
$z-modal: $_z10;
```

De esta forma en la carpeta `settings` tenemos definidos los tokens primitivos como variables privadas, y los tokens compuestos como variables públicas. Para importar todos los tokens en un solo archivo, podemos crear un archivo `index.scss` en la carpeta `settings` y hacer las importaciones correspondientes.

```scss
// settings/_index.scss
@forward 'colors';
@forward 'typography';
@forward 'spacing';
@forward 'z-index';
```

#### Configurando los herramientas de nuestra sistema

En la capa de `Tools` vamos a definir los mixins y funciones que vamos a utilizar en nuestro proyecto. Este código SCSS tampoco tendrá salida en CSS, sino que se utilizará para generar estilos.

Vamos a tener (en este ejemplo) los siguientes ficheros:

- `tools/_justify.scss`: Mixin para alinear elementos.
- `tools/_media-queries.scss`: Mixin para definir media queries.
- `tools/_toRem.scss`: Función para convertir valores a rem.
- `tools/_index.scss`: Archivo de importación.

De tal, forma que si queremos utilizar algo de los definido tanto en `settings` como en `tools`, simplemente importamos el archivo `index.scss` de cada carpeta.


```scss
@forward 'settings';  //Importa el fichero index.scss de la carpeta settings
@forward 'tools';     //Importa el fichero index.scss de la carpeta tools

/* Aquí se podría utilizar cualquier elementdo definido en settins o tools */
```

### ⛱️ La base del CSS:estilos globales

Cada navegador tiene sus estilos por defecto a la hora de mostrar como se muestra cada elemento. Aunque cada vez los navegadores son más consistentes entre si, utilizar un reset o un normalize nos puede facilitar la creación de estilos globales para conseguir más consistencia.

Un [reset](https://meyerweb.com/eric/tools/css/reset/) va a quitar los estilos de los elementos, unificándolos de tal forma que
un  `h1`  y un  `small`  van a ser del mismo tamaño, y un  `strong`  no será en negrita. 

Esto puede ser útil para asegurarnos que controlamos los estilos de todos los elementos, pero añade una carga de trabajo importante y puede dejar al usuario sin contexto si nos olvidamos de estilar algún elemento.

El [normalize](https://necolas.github.io/normalize.css/), en cambio, lo que hace es normalizar los estilos entre los navegadores, pero dejando las diferencias entre elementos. Así, si nos olvidamos de estilar algun elemento, los estilos por defecto seguirán actuando y darán pistas al usuario sobre lo que estan viendo. En general es más recomendable usar un normalize que un reset, ya que nos libra de una carga de trabajo importante y seguiremos teniendo unos estilos base coherentes en cualquier navegador.

En esta capa podemos aplicar otros estilos genéricos como definir el `box-sizing` o el `font-family` de la aplicación.

En esta capa tendremos la carpeta `generic` con los siguientes archivos:

- `generic/_normalize.scss`: Archivo de normalize.
- `generic/_reset.scss`: Archivo de tipografía.
- `generic/_box-sizing.scss`: Archivo de box-sizing.
- `generic/_index.scss`: Archivo de importación.


### 💄 Empezando a aplicar estilos propios

En esta capa empezamos a definir nuestros estilos. Aún no escribiremos ninguna clase, sino que definimos como se mostrarán los elementos. Lo más habitual será definir estilos de tipografía y enlaces.

En esta capa empezamos a definir nuestros estilos. Aún no escribiremos ninguna clase, sino que definimos como se mostrarán los elementos. Lo más habitual será definir estilos de tipografía y enlaces.

También es una capa donde nos aprovecharemos de la herencia y la cascada de CSS para que se apliquen los estilos globales a los elementos.

Ejemplos de estilos que podemos definir en esta capa son:

- `elements/_headings.scss`: Estilos de los títulos.
- `elements/_links.scss`: Estilos de los enlaces.
- `elements/_body.scss`: Archivo de importación.

```scss	
// elements/_headings.scss
@use "../settings/variables";

h1,
h2,
h3 {
  font-weight: 300;
  line-height: 1.13;
}

h1 {
  font-size: variables.$fs-title-l;
}

h2 {
  font-size: variables.$fs-title-m;
}

h3 {
  font-size: variables.$fs-title-s;
}

// elements/_links.scss
@use "../settings/variables";

a {
  color: variables.$primary-color;
  text-decoration: underline;

  &:hover,
  &:focus {
    color: variables.$primary-dark-color;
  }
}

// elements/_body.scss
@use "../settings/variables";

body {
  color: variables.$text-color;
  font-family: variables.$font-family;
  font-size: variables.$fs-body;
  line-height: 1.8;
}
```
## 📦 Modularizar los estilos de la Aplicación

### 🦠 Objetos y Átomos

Los objetos son clases (selectores) que no tienen propiedades de `theme` como colores, fuentes, etc. Son clases que definen la estructura de la aplicación, como un contenedor, una lista, etc, y no tendrá una vinculación con el departamento de diseño.

En la carpeta `objects` vamos a definir los objetos de nuestra aplicación. En este ejemplo vamos a definir un contenedor y una lista.

```scss
// objects/_container.scss
@use "../settings/variables";

.container {
  max-width: variables.$max-width;
  padding: variables.$spacing variables.$spacing-s;
  margin: 0 auto;
}

// objects/_ui-list.scss
.ui-list {
  padding: 0;
  margin: 0;
  list-style: none;

  &--horizontal {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem;
  }
}
```
Los átomos, en cambio, sí que tiene propiedades visuales. Los átomos no deben contener otros átomos. 

En nuestro ejemplo vamos a definir los átomos de botón, imagen, pill, box y cover-background, además de la tipografías.

```scss
// components/atoms/_btn.scss
@use "../settings/variables";

.a-btn {
  display: inline-block;
  padding: 0.75rem 1.87rem;
  border: none;
  //...

  &--block {
    display: block;
    width: 100%;
  }

  &--primary {
    background: variables.$primary-color;
    color: variables.$text-inverted-color;

    &:hover,
    &:focus {
      background: variables.$primary-dark-color;
      color: variables.$text-inverted-color;
    }
  }
}

// components/atoms/_box.scss
@use "../settings/variables";

.a-box {
  padding: 1.63rem;
  background: rgba(variables.$background-darker-color, 0.3);
  border-radius: 0.37rem;
  color: variables.$text-inverted-color;
}

// components/atoms/_cover-background.scss
@use "../settings/variables";

.a-cover-background {
  background-attachment: fixed;
  background-color: variables.$background-color;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: variables.$text-color;

  &--plant {
    background-image: url("../../img/bg/plant.jpg");
  }

  &--kayak {
    background-image: url("../../img/bg/kayak.jpg");
  }
}

// components/atoms/_typography.scss
@use "../settings/variables";

.lead {
  font-size: variables.$fs-lead;
  line-height: 1.65;
}

.title {
  font-size: variables.$fs-title-l;
}
```	

Tendremos por tanto la siguiente estructura de archivos:

### 🧬 Moleculas

Las moléculas son un conjunto de elementos simples, para formar un componente con sentido, pero no totalmente independiente.

Puede darse el caso que ciertos elementos de la molécula no se usen en ningún otro sitio, por lo que podemos definirlos como partes de ella, en lugar de tener una clase de átomo.

A este nivel, como ya nos estamos acercando al final del triángulo invertido de ITCSS, podemos empezar a anidar selectores (recordemos que los selectores deben ir de menos específicos a más).

!!! warning "Importante"
    En general debe evitarse definir propiedades como tamaños y márgenes en los estilos de una molécula, ya que siempre se va a utilizar dentro de un organismo, que es el que deberá dar la estructura que defina los tamaños.

Si ponemos por ejemplo un  `max-width` en una molécula, la estamos haciendo menos flexible y podría darse el caso que necesitemos ponerla dentro de un contexto en el que necesita ser un poco más grande, forzándonos a editar los estilos.

En nuestro ejemplo vamos a tener las siguientes moléculas:

- `components/molecules/_card.scss`: Estilo de una tarjeta.
- `components/molecules/_cta-box.scss`: Estilo de una caja de llamada a la acción.
- `components/molecules/_dropdown.scss`: Estilo de un desplegable.
- `components/molecules/_form.scss`: Estilo de un formulario.

Ejemplos de algunas moléculas:

```scss
// components/molecules/_card.scss
@use "../settings/variables";

.m-card {
  padding: 1rem;
  background: variables.$background-lighter-color;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  color: variables.$text-muted-color;

  &__img {
    display: block;
    width: calc(100% + 2rem);
    max-width: none;
    margin: -1rem -1rem 0;
    border-radius: 5px 5px 0 0;
  }

  &__title {
    margin-bottom: 0.5rem;
    font-size: variables.$fs-lead;
    font-weight: 400;
    line-height: 1.3;

    a {
      text-decoration: none;
    }
  }

  &__meta {
    display: block;
    margin-bottom: 0.5rem;
  }
}

// components/molecules/_cta-box.scss
@use "../settings/variables";
@use "../tools/mixins";

.cta-box {
  &__attribution {
    @include mixins.sidebar($side-width: 3.25rem, $gap: 1.62rem);

    align-items: flex-start;
    margin-top: 1rem;
  }

  &__author {
    margin: 0;
    font-size: variables.$fs-body;
    font-weight: 600;
  }

  &__image {
    max-width: 3.25rem;
    border-radius: 50%;
  }
}

```	

### 🏗️ Organismos

Los organismos son las clases más concretas y menos reutilizables de nuestra aplicación. Van a formar elementos que son independientes y los podemos usar en diferentes páginas, pero raramente se van a repetir en la misma página. Por este motivo, en esta última capa de nuestros componentes es muy importante evitar crear abstracciones prematuras. Al ser bloques prácticamente únicos, será más fácil de mantener parte de código duplicado que mantener una abstracción incorrecta.

En nuestro ejemplo vamos a tener los siguientes organismos:

- `components/organisms/_gallery.scss`: Estilo de una galería de imágenes.
- `components/organisms/_header.scss`: Estilo de un encabezado.
- `components/organisms/_footer.scss`: Estilo de un pie de página.
- `components/organisms/_hero.scss`: Estilo de la sección más importante de la página.
- `components/organisms/_testimonials.scss`: Estilo de una sección de testimonios.

### 🚙 Clases de utilidad

Por último, tenemos la capa final de clases de utilidad. Como hemos visto en vídeos anteriores, las ponemos al final pese que a su selector es relativamente poco específico (una clase), queremos que sobreescriban cualquier clase anterior, y por esto es la única capa donde veremos el uso de  `!important`.

Un ejemplo de clases de utilidad sería:

- `is-hidden`: Oculta un elemento.
- `is-block`: Hace que un elemento sea un bloque.
- `is-error`: Pone un borde rojo a un elemento.


## Poniendolo todo junto

Ahora necesitamos tener acceso a los estilos que hemos definido en las diferentes capas. Para ello, vamos a crear un archivo `app.scss` en la raíz de la carpeta `styles` que importe todos los estilos necesarios, es decir, lo que realmente se necesitan usar de forma directa. Todos los estilos que no se usen directamente, no se importarán en este archivo.

```scss
// styles/app.scss
@use "generic/normalize";
@use "generic/box-sizing";

// Elements
@use "elements/body";
@use "elements/headings";
@use "elements/img";
@use "elements/links";

// Objects
@use "objects/container";
@use "objects/ui-list";

// Atoms
@use "atoms/box";
@use "atoms/btn";
@use "atoms/cover-background";
@use "atoms/pill";
@use "atoms/typography";

// Molecules
@use "molecules/card";
@use "molecules/cta-box";
@use "molecules/dropdown";
@use "molecules/quote";
@use "molecules/video-thumbnail";

// Organisms
@use "organisms/business-callout";
@use "organisms/courses";
@use "organisms/cta";
@use "organisms/footer";
@use "organisms/header";
@use "organisms/hero";
@use "organisms/partners";
@use "organisms/subscribe";
@use "organisms/testimonials";

// Utilities
@use "utilities/error";
```	

Y ahora en nuestro archivo `index.html` simplementamos importar el archivo `app.css` que hemos generado.

## 🗐 Aplicaciones de varias páginas

En el caso de que tengamos una aplicación de varias páginas, y no estemos utilizando un framework como React, Angular o Vue, es posible que tengamos estilos que se repiten en todas las páginas, y otros que son específicos de cada página.

Esta arquitectura nos permite tener nuestro código CSS completamente organizado. Además, al tener los estilos organizados de esta forma, es más fácil de mantener y de escalar. Si necesitamos añadir un nuevo componente, sabemos exactamente en qué capa debemos añadirlo, y no tendremos que buscar en un archivo de 1000 líneas de código. Si tenemos que modificar un color, sabemos que lo tenemos en la capa de `settings`, y especificamente en el archivo `_colors.scss`.

En el caso de que algunas páginas utilicen solamente ciertos componentes, podemos importar solamente los estilos necesarios en el archivo de la página. De esta forma, no cargamos estilos innecesarios en la página, y reducimos el tiempo de carga de la misma.


### 🏁 Conclusiones

La arquitectura Atomic+ITCSS nos permite tener un código CSS organizado y escalable. Al tener los estilos organizados de esta forma, es más fácil de mantener y de escalar.

Ahora nuestro código cumple con las premias que todo código CSS bien estructurado debe cumplir:

- Escalable
- Mantenible
- Legible
- Predecible
- Reutilizable

Si has llegado hasta aquí, enhorabuena! Has aprendido a estructurar tu código CSS de forma profesional. Ahora, a aplicarlo en tus proyectos!







