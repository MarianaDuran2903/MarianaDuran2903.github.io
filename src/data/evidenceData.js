import imgNote from "../assets/img-projects/note-app.png";
import urbanStyle from "../assets/img-projects/urbanStyle.png";
import legalWeb from "../assets/img-projects/legalweb.webp";
import mediCare from "../assets/img-projects/medicare.jpg";
import astroFit from "../assets/img-projects/Astrofit.jpg";
import Verbenas from "../assets/img-projects/challenge-newyze.png";
import ReactEcommerce from "../assets/img-projects/ecommers.jpg";
import PortfolioDev from "../assets/img-projects/PortfolioDev.jpg";
import VintageTone from "../assets/img-projects/vintageToneApp.jpg";
import AstroEcommers from "../assets/img-projects/astroEcommers.jpg";
import CvBuilder from "../assets/img-projects/CvBuilder.png";

// Este es el de la pagina de Evidencias

const PENDIENTE = "PENDIENTE: completar";

function slugify(texto) {
  return texto
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const evidenciasBase = [
 
  {
    titulo: "Ejercicios de SQL - Human Resources",
    tema: "Joins, subconsultas y filtrado de texto en SQL (Oracle)",
    descripcion:
      "Repositorio con ejercicios y consultas SQL realizados sobre el esquema HR de Oracle Database Sample Schemas 23.2 utilizando el esquema Human Resources (HR).",
    descripcionLarga:
      "Taller práctico de repaso de SQL realizado en clase (Bases de Datos 2) el 05/08/2026, sobre el esquema Human Resources (HR) de Oracle Database Sample Schemas 23.2.\n\nEl ejercicio consistió en explorar las tablas del esquema HR (EMPLOYEES, DEPARTMENTS, LOCATIONS, COUNTRIES, REGIONS, JOBS y JOB_HISTORY) y resolver un conjunto de consultas combinando distintas formas de unir tablas (NATURAL JOIN, INNER JOIN con ON, LEFT JOIN), filtros de texto con LIKE y subconsultas anidadas, comparando varias soluciones válidas para un mismo enunciado.",
    enunciado:
      "1. Traer los nombres, apellido, salario, país y continente de los empleados que pertenezcan al continente de Europa (resuelto con NATURAL JOIN y también con JOIN + ON).\n\n2. Traer los nombres de los empleados cuya segunda posición del nombre tenga la letra A (uso de LIKE '_a%').\n\n3. ¿Cuáles son los nombres, apellidos, fechas y cargos que ha tenido cada empleado en la empresa? (resuelto con INNER JOIN, con NATURAL JOIN + subconsultas anidadas, y con LEFT JOIN filtrando por historial de cargos).",
    imagen: imgNote.src,
    tecnologias: ["Oracle"],
    demo:  "",
    codigo: "",
    pdfUrl: "/pdf/Repaso_SQL_Bases_de_Datos_2.pdf",
    conceptosAplicados: [
      "NATURAL JOIN entre múltiples tablas relacionadas",
      "INNER JOIN y LEFT JOIN con condición ON",
      "Subconsultas anidadas (subqueries en el FROM)",
      "Filtrado de texto con el operador LIKE y comodines",
      "Concatenación de columnas (operador || y función CONCAT)",
      "Ordenamiento de resultados con ORDER BY",
      "Esquema Human Resources (HR) de Oracle Database Sample Schemas",
    ],
    categoria: "SQL",
  },

  {
    titulo: "Ejercicios SQL - Tablas y Vistas con HR",
    tema: "CREATE TABLE AS SELECT y CREATE VIEW en SQL (Oracle)",
    descripcion:
      "Repositorio con ejercicios SQL sobre creación de tablas y vistas utilizando copias de las tablas del esquema Human Resources (HR) de Oracle Database.",
    descripcionLarga:
      "Taller práctico de SQL sobre creación y utilización de tablas y vistas utilizando el esquema Human Resources (HR) de Oracle Database.\n\nLos ejercicios siguen un flujo progresivo: primero se crean tablas propias a partir de las tablas originales del esquema HR utilizando CREATE TABLE ... AS SELECT. Posteriormente, estas tablas propias se utilizan como fuente para crear diferentes vistas mediante CREATE VIEW ... AS SELECT.\n\nEl conjunto de ejercicios comienza con copias completas de tablas como EMPLOYEES y DEPARTMENTS, continúa con copias seleccionando únicamente determinadas columnas y posteriormente incorpora filtros, cálculos, alias, JOIN entre tablas propias y vistas que combinan varias fuentes de información. Finalmente se construye una vista integradora que utiliza varias tablas copiadas del esquema HR y una relación reflexiva de EMPLOYEES para obtener la información del jefe de cada empleado.",
    enunciado:
      "1. Crear una copia completa de la tabla HR.EMPLOYEES mediante CREATE TABLE ... AS SELECT.\n\n2. Crear una copia de HR.DEPARTMENTS para utilizarla posteriormente en las vistas.\n\n3. Crear una copia de HR.JOBS seleccionando únicamente las columnas necesarias.\n\n4. Crear una vista básica utilizando la tabla propia EJ_EMPLOYEES.\n\n5. Crear una vista filtrando los empleados cuyo salario sea mayor a 5000.\n\n6. Crear una vista relacionando EJ_EMPLOYEES con EJ_DEPARTMENTS mediante LEFT JOIN.\n\n7. Crear una vista relacionando los empleados con sus cargos utilizando EJ_JOBS.\n\n8. Crear una copia de HR.LOCATIONS y utilizarla posteriormente en una vista junto con los departamentos.\n\n9. Crear una vista con varias tablas propias, incluyendo datos del empleado, departamento, cargo y un cálculo del salario anual.\n\n10. Crear un ejercicio integrador mediante copias de tablas de HR y una vista completa que reúna empleado, departamento, cargo, jefe, ciudad, país y salario.",
    imagen: imgNote.src,
    tecnologias: ["Oracle", "SQL"],
    demo: "",
    codigo: "",
    pdfUrl: "/pdf/Ejercicios_HR_Tablas_y_Vistas_Resueltos.pdf",
    conceptosAplicados: [
      "CREATE TABLE ... AS SELECT (CTAS)",
      "Creación de tablas a partir de consultas SELECT",
      "Selección de columnas específicas al crear tablas",
      "Creación de tablas propias a partir del esquema HR",
      "CREATE VIEW ... AS SELECT",
      "Creación de vistas sobre tablas propias",
      "Filtros con WHERE dentro de vistas",
      "LEFT JOIN entre tablas propias",
      "JOIN entre múltiples tablas",
      "Alias de tablas y columnas",
      "Cálculos y columnas derivadas",
      "Concatenación de nombres con ||",
      "SELF JOIN utilizando una copia de EMPLOYEES",
      "Separación entre tablas de origen y vistas de consulta",
      "Esquema Human Resources (HR) de Oracle Database",
    ],
    categoria: "SQL",
  },

  {
    titulo: "Ejercicios SQL - Joins y Relaciones entre Tablas",
    tema: "Joins, relaciones entre tablas y consultas SQL en Oracle",
    descripcion:
      "Repositorio con ejercicios y consultas SQL realizados sobre el esquema HR de Oracle Database, enfocados en diferentes tipos de JOIN y relaciones entre tablas.",
    descripcionLarga:
      "Taller práctico de SQL realizado en clase (Bases de Datos 2), utilizando el esquema Human Resources (HR) de Oracle Database.\n\nLos ejercicios trabajan diferentes formas de relacionar tablas del esquema HR, incluyendo INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL OUTER JOIN, CROSS JOIN, NATURAL JOIN, JOIN con USING, JOIN con ON y la sintaxis antigua de Oracle utilizando (+). También se incluyen relaciones reflexivas mediante SELF JOIN, uso de NVL para manejar valores NULL y una consulta final que combina múltiples tablas relacionadas del esquema HR.",
    enunciado:
      "1. Contar cuántos empleados no tienen un departamento asignado utilizando IS NULL.\n\n2. Obtener los empleados que tienen un departamento utilizando INNER JOIN.\n\n3. Obtener todos los empleados y su departamento utilizando LEFT JOIN.\n\n4. Utilizar NVL para mostrar un mensaje cuando un empleado no tenga departamento.\n\n5. Resolver el mismo problema utilizando RIGHT JOIN y NVL.\n\n6. Obtener empleados y departamentos utilizando FULL OUTER JOIN.\n\n7. Relacionar la tabla EMPLOYEES consigo misma para mostrar cada empleado y su jefe mediante SELF JOIN.\n\n8. Generar todas las combinaciones posibles entre empleados y departamentos mediante CROSS JOIN.\n\n9. Relacionar EMPLOYEES y DEPARTMENTS mediante NATURAL JOIN.\n\n10. Practicar NATURAL JOIN entre dos referencias de la tabla EMPLOYEES.\n\n11. Realizar una unión utilizando JOIN ... USING.\n\n12. Realizar una unión utilizando JOIN ... ON.\n\n13. Resolver un LEFT JOIN utilizando la sintaxis tradicional de Oracle con (+).\n\n14. Resolver el mismo LEFT JOIN utilizando la sintaxis ANSI moderna.\n\n15. Realizar una consulta completa combinando empleados, departamentos, cargos, jefes, ubicaciones y países.",
    imagen: imgNote.src,
    tecnologias: ["Oracle", "SQL"],
    demo: "",
    codigo: "",
    pdfUrl: "/pdf/Ejercicios_SQL_Clase_Base_de_Datos.pdf",
    conceptosAplicados: [
      "INNER JOIN",
      "LEFT JOIN",
      "RIGHT JOIN",
      "FULL OUTER JOIN",
      "CROSS JOIN",
      "NATURAL JOIN",
      "JOIN con USING",
      "JOIN con ON",
      "SELF JOIN o relación reflexiva",
      "Manejo de valores NULL con IS NULL",
      "Función NVL",
      "Sintaxis tradicional de Oracle con (+)",
      "Alias de tablas",
      "Concatenación de columnas con el operador ||",
      "Relaciones entre múltiples tablas",
      "Esquema Human Resources (HR) de Oracle Database",
    ],
    categoria: "SQL",
  },

];

export const evidencias = evidenciasBase.map((evidencia) => ({
  ...evidencia,
  slug: slugify(evidencia.titulo),
}));
