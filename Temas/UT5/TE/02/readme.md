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

### API Rest (Datos)

Antes de poder consumir los datos desde un servidor, para poder ir creando el interfaz con datos estáticos (aún) se proporciona la salida que tendrá el API REST desde Laravel.

[Daatos albums/artistas/canciones](https://drive.google.com/drive/folders/1GzeNhk6sQzNYEJjAYOfz3M8pshVbCSWl?usp=sharing)


### 1ª Parte. Página estática.

En esta 1ª versión, la página será estática, generandosé complemtamente estática, bien con datos fijos o bien con datos dinámicos obtenidos en el momento de la construcción (`pnpm run build`).

**Configurar datos de prueba**

Estos datos de prueba, están disponibles en el [siguiente enlace](https://drive.google.com/drive/folders/1GzeNhk6sQzNYEJjAYOfz3M8pshVbCSWl?usp=sharing).

1. Descargar los ficheros `albums.json, artist.json, tracks.json` 
2. Gardarlos en  `assets\data\api\`.
  
**Crear tipos en Typescript**

Para poder poder consultar los datos, bien de forma estática (datos en local) o a través de una API (datos en remoto) es neceario crear los tipos que nos van a permitir poder acceder a los mismos de una manera mucho más sencilla.

1. Crea un carpeta `src\types`.
2. Crea un fichero `musify-api.types.ts`.
3. Guarda en ese fichero, lo siguiente.

```ts
export interface JsonApiResponse<T> {
  jsonapi: {
    version: string
  },
  data: T[];
}

export type Album = {
  type: string;
  id: string;
  attributes: {
    code: string;
    name: string;
    type: string;
    albumType: string;
    totalTracks: number;
    imageUrl: string;
    releaseDate: string;
    createdAt: string;
    updatedAt: string;
  };
  relationships: Relationships;
  links: DataLinks;
};

export type Artist = {
  type: string;
  id: string;
  attributes: {
    code: string;
    name: string;
    type: string;
    genre: string;
    popularity: number;
    imageUrl: string;
    releaseDate: string;
    createdAt: string;
    updatedAt: string;
  };
  relationships: Relationships;
  links: DataLinks;
};

export type Track = {
  type: string;
  id: string;
  attributes: {
    code: string;
    name: string;
    type: string;
    duration: number;
    trackNumber: number;
    popularity: number;
    playedTimes: number;
    createdAt: string;
    updatedAt: string;
  };
  relationships: {
    album?: DataLinks;
  };
  links: DataLinks;
};

export type DataLinks = {
  links: {
    related: string;
    self: string;
  },
  data?:ResourceLinkData | ResourceLinkData[] ;
}

export type Relationships = {
  albums?: DataLinks;
  artist?: DataLinks;
  user?: DataLinks;
  tracks?: DataLinks;
}

export type ResourceLinkData = {
  type: string;
  id: string;
}
```

**Crear funciones de búsqueda**

Otra tarea necesaria será obtener un los recursos vinculados, es decir, desde una Album su artista, desde un Album sus canciones. Esto se consigue proceando información relacionada. Esta información puede ser consultada vía datos remotos (Api) o en local(temporalmente.)

También tendremos que preparar nuestro proyecto, para saber si queremos realizar las peticiones a una API (real) o a datos locales, pero este conocimiento no debería estar en nuestras páginas, sino alojado en funciones auxiliares que nos faciliten este trabajo.

*más adelante vemos este punto*

**Crear configuración**

La App/Web se debe comportar de forma distinta en base a ciertas configuraciones. Estas configuraciones no pueden estar puestas a "fuego" en el código, sino que deben estar guardadas en algún fichero, que puede ser facilmente modificado, y el sistema obtenga estos datos de este fichero.

1. Crea un fichero `.env` en la raiz del proyecto.
2. Crear 2 variables: 
   - PUBLIC_MODE_API=local  #api
   - PUBLIC_MUSIFYAPI=http://musify.test/api/v1
3. En el fichero "env.d.ts", agrega las siguientes lineas
   ```ts
    interface ImportMetaEnv {
      readonly PUBLIC_MUSIFYAPI: string;
      readonly PUBLIC_MODE_API: string;
      // more env variables...
    }

    interface ImportMeta {
      readonly env: ImportMetaEnv;
    }
   ```

Ahora estas variables de entorno, las podremos obtener dentro de Astro, con `import.meta.env.{VARIABLE_NAME}`, así por ejemplo para obtener el valor de la variable de entorno `PUBLIC_MODE_API`, `import.meta.env.PUBLIC_MODE_API` desde cualquier fichero en Astro (parte JS/TS).


**Funciones Asistentes**

También es importante crear una serie de funciones globales, que vamos a utilizar en toda la aplicación:

1. Crea una carpeta `utils\` y crea los siguientes ficheros:
  `AlbumUtils.ts`, `helpers.ts`, `TrackUtils.ts`

2. Helpers.ts
    ```ts
    export const fetchData = async (url: URL | string) => {
      console.log(`fectch URL: ${url}`);
      const resp = await fetch(url);
      return await resp.json();
    };


    export function firstOrEmpty<T>(arr: T[], emptyValue: T): T {
      return arr.length > 0 ? arr[0] : emptyValue;
    }
    ```

3. AlbumUtils.ts
  
    ```ts
    import albumsData from "@/assets/data/api/albums.json";
    import { fetchData, firstOrEmpty } from '@/utils/helpers';
    import type { JsonApiResponse, Album, Artist, Track, ResourceLinkData } from "@/types/musify-api.types";
    import { MusifyAPI } from './MusifyAPI';
    import { TracksUtils } from "./TrackUtils";
    import { ArtistUtils } from "./ArtistUtils";

    export const AlbumUtils = {
      async getById(id: string) {

        if (import.meta.env.PUBLIC_MODE_API == 'local') {
          const results = albumsData.data.filter((item) => item.id == id);
          return firstOrEmpty(results, null);
        }

        //Llamada remota
        return await MusifyAPI.album.getById(id)

      },

      async getArtist(id: string) {


        if (import.meta.env.PUBLIC_MODE_API == 'local') {
          return await ArtistUtils.getById(id)
        }

        //Llamada remota
        return await MusifyAPI.artist.getById(id)

      },

      async getTracks(id: string) {


        if (import.meta.env.PUBLIC_MODE_API == 'local') {

          const album = await AlbumUtils.getById(id)
          if (!album)
            return [];

          return await Promise.all(
            (album.relationships?.tracks?.data as ResourceLinkData[])
              .map(async ({ id }) => {
                const track = await TracksUtils.getById(id);
                // console.log(track);
                return track;
              })
          )
        }

        //Llamada remota
        return await MusifyAPI.album.getTracks(id)

      },

      async getAll() {
        if (import.meta.env.PUBLIC_MODE_API == 'local') {
          console.log('en local.. retornado todos los datos')
          return albumsData;
        } else {
          return await MusifyAPI.album.getAll();
        }
      }
    }
    ```

4. ArtistUtils.ts

```ts
import artistsData from "@/assets/data/api/artists.json";
import { MusifyAPI } from "./MusifyAPI";
import { fetchData, firstOrEmpty } from "./helpers";
import type { Album, Artist, JsonApiResponse, ResourceLinkData, Track } from "@/types/musify-api.types";
import type { AriaAttributes } from "react";
import { AlbumUtils } from "./AlbumUtils";

export const ArtistUtils = {
  async getById(id: string) {
    if (import.meta.env.PUBLIC_MODE_API == 'local') {
      const results = artistsData.data.filter((item) => item.id == id);
      return firstOrEmpty(results, null);
    }

    //Llamada remota
    return await MusifyAPI.album.getById(id)
  },

  async getAlbums(id: string) {
      if (import.meta.env.PUBLIC_MODE_API == 'local') {

        let artistId = id;
        const artist = await ArtistUtils.getById(id)
        if (!artist)
          return [];

        return await Promise.all(
          (artist.relationships?.albums?.data as ResourceLinkData[])
            .map(async ({ id }) => {
              const album = await AlbumUtils.getById(id);
              // console.log(album);
              return album;
            })
        )
      }

      //Llamada remota
      return await MusifyAPI.artist.getAlbums(id)

  },

  async getAll() {
    if (import.meta.env.PUBLIC_MODE_API == 'local') {
      return artistsData;
    } else {
      return await MusifyAPI.artist.getAll();
    }
  }
}
```


5. TrackUtil.ts

    ```ts
    import tracksData from "@/assets/data/api/tracks.json";
    import type { JsonApiResponse, ResourceLinkData, Track } from "@/types/musify-api.types";
    import { fetchData, firstOrEmpty } from "./helpers";
    import { MusifyAPI } from "./MusifyAPI";
    import { AlbumUtils } from "./AlbumUtils";

    export const TracksUtils = {
      async getById(id: string) {

        if (import.meta.env.PUBLIC_MODE_API == 'local') {
          const results = tracksData.data.filter((item) => item.id == id);
          return firstOrEmpty(results, null);
        }

        //Llamada remota
        return await MusifyAPI.track.getById(id)
      },

      async getAlbumByTrackId(id: string) {

        if (import.meta.env.PUBLIC_MODE_API == 'local') {
          const track = await TracksUtils.getById(id)
          if (!track)
            return [];

          let albumId = (track.relationships?.album?.data as ResourceLinkData).id;
          return await AlbumUtils.getById(albumId);
        }

        //Llamada remota
        return await MusifyAPI.track.getAlbum(id);

      },

      async getAlbumByTrack(track: Track) {

        if (import.meta.env.PUBLIC_MODE_API == 'local') {
          let albumId = (track.relationships?.album?.data as ResourceLinkData).id;
          return await AlbumUtils.getById(albumId);
        }

        //Llamada remota
        return await MusifyAPI.track.getAlbum(track.id);
      },


      async getAll() {
        if (import.meta.env.PUBLIC_MODE_API == 'local') {
          console.log('en local.. retornado todos los datos')
          return tracksData;
        } else {
          return await MusifyAPI.track.getAll();
        }
      }
    }
    ```

### 2ª Parte. Conexión con API (servidor)

Para poder consumir datos, es neceario antes aplicar la lógica al servidor para servir peticiones siguiendo la convención [JsonAPI](https://jsonapi.org/).

> En este punto del proyecto, vamos a suponer que nuestro servidor ya devuelve datos utilizando la ruta `musify.test/api/v1/...`.

**Llamar a la API remota**

Para llamar a la API remota también necesitamos una serie de funciones, que liberen la complejidad a las páginas, y que tengan toda la lógica de las llamadas a la API dentro de estas funciones.

Crea un fichero `MusifyAPI.ts` dentro de carpeta `Utils`.

  ```ts
  import { fetchData, firstOrEmpty } from '@/utils/helpers';

  export const MusifyAPI = {
    buildBaseUrl() {
      return `${import.meta.env.PUBLIC_MUSIFYAPI}`
    },
    artist: {
      baseUrl(): string {
        return `${MusifyAPI.buildBaseUrl()}/artists`;
      },
      async getById(id: string) {
        return await fetchData(`${MusifyAPI.artist.baseUrl()}/${id}`)
      },
      async getAlbums(id: string) {
        return await fetchData(`${MusifyAPI.artist.baseUrl()}/${id}/albums`)
      },
      async getAll() {
        return await fetchData(`${MusifyAPI.artist.baseUrl()}`)
      }
    },
    album: {
      baseUrl(): string {
        return `${MusifyAPI.buildBaseUrl()}/albums`;
      },
      async getById(id: string) {
        return await fetchData(`${MusifyAPI.artist.baseUrl()}/${id}`)
      },
      async getAll() {
        return await fetchData(`${MusifyAPI.album.baseUrl()}`)
      },
      async getTracks(id: string) {
        return await fetchData(`${MusifyAPI.album.baseUrl()}/${id}/tracks`)
      },

    },
    track: {
      baseUrl(): string {
        return `${MusifyAPI.buildBaseUrl()}/tracks`;
      },
      async getById(id: string) {
        return await fetchData(`${MusifyAPI.track.baseUrl()}/${id}`)
      },
      async getAlbum(id: string) {
        return await fetchData(`${MusifyAPI.track.baseUrl()}/${id}/album`)
      },
      async getAll() {
        return await fetchData(`${MusifyAPI.track.baseUrl()}`)
      }
    }
  }
  ```

**Desactivar verificación de certificado**

Como en Laravel Herd estamos utilizando un certificado digital autofirmado, este no es válido a nivel general, y por tanto Node dará un error (seguramente). Para desactivarlo configurar esta variable de entorno:

```bash
set NODE_TLS_REJECT_UNAUTHORIZED=0
```

Para que tenga efecto, cerrar el terminal y volver a abrir.


### Consumir API Rest (Laravel)

Próximamente...

## Anexos

### Rúbrica de evaluación

Próximamente...

### Funcionalidad de la aplicación.

En breve...
