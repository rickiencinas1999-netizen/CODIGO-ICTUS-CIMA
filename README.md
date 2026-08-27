# CODIGO-ICTUS-CIMA

Aplicación web para el protocolo de Código Ictus de Urgencias — Hospital CIMA.

Incluye:

- **Checklist y cronómetro** del código: manejo inicial, escala de Cincinnati, línea de tiempo con metas institucionales (puerta-imagen, puerta-tratamiento), ventana terapéutica.
- **Registro de caso RES-Q**: identificación, antecedentes, NIHSS, Glasgow, ASPECTS, RACE, Rankin, neuroimagen, trombólisis, trombectomía (EVT), evolución, disfagia y alta.
- **Exportar informe**: resumen de texto para copiar, imprimir o descargar.
- **Envío por correo** con el informe ya redactado (mailto).
- **Código QR** de acceso generado por el propio servidor (apunta siempre a la URL donde esté desplegada la app).
- **Historial de casos**: cada dispositivo guarda su propio historial en `localStorage`, y además se puede guardar en el servidor para que cualquier equipo del hospital lo consulte.

## Requisitos

- Node.js 18+

## Instalación y uso

```bash
npm install
npm start
```

La aplicación queda disponible en `http://localhost:3000` (o el puerto definido en la variable de entorno `PORT`).

## Datos

Los casos guardados "en el servidor" se almacenan en una base de datos SQLite local en `data/ictus.db` (se crea automáticamente al arrancar). Esa carpeta está excluida de git.

## Estructura

- `server/index.js` — servidor Express: sirve la app estática y expone `GET/POST /api/casos` y `GET /api/qr`.
- `server/db.js` — conexión SQLite (better-sqlite3) y esquema de la tabla `casos`.
- `public/index.html` — la aplicación completa (checklist, cronómetro, escalas, formulario RES-Q).
