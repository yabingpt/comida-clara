# Comida Clara

Prototipo personal instalable en iPhone como app web (PWA). Interfaz y ayuda en español.

## Qué hace este prototipo

- Permite tomar una foto o escogerla desde la biblioteca.
- Clasifica el platillo en el navegador con Food-101. Si las sugerencias no coinciden, puedes lanzar CLIP opcionalmente: compara la foto con un catálogo más amplio de platos e ingredientes de varias cocinas. La descarga cuantizada adicional ronda 126 MB; solo ocurre si pulsas el botón.
- Busca más de 150 ingredientes y platos en español e inglés, con nombres normalizados para que funcionen búsquedas sin acentos.
- Sugiere una porción inicial editable basada en una ración típica. Ninguno de los modelos **mide los gramos desde la imagen**; pesa la porción o edita cada ingrediente si quieres acercarte más.
- Permite registrar alimentos comunes con unidades de cocina y su conversión aproximada a gramos: huevos, claras y yemas por pieza; fruta, tortillas y rebanadas por pieza; arroz y verduras por taza; aceite y mantequilla por cucharada/cucharadita. Puedes corregir la cantidad o los gramos y ambos campos se sincronizan.
- Calcula calorías, proteína, carbohidratos y grasas por ingrediente a partir de referencias por 100 g. Los platillos compuestos usan promedios generales porque su receta cambia mucho.
- Permite añadir ingredientes, corregir sus gramos y guarda el día en el almacenamiento local del navegador.
- No sube fotos a un servidor. La biblioteca de inferencia y el modelo se descargan del CDN/repositorio al usarlos; la primera descarga requiere internet y puede tardar.

Las cifras son estimaciones orientativas, no nutrición clínica. Los datos de alimentos simples están normalizados por 100 g a partir de referencias de composición como USDA FoodData Central; los platillos preparados son aproximaciones promedio, no recetas estandarizadas. La cocción, el corte, la marca, el aceite y las porciones alteran los valores. USDA mantiene bases distintas para alimentos básicos y alimentos preparados/porciones, por lo que el dato adecuado depende del alimento concreto. [Documentación de FoodData Central](https://fdc.nal.usda.gov/data-documentation/)

### Unidades, huevo y estado de preparación

El huevo se distingue como huevo entero cocido, crudo, frito con grasa promedio absorbida o revuelto sencillo; también puedes añadir claras y yemas como unidades separadas. Como equivalencias de referencia, un huevo entero grande aporta cerca de 50 g comestibles, una clara cerca de 33 g y una yema cerca de 17 g. Las porciones reales varían con el tamaño del huevo. El huevo frito ya incluye una cantidad promedio estimada de grasa absorbida; si quieres contar el aceite con precisión, registra el huevo cocido y añade el aceite que mediste, sin duplicar ambas estimaciones. El revuelto sencillo no incluye leche, queso ni grasa añadida: agrégalos aparte si los usaste. La foto no puede deducirlos.

También se separaron algunas entradas secas/crudas de las cocidas (arroz, pasta, papa y pollo), porque usar la entrada incorrecta tras cocinar cambia mucho el resultado por el agua absorbida o perdida. Elige la entrada que corresponde al momento en que pesaste el alimento. Las tazas y piezas son equivalencias típicas, no mediciones universales; la balanza sigue siendo la mejor opción cuando la cantidad exacta importa.

## Registro directo de proteína en polvo

La tarjeta “Mi shake de proteína” registra un scoop o medios scoops directamente en el total diario, sin foto. El punto de partida es 24 g de proteína por scoop; puedes editarlo y guardar los macros habituales de la etiqueta en este navegador. Las calorías se calculan desde proteína/carbohidratos/grasas si dejas kcal vacío, o puedes escribir las kcal de la etiqueta. Este acceso rápido registra el polvo; leche, fruta u otros añadidos se registran como ingredientes aparte.

## Abrir en iPhone

Safari necesita servir la app desde una dirección HTTPS para que pueda agregarse a la pantalla de inicio y funcionar como PWA. No hace falta Mac ni pagar una cuenta de desarrollador de Apple.

1. Descomprime el paquete en una computadora Windows.
2. Publica la carpeta `Comida Clara` como sitio estático gratuito (por ejemplo, en GitHub Pages). Sube los archivos de esta carpeta manteniendo sus nombres y estructura.
3. Abre la URL HTTPS publicada en Safari en el iPhone.
4. Pulsa **Compartir → Agregar a pantalla de inicio**.
5. Con internet, toma una foto y espera a que se descargue Food-101 la primera vez. La búsqueda CLIP más amplia es opcional y descarga otro modelo la primera vez que la pulses. Después, las fotos se analizan en el navegador del iPhone.

También puedes abrir `index.html` en una computadora para revisar la interfaz, pero el modo archivo no sirve para instalarla como PWA.

## Contenido

- `index.html` — pantalla principal y ayuda.
- `app.js` — modelo en navegador, edición nutricional y registro local.
- `styles.css` — diseño adaptable a teléfono.
- `manifest.webmanifest` y `sw.js` — instalación y caché de recursos de la app.

## Privacidad y almacenamiento

El análisis de la foto sucede en el dispositivo; la app no manda tus fotos a un servicio de inferencia. Los registros y miniaturas se guardan en el almacenamiento local de Safari; si borras los datos del sitio, se eliminan. Transformers.js y los modelos se obtienen de servicios externos al descargarse. La descarga inicial usa datos móviles si no estás en Wi-Fi.


### Corrección después de probarla

El primer prototipo tenía un error: las etiquetas que no encontraba podían terminar convertidas en “arroz”. Se corrigió para que ya no haga esa sustitución silenciosa. Ahora presenta opciones mexicanas rápidas (incluidos tacos al pastor, carnitas y pollo) para reemplazar una predicción incorrecta. El modelo Food-101 puede confundir platillos y no está especializado en todas las recetas mexicanas; confirma siempre el resultado.

La app espera a que confirmes una sugerencia o elijas un alimento manualmente antes de habilitar el guardado. Ya no muestra porcentajes de “confianza” de Food-101 como si fueran certeza. Para cada ingrediente, los resultados de búsqueda enseñan kcal y macros por 100 g y se ordenan para favorecer el nombre exacto y el plato preparado frente a una coincidencia parcial.

## Desglose por componentes y ejemplos de entrenamiento

La plantilla de tacos permite escoger pastor, arrachera, pollo o carnitas. Cada variante se desglosa en tortilla, tipo de carne, pico de gallo y, cuando aplica, piña y salsa. Puedes editar el número de tacos, las piezas de tortilla, o los gramos individuales y añadir/quitar ingredientes. Las cantidades iniciales son supuestos de receta por taco, no una medición de la foto.

Al guardar una comida, la foto reducida y tus etiquetas/cantidades se conservan localmente. **Exportar ejemplos** descarga el conjunto etiquetado acumulado. La app no reentrena el reconocimiento visual: sí personaliza las plantillas de tacos a partir de las comidas guardadas, usando la mediana de gramos por taco y descontando ingredientes que omitiste en la mayoría de tus registros. Esto limita el efecto de una porción atípica. Para que el perfil refleje porciones reales, registra los gramos pesados; con cantidades visuales seguirá siendo una personalización aproximada.

Si el navegador bloquea o no logra descargar el módulo/modelo remoto, el registro manual sigue disponible y la app muestra el motivo del error. Se versionó la caché PWA para que una actualización no siga sirviendo el JavaScript anterior.

### Catálogo de nutrientes y reconocimiento actual

El catálogo incluye alimentos básicos de distintos grupos y platillos de varias cocinas. Se corrigieron equivalencias engañosas como “papas fritas”→papa cocida, “pastel de manzana”→manzana y platos compuestos→un ingrediente aislado; ahora varias clases de Food-101 usan entradas de plato preparado con macros propios. Los macros de platillos con mucha variación (por ejemplo, curry, burrito o pizza) siguen siendo promedios genéricos: el usuario debe corregir la receta real.

Food-101 fue entrenado para 101 nombres de platillo y reporta su evaluación en ese mismo conjunto; esto no significa 92% de acierto en cualquier comida del mundo ni en los ingredientes. CLIP brinda una búsqueda visual abierta sobre el catálogo local, pero sus similitudes también son relativas y no constituyen probabilidades ni mediciones. La documentación de Transformers.js permite correr ambos modelos ONNX en el navegador. [Modelo Food-101](https://huggingface.co/onnx-community/swin-finetuned-food101-ONNX), [modelo CLIP ONNX](https://huggingface.co/Xenova/clip-vit-base-patch32), [Transformers.js](https://huggingface.co/docs/transformers.js/en/index).

No se añadió un segmentador de ingredientes: FoodSeg103 tiene máscaras de ingredientes, pero la investigación destaca el solapamiento y la dificultad de reconocerlos; las máscaras no estiman masa ni peso. [Artículo del conjunto FoodSeg103](https://arxiv.org/abs/2105.05409)

Las correcciones de alimentos y gramos se guardan localmente y se pueden exportar; eso no actualiza los pesos de la red neuronal. Las plantillas de tacos se personalizan con la mediana de tus registros. Para otros platos, después de guardar al menos dos veces la misma categoría visual con sus ingredientes corregidos, la app reutiliza la mediana de esos desgloses como punto de partida; revisa siempre si la receta o porción es distinta. No se agregó ninguna API o servicio pagado. El caché se versiona para que las actualizaciones reemplacen el código anterior.
