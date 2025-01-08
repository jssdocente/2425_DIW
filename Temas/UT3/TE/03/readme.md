# UT3. Boletin 3.3 - Página Web completa con SCSS

En este tercer proyecto vamos a continuar creando una página completa aplicando para ello una Arquitectura CSS (ITCSS+Atomic) con SCSS, además le aplicaremos un diseño responsivo, incluyendo media queries, además de aplicar un modo oscuro y claro aplicando variables CSS y mejores prácticas de accesbilidad.

![Porfolio](./_res/Porfolio1920w-light.png)

En este proyecto teneis que usar:

- Metodología BEM
- Variables SCSS
- Custom Properties CSS
- Nesting
- Mixins

### 📂 Entrega

- Crea una carpeta en tu repositorio `UT3\TE\3.3-porfolio`.
- Entrega el enlace de la carpeta en el Moodle.

### 🎯 Objetivos

- Utilizar variables, extend, placeholder y mixins en SCSS.
- Crear una estructura HTML en base a un diseño dado.
- Aplicar selectores en base a atributos de los elementos.


## 📦Recursos

- [Figma](https://www.figma.com/design/DUR8Qjn7mPqY0EUoi8SqY9/Boletin.3.3?node-id=0-1&t=BdW0ScnVlgTPaCED-1)  password: sdfsdf


## 📝 Instrucciones:

El proyecto consta de una serie de pasos:

- **Paso 1:** Crear la estructura HTML
- **Paso 2:** Crear los estilos básicos y el reset CSS
- **Paso 3:** Estilando la página

Para cada paso, se deberá ir creando un commit con el siguiente formato: <br>
`[TE3.3/XX.Y] Donde TE3.3 (boletin 3.3) es el nombre del boletin y XX es el paso que se está realizando, y Y es el subpaso.`


## Pasos

### Paso 1: Crear la estructura HTML

- Crear el archivo `index.html` y un fichero `css\styles.scss`.
- Enlazar al `index.html` con el archivo `styles.css` (se creará automáticamente al compilar el archivo `styles.scss`).
- Utiliza la metodología BEM.


👉 Define la estructura de la página.


### Paso 2: Crear los estilos básicos y e importar Normalize y Reset CSS

En este paso, utilizando los estilos bases y los tokens, el resto de estilos de la página. Aún sin utilizar ningún efecto como degradado o sombras, solo los estilos básicos de la página.

En este paso hay que utilizar las variables SCSS dadas y crear estilos a partir de ellas. También se deben crear las custom properties CSS a partir de las variables SCSS. (recordar que hay que agregar el modo oscuro y modo claro.)

> ‼️ Por ahora, todo irá dentro del mismo archivo, en siguientes pasos lo dividiremos utilizando los conceptos de Arquitectura.


#### Tokens

En figma, trabajamos con el concepto de tokens. Los tokens tienen varios niveles de jerarquía, los `primitivos` son los valores más básicos, como colores, tipografías, espaciados, etc. Los `compuestos` son combinaciones de primitivos, como un botón, que tiene un color de fondo, un color de texto, un espaciado, etc. Los `componentes` son combinaciones de compuestos, como un formulario, que tiene varios botones, campos de texto, etc.

En este paso vamos a definir los tokens primitivos en SCSS.

**Nomenclatura**

| Tipo | Prefijo | Ejemplo |
| --- | --- | --- |
| Color | cl- | cl-primary-400 |
| Font Family | ff-(tipo) | ff-sans |
| Tipografía | tp- | tp-(nombre-tipografia) | tp-title_L |
| Font Size | fs- | fs-(tipo) | fs-bodyM |
| Font Weight | fw- | fw-(number) | fw-400 |
| Espaciado | sp- | sp-(tshirt) | sp-xxs |
| Shadow | sh- | sh-(number) | sh-1 |

<br>

**Tokens/Variables a definir**

(Están definidos dentro del fichero `assets\css\styles.scss` que se acompaña en el proyecto).



### Paso 3: Crear estilos avanzados

Para este paso hay que dar el "toque" fino a la página, creando los estilos degradados, sombras, hover, etc... utilizando para ello SCSS y mixins para reutilizar el código.

En este paso la página se debería ver perfectamente igual que en el diseño de figma.

**mixin**

Ejemplos de mixins que se pueden aplicar.

```scss
@mixin interactive-scale {
  transform: scale(1.05);
  transition: transform 350ms ease;
}
```
Al usar este `mixin` por defecto se usa una escala de 1, y una transición de 350ms. Lo bueno de los mixins es que podemos incluir selectores dentro de ellos.
  
```scss
@mixin interactive-scale() {
  transform: scale(1);
  transition: transform 350ms ease;  //transición de 350ms con efecto ease

  &:hover,
  &:focus {
    transform: scale(1.05);
  }
}
```

**Clases de Utilidad**

Una clase de utilidad es una que hace una y solo una cosa. Está muy vinculada al concepto de `Single Responsibility Principle` de la programación orientada a objetos.

Una única utilidad no significa que solo tengan una regla, sino que todas las reglas que tenga la clase deben estar relacionadas con la misma responsabilidad.

Se pueden crear clases de utilidad para cosas como centrar un elemento, cambiar el color del texto, cambiar el tamaño del texto, etc.

Por ejemplo en nuestro caso, algunas clases de utilidad podrían ser:

```scss
.text-center {
  text-align: center;
}

.text-accent {
  color: ($cl-red-400);
}

.bold {
  font-weight: $fw-700;
}

.exbold {
  font-weight: $fw-900;
}
```

Crea algunas clases de utilidad y aplícalas en tu página.


### Paso 4: Modo oscurso y claro

Para diseñar el modo oscuro y claro, se deben utilizar variables CSS a partir de las variables SCSS. Para ello podeís utilizar diferentes técnicas, siguiendo la [documentación](http://jssdocente-diw-2425.s3-website-eu-west-1.amazonaws.com/Temas/03/3.6/index.html) de los apuntes.

Debeis conseguir lo siguiente:

- Utilizar la configuración del sistema operativo del usuario. 
- Permitir al usuario cambiar el modo de la página a través de un botón.

De esta forma, por defecto la página se vería en el modo configurado en el Sistema Operativo del usuario, y con la posiblidad de cambiar a través de un botón dentro del menú.

Para aplicar el modo oscuro, cambiar los colores como se indica en la siguiente tabla:

```css
$cl-surface: $cl-blue-800;
$cl-text: $cl-white-700;
$cl-btn-text: $cl-btn-text;
$cl-card-text: $cl-blue-300;
$cl-card-surface: $cl-blue-700;
```	

El diseño en modo oscuro debe ser similar al siguiente:

![Porfolio](./_res/Porfolio1920w-dark.gif)


### Paso 5: Diseño responsivo


En este paso vamos a convertir nuestra página en responsiva, utilizando Flex o Grid, y media queries para adaptar el diseño (si fueran necesarias).

En el diseño en Figma se puede apreciar el diseño para el tamaño mínimo, el resto de tamaños entre el mínimo y el máximo se deben conseguir a través de aplicar medidas relativas.

El menú se debe ocultar, y mostrar un menú tipo hamburguesa. Las opciones del menú se deben mostrar en una columna.


> ⚡ Intentar conseguir el modo responsivo utilizando las mínimas medias queries posibles.

Para mostrar el icono de hamburguesa, se puede realizar de diferentes forma, lo más rápido es buscar el icono en formato SVG e incluirlo dentro del index.html.

Y con JS, al pulsar sobre el icono, ocultar y mostrar los elementos adecuados según vuestro diseño.



### Paso 6: Aplicar Arquitectura CSS

En este paso vamos a aplicar la arquitectura CSS ITCSS+Atomic, dividiendo toda nuestros estilos en diferentes archivos. En los apuntes está disponible la siguiente [gúia](http://jssdocente-diw-2425.s3-website-eu-west-1.amazonaws.com/Temas/03/3.1/3.guia-practica-arquitectura-css.html) para orientaros en este paso.

Las carpetas que se deben crear los siguientes: (los archivos son orientativos, puedes crear los que necesites)

- 1.Settings
  - `_colors.scss`
  - `_fonts.scss`
- 2.Tools
  - `_mixins.scss`
- 3.Generic
  - `_reset.scss`
  - `_normalize.scss`
- 4.Elements
  - `_headings.scss`
  - `_links.scss`
  
- 5.Objects
  - `_container.scss`  //objet principal
  
- 6.Components
  - `_buttons.scss`  //botones
  - `_card.scss`  //tarjeta de porfolio
  - `_gallery.scss`  //galería de habilidades del porfolio
  
- 7.Utilities
  - `_text.scss`  //clases de texto


Ahora es necesario unir todo, para ello es necesario crear un fichero `app.scss` que importe todos los archivos (cada uno los archivos que hayaís creado).:

Aquí teneís un ejemplo obtenido de la [guía](http://jssdocente-diw-2425.s3-website-eu-west-1.amazonaws.com/Temas/03/3.1/3.guia-practica-arquitectura-css.html).

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

Ahora por tanto, se dispone de un nuevo fichero `app.css` que estará alojado dentro de la carpeta `css` y que deberá ser enlazado en el `index.html`.






