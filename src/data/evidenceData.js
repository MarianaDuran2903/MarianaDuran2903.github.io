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

  {
  titulo: "Repaso de SQL - Bases de Datos 2",

  tema:
    "Repaso de SQL: operadores, NULL, JOIN, subconsultas, CTE y funciones de ventana",

  descripcion:
    "Guía ampliada de ejercicios y dudas de SQL realizada para la asignatura Bases de Datos 2 utilizando Oracle Database y el esquema Human Resources (HR).",

  descripcionLarga:
    "Repaso de SQL realizado para la asignatura Bases de Datos 2, utilizando el esquema Human Resources (HR) de Oracle Database. " +
    "El documento reúne ejercicios, explicaciones y ejemplos sobre diferentes conceptos fundamentales de SQL, incluyendo operadores de filtrado, manejo de valores NULL, CASE, DECODE, COALESCE, JOIN, funciones de agregación, subconsultas, consultas multicolumna, CTE recursivas, GROUP BY, HAVING y funciones de ventana mediante OVER(). " +
    "También incluye ejercicios adicionales resueltos y una chuleta final con los conceptos principales para facilitar el repaso.",

  enunciado:
    "1. Trabajar con operadores de filtrado como BETWEEN, IN y LIKE.\n\n" +
    "2. Utilizar los comodines % y _ mediante LIKE para realizar búsquedas de texto.\n\n" +
    "3. Consultar valores NULL utilizando IS NULL e IS NOT NULL.\n\n" +
    "4. Comprender la lógica de tres valores de SQL y el comportamiento de NULL.\n\n" +
    "5. Utilizar la tabla DUAL de Oracle para ejecutar expresiones.\n\n" +
    "6. Clasificar empleados según su salario utilizando CASE.\n\n" +
    "7. Utilizar DECODE para realizar equivalencias exactas.\n\n" +
    "8. Utilizar COALESCE para trabajar con valores NULL.\n\n" +
    "9. Comprender la diferencia entre colocar condiciones en ON y WHERE dentro de un LEFT JOIN.\n\n" +
    "10. Utilizar COUNT, AVG y SUM y comprender su comportamiento frente a NULL.\n\n" +
    "11. Resolver una subconsulta correlacionada para obtener la cantidad de compañeros de cada empleado.\n\n" +
    "12. Utilizar IN junto con una subconsulta y GROUP BY.\n\n" +
    "13. Realizar consultas multicolumna utilizando IN.\n\n" +
    "14. Crear una CTE recursiva para recorrer la jerarquía empleado-manager.\n\n" +
    "15. Utilizar UNION ALL y CYCLE dentro de una CTE recursiva.\n\n" +
    "16. Utilizar GROUP BY y HAVING para calcular y filtrar grupos.\n\n" +
    "17. Utilizar OVER() para realizar cálculos de ventana sin eliminar el detalle de las filas.\n\n" +
    "18. Comparar ROWS y RANGE en funciones de ventana.\n\n" +
    "19. Utilizar EXISTS para comprobar la existencia de registros.\n\n" +
    "20. Utilizar SELF JOIN para relacionar empleados con sus managers.\n\n" +
    "21. Utilizar ROW_NUMBER() para asignar posiciones según el salario.",

  imagen: imgNote.src,

  tecnologias: [
    "Oracle",
    "SQL",
    "Oracle Database",
    "Human Resources (HR)"
  ],

  demo: "",

  codigo: "",

  pdfUrl: "/pdf/Repaso3_SQL_BD2_.pdf",

  conceptosAplicados: [
    "BETWEEN",
    "IN",
    "LIKE",
    "NOT LIKE",
    "Comodines % y _",
    "IS NULL",
    "IS NOT NULL",
    "NULL y lógica de tres valores",
    "DUAL",
    "CASE",
    "DECODE",
    "COALESCE",
    "LEFT JOIN",
    "ON vs WHERE",
    "COUNT(*)",
    "COUNT(columna)",
    "AVG",
    "SUM",
    "Subconsultas correlacionadas",
    "Subconsultas con IN",
    "Consultas multicolumna",
    "GROUP BY",
    "HAVING",
    "CTE",
    "CTE recursiva",
    "UNION ALL",
    "CYCLE",
    "OVER()",
    "Funciones de ventana",
    "ROWS",
    "RANGE",
    "UNBOUNDED PRECEDING",
    "CURRENT ROW",
    "EXISTS",
    "SELF JOIN",
    "ROW_NUMBER()",
    "ORDER BY",
    "Esquema Human Resources (HR)"
  ],

  categoria: "SQL",
},

{
  titulo: "Quiz 1 - SQL Avanzado en Oracle",

  tema:
    "Joins, subconsultas, CTE y funciones analíticas en Oracle",

  descripcion:
    "Quiz de Bases de Datos 2 enfocado en SQL avanzado en Oracle, trabajando joins, funciones analíticas, CTE recursivas, jerarquías y consultas Top-N.",

  descripcionLarga:
    "Quiz de Bases de Datos 2 sobre SQL avanzado en Oracle Database. " +
    "El ejercicio evalúa la construcción, diagnóstico y corrección de consultas utilizando joins, funciones de agregación, funciones analíticas, CTE y jerarquías recursivas. " +
    "También aborda el manejo de devoluciones mediante OUTER JOIN, acumulados por cliente, clasificación de pedidos, variaciones mensuales, jerarquías de categorías de productos y consultas Top-N por grupo. " +
    "El quiz requiere resolver problemas de lógica de consultas y considerar el comportamiento específico de Oracle 19c.",

  enunciado:
    "PREGUNTA 1 — Diagnóstico y reescritura de una consulta.\n\n" +
    "1. Identificar cuatro defectos presentes en una consulta SQL que busca listar, para cada cliente PREMIUM, sus pedidos de 2025, el valor total del pedido, el acumulado de compra hasta cada pedido, el número de devoluciones excluyendo las de garantía y los tres pedidos de mayor valor por cliente.\n\n" +
    "2. Explicar qué está mal en cada defecto, por qué afecta el resultado y cómo corregirlo, incluyendo problemas relacionados con funciones analíticas y joins.\n\n" +
    "3. Reescribir la consulta completa utilizando una CTE mediante WITH, incluyendo correctamente los pedidos que no tengan devoluciones y mostrando num_devoluciones = 0.\n\n" +
    "4. Analizar el comportamiento de la función analítica utilizada para calcular el acumulado cuando existen pedidos con la misma fecha.\n\n" +
    "PREGUNTA 2 — Construcción de un informe gerencial.\n\n" +
    "5. Construir un informe mensual de 2025 agrupado por región de sucursal, mes y categoría raíz del producto.\n\n" +
    "6. Resolver la jerarquía de categorías para obtener la categoría raíz independientemente de la profundidad de la jerarquía.\n\n" +
    "7. Calcular la venta neta como el valor vendido menos el valor devuelto.\n\n" +
    "8. Imputar el valor devuelto al mes correspondiente a la fecha de devolución.\n\n" +
    "9. Calcular la variación porcentual de la venta neta frente al mes inmediatamente anterior para la misma región y categoría raíz.\n\n" +
    "10. Obtener el puesto de cada categoría raíz dentro de su región utilizando la venta neta acumulada de todo 2025.\n\n" +
    "11. Mostrar únicamente las tres categorías raíz con mayor venta neta anual de cada región.\n\n" +
    "12. Utilizar obligatoriamente un CTE recursivo o una consulta jerárquica, al menos dos funciones analíticas y al menos un OUTER JOIN justificado.\n\n" +
    "13. Explicar por qué una jerarquía de N niveles no debe resolverse mediante un número fijo de SELF JOIN.\n\n" +
    "14. Explicar el funcionamiento del miembro ancla y el miembro recursivo de una CTE recursiva, o START WITH y PRIOR en CONNECT BY.\n\n" +
    "15. Analizar por qué ROWNUM <= 3 no permite obtener correctamente un Top-N por grupo y explicar las alternativas correctas.",

  imagen: imgNote.src,

  tecnologias: [
    "Oracle",
    "SQL",
  ],

  demo: "",

  codigo: "",

  pdfUrl: "/pdf/Quiz_1-Bases_de_Datos2.pdf",

  conceptosAplicados: [
    "JOIN",
    "INNER JOIN",
    "LEFT JOIN",
    "Funciones de agregación",
    "SUM",
    "COUNT",
    "Funciones analíticas",
    "OVER()",
    "PARTITION BY",
    "ORDER BY",
    "RANK()",
    "Acumulados",
    "CTE",
    "WITH",
    "CTE recursiva",
    "ROWNUM",
    "EXTRACT",
    "GROUP BY",
  ],

  categoria: "SQL",
},

];

export const evidencias = evidenciasBase.map((evidencia) => ({
  ...evidencia,
  slug: slugify(evidencia.titulo),
}));
