---
name: audit-sec
description: DevSecOps Scanner.
trigger: /audit-sec
---
<action>Ejecuta: `npm audit` en terminal antes de analizar.</action>
<target>Archivos `.ts`, `.tsx`, `.json`</target>
<audit-vectors>Zod schemas en Server Actions, XSS/Injection, Dependencias cruzadas.</audit-vectors>
<output>Reporte técnico y parches de código.</output>
