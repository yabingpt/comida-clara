# Comida Clara

Registro personal de alimentos y macros, optimizado para iPhone. No necesita cuenta, cámara ni modelos que descargar: el catálogo y los cálculos funcionan en el navegador. Los registros se guardan localmente en el dispositivo.

## Registrar una comida

1. Elige **Desayuno**, **Comida**, **Cena** o **Colación**.
2. Busca el nombre en español o inglés. Cambia entre **Favoritos** y **Todo el catálogo**; toca ☆ en un plato o ingrediente para guardarlo en Favoritos.
3. Toca cada ingrediente o plato para agregarlo al desglose.
4. Ajusta huevos, claras, piezas, tazas u otras unidades cuando estén disponibles, o corrige directamente los gramos.
5. Revisa calorías, proteína, carbohidratos y grasa por ingrediente y en el total. Después guarda la comida.

Cada opción muestra sus valores de referencia por 100 g. La lista incluye alimentos comunes y platos de distintas cocinas. Si falta una marca o receta, añade los datos de una porción desde su etiqueta; la app los normaliza a 100 g y los guarda en Favoritos. Los tacos al pastor, arrachera, pollo y carnitas se pueden buscar y crean un desglose editable de tortilla, carne y acompañamientos. El catálogo también reúne variantes como birria, barbacoa, pescado, camarón y quesabirria, además de platos de distintas cocinas.

El shake permite anotar scoops completos o medios, proteína por scoop y los macros de la etiqueta. El diario agrupa comidas con su tipo y emoji, y permite desplegar los macros de cada alimento. **Exportar mi registro** descarga un respaldo JSON con el diario, tus alimentos propios y las preferencias del shake.

## Qué significan los números

Las cifras son estimaciones de composición, no mediciones exactas ni consejo clínico. Se calculan desde los macros por 100 g del ingrediente multiplicados por la cantidad anotada. Elige la variante que corresponda (cruda o cocida, con o sin piel, con grasa añadida, etc.). En comida casera y platos compuestos hay variaciones por receta, marca, aceite y tamaño de porción; revisar la etiqueta o pesar los ingredientes mejora la estimación.

Algunos valores se basan en referencias como [USDA FoodData Central](https://fdc.nal.usda.gov/data-documentation/). Los platos preparados usan promedios de referencia cuando no existe una receta única.

## Privacidad y uso en iPhone

- No se usa ni se solicita acceso a la cámara o a Fotos.
- No hay un modelo de reconocimiento ni una descarga grande de IA.
- No se envían comidas a un servidor. El diario y las preferencias viven en el almacenamiento local de Safari.
- Si varias personas usan el mismo iPhone y el mismo perfil de Safari, compartirán ese almacenamiento local.
- Safari conserva los datos del sitio entre visitas; al borrar los datos del sitio también se borrará el diario. Puedes exportarlo antes.

Abre [Comida Clara](https://yabingpt.github.io/comida-clara/) en Safari. Para tenerla como icono, usa **Compartir → Agregar a pantalla de inicio**. Después de cargar la app una vez, sus archivos principales quedan en caché para ayudar a abrirla sin conexión; Safari puede borrar la caché cuando libera espacio. Los datos nutricionales y el diario siguen disponibles en ese navegador.

## Archivos

- index.html: interfaz y ayuda.
- app.js: catálogo, cálculo de macros y diario.
- styles.css: diseño adaptable a móvil.
- manifest.webmanifest y sw.js: instalación PWA y caché sin conexión.