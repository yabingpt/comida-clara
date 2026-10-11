# AY FUEL

Registro personal de alimentos y macros, optimizado para iPhone. No necesita cuenta, cámara ni modelos que descargar: el catálogo y los cálculos funcionan en el navegador. Los registros se guardan localmente en el dispositivo.

## Registrar una comida

1. Elige **Desayuno**, **Comida**, **Cena** o **Colación**.
2. Busca el nombre en español o inglés. Cambia entre **Favoritos** y **Todo el catálogo**; toca ☆ en un plato o ingrediente para guardarlo en Favoritos.
3. Toca cada ingrediente o plato para agregarlo al desglose.
4. Ajusta huevos, claras, piezas, tazas u otras unidades cuando estén disponibles, o corrige directamente los gramos.
5. Revisa calorías, proteína, carbohidratos y grasa por ingrediente y en el total. Después guarda la comida.

La app se divide en Inicio, Registro, Metas y Perfil. En Perfil puedes guardar objetivos de calorías y macros; en Metas ves tu avance diario, el promedio de la semana y cuántos días quedaste cerca de tus objetivos. El catálogo se amplió con **467 alimentos nuevos**: ingredientes, preparaciones regionales e internacionales, productos de restaurantes y cadenas, bebidas, postres y porciones individuales. Incluye hamburguesas Burger King, rebanadas de pizza, tarta vasca, bao de cerdo agridulce y más. Los platillos compuestos que tienen receta guía abren un desglose editable por ingrediente; las porciones individuales se pueden ajustar en gramos.

Los platillos compuestos del catálogo abren plantillas editables con ingredientes separados, desde tacos, enchiladas, chilaquiles, sopes, huaraches, tamales y guisos hasta platos internacionales, postres y pan dulce. Se puede corregir gramos, piezas o porciones, agregar o quitar ingredientes y guardar el plato con sus macros desglosados. Son recetas guía de una porción; ajusta aceite, salsas, rellenos y cantidades a lo que comiste. El catálogo añade ingredientes mexicanos como masa, chiles, tomatillo, chorizo, barbacoa, quesos y verduras. El shake permite anotar scoops completos o medios, proteína por scoop y los macros de la etiqueta. El diario agrupa comidas con su tipo y emoji, y permite desplegar los macros de cada ingrediente. En Inicio puedes marcar el registro de hoy como guardado o borrarlo manualmente; los días anteriores se conservan y aparecen en Metas. Al cambiar de fecha, el registro no se elimina. **Exportar mi registro** descarga un respaldo JSON con el diario, tus alimentos propios, objetivos diarios y preferencias del shake.

## Qué significan los números

Las cifras son estimaciones de composición, no mediciones exactas ni consejo clínico. Se calculan desde los macros por 100 g del ingrediente multiplicados por la cantidad anotada. Elige la variante que corresponda (cruda o cocida, con o sin piel, con grasa añadida, etc.). En comida casera y platos compuestos hay variaciones por receta, marca, aceite y tamaño de porción; revisar la etiqueta o pesar los ingredientes mejora la estimación. En los productos Burger King, el sitio oficial de [Burger King LATAM](https://www.burgerkinglatino.com/es/menu-item/whopper) publica los macros de la Whopper clásica; las fichas oficiales de [Whopper Vegetal](https://www.burgerking.com.mx/menu/a-la-parrilla/whopper-vegetal-s.html), [Whopper BBQ](https://www.burgerking.com.mx/menu/a-la-parrilla/whopper-bbq-s.html) y [Whopper con queso](https://www.burgerking.com.mx/menu/a-la-parrilla/whopper-con-queso-s.html) publican calorías y tamaño de porción. Para las otras cadenas y recetas, los valores son estimaciones por porción y preparación y pueden variar por país, sucursal y personalización.

Las porciones caseras se orientan con equivalencias del [SMAE](https://fisiologia.facmed.unam.mx/wp-content/uploads/2019/02/2-Valoraci%C3%B3n-nutricional-Anexos.pdf); la composición utiliza como referencia las [tablas mexicanas del INCMNSZ](https://www.incmnsz.mx/2019/TABLAS_ALIMENTOS.pdf) y [USDA FoodData Central](https://fdc.nal.usda.gov/data-documentation/). El SMAE aporta porciones equivalentes por grupo, no una receta exacta para cada plato. Las recetas de la app son estimaciones sumadas desde sus ingredientes y cambian según el tamaño y la preparación. Nestum Arroz en polvo usa los valores por 100 g publicados por [Nestlé Nutrition Medical](https://www.nestlenutritionmedicallatam.com/productos/cereal-nestum-arroz); la crema de arroz simple toma como referencia harina de arroz blanca seca de USDA. Usa la etiqueta de tu envase si sus valores son distintos.

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
