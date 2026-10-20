/* ============================================================
   AQUÍ CARGÁS TUS LABORATORIOS / ADD YOUR LABS HERE.
   Copiá un bloque { ... }, pegalo al principio de la lista
   (con coma) y editá los datos.

   - difficulty: "easy" | "medium" | "hard" | "insane"
   - date: AAAA-MM-DD
   - Los textos (title, summary, text, lessons) pueden ser:
       "texto único"                     -> se ve igual en ambos idiomas
       { es: "texto", en: "text" }       -> uno por idioma
   - tags, tools y code son términos técnicos: van sin traducir.
   - NO publiques flags ni contraseñas reales de las plataformas.
   ============================================================ */
const LABS = [
  {
    title: "Machine name 2",
    platform: "TryHackMe",
    os: "Windows",
    difficulty: "medium",
    date: "2026-09-28",
    tags: ["SMB", "Active Directory", "Kerberoasting"],
    summary: {
      es: "Ejemplo: enumeración de SMB y escalada mediante Kerberoasting.",
      en: "Example: SMB enumeration and privilege escalation via Kerberoasting."
    },
    tools: ["nmap", "smbclient", "impacket", "hashcat"],
    steps: [
      { title: { es: "Enumeración", en: "Enumeration" },
        text: { es: "Escaneo de puertos y servicios.", en: "Port and service scan." },
        code: "nmap -sC -sV -p- 10.10.10.20" },
      { title: { es: "Acceso inicial", en: "Initial access" },
        text: { es: "Describí cómo conseguiste el primer acceso.", en: "Describe how you got your first foothold." } },
      { title: { es: "Escalada de privilegios", en: "Privilege escalation" },
        text: { es: "Describí cómo llegaste a administrador.", en: "Describe how you became administrator." } }
    ],
    lessons: {
      es: "Qué aprendiste y qué harías distinto la próxima vez.",
      en: "What you learned and what you would do differently next time."
    }
  },
  {
    title: "Machine name 1",
    platform: "Hack The Box",
    os: "Linux",
    difficulty: "easy",
    date: "2026-09-10",
    tags: ["Web", "SQLi", "SUID"],
    summary: {
      es: "Ejemplo: inyección SQL en el login y escalada por binario SUID.",
      en: "Example: SQL injection on the login form and escalation through a SUID binary."
    },
    tools: ["nmap", "gobuster", "sqlmap", "Burp Suite"],
    steps: [
      { title: { es: "Reconocimiento", en: "Reconnaissance" },
        text: { es: "Puertos 22 y 80 abiertos.", en: "Ports 22 and 80 are open." },
        code: "nmap -sC -sV 10.10.10.10" },
      { title: { es: "Enumeración web", en: "Web enumeration" },
        text: { es: "Se descubrió un panel de administración.", en: "An admin panel was discovered." },
        code: "gobuster dir -u http://10.10.10.10 -w common.txt" },
      { title: { es: "Explotación", en: "Exploitation" },
        text: { es: "Inyección SQL en el formulario de login.", en: "SQL injection in the login form." } },
      { title: { es: "Privilegios", en: "Privileges" },
        text: { es: "Binario con bit SUID mal configurado.", en: "Misconfigured SUID binary." },
        code: "find / -perm -4000 2>/dev/null" }
    ],
    lessons: {
      es: "Siempre revisar binarios SUID y credenciales reutilizadas.",
      en: "Always check SUID binaries and reused credentials."
    }
  }
];