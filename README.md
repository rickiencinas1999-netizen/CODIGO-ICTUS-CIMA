# CODIGO-ICTUS-CIMA
Código Ictus

## Subcomité de Trasplante Renal

`subcomite-trasplante-renal/index.html` es una herramienta tipo checklist, autocontenida (HTML/CSS/JS, sin dependencias de servidor), para llevar a cabo las sesiones del Subcomité de Trasplante Renal de CIMA. Basta con abrir el archivo en cualquier navegador.

Incluye:

- Datos de la sesión (fecha, hora, folio, modalidad, asistentes).
- Identificación del paciente (nombre, edad calculada automáticamente, diagnóstico, tipo de trasplante).
- Datos antropométricos: peso, talla, IMC (calculado y clasificado automáticamente), grupo sanguíneo y Rh.
- Checklist de laboratorios agrupado en biometría/química, panel viral/serologías e inmunología/histocompatibilidad, cada uno con estatus Completo/Incompleto/N.A. y comentario.
- Checklist de estudios de imagen y de valoraciones por especialista, con opción de agregar filas adicionales.
- Resumen clínico, acuerdos/pendientes y comentarios generales.
- Resolución del subcomité: Aprobado, Aprobado condicionado o No aprobado, con espacio para justificación.
- Botón para generar un resumen de acta en texto (copiable) y botón para imprimir/guardar como PDF.
- Borrador autoguardado en el navegador (localStorage) para no perder la captura durante la sesión; los datos no se envían a ningún servidor.
