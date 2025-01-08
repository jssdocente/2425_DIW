# UT3. Boletin 3.3 - QuizApp con SCSS

En este tercer proyecto vamos a dar un paso adelante en nuestro aprendizaje, y vamos a "pasar" nuestra diseño en figma de la aplicación QuizApp, a desarrollo web con todo lo aprendido hasta ahora, SCSS, Arquitectura CSS, Metodologías, etc.

![T-shirts](./_desgin/t-shirts.png)

En este proyecto teneis que usar:

- Variables
- Nesting
- Placeholder & Extends
- Mixins

### 📂 Entrega

- Crea una carpeta en tu repositorio `UT3\TE\3.3-QuizApp`.
- Entrega el enlace de la carpeta en el Moodle.

### 🎯 Objetivos

- Convertir un diseño en Figma en un desarrollo web.
- Aplicar las metodologías y arquitecturas en un proyecto real.
- Aprender a trabajar con tokens de diseño en desarrollo web.


## 📦Recursos

- [Guía aplicación arquitectura CSS](http://jssdocente-diw-2425.s3-website-eu-west-1.amazonaws.com/Temas/03/3.1/3.guia-practica-arquitectura-css.html)
- Figma: [T-shirts](https://www.figma.com/design/xTnjmi8v444SynT3ExosAd/Boletin.3.2-T-shirts?node-id=0-1&t=KqmNseU7R4vl49Fx-1)


## 📝 Instrucciones:

El proyecto consta de una serie de pasos:

- **Paso 1:** Crear la estructura HTML
- **Paso 2:** Crear los estilos básicos y el reset CSS
- **Paso 3:** Estilando la página

Para cada paso, se deberá ir creando un commit con el siguiente formato: <br>
`[TE3.3/XX.Y] Donde TE3.3 (boletin 3.3) es el nombre del boletin y XX es el paso que se está realizando, y Y es el subpaso.`


## 🚀 Preparación


## Pasos

Para elaborar la aplicación vamos a ir dando una serie de pasos hasta conseguir el resultado final.

### 🎨 Paso 1: Configurar los tokens

En este paso vamos a definir los tokens de diseño en SCSS. Los tokens son valores que se utilizan en todo el proyecto, como colores, tipografías, espaciados, etc. Para ello vamos a utilizar el fichero de diseño de figma y las variables que definimos.

Para definir los tokens vamos a seguir la siguiente conveción. Un token en nuestro Design System estará compuesto de las siguientes partes:

- Nivel: Primitivo (rf), Alias (sys), Componente (cmp).
- Tipo: Color (cl), Espaciado (sp), Tipografía (), etc.

**Primitivos**

| Tipo | Nivel | Token nombre | Valor | 
| --- | --- | --- | --- |
| Color | Primitivo | ref.cl.purple-500 | #a729f5 |
|  |  | ref.cl.pure-white | #ffffff |
|  |  | ref.cl.dark-navy | #313e51 |
|  |  | ref.cl.grey-navy | #626c7f |
|  |  | ref.cl.light-grey | #f4f6fa |
|  |  | ref.cl.navy | #3b4d66 |
|  |  | ref.cl.light-bluish | #abc1e1 |
|  |  | ref.cl.purple-300 | #d394fa |
|  |  | ref.cl.purple-100 | #f6e7ff |
| Font | Primitivo | ref.fwg.thin | 100 |
|  |  | ref.fwg.light | 300 |
|  |  | ref.fwg.regular | 400 |
|  |  | ref.fwg.medium | 500 |
|  |  | ref.fwg.semi-bold | 600 |
|  |  | ref.fwg.bold | 700 |
|  |  | ref.fwg.black | 900 |
| Espaciado | Primitivo | ref.sp.3xs | 0.125em |
|  |  | ref.sp.2xs | 0.25em |
|  |  | ref.sp.xs | 0.5em |
|  |  | ref.sp.s | 0.75em |
|  |  | ref.sp.m | 1em |
|  |  | ref.sp.l | 1.5em |
|  |  | ref.sp.xl | 2em |
|  |  | ref.sp.2xl | 2.5em |
| Border | Primitivo  | ref.stk.thin | 1px |
|  |  | ref.stk.medium | 2px |
|  |  | ref.stk.thick | 3px |
| Radius | Primitivo  | ref.rad.2xs | 0.125em |
|  |  | ref.rad.xs | 0.25em |
|  |  | ref.rad.s | 0.5em |
|  |  | ref.rad.m | 1em |
|  |  | ref.rad.l | 1.5em |
|  |  | ref.rad.xl | 2em |
|  |  | ref.rad.2xl | 2.5em |
|  |  | ref.rad.3xl | 3em |
|  |  | ref.rad.full | 9999 |
| Z-index | Primitivo  | ref.zi.1 | 10 |
|  |  | ref.zi.2 | 20 |
|  |  | ref.zi.3 | 30 |
|  |  | ref.zi.4 | 40 |
|  |  | ref.zi.5 | 50 |
|  |  | ref.zi.full | 9999 |
| Icon | Primitivo  | ref.icn.xxs | 12px |
|  |  | ref.icn.xs | 16px |
|  |  | ref.icn.s | 24px |
|  |  | ref.icn.m | 32px |
|  |  | ref.icn.l | 48px |
|  |  | ref.icn.xl | 64px |
|  |  | ref.icn.xxl | 96px |

En nuestro caso, y al utilizar SCSS, como podemos utilizar variables privadas, en lugar de utilizar nombres tan largos de variables, vamos a eliminar del nombre de la variable el nivel del token, y vamos a utilizar un guión bajo `_` para indicar que es una variable privada.

Ej: variable SCSS para el token `ref.cl.purple-500`: `_$cl-purple-500: #a729f5;`


**Alias / sistema (2º nivel)**

Los token de 2º nivel son combinaciones de tokens de 1º nivel. Por ejemplo, un color de fondo, un color de texto, un color de borde, etc. Se les conocen con muchos nombres como `alias`, `sistema`, `compuestos`, etc. En nuestro caso vamos a llamarlos `sistema (sys)`.

| Tipo | Nivel | Token nombre | Valor |
| --- | --- | --- | --- |
| Color | Sistema | sys.cl.bg-pm  | ref.cl.light-grey |
|  |  | sys.cl.tx-on-pm | ref.cl.dark-navy |
|  |  | sys.cl.bg-sc | ref.cl.purple-100 |
|  |  | sys.cl.tx-on-sc | ref.cl.purple-500 |

Estos tokens se van a convertir en variables públicas, y para acortar su tamaño nos vamos a incluir tampoco el nivel del token.

Ej: variable SCSS para el token `sys.cl.bg-primary`: `$cl-bg-primary` y le asociaremos el valor correspondiente con el token de 1º nivel.


**Componentes (3º nivel)**

Los token de 3º nivel son combinaciones de tokens de 2º nivel. Por ejemplo, un botón, un input, un card, etc. Se les conocen con muchos nombres como `componentes`, `compuestos`, etc. En nuestro caso vamos a llamarlos `componentes (cmp)`.

| Nivel | Tipo | Token nombre | Valor |      
| --- | --- | --- | --- |
| Componente | Buttom | cmp.btn.bg-tc | ref.cl.purple-500 |
|  |  | cmp.btn.tx-on-tc | ref.cl.pure-white |           
|  |  | cmp.btn.bg-sc | ref.cl.purple-100 |
|  |  | cmp.btn.tx-on-sc | ref.cl.purple-500 |
|  |  | cmp.btn.bg-pm | ref.cl.light-grey |
|  |  | cmp.btn.tx-on-pm | ref.cl.dark-navy |

Estos tokens también logicamente son públicos, y se van a convertir en variables SCSS.

Ej: variable SCSS para el token `cmp.btn.bg-primary`: `$btn-bg-pm` y le asociaremos el valor correspondiente `$btn-bg-pm: _$cl-purple-500`.


### Paso 1: Crear la estructura HTML

- Crear el archivo `index.html` y un fichero `scss\styles.scss`.
- Enlazar al `index.html` con el archivo `styles.css` (se creará automáticamente al compilar el archivo `styles.scss`).
- Crear la estructura HTML en base a los siguiente estructura:

```yaml
- header.text-center
- main: .container
  - section: .container  [data-type="product"]
    - div: .event-columns
      - (div: card) * 3
        - img
        - div.card__content
          - div
            - p.text-accent
            - h2
          - div
            - p.price .fw-bold
          - button
            - span.visually-hidden
            - img    
    - h2: .text-center fw-bold

    - div: .even-columns
      - (a: .card data-type="link-with-image"]) * 5
        - img
        - div.card__content
          - p
```

Sintaxis Emmet (para generar la estructura HTML):

👉 Define la estructura `emmet` para la estructura dada.

```text
DEFINE LA ESTRUCTURA EMMET AQUÍ
```

### Paso 2: Crear los estilos básicos y el reset CSS

En este paso vamos a utilizar variables en SCSS. Muchas de ellas se podrían realizar con custom properties. El objetivo de estos ejercicios es aprender a trabajar con SCSS, por lo que vamos a utilizar variables de SCSS.

> ‼️ Por ahora, todo irá dentro del mismo archivo, más adelante aprenderemos formas más avanzadas de organizar nuestro código.


### Tokens

En figma, trabajamos con el concepto de tokens. Los tokens tienen varios niveles de jerarquía, los `primitivos` son los valores más básicos, como colores, tipografías, espaciados, etc. Los `compuestos` son combinaciones de primitivos, como un botón, que tiene un color de fondo, un color de texto, un espaciado, etc. Los `componentes` son combinaciones de compuestos, como un formulario, que tiene varios botones, campos de texto, etc.

En este paso vamos a definir los tokens primitivos en SCSS.

**Nomenclatura**

| Tipo | Prefijo | Ejemplo |
| --- | --- | --- |
| Color | cl- | cl-primary-400 |
| Font Family | ff-(tipo) | ff-sans |
| Font Size | fs- | fs-(tipo) | fs-bodyM |
| Font Weight | fw- | fw-(number) | fw-400 |
| Espaciado | sp- | sp-(tshirt) | sp-xxs |

<br>

**Tokens/Variables a definir**

| Tipo | Nombre | Valor |
| --- | --- | --- |
| Color | $cl-neutral-100 | hsl(0 0% 100%) |
|  | $cl-blue-800 | hsla(216, 71%, 16%, 1) |
|  | $cl-red-400 | hsla(357, 100%, 68%, 1) |
|  | $cl-red-500 | hsl(357, 74%, 40%) |
|  | $cl-green-400 | hsl(120, 100%, 68%) |
| Font Family | $ff-main | "Roboto", sans-serif |
| Font Size | $fs-h1 | 3rem |
|  | $fs-h4 | 2rem |
|  | $fs-bodyM | 1.25rem |
|  | $fs-bodyS | 1.125rem |
| Font Weight | $fw-400 | regular 400 |
|  | $fw-700 | bold 700 |
|  | $fw-900 | black 900 |
| Espaciado | $sp-xxs | .5rem |
|  | $sp-xxs | 0.5rem |
|  | $sp-xs | 0.75rem |
|  | $sp-s | 1rem |
|  | $sp-m | 1.25rem |
|  | $sp-l | 2rem |
|  | $sp-xl | 2.25rem |
| Shadow | $sh-1 | .25rem .25rem 1rem rgb(0 0 0 / .15) |


### Reset CSS

Crea el reset CSS básico en SCSS, como ya hiciemos en el boletín anterior. 

Además en esta ocasión vamos a agrega uno para las imágenes con:
  
```scss
img {
  display: block;
  max-width: 100%;
}
```


### Estilos básicos

En este punto vamos a definir los estilos básicos de la página, aquellos que se `heredan` a todos los elementos de la página, como el `color`, `fuente`, `espaciado`, etc.

En el `body` vamos a definir la fuente y el color de fondo.

```scss
html {
  font-size: 100%;  //Es igual a 1rem
}

body {
  font-family: $ff-main;
  font-weight: $fw-400;
  color: $cl-blue-800;
  background-color: $cl-neutral-100;
}

.container {
  /* Calcula el ancho cogiendo el mínimo entre 2 medidas*/
  width: min(100%- 2rem, 60rem)
  /* Centra el contenedor. margin: 0 auto */
  margin-inline: auto;
}

.even-columns {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  /* Si --gap no está definido, por defecto se usa $sp-s */
  gap: var(--gap, $sp-s);
}
```


### Paso 3: Estilando la página

Para este paso teneis que estilar la página siguiendo las especificaciones de diseño en Figma.


> **Sombra**

Para la sombra crear el `placeholder: %shadown` con la información dada.

> **mixin**

En hover focus aplica estos cambios:

- Cambio de color
- Subir el tamaño

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
  transition: transform 350ms ease;

  &:hover,
  &:focus {
    transform: scale(1.05);
  }
}
```
Sería muy interesante que pudieramos aplicar una escala personalizada (si se quiere), y sino que se aplique la escala por defecto. También que pudieramos pasar el color para el cambio sobre el hover/focus, y el color de fondo.

```scss
@mixin interative-scale($color, $bg, $scale: 1.05) {
  transform: scale(1);
  transition: transform 350ms ease;

  &:hover,
  &:focus {
    transform: scale($scale);
    color: $color;
    background-color: $bg;
  }
}
```

**Clases de Utilidad**

Una clase de utilidad es una que hace una y solo una cosa. Está muy vinculada al concepto de `Single Responsibility Principle` de la programación orientada a objetos.

Una única utilidad no significa que solo tengan una regla, sino que todas las reglas que tenga la clase deben estar relacionadas con la misma responsabilidad.

Se pueden crear clases de utilidad para cosas como centrar un elemento, cambiar el color del texto, cambiar el tamaño del texto, etc.

Por ejemplo en nuestro caso, vamos a crear una clase de utilidad para centrar el texto.

```scss
.text-center {
  text-align: center;
}

.text-accent {
  color: $cl-red-400;
}

.fw-bold {
  font-weight: $fw-700;
}

.fw-black {
  font-weight: $fw-900;
}

.page-title {
  font-size: $fs-h2;
  font-weight: $fw-700;
}
```

**Estilos específicos**

Lo ideal es aprovecharnos al máximo de la cascada y la herencia, lo que hemos hecho a través de las reglas aplicadas a los elementos `body` y `.container`.

También podemos realizar esto para las `.card`.

Rellena los estilos que faltan siguiendo las especificaciones de diseño.

```scss
.card {
  $parent: &;
  //borde redondeado de 2rem.
  // desbordamiento oculto
  //color de fondo (neutral-100).
  //Aplica la sombra a través del placeholder.

  //Selecciona un selector card en base a los atribuos de data-type="product"
  &[data-type="product"] {
    //h2 {}
    //card__content {} --> debe generar este selector en CSS 
    //button {}

  }

  //Selecciona un selector card en base a los atribuos de data-type="link-with-image"
  &[data-type="link-with-image"] {
    //propiedades 
    
    //Incluir el mixin interactive-scale con los colores adecuados en los parámetros.

    //card__content {} --> debe generar este selector en CSS
    
    img {
      height: 8.75rem;
      width: 100%;
      object-fit: cover;
      object-position: top center;
    }  
  }
}
```

Para estilar el botón, aplica las siguientes propiedades:

```scss
.button {
  display: inline-block;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  border-radius: 100vw;
  //aplica la sombra con el placeholder
  //aplica el mixin interactive-scale con los colores adecuados en los parámetros.
}
```

**Posicionando el botón**

Para posicionar el botón utiliza la propiedad `position` dando valores adecuados tanto al propio elemento como al padre.

> 💡 Pista: la propiedad transform: traslateY(-50%) puede ayudarte. Investiga esta opción


**Un último desafio**

El mixin `interactive-scale` es muy útil, pero el color de hover y focus es el mismo. Sería muy interesante que pudieramos pasar un color diferente para el hover y el focus. Y además, que si el color no se pasa, se use el color por defecto.
E incluso podríamos hacer que tenga hover/focus o no a través de un parámetro, con valor por defecto `true`.

Aplica estos cambios en el mixin `interactive-scale`.

- Agregar 2 parámetros más, uno para el color y bg-color de hover.
- Agregar un parámetro para activar o desactivar el hover/focus.
- Si no se pasa el color para hover, se usa el color del parámetro $color.
- Si no se desea efecto hover/focus, que no incluya las reglas de hover/focus.


