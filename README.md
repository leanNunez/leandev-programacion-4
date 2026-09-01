# LeanDev

Landing de una página para LeanDev, un proveedor de sistemas y bots de
WhatsApp para comercios de San Miguel de Tucumán. Trabajo práctico de
Programación IV (TP1 + TP2).

## Integrantes

- Leandro Núñez
- Nicolás Calderón
- Lourdrigues

## Descripción

Sitio de una sola sección (landing page) que presenta los tres servicios de
LeanDev — bot de pedidos por WhatsApp, sistema de clientes y stock, y páginas
web — con precios, forma de trabajo, preguntas frecuentes y un botón de
contacto directo por WhatsApp en cada sección.

## Tecnologías utilizadas

- HTML5 semántico
- CSS3 (variables, Flexbox, Grid, Media Queries)
- Google Fonts (Anton, Archivo, Space Mono)
- Sin frameworks ni dependencias externas de JavaScript

## ¿Dónde utilizamos Flexbox?

Como mecanismo de alineación en una sola dimensión: la barra de navegación
(`.nav__inner`), los botones (`.btn`), la lista de garantías del hero
(`.hero__proof`), el encabezado del ticket (`.ticket__head`) y el `summary`
de cada pregunta frecuente (`.qa summary`).

## ¿Dónde utilizamos Grid?

Como mecanismo de dos dimensiones: el layout de dos columnas del hero
(`.hero__grid`), las tarjetas de servicios (`.servicios__list`), los pasos de
"Cómo trabajo" (`.pasos__list`), las tarjetas de garantía (`.garantia__list`)
y el footer (`.footer__inner`).

## ¿Qué variables CSS creamos?

Todas viven en `:root`, en `styles/tokens.css`, agrupadas por categoría:

- **Color:** `--brand`, `--warm`, `--whatsapp`, la rampa neutra
  (`--paper`, `--ink`, etc.)
- **Tipografía:** `--font-display`, `--font-body`, `--font-mono` y la escala
  de tamaños `--t-xs` a `--t-2xl`
- **Espaciado:** `--s-1` a `--s-7`, en grilla de 8px
- **Forma:** `--r-sm`, `--r-md`, `--r-lg`, `--r-pill`, `--skew`
- **Movimiento:** `--dur`, `--ease`

Ningún componente escribe un valor crudo: todo sale de una variable.

## ¿Cómo implementamos el Responsive Design?

Mobile-first: los estilos base son para celular y las media queries
(`min-width`) agregan o reacomodan layout a partir de 560px, 800px, 860px,
900px y 940px. Además, la tipografía y el espaciado usan `clamp()` para
escalar de forma fluida entre esos puntos, no solo en los saltos de la media
query. Se agrega también `prefers-reduced-motion` para respetar la
configuración de accesibilidad del sistema operativo.

## Estrategias de SEO implementadas

1. **`<title>` y `<meta description>` optimizados**, más `lang="es-AR"`. Es lo
   que Google muestra en el resultado de búsqueda; objetivo: mejorar el CTR
   desde los resultados.
2. **`<link rel="canonical">`**, declara la URL única y autoritativa de la
   página; objetivo: evitar que Google trate variantes de la URL como
   contenido duplicado.
3. **Open Graph y Twitter Card** (`og:title`, `og:description`, `og:image`,
   etc.); objetivo: controlar cómo se ve la tarjeta cuando el link se comparte
   en WhatsApp o redes sociales.
4. **Datos estructurados JSON-LD** (`LocalBusiness` y `FAQPage`); objetivo:
   habilitar resultados enriquecidos (rich results) en Google, como el panel
   de negocio local y las preguntas desplegables debajo del resultado.
5. **`robots.txt` y `sitemap.xml`**; objetivo: indicarle a los rastreadores
   qué se puede indexar y dónde está cada URL del sitio.
6. **HTML semántico y jerarquía de encabezados** (`header`, `nav`, `main`,
   `section`, `article`, `footer`, un solo `h1`); objetivo: que los buscadores
   entiendan la estructura y la importancia relativa del contenido.
7. **Diseño responsive mobile-first** con `meta viewport`; objetivo: cumplir
   con el criterio de "mobile-friendly", que Google usa como factor de
   posicionamiento.

## Cómo correr el proyecto

No hay paso de build. Cualquiera de estas opciones sirve:

```bash
python3 -m http.server 8080
# http://localhost:8080
```

O abrir `index.html` directamente en el navegador con doble clic — el sitio
no depende de JavaScript para funcionar.

## Estructura

```
leandev/
├── img/                favicon y assets
├── styles/
│   ├── tokens.css      variables de diseño (:root)
│   └── styles.css      reset y componentes, consume las variables
├── index.html          markup y datos estructurados
├── robots.txt
├── sitemap.xml
└── README.md
```

## Flujo de trabajo en Git

- `main`: rama estable, lista para entregar.
- `dev`: rama de integración del equipo.
- `feat/*`: una rama por unidad de trabajo, cada una con su propio PR contra
  `dev` y revisor asignado. Al cerrar todas, se abre un PR final de `dev` a
  `main`.
