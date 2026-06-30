JuandaFit v7 - Importación de clientes + categorías + sesión persistente

Cambios incluidos:
1. El entrenador puede crear categorías de ejercicios desde la creación de ejercicios globales.
2. Firebase Auth mantiene persistencia local para no cerrar sesión al recargar.
3. Nuevo módulo en el panel entrenador: "Importar clientes".
4. El entrenador puede descargar una plantilla CSV, subir Excel/CSV y ver una vista previa antes de crear cuentas.
5. La importación crea cuentas reales en Firebase Auth usando correo + contraseña temporal.
6. La contraseña temporal predeterminada es 123456, porque Firebase exige mínimo 6 caracteres.
7. Al primer ingreso, el cliente debe cambiar la contraseña temporal antes de ver su panel.
8. Si un correo ya existe en la base de datos, se actualizan sus datos de perfil sin cambiar su contraseña.
9. Se actualizó sw.js a una nueva versión de caché para evitar que el navegador use archivos viejos.

Archivos principales:
- index.html
- app.js
- sw.js
- ex-imgs.json
- logo.webp

Nota:
Para que la creación real de cuentas funcione, Firebase Authentication debe tener habilitado Email/Password y las reglas de Firestore deben permitir que el entrenador autenticado escriba documentos de usuarios.


V8 - Corrección contador semanal real
- El contador de días entrenados/perdidos ya no usa la clave mensual YYYY-MM.
- Ahora guarda asistencia con clave semanal real que inicia cada lunes: week_YYYY-MM-DD.
- Al cambiar de semana, el resumen queda limpio automáticamente.
- Mantiene compatibilidad con registros viejos del mes, pero solo si el timestamp corresponde a la semana actual.
