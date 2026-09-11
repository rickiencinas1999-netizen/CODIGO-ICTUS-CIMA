# CODIGO-ICTUS-CIMA

Código Oro — activación y triaje obstétrico, checklists del Equipo de
Respuesta Inmediata Obstétrica (ERIO) y registro de caso para el
protocolo de emergencia obstétrica del Hospital CIMA. Cubre las tres
vertientes principales (hemorragia postparto, crisis
hipertensiva/eclampsia y reanimación cardiopulmonar obstétrica) además
de otras causas de riesgo obstétrico (sepsis, inversión uterina,
embolia de líquido amniótico, trauma e incompatibilidad Rh) y el
debriefing post-simulacro. App hermana de [Código
Azul](https://github.com/rickiencinas1999-netizen/codigo-azul-cima).

Contenido clínico basado en el procedimiento institucional
PR-ENF/GRL-018 "Activación del Código ORO, integración y actuación del
Equipo de Respuesta Inmediata Obstétrica (ERIO)" y en el checklist de
verificación del Hospital CIMA.

## Desarrollo local

```bash
npm install
npm start
```

Abre `http://localhost:3000`.

## Despliegue en Render

Este repo incluye `render.yaml` (plan Free, sin disco persistente — cada
reinicio del servicio borra `data/oro.db`; el historial en cada
dispositivo vía localStorage no se ve afectado). En el dashboard de
Render: **New → Blueprint**, selecciona este repositorio y Render
detecta `render.yaml` automáticamente.

Ver `DEPLOYMENT.md` para desplegar en un servidor propio del hospital.
