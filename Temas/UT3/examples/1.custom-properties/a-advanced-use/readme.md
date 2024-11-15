# Custom Properties: Sacando el máximo partido

En CSS nativo las custom properties suelen usarse de forma muy básica, como variables globales definidas a nivel de `:root`. Sin embargo, es posible sacarles mucho más partiddo, definiedo las variables a nivel de global con las bases de la aplicación y luego redefiniendo las variables a nivel de componente, para que cada componente tenga un estilo en base a las variables globales, pero con sus propias variaciones.

### 📄 Recursos

Dentro de esta carpeta se incluye un ejemplo práctico de los conceptos vistos en este documento. Se incluye 2 hojas de estilos, una con el código inicial `style_initial.css`y otra con el código final `style_final.css`. Además, se incluye un archivo `index.html` con el código HTML necesario para visualizar el ejemplo.


### Creaando ámbitos

Podemos sobreescribir las variables globales en un ámbito más pequeño, como un un selector, para que tenga un estilo propio, que se aplique solo a ese selector.


```html	
<div class="card">
  <h3>Titulo</h3>
  <p>Contenido</p>
</div>
```

```css
:root {
  --text-color: red;  // Definición global
}

.card {
  color: var(--text-color);

  & h3 {
    --text-color: lime;  // Sobreescribo el color, solo para este selector
    color: var(--shadow);
  }

  & p {
    color: var(--text-color);
  }
}
```

### Valores por defecto

También es posible jugar con esta característica muy potente de el uso de `var()` para definir valores por defecto. Si una variable no está definida o tiene un valor inválido, la función `var()` utilizará el otro valor si está incluido.

```css
:root {
   //En este caso la variable --text-color no está definida
}

.card {
  color: var(--text-color, red); // Si --text-color no está definida, se usará red
}
```

Pero si más adelante si existe otro componente/elmento en el HTML que define el valor de la variable `--text-color`, entonces se usará ese valor a nivel del componente anterior. 
Veamos un ejemplo:

Tenemos un componente `card` y un titulo y un precio.

```html
<li class="card plan--pram">
  <div>
    <h2 class="card__title">Pram Speed</h2>
    <p>Up to 100Mbit/s</p>
  </div>
  <p class="card__price">288,- <span>/month</span></p>
  <button class="button">Add subscription</button>
</li>

<li class="card card--bike">
  <div>
    <h2 class="card__title">Bike Speed</h2>
    <p>Up to 150Mbit/s</p>
  </div>
  <p class="card__price">953,- <span>/month</span></p>
  <button class="button">Add subscription</button>
</li>
```

La variables `--text-color` 

```css
:root {
  --text-color: initial;  //Simula que no está definida
}


.plan {
  --text-color: var(--text-color, pink);  //En este caso se usará pink
  color: var(--text-color);  
}

.plan--pram {
  --text-color: lime;  
  /*En este caso se sobre escribe el valor de --text-color, pero como tiene un ámbito global (definida en :root), cambia el valor de selector .plan, definido antes*/
}

```

### Simular variables privadas

Es una técnica muy usada en javascript, el indicar visualmente que una variable es privada, aunque realmente a nivel funcional no lo sea. En CSS podemos hacer algo similar, definiendo variables con un guión bajo al principio, para indicar que son privadas y tienen un ámbito local.

Siguiendo con el ejemplo anterior, podemos definir una variable privada para el color de la sombra, que solo se usará en el selector `h3` del componente `card`.

```css
:root {
  --text-color: initial;  //Simula que no está definida
}


.plan {
  /*Se indica con _ que la variable es privada, y se basa en la variable global */
  /* Aunque a nivel efectivo, la variable --text-color no se vería afectada, en otros 
  componentes, es una forma de indicar que es una variable privada, y su uso es solo
  local */
  --_text-color: var(--text-color, pink);
  color: var(--_text-color);  
}
```	


### Conclusión

Las custom properties son una herramienta muy potente, que nos permite definir estilos de forma más dinámica y reutilizable. Con un poco de imaginación, podemos sacarles mucho más partido de lo que se suele ver en la mayoría de los proyectos.

