# UT03. Ejercicios desafios con preprocesadores

Los ejercicios se almacenarán en ficheros independientes en vuestro repositorio personal.

Cada ejercicio se guardará en un fichero con el nombre que se indica en el enunciado, dentro de una carpeta que se llamará `UT3\EC\02-prepro`.

Cada ejercicio tendrá su propia carpeta con el nombre del ejercicio, por ejemplo, el ejercicio 1 se guardará en la carpeta `01`, y así sucesivamente.

Crea un fichero `index.html` que contenga un índice con enlaces a cada uno de los ejercicios, al fichero `index.html`de cada uno de los ejercicios.



### Ejercicio 1

nombre-carpeta-fichero: `01.challenge\index.html`

Escribe el código en SASS para que obtengas el siguiente resultado:

```css
.primary-article {
  padding: 3rem 1rem;
}

.primary-article .title {
  font-size: 5rem;
}

.primary-article .title span {
  color: red;
}

.pointing-list {
  margin: 2rem 0;
}

.pointing-list li {
  padding-left: .5rem;
}

.pointing-list li::marker {
  content: "👉";
 }
```


### Ejercicio 2

nombre-carpeta: `02.challenge`

Debes escribir el código en el fichero style.scss para que consiguas el CSS que se indica. En el fichero SCSS coloca los estilos donde se indica en los comentarios.

El resultado debe ser el siguiente: 

![Resultado](./_res/02.1.png)

El CSS a conseguir es el siguiente:

```css
body {
  margin: 4rem;
  font-size: 1.25rem;
  font-family: system-ui, sans-serif;
  text-align: center;
}

.btn {
  display: inline-block;
  padding: 1em 2em;
  cursor: pointer;
  border: 0;
  text-decoration: none;
  text-transform: uppercase;
  color: white;
}
.btn__primary {
  background: #3f637d;
}
.btn__primary:hover,
.btn__primary:focus {
  background: #2b4355;
}
.btn__secondary {
  background: #4c4171;
}
.btn__secondary:hover,
.btn__secondary:focus {
  background: #2b2541;
}
.btn__accent {
  background: #efca5d;
  color: black;
}
.btn__accent:hover,
.btn__accent:focus {
  background: #d1a215;
}
```

### Ejercicio 3

nombre-carpeta: `03.challenge`

Debes escribir el código en el fichero style.scss para que consiguas el CSS que se indica. En el fichero SCSS coloca los estilos donde se indica en los comentarios.

El resultado debe ser el siguiente: 

![Resultado](./_res/03.1.png)

El CSS a conseguir es el siguiente:

```css
body {
  margin: 4rem 0 0;
  font-size: 1.25rem;
  font-family: system-ui, sans-serif;
  text-align: center;
}

section {
  padding-block: 3rem;
}

.container {
  width: min(100% - 4rem, 50rem);
  margin-inline: auto;
}

.surface-primary {
  background: #3f637d;
  color: white;
}

.surface-secondary {
  background: #4c4171;
  color: white;
}

.surface-accent {
  background: #efca5d;
  color: black;
}

.btn {
  display: inline-block;
  padding: 1em 2em;
  cursor: pointer;
  border: 0;
  text-decoration: none;
  text-transform: uppercase;
}
.surface-primary .btn,
.surface-secondary .btn {
  background: white;
  color: black;
}
.surface-accent .btn {
  color: white;
  background: black;
}
.btn:hover,
.btn:focus {
  background: inherit;
  color: inherit;
  outline: currentColor 2px solid;
}

.text-subdued {
  font-size: 1rem;
}
.surface-primary .text-subdued {
  opacity: 0.8;
}
.surface-secondary .text-subdued {
  opacity: 0.7;
}
.surface-accent .text-subdued {
  opacity: 0.6;
}
```

### Ejercicio 4

nombre-carpeta: `04.challenge`

Debes realizar lo siguiente:

- Crear 3 variables de color, y usalas para todos los items.
- No necesitas crear nuevos selectores, todo puede ser aplicado a un existente selector, o anidado dentro de uno existente.

*Colores y donde aplicarlos:*

- White: #f8f7f7
  - page background
  - primary button text color
  - outline button background
  - hover text color for both buttons

- Black: #201e1f
  - body color
  - button hover/focus background
  - shadow color on the card

- Red: #da3f0b
  - title color
  - button borders (both buttons)
  - primary button background
  - outline button text color
  - button hover/focus shadow

Debes escribir el código en el fichero style.scss para que consiguas el CSS que se indica. En el fichero SCSS coloca los estilos donde se indica en los comentarios.

El resultado debe ser el siguiente: 

![Resultado](./_res/03.3.gif)

El SCSS a conseguir es el siguiente:

```scss
* {
  box-sizing: border-box;
  margin: 0;
}

body {
  font-size: 1.75rem;
  font-family: system-ui, sans-serif;
  line-height: 1.6;

  /* this is being used to center the content on the screen */
  display: grid;
  height: 100vh;
  place-items: center;
}

.card {
  display: grid;
  gap: 0.75em;
  width: min(90%, 60rem);
  padding: 2em;
}

.btn {
  display: inline-block;
  padding: 0.5em 1.5em;
  text-decoration: none;
}

.flex-group {
  display: flex;
  gap: 1rem;
}
```	

### Ejercicio 5

nombre-carpeta: `05.challenge`

🫴 recursos: 
  - index: `05\index.html`
  - style: `05\style.scss`

📝 Instrucciones:

Aplica las reglas que se indican, y crea un fichero `style.scss` creando las reglas necesarios utilizando mixins.

---

Este ejercicio consta de 3 partes:

#### Parte 1: Gradientes

Los gradientes son un caso de uso común para los mixins, puesto que normalmente son bastante repetitivos y tediosos de escribir, incluso para un simple gradiente.

Vamos a crear 3 gradientes, `.section-one`, `.section-two`, y `.section-three` para 3 diferentes gradientes de fondo.

Debes crear:

- Mixin para crear el gradinente.
- Debe aceptar 3 argumentos (2 colores y el angulo del gradiente).


#### Parte 2: Psuedo-elementos

Los pseudo-elementos son otra buena oportunidad para usar mixins, ya que requieren que tengamos que escribir una y otra vez el mismo código.

VAmos a usar este `mixin` sobre el selector `.title`para crear un decorativo `underline` en el título.

Debes crear:

- Crear un `mixin` llamado `pseudo-underline` que crear un pseudo-elemento.
- Debe aceptar argumentos para el `width`, `height`, `background`, y `margin`.
- Debe tener el siguiente código incluido dentro del mixin:

```scss
content: '';
display: block;
```	

#### Parte 3: Badges y Botones

Vamos a crear un mixin para estilar botones, pero mientras más genérico sea el mixin, más util será.

Vas a crear u mixin para estilo ambos de los 2 botones que tenemos, `.btn-one` y `.btn-two`, así como 2 badges, `.badge-one` y `.badge-two`.

Debes crear:

- Crear un más genérico y multipropósito `mixin` llamado `ui-element`.
- Este mixin necesita aceptar los siguientes argumentos:
  - `$size` (aceptar valores como 1em, or 15px, y sua este valor para establecer el `padding`).
  - `$color`
  - `$bg-color`
  - `$hover-color`
  - `$hover-bg-color`
- El padding-left y right debería siemre ser 3x mayor que el padding-top y bottom.

El resultado debe ser el siguiente

<img src="./_res/05.1.png" width="50%">
