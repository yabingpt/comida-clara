# AY FUEL

Registro personal de alimentos y macros, optimizado para iPhone. No necesita cuenta, cámara ni modelos que descargar: el catálogo y los cálculos funcionan en el navegador. Los registros se guardan localmente en el dispositivo.

## Registrar una comida

1. Elige **Desayuno**, **Comida**, **Cena** o **Colación**.
2. Busca el nombre en español o inglés. Cambia entre **Favoritos** y **Todo el catálogo**; toca ☆ para guardar platos e ingredientes frecuentes.
3. Toca cada ingrediente o plato para agregarlo al desglose.
4. Ajusta huevos, claras, piezas, tazas u otras unidades cuando estén disponibles, o corrige directamente los gramos.
5. Revisa calorías, proteína, carbohidratos y grasa por ingrediente y en el total. Después guarda la comida.

Debajo del resumen de hoy puedes guardar tus objetivos de calorías y macros; se muestran como referencia y no se comparan automáticamente con lo consumido. Tus objetivos se guardan en este navegador. Cada opción muestra sus valores de referencia por 100 g. La lista incluye alimentos comunes y platos de distintas cocinas. Si falta una marca o receta, añade los datos de una porción desde su etiqueta; la app los normaliza a 100 g y los guarda en Favoritos. Los tacos al pastor, arrachera, pollo y carnitas también aparecen en el buscador y crean un desglose editable de tortilla, carne y acompañamientos.

Los platillos compuestos del catálogo abren plantillas editables con ingredientes separados, desde tacos, enchiladas, chilaquiles, sopes, huaraches, tamales y guisos hasta platos internacionales, postres y pan dulce. Se puede corregir gramos, piezas o porciones, agregar o quitar ingredientes y guardar el plato con sus macros desglosados. Son recetas guía de una porción; ajusta aceite, salsas, rellenos y cantidades a lo que comiste. El catálogo añade ingredientes mexicanos como masa, chiles, tomatillo, chorizo, barbacoa, quesos y verduras. El shake permite anotar scoops completos o medios, proteína por scoop y los macros de la etiqueta. El diario agrupa comidas con su tipo y emoji, y permite desplegar los macros de cada ingrediente. **Exportar mi registro** descarga un respaldo JSON con el diario, tus alimentos propios, objetivos diarios y preferencias del shake.

## Qué significan los números

Las cifras son estimaciones de composición, no mediciones exactas ni consejo clínico. Se calculan desde los macros por 100 g del ingrediente multiplicados por la cantidad anotada. Elige la variante que corresponda (cruda o cocida, con o sin piel, con grasa añadida, etc.). En comida casera y platos compuestos hay variaciones por receta, marca, aceite y tamaño de porción; revisar la etiqueta o pesar los ingredientes mejora la estimación.

Las porciones caseras se orientan con equivalencias del [SMAE](https://fisiologia.facmed.unam.mx/wp-content/uploads/2019/02/2-Valoraci%C3%B3n-nutricional-Anexos.pdf); la composición utiliza como referencia las [tablas mexicanas del INCMNSZ](https://www.incmnsz.mx/2019/TABLAS_ALIMENTOS.pdf) y [USDA FoodData Central](https://fdc.nal.usda.gov/data-documentation/). El SMAE aporta porciones equivalentes por grupo, no una receta exacta para cada plato. Las recetas de la app son estimaciones sumadas desde sus ingredientes y cambian según el tamaño y la preparación.

## Privacidad y uso en iPhone

- No se usa ni se solicita acceso a la cámara o a Fotos.
- No hay un modelo de reconocimiento ni una descarga grande de IA.
- No se envían comidas a un servidor. El diario y las preferencias viven en el almacenamiento local de Safari.
- Si varias personas usan el mismo iPhone y el mismo perfil de Safari, compartirán ese almacenamiento local.
- Safari conserva los datos del sitio entre visitas; al borrar los datos del sitio también se borrará el diario. Puedes exportarlo antes.

Abre [AY FUEL](https://yabingpt.github.io/comida-clara/) en Safari. Para tenerla como icono, usa **Compartir → Agregar a pantalla de inicio**. Después de cargar la app una vez, sus archivos principales quedan en caché para ayudar a abrirla sin conexión; Safari puede borrar la caché cuando libera espacio. Los datos nutricionales y el diario siguen disponibles en ese navegador.

## Archivos

- index.html: interfaz y ayuda.
- app.js: catálogo, cálculo de macros y diario.
- styles.css: diseño adaptable a móvil.
- manifest.webmanifest y sw.js: instalación PWA y caché sin conexión.
