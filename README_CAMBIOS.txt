JuandaFit v6 - Categorías y sesión persistente

Cambios aplicados:
1. El entrenador ahora puede crear categorías de ejercicios desde la pestaña "+ Añadir ejercicio".
2. Las categorías creadas se guardan en Firestore en appMeta/exerciseCategories y también tienen respaldo local en localStorage.
3. Al crear un ejercicio global, el entrenador puede seleccionar una categoría existente o una categoría recién creada.
4. Los ejercicios personalizados ya no se pierden si pertenecen a una categoría creada por el entrenador.
5. Se ajustó el arranque para no mostrar la pantalla de login mientras Firebase restaura la sesión.
6. Se fuerza persistencia LOCAL de Firebase Auth para conservar sesión al recargar o reabrir la app.
7. Se actualizó el cache del service worker para obligar a tomar la nueva versión.

Archivos principales:
- index.html
- app.js
- sw.js
- ex-imgs.json
- logo.webp
