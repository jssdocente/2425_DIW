# UT3. Arquitecturas y Metodologías CSS

## Ejercicio: Trabajo aplicando metodología BEM

### Objetivo

Aplicar la metodología BEM en un proyecto de maquetación web.

### Descripción

En este ejercicio se pide aplicar la metodología BEM en un proyecto de maquetación web. Para ello, se proporciona un archivo HTML con la estructura de la página y un archivo CSS con los estilos básicos. El objetivo es aplicar la metodología BEM en la maquetación de la página, creando los bloques, elementos y modificadores necesarios para estructurar el código CSS de forma clara y organizada.

### Instrucciones

- En el fichero `index.html` se proporciona la estructura de la página. 
- En el fichero `styles.css` se proporcionan los estilos completos de la página.
- Reeamplazar los texto `.bem.` por los selectores correspondientes según la metodología BEM.


### Ejemplo

En el siguiente trozo de código CSS, se deben reemplazar el texto `.bem.` por el selector correspondiente según la metodología BEM:

Se incluyen comentarios para indicar a qué bloque, elemento o modificado corresponde cada selector.

```css
<!-- nav -->
<nav class=".bem.">
  <ul class=".bem.">
    <li class=".bem.">
      <a href="#" class=".bem." title="Productos">Productos</a>
    </li>
    <li class=".bem.">
      <a href="#" class=".bem." title="Información">Información</a>
    </li>
    <li class=".bem.">
      <a href="#" class=".bem." title="Seguridad">Seguridad</a>
    </li>
    <li class=".bem.">
      <a href="#" class=".bem." title="Ayuda">Ayuda</a>
    </li>
    <li class=".bem.">
      <a href="#" class=".bem." title="Descargas">Descargas</a>
    </li>
  </ul>
</nav>
```

Según la metodología BEM, las clases del anterior bloque serían las siguientes:

```css
<!-- nav -->
<nav class="nav">
  <ul class="nav__ul">
    <li class="nav__li">
      <a href="#" class="nav__a" title="Productos">Productos</a>
    </li>
    <li class="nav__li">
      <a href="#" class="nav__a" title="Información">Información</a>
    </li>
  </ul>
</nav>
```

