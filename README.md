# Recursos para el proyecto de Behance

Sitio estático para GitHub Pages. No requiere instalación ni compilación.

## Páginas

- `index.html`: vista conjunta del video y el título de prueba.
- `video.html`: video sin títulos, logos, botones ni barra de reproducción.
- `texto.html`: bloque independiente con «Título de prueba».
- `styles.css`: estilos y formato del texto.
- `video.js`: inicio automático y reproducción única.
- `recuerdos lo que se.mp4`: video original, conservado con su nombre.

## Comportamiento del video

El video comienza automáticamente, sin sonido y dentro de la página. Se reproduce una sola vez por carga de `video.html` y queda detenido en el último fotograma. Recargar la página permite una nueva reproducción. No se guarda un historial por visitante.

El archivo original tiene una resolución de 1900 × 900 píxeles y una duración aproximada de 28.2 segundos. El contenedor conserva su proporción de 19:9.

Si el navegador bloquea la reproducción automática, el visitante puede tocar el video o enfocarlo con Tab y pulsar Enter o Espacio para iniciarlo. No se muestra una capa ni un botón. Una vez iniciada la reproducción, estos gestos no reinician el video.

La reproducción automática reemplaza el comportamiento de la propuesta anterior, que esperaba un clic antes de cargar el video.

## Publicar con GitHub Pages

1. Sube los archivos de este directorio al repositorio `JoaquinJara/AlvaroJara-Recursos`, incluido el MP4.
2. En GitHub abre **Settings → Pages**.
3. Selecciona **Deploy from a branch**, la rama `main` y la carpeta `/(root)`; guarda.
4. Espera a que GitHub confirme la publicación. Las direcciones previstas son:

   - Vista conjunta: `https://joaquinjara.github.io/AlvaroJara-Recursos/`
   - Video: `https://joaquinjara.github.io/AlvaroJara-Recursos/video.html`
   - Texto: `https://joaquinjara.github.io/AlvaroJara-Recursos/texto.html`

Estas direcciones solo estarán disponibles cuando se hayan subido los archivos y publicado Pages. En una cuenta GitHub Free el repositorio debe ser público.

El MP4 pesa aproximadamente 62.6 MB: supera el límite de 25 MiB para subir un archivo mediante la web de GitHub. Usa Git o GitHub Desktop; el archivo está por debajo del límite de 100 MiB por archivo de Git. GitHub Pages no sirve los archivos almacenados con Git LFS.

## Incrustar en Behance

La aceptación de iframes de GitHub Pages debe probarse en el editor de Behance. Su documentación no confirma este proveedor. Que una página funcione en GitHub Pages no garantiza que Behance admita incrustarla.

Para secciones independientes, usa un bloque de **Incrustar medios** por página:

```html
<iframe
  src="https://joaquinjara.github.io/AlvaroJara-Recursos/video.html"
  width="1400"
  height="663"
  frameborder="0"
  scrolling="no"
  allow="autoplay"
  title="Video del proyecto">
</iframe>
```

```html
<iframe
  src="https://joaquinjara.github.io/AlvaroJara-Recursos/texto.html"
  width="1400"
  height="220"
  frameborder="0"
  scrolling="no"
  title="Texto del proyecto">
</iframe>
```

`allow="autoplay"` habilita la delegación de reproducción automática al iframe; la política final depende del navegador y de Behance. El atributo `title` describe el iframe para lectores de pantalla y no dibuja un título sobre el video.

Ajusta la altura del iframe del texto cuando cambies su contenido. El CSS de cada página se aplica dentro de su bloque y no cambia los estilos del resto de Behance.

## Editar el texto

Reemplaza el contenido de `<h1>` en `texto.html`. Ajusta `.text-block` y `.text-block h1` en `styles.css` cuando esté disponible el formato definitivo.
