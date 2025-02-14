# Tarea evaluable Proyecto final módulo: Astro + Laravel y API Rest. MUSIFY

Esta tarea evaluable consiste en la creación de una página web con Astro y utilizando Tailwind, para crear un catálogo musical global, obtenido las canciones y albumes de Spotify, y donde los usuarios pueden agregar un albúm o artista al catálogo global y a su propio catálogo musical.

El objetivo además es crear una parte social, donde se muestren las albúmes, artistas y canciones más populares, bien a través de Likes o por número de reproduciones, a número de seguidores.

## Requisitos

### Requisitos Funcionamiento

Las principales funcionalidades que debe tener la aplicación son:

**Páginas que debe tener la aplicación**

- Página de inicio, con información general
- Página de Albumes y detalle de un Albúm
- Página de Artistas, y detalle de un Artistas
- Página del catálogo musical de un usuario, con secciones como Albumes y Artistas.
- Página de Registro y Login de usuarios

**Detalle de la funcionalidad de cada página**

- Página de inicio
  -  Albumes más recientes agregados a la base de datos
  -  Albumes más populares (mas popularidad)
  -  Artistas más recientes agregados a la base de datos
  -  Artistas más populares (más popularidad)
  -  Canciones más recientes agregadas a la base de datos
  -  Canciones más escuchadas (número de reproduciones)

- Página de Albumes
  - Tendrá un buscador
  - Los albumnes se mostrarán
    - Popular: más populares (máximo 5)
    - Listado completo: todos los albúmes
  - Al hacer click sobre un Album, se mostrará su detalle, incluyendo las canciones del album

- Página de Artistas
  - Tendrá un buscador
  - Los artistas se mostrarán
    - Popular: más populares (máximo 5)
    - Listado completo: todos los artistas
  - Los albumnes se mostrarán ordenados por nombre del artista
  - Al hacer click sobre un Artista, se mostrará su detalle, incluyendo sus albúmes

- Página del catálogo musical de un usuario
  - Tendrá las siguientes secciones
    - Albumes más recientes: últimos agregados primero (máximo 5)
    - Artistas más recientes: últimos agregados primero (máximo 5)
    - Albums: Listado completo de todos los albums
    - Artistas: Listado completo de todos los artistas
  
  - Se podrá eliminar albumes y artistas. (PROYECTO EXTRA)

- Página Spotify
  Página para buscar música en la plataforma Spotify. Habrá un buscador, y se podrá buscar por Albumes o Artistas.
  - Al buscar, se buscará por 2 conceptos, albúms y artistas. (ya dado proyecto base)
  - Tendrá las siguientes secciones
    - Featuring: Albumes más populares (4)
    - Artitas: Todos los artistas de la búsqueda.
    - Albúms: Todos los albúms de la búsqueda.
  - Opciones:
    - Cada album y artista, al hacer click sobre la imagen, el detalle de un Albúm o artista. Desde ese detalle, se podrá agregar el albúmm o artista a la BD.
    - Detalle albúm: Se muestra su foto, nombre albúm y todas sus canciones
    - Detalle artista: Se muestra su nombre y todas sus albumes.

- Registro / Login de usuarios
  - Se podrá registrar un usuario
  - Se podrá loguear un usuario
  - Se podrá cerrar sesión
 
**Permisos**  [PROYECTO EXTRA]

- Invitados:
  - Ver portada
  - Ver albúms página, pero no detalle.
  - Ver artistas página, pero no detalle.
  - No puede ver página Spotify.
- Logados
  - Usuario: 
    - Puede visualizar todo.
    - Puede agregar un albúm o artista a su colección. (Si el albúm o artista no existen en catálogo global, se deben agregar al catálogo primero)
    - Puede agregar un albúm o artista desde Spotify a su colección y al catálogo global.
  - Administrador
    - Elimimar un album del catálogo global, automáticamente eliminarlo de todos los usuarios que lo tengan.
    - Elimimar un artista del catálogo global, automáticamente eliminarlo de todos los usuarios que lo tengan.



### Requisitos Astro

- Se deben utilizar Layout.
- Se deben utilizar Páginas.
- Se deben utilizar Componentes.
  - Renderizados en tiempo construcción (estáticos)
  - Renderizados en tiempo de petición/request (dinámicos)
  
- Se deben utilizar componentes, al menos para los elementos:
  - Tarjeta Albúm y/o Artista (pueden ser la misma o distinta)
  - Mostrar línea de una Canción/Track
  - Mostrar línea de una Canción/Track con imagen
  
- Persnalizar página de Error 500
- Personalizar página de Error 404


## Recursos

Para la elaboración de este proyecto, se adjuntan los siguientes recursos:

Curso principal (clave: sdfsdf)

- [Astro: curso](https://1drv.ms/f/c/c1d9ecea1bbc140a/EqrJLjUpL-hPiEcppjKZtDcBV2K6--kplD6s2pokbTzhOQ?e=Y5uqt9)

Videos

- [Desarrollo y Deploy de la Pre-landing web de la Velada del año IV](https://www.youtube.com/watch?v=BVnhDlbhPvs&list=PLUofhDIg_38rXS6QJDOQky5sYU-hQKwRv&index=1&pp=iAQB)
- [Creando sitio web oficial Velada IV](http://suarezdefigueroa.es:8080/course/view.php?id=165&section=6#tabs-tree-start:~:text=Creando%20sitio%20web%20oficial%20Velada%20IV)


Documentación:

- [Tailwind: documentación oficial](https://tailwindcss.com/)
- [Curso: Fundamentos de Tailwind](https://jssdocente.github.io/dwes2425d/temas/08/extra/tailwind/fundamentos-tailwind.html)
- [Astro: documentación oficial](https://docs.astro.build/en/getting-started/)
- [Atro: libro](https://understanding-astro-webook.vercel.app/)

Componentes/Iconos:

- [Shadcn/ui](https://ui.shadcn.com/)
- [BladeUI Icons](https://blade-ui-kit.com/blade-icons)
- [BladewindUI](https://bladewindui.com/)

  
## Primeros pasos

**Los pasos iniciales son los siguientes:**

1. Descargar proyecto base, y renombrar carpeta a `musify-astro`.
2. Copiar carpeta dentro del **Repositorio alumno** en carpeta `UT5`.
3. Instalar dependencias del proyecto con `pnpm`.
   
**Pasos configuración proyecto:**

Cambiar los datos del proyecto dentro del fichero `src\assets\data\site.json`.


**Compilar proyecto**

Para validar que todo está ok, antes de empezar, hay que validar que todo se compile ok, ejecutar `pnpm run build`.

Si se ejecuta bien, podemos comenzar.


**Primer commit**

Realizar el 1º commit del proyecto, "[Musify] Initial commit".



## Proceso

En breve...


### API Rest (Datos)

Antes de poder consumir los datos desde un servidor, para poder ir creando el interfaz con datos estáticos (aún) se proporciona la salida que tendrá el API REST desde Laravel.

[Daatos albums/artistas/canciones](https://drive.google.com/drive/folders/1GzeNhk6sQzNYEJjAYOfz3M8pshVbCSWl?usp=sharing)


### Consumir API Rest (Laravel)

Próximamente...

## Anexos

### Rúbrica de evaluación

Próximamente...

### Funcionalidad de la aplicación.

En breve...
