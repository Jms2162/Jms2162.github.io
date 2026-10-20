/* ============================================================
   CERTIFICACIONES Y CURSOS / CERTIFICATIONS AND COURSES
   Mientras la lista esté vacía, el sitio muestra "Próximamente".
   Para agregar una, ponela dentro de los corchetes:

   { name: "Nombre", issuer: "Emisor", year: 2026, status: "done" },

   - status: "done" (completado) | "progress" (en curso)
   - issuer, year y url son opcionales
   - name puede ser texto único o { es: "...", en: "..." }
   ============================================================ */
const CERTS = [];