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


  codigo: "/pdf/script_quiz_avanzado(1).sql",

  pdfUrl: "/pdf/Quiz_1-Bases_de_Datos2.pdf",

  pdfUrlSolucion: "/pdf/Quiz1_Solucion.pdf",

  conceptosAplicados: [
    "Se aprendió a utilizar funciones analíticas como RANK(), ROW_NUMBER(), DENSE_RANK() y SUM() OVER().", 

    "Se aprendió que las funciones analíticas no pueden filtrarse directamente mediante WHERE, por lo que puedo calcularlas primero en un CTE o subconsulta y después filtrarlas.", 

    "Se aprendió a utilizar PARTITION BY para realizar rankings.", 

    "Se aprendió la diferencia entre INNER JOIN y LEFT JOIN, especialmente para conservar registros que no tienen coincidencias.", 

    "Se aprendió que colocar condiciones de la tabla derecha en el WHERE puede cambiar el comportamiento esperado de un LEFT JOIN.", 

    "Se aprendió a utilizar CTE (WITH) para dividir consultas complejas en pasos más fáciles de entender y resolver.",

    "Se aprendió a trabajar con jerarquías de N niveles mediante CTE recursivos o CONNECT BY.", 

    "Se aprendió la diferencia entre RANK(), ROW_NUMBER() y DENSE_RANK() para resolver problemas de empates.", 

    "Se aprendió a combinar funciones de agregación (SUM, COUNT) con funciones analíticas para generar informes más complejos.",
  ],

  categoria: "SQL",
},

{
  titulo: "Optimización básica de consultas - Oracle",

  tema:
    "Planes de ejecución, índices y estadísticas del optimizador en Oracle",

  descripcion:
    "Taller de Bases de Datos sobre optimización básica de consultas en Oracle 19c: cómo leer un plan de ejecución, cuándo un índice ayuda o estorba, y qué patrones de escritura de SQL lo anulan sin darse cuenta.",

  descripcionLarga:
    "Clase práctica de dos horas sobre optimización básica de consultas en Oracle 19c, trabajada sobre una tabla de 300.000 filas para que los planes de ejecución mostrados fueran reales y no teóricos. " +
    "La sesión parte de una idea central: en SQL se declara QUÉ resultado se quiere, y es el optimizador de Oracle quien decide CÓMO obtenerlo, calculando un costo estimado para varios caminos posibles y quedándose con el más barato. " +
    "A partir de ahí se explica cómo leer un plan de ejecución con EXPLAIN PLAN y DBMS_XPLAN.DISPLAY (columnas Operation, Rows y Cost), la diferencia entre un TABLE ACCESS FULL y un acceso por índice (INDEX RANGE SCAN / INDEX UNIQUE SCAN + TABLE ACCESS BY INDEX ROWID), y por qué un índice no es una mejora automática: ayuda cuando el filtro descarta muchas filas y estorba (o el optimizador lo ignora) cuando devuelve buena parte de la tabla. " +
    "La segunda mitad de la clase se enfoca en las formas más comunes de anular un índice sin darse cuenta: aplicar una función sobre la columna filtrada (UPPER, TRUNC sobre fechas), comparar columnas de tipos distintos generando una conversión implícita (TO_NUMBER), y usar un comodín LIKE al inicio del patrón. " +
    "Cierra con el concepto de selectividad (por qué columnas con pocos valores distintos, como un canal binario, no se benefician de un índice) y con el papel de las estadísticas del optimizador: si están desactualizadas, el motor elige un plan pensado para una tabla que ya no existe, aunque la consulta esté perfectamente escrita.",

  enunciado:
    "Taller práctico ejecutado en dos scripts sobre un esquema propio (PRODUCTO, CLIENTE, VENTA con 300.000 filas), organizado en cuatro demostraciones:\n\n" +
    "1. Plan de ejecución: analizar con EXPLAIN PLAN + DBMS_XPLAN.DISPLAY una consulta simple sobre VENTA y entender qué informan las columnas Operation, Rows y Cost, y qué significa que el Predicate Information diga 'filter'.\n\n" +
    "2. Escaneo completo contra acceso por índice: comparar el plan de una búsqueda por llave primaria (INDEX UNIQUE SCAN) contra una búsqueda por una columna sin índice (TABLE ACCESS FULL); crear el índice faltante y repetir la misma consulta para ver aparecer INDEX RANGE SCAN + TABLE ACCESS BY INDEX ROWID; y comprobar que, al pedir un rango amplio de filas, el optimizador vuelve por decisión propia al escaneo completo.\n\n" +
    "3. Tres formas de anular un índice sin darse cuenta: aplicar UPPER() sobre una columna indexada y ver que deja de usarse el índice (y resolverlo con un índice funcional sobre la expresión); aplicar TRUNC() sobre una columna de fecha y reescribir el filtro como un rango (>= y <) para que sí use el índice; forzar una conversión implícita de tipos comparando una columna VARCHAR2 con un número; y comparar un LIKE con comodín al final ('GARCIA%') contra uno con comodín al inicio ('%GARCIA').\n\n" +
    "4. Selectividad y estadísticas: revisar NUM_DISTINCT de las columnas de VENTA, crear un índice sobre una columna de baja selectividad (canal, con solo 2 valores) y comprobar que el optimizador lo ignora; y simular estadísticas desactualizadas con DBMS_STATS.SET_TABLE_STATS para observar cómo cambia el plan de una misma consulta antes y después de recolectar estadísticas reales con DBMS_STATS.GATHER_TABLE_STATS.",

  imagen: imgNote.src,

  tecnologias: [
    "Oracle",
    "SQL",
    "PL/SQL",
  ],

  demo: "/pdf/00_setup.sql",

  codigo: "/pdf/01_demos.sql",

  pdfUrl: "/pdf/Clase_Optimizacion_Basica_de_Consultas_Oracle19c.pdf",

  conceptosAplicados: [
    "Se aprendió que en SQL se declara el resultado deseado y es el optimizador quien decide el camino de ejecución según un costo estimado.",

    "Se aprendió a leer un plan de ejecución con EXPLAIN PLAN y DBMS_XPLAN.DISPLAY, interpretando las columnas Operation, Rows y Cost.",

    "Se aprendió a distinguir un TABLE ACCESS FULL de un acceso por índice (INDEX RANGE SCAN / INDEX UNIQUE SCAN + TABLE ACCESS BY INDEX ROWID).",

    "Se aprendió que un índice no es una mejora automática: ayuda cuando el filtro descarta muchas filas y el optimizador puede ignorarlo cuando no aporta.",

    "Se aprendió que aplicar una función sobre la columna filtrada en el WHERE (como UPPER o TRUNC) puede anular el uso de un índice convencional.",

    "Se aprendió a resolver ese problema con índices funcionales o reescribiendo condiciones de fecha como un rango (>= y <) en lugar de aplicar TRUNC.",

    "Se aprendió que comparar columnas de distinto tipo de dato genera una conversión implícita (por ejemplo TO_NUMBER) que también puede anular un índice.",

    "Se aprendió que un LIKE con comodín al inicio del patrón ('%texto') no puede aprovechar un índice, a diferencia de un comodín al final ('texto%').",

    "Se aprendió el concepto de selectividad: un índice sobre una columna con pocos valores distintos no ayuda y además tiene costo de mantenimiento.",

    "Se aprendió que las estadísticas desactualizadas del optimizador pueden hacer que se elija un mal plan aunque la consulta esté bien escrita, y que DBMS_STATS.GATHER_TABLE_STATS corrige esto.",
  ],

  categoria: "SQL",
},

{
  titulo: "Tipos de índices en Oracle",

  tema:
    "B-tree, bitmap, funcionales, particionados y gestión de índices en Oracle 19c",

  descripcion:
    "Clase de Bases de Datos 2 sobre los distintos tipos de índices que ofrece Oracle: cuál usar, sobre qué columnas, y sobre todo cuándo NO crear uno, con demostraciones sobre un esquema de práctica de 500.000 filas.",

  descripcionLarga:
    "Clase práctica de dos horas sobre los tipos de índices en Oracle 19c, organizada como un recorrido desde el índice más común (B-tree) hasta las variantes más especializadas, siempre bajo la misma pregunta: no cuál índice se puede crear, sino cuándo conviene crearlo. " +
    "Se parte del trato que implica todo índice: acelera la búsqueda de unas pocas filas, pero siempre cuesta espacio en disco y mantenimiento en cada INSERT, UPDATE y DELETE de esa columna, además de sumar un plan más que el optimizador debe evaluar. " +
    "La sesión cubre el B-tree como estructura por defecto (árbol balanceado de altura constante, con hojas encadenadas que sirven para igualdad, rangos y ORDER BY) y sus variantes: único frente a no único, compuesto o concatenado (con la regla del prefijo izquierdo), y de cobertura (cuando el índice contiene todas las columnas pedidas y el motor no toca la tabla). " +
    "Continúa con el índice bitmap: cómo guarda un mapa de bits por cada valor distinto de la columna, por qué resuelve bien columnas de baja cardinalidad combinando varios filtros con operaciones binarias (AND/OR entre mapas), por qué es una mala idea en tablas OLTP con escritura concurrente (bloquea por fragmento del mapa, no por fila), y qué es un bitmap join index. " +
    "Explica también los índices basados en función (y por qué UPPER() o TRUNC() sobre una columna indexada anulan el índice convencional), el índice descendente, la clave inversa (y el problema de concurrencia de secuencias que resuelve, a costa de perder los rangos), el índice comprimido y la tabla organizada por índice (IOT). " +
    "Cierra con índices sobre tablas particionadas (LOCAL frente a GLOBAL y el recorte de particiones o pruning), la gestión de índices (invisible, unusable/rebuild, monitoreo de uso con v$index_usage_info), y una medición concreta de lo que cuesta mantener varios índices al cargar y borrar datos, resumido en cinco preguntas para decidir si vale la pena crear un índice.",

  enunciado:
    "Taller práctico ejecutado en seis scripts sobre un esquema propio con dimensiones (SUCURSAL, PRODUCTO, CLIENTE), una tabla de hechos de 500.000 ventas, una tabla particionada por fecha y una tabla de auditoría, organizado en seis demostraciones:\n\n" +
    "1. B-tree (Demos 1 y 2): comprobar que Oracle crea un índice único al declarar la PRIMARY KEY y que una llave foránea NO crea índice por sí sola; crear un B-tree no único sobre id_cliente y observar el cambio de TABLE ACCESS FULL a INDEX RANGE SCAN; comprobar que, al pedir un rango amplio de filas, el optimizador vuelve al escaneo completo; crear un índice compuesto (id_sucursal, fecha_venta) y verificar la regla del prefijo izquierdo, incluyendo el caso especial de INDEX SKIP SCAN; y comprobar un índice de cobertura que evita el acceso a la tabla.\n\n" +
    "2. Bitmap y bitmap join (Demo 3): medir la cardinalidad de las columnas de VENTA; comparar un B-tree contra un bitmap sobre columnas de baja cardinalidad (canal, estado) combinando varios filtros; reproducir el bloqueo por concurrencia de un índice bitmap con dos sesiones; y crear un bitmap join index que resuelve un JOIN por adelantado.\n\n" +
    "3. Índices especiales (Demo 4): crear un índice funcional sobre UPPER(nombre) y sobre TRUNC(fecha_venta), y un índice funcional parcial usando CASE; crear un índice descendente y comprobar que Oracle lo implementa internamente como índice basado en función; crear un índice de clave inversa sobre una columna con secuencia y verificar que deja de servir para búsquedas por rango; crear un índice comprimido con COMPRESS 2; y crear una tabla organizada por índice (IOT) verificando que desaparece el TABLE ACCESS BY INDEX ROWID.\n\n" +
    "4. Índices particionados y gestión (Demo 5): crear un índice LOCAL y otro GLOBAL sobre la tabla particionada VENTA_PART y comparar el recorte de particiones (pruning) según si el filtro trae o no la clave de partición; volver un índice INVISIBLE y comprobar que el optimizador deja de usarlo; simular una carga masiva dejando un índice UNUSABLE y reconstruyéndolo con REBUILD; y consultar v$index_usage_info para saber si un índice se está usando.\n\n" +
    "5. Costo de los índices (Demo 6): comparar el espacio ocupado por los índices frente a los datos de una tabla; medir el tiempo de INSERT y DELETE sobre una tabla sin índices contra una tabla idéntica con cinco índices; y aplicar un checklist de cinco preguntas antes de decidir si crear un índice.\n\n" +
    "6. Limpieza final del esquema de práctica una vez terminado el taller.",

  imagen: imgNote.src,

  tecnologias: [
    "Oracle",
    "SQL",
    "PL/SQL",
  ],

  demo: "",

  codigo: "/pdf/Tipos_de_Indices_Oracle_Scripts.zip",

  pdfUrl: "/pdf/Tipos_de_Indices_Oracle.pdf",

  conceptosAplicados: [
    "Se aprendió que todo índice implica un trato: acelera la lectura de unas pocas filas, pero cuesta espacio en disco y mantenimiento en cada INSERT, UPDATE y DELETE.",

    "Se aprendió la estructura del B-tree (árbol balanceado, hojas encadenadas) y por qué sirve tanto para igualdad como para rangos y ORDER BY.",

    "Se aprendió la regla del prefijo izquierdo en índices compuestos: un índice (A, B, C) responde por A, por A y B, y por las tres, pero no por B sola.",

    "Se aprendió qué es un índice de cobertura y cómo evita que el motor tenga que acceder a la tabla.",

    "Se aprendió cómo funciona un índice bitmap (un mapa de bits por valor distinto) y por qué es ideal para columnas de baja cardinalidad combinando varios filtros.",

    "Se aprendió por qué un índice bitmap es una mala idea en tablas OLTP con escritura concurrente, ya que bloquea por fragmento del mapa y no por fila.",

    "Se aprendió a crear índices basados en función para resolver filtros con UPPER() o TRUNC(), y que el predicado debe escribirse igual que la expresión indexada.",

    "Se aprendió la diferencia entre un índice de clave inversa (arregla concurrencia en secuencias, pero rompe las búsquedas por rango) y un índice comprimido (ahorra espacio cuando el prefijo se repite mucho).",

    "Se aprendió qué es una tabla organizada por índice (IOT) y cuándo conviene frente a una tabla heap normal.",

    "Se aprendió la diferencia entre índices LOCAL y GLOBAL en tablas particionadas, y el concepto de recorte de particiones (pruning).",

    "Se aprendió a usar índices invisibles y unusable para probar o reconstruir índices sin afectar el comportamiento normal del sistema.",

    "Se aprendió a decidir si vale la pena crear un índice a partir de cinco preguntas: si hay una consulta concreta que lo necesite, qué porcentaje de la tabla devuelve el filtro, la cardinalidad de la columna, si el predicado toca la columna tal cual, y si ya existe un índice con ese prefijo.",
  ],

  categoria: "SQL",
},

{
  titulo: "Concurrencia, transacciones y bloqueos en Oracle",

  tema:
    "Transacciones, ACID, aislamiento, bloqueos e interbloqueos en Oracle Autonomous Database",

  descripcion:
    "Práctica de Bases de Datos 2 sobre concurrencia en Oracle: qué es una transacción, el modelo multiversión de Oracle, las anomalías de concurrencia, los niveles de aislamiento y cómo se provocan (y se resuelven) bloqueos, actualizaciones perdidas e interbloqueos, trabajando en pareja con dos sesiones simultáneas sobre una Oracle Autonomous Database.",

  descripcionLarga:
    "Práctica de dos horas sobre concurrencia, transacciones y bloqueos en Oracle, realizada en parejas sobre una Oracle Autonomous Database Always Free, donde cada pareja abre dos sesiones simultáneas (ventana A y ventana B) para provocar a propósito los problemas que solo aparecen cuando dos usuarios tocan el mismo dato al mismo tiempo. " +
    "La sesión parte de qué es una transacción y las cuatro propiedades ACID (atomicidad, consistencia, aislamiento, durabilidad), destacando que el aislamiento es la única de las cuatro que se puede graduar. " +
    "Explica el modelo multiversión de Oracle: cómo el motor guarda la versión anterior de un dato en el segmento de undo para que los lectores nunca bloqueen a los escritores ni al revés, y por qué en Oracle es imposible la lectura sucia. " +
    "Presenta las cuatro anomalías clásicas de concurrencia (lectura sucia, lectura no repetible, lectura fantasma y actualización perdida), cuáles permite Oracle en READ COMMITTED, y por qué la actualización perdida es la más peligrosa al no producir ningún error. " +
    "Cubre los niveles de aislamiento de Oracle (READ COMMITTED, SERIALIZABLE y READ ONLY) y el error ORA-08177 que aparece en SERIALIZABLE ante un conflicto de escritura. " +
    "Trabaja en detalle el bloqueo de fila, las dos defensas contra la actualización perdida (bloqueo pesimista con SELECT FOR UPDATE y bloqueo optimista con columna de versión), las variantes de FOR UPDATE (NOWAIT, WAIT n y SKIP LOCKED) para repartir colas de trabajo entre varios procesos, y cómo se provoca y diagnostica un interbloqueo (ORA-00060) y cómo se previene con un orden de acceso consistente. " +
    "Cierra con SAVEPOINT y la trampa del COMMIT implícito de toda sentencia DDL, y con el caso de la llave foránea sin índice, que provoca un bloqueo de tabla completo al borrar o actualizar el padre.",

  enunciado:
    "Práctica ejecutada en pareja, alternando entre dos sesiones (ventana A y ventana B) sobre un esquema propio (CUENTA, MOVIMIENTO, SILLA, TRABAJO, ASIENTO), organizada en ocho ejercicios:\n\n" +
    "1. Lectura consistente: comprobar que una sesión que lee no se bloquea ni ve el cambio de otra sesión hasta que esta confirma (COMMIT), y observar una lectura no repetible dentro de READ COMMITTED.\n\n" +
    "2. Bloqueo de fila: dos sesiones intentan actualizar la misma fila; la segunda queda detenida sin aviso hasta que la primera confirma o revierte.\n\n" +
    "3. Actualización perdida: reproducir cómo dos sesiones que leen el mismo valor y escriben pueden pisarse sin generar ningún error, y resolverlo con bloqueo pesimista (SELECT ... FOR UPDATE) y con bloqueo optimista (columna de versión y WHERE version = la leída).\n\n" +
    "4. FOR UPDATE, NOWAIT, WAIT y SKIP LOCKED: reservar una silla con bloqueo explícito, comprobar el error ORA-00054 con NOWAIT, el tiempo límite con WAIT 5, y repartir una cola de trabajos entre dos procesos con SKIP LOCKED sin que se pisen.\n\n" +
    "5. Interbloqueo: provocar un ciclo de bloqueos cruzados entre dos cuentas hasta recibir ORA-00060, identificar la sesión víctima, y explicar cómo un orden de acceso consistente lo evita.\n\n" +
    "6. Savepoint y DDL: crear savepoints intermedios, revertir parcialmente con ROLLBACK TO SAVEPOINT, y comprobar que una sentencia DDL en medio de la transacción confirma todo lo pendiente sin avisar.\n\n" +
    "7. Nivel de aislamiento SERIALIZABLE: comprobar que una transacción serializable sigue viendo la foto del momento en que empezó aunque otra sesión confirme cambios, y reproducir el error ORA-08177 al intentar escribir sobre una fila modificada por otra transacción.\n\n" +
    "8. Llave foránea sin índice: provocar un bloqueo de tabla completo al borrar una fila padre mientras existe una transacción abierta sobre una fila hija de otra tabla relacionada sin índice, y resolverlo creando el índice faltante.\n\n" +
    "Además de los ejercicios guiados, la práctica incluye cinco retos finales en pareja: una transferencia bancaria segura ante concurrencia, dos transferencias cruzadas reescritas para evitar interbloqueos por orden de acceso, una reserva de sillas sin colisiones ni esperas, un informe que debe leer una foto consistente de toda la base, y un diagnóstico completo de un bloqueo usando las vistas del diccionario de datos.",

  imagen: imgNote.src,

  tecnologias: [
    "Oracle",
    "SQL",
    "PL/SQL",
  ],

  demo: "",

  codigo: "/pdf/Concurrencia_Transacciones_Bloqueos_Scripts.zip",

  pdfUrl: "/pdf/Concurrencia_Transacciones_Bloqueos.pdf",

  conceptosAplicados: [
    "Se aprendió qué es una transacción y las cuatro propiedades ACID, entendiendo que el aislamiento es la única que se puede graduar.",

    "Se aprendió cómo funciona el modelo multiversión de Oracle: los lectores nunca bloquean a los escritores ni al revés, y es imposible una lectura sucia.",

    "Se aprendió a distinguir las cuatro anomalías de concurrencia (lectura sucia, no repetible, fantasma y actualización perdida) y cuáles permite Oracle por defecto.",

    "Se aprendió que la actualización perdida es la anomalía más peligrosa porque no genera ningún error y deja la base consistente pero con un valor equivocado.",

    "Se aprendió a usar bloqueo pesimista (SELECT ... FOR UPDATE) y bloqueo optimista (columna de versión) como las dos defensas contra la actualización perdida.",

    "Se aprendió la diferencia entre FOR UPDATE, FOR UPDATE NOWAIT, FOR UPDATE WAIT n y FOR UPDATE SKIP LOCKED, y cuándo usar cada una.",

    "Se aprendió cómo se produce un interbloqueo (ORA-00060), que Oracle lo detecta y sacrifica una sola sentencia, y que se previene accediendo a los recursos siempre en el mismo orden.",

    "Se aprendió a usar SAVEPOINT para deshacer una parte de una transacción sin perder el resto.",

    "Se aprendió que toda sentencia DDL hace un COMMIT implícito, lo que puede confirmar cambios pendientes sin que el programador lo espere.",

    "Se aprendió la diferencia entre los niveles de aislamiento READ COMMITTED y SERIALIZABLE, y el error ORA-08177 que aparece al escribir bajo SERIALIZABLE ante un conflicto.",

    "Se aprendió que una llave foránea sin índice provoca un bloqueo de tabla completo al borrar o actualizar el padre, y que indexarla resuelve el problema.",

    "Se aprendió a diagnosticar bloqueos en caliente usando v$session, v$lock y v$transaction para identificar quién bloquea a quién y por qué.",
  ],

  categoria: "SQL",
},

{
  titulo: "Taller Integrador MercaAndes - Concurrencia, Índices y SQL Avanzado",

  tema:
    "Taller integrador de Bases de Datos 2: transacciones, concurrencia, índices, SQL analítico/jerárquico y un reto de diagnóstico sobre un caso realista de e-commerce",

  descripcion:
    "Taller integrador de 90 minutos en parejas sobre un marketplace ficticio (MercaAndes) con 200.000 pedidos y 5 bodegas, que reúne en un solo caso todo lo visto en la unidad: transacciones y bloqueos, índices y planes de ejecución, SQL analítico/jerárquico/MERGE, y un reto final de diagnóstico y corrección de un problema real de inventario, transaccionalidad y rendimiento. Resuelto en pareja con Oracle Autonomous Database y SQL Developer.",

  descripcionLarga:
    "Taller integrador de Bases de Datos 2 realizado en parejas sobre Oracle Autonomous Database, usando SQL Developer con dos conexiones simultáneas. El caso es MercaAndes, un marketplace con un esquema de 5.000 productos, 20.000 clientes, 200.000 pedidos, 400.000 líneas de detalle y 5 bodegas, sobre el que se reportan tres síntomas de producción: se vende más de lo que hay en bodega, hay confirmaciones que quedan a medias sin dejar rastro, y el tablero de gerencia tarda casi un minuto en abrir. " +
    "El taller integra en un solo caso los cuatro grandes temas de la unidad, todo resuelto con SQL puro (sin PL/SQL). " +
    "La Parte 1 (concurrencia y bloqueos) reproduce una actualización perdida real sobre el inventario, la corrige comparando bloqueo pesimista (SELECT ... FOR UPDATE) contra bloqueo optimista (columna de versión), reparte una cola de despacho con FOR UPDATE SKIP LOCKED, reproduce el bloqueo de tabla que provoca una llave foránea sin índice (PAGO → PEDIDO), y termina provocando un interbloqueo real (ORA-00060) entre dos reservas cruzadas de inventario. " +
    "La Parte 2 (índices y optimización) usa EXPLAIN PLAN, Autotrace y SET TIMING para medir por qué un informe de 200.000 filas hace recorrido completo, por qué el orden de las columnas en un índice compuesto no es un detalle (igualdad antes que rango), por qué un índice deja de usarse en cuanto se le aplica una función (UPPER, TRUNC) a la columna filtrada, cuándo el optimizador tiene razón al ignorar un índice existente según la selectividad y el clustering factor, la técnica de índice de cobertura, y el costo real de mantener varios índices medido en segundos de INSERT. " +
    "La Parte 3 (SQL avanzado) trabaja funciones analíticas (RANK, DENSE_RANK, ROW_NUMBER, RATIO_TO_REPORT, LAG, promedios móviles con ROWS vs RANGE), dos planes distintos para el mismo resultado (subconsulta correlacionada vs función analítica), una jerarquía de tres niveles resuelta con CTE recursiva y con CONNECT BY, un MERGE para aplicar ajustes de inventario (incluyendo por qué hay que agrupar el origen y por qué GREATEST(...,0) esconde un problema en vez de resolverlo), PIVOT, LISTAGG, FETCH FIRST ... WITH TIES, y un informe de clientes inactivos. " +
    "La Parte 4, el reto integrador que se entrega, presenta un ticket real de un jefe de Operaciones con una secuencia de sentencias que la aplicación ejecuta al confirmar un pedido: hay que diagnosticar cuatro defectos (uno de concurrencia, uno de transaccionalidad, uno que hace que el problema pase inadvertido, y uno de rendimiento), reescribir la secuencia usando solo SQL (SELECT FOR UPDATE, MERGE, un único COMMIT y el CHECK que ya tiene la tabla), demostrarlo desde dos conexiones simultáneas, optimizar la consulta del tablero de gerencia comparando el plan antes y después, y redactar una recomendación no técnica para el jefe de Operaciones sobre qué práctica organizacional debe cambiar.",

  enunciado:
    "Taller resuelto en pareja (con David Santiago Gómez Durán), organizado en cuatro partes:\n\n" +
    "PARTE 1 — Transacciones, concurrencia y bloqueos (25 min, 15 puntos), alternando entre dos conexiones por PASOS:\n" +
    "1.1 Provocar una actualización perdida sobre el inventario del producto 100 y explicar por qué el bloqueo de fila no la impidió.\n" +
    "1.2 Corregir con bloqueo pesimista (SELECT ... FOR UPDATE).\n" +
    "1.3 Corregir con bloqueo optimista (columna de versión) y comparar ambas estrategias.\n" +
    "1.4 Repartir una cola de despacho entre dos sesiones con FOR UPDATE SKIP LOCKED sin tareas repetidas.\n" +
    "1.5 Reproducir el bloqueo de tabla causado por una llave foránea sin índice (PAGO → PEDIDO), corregirlo creando el índice y repetir la prueba.\n" +
    "1.6 Provocar un interbloqueo (ORA-00060) y formular la regla de diseño que lo habría evitado.\n\n" +
    "PARTE 2 — Índices y optimización de consultas (20 min, 15 puntos):\n" +
    "2.1 Explicar por qué un informe mensual hace recorrido completo de PEDIDO y corregirlo con un índice compuesto, justificando el orden de las columnas.\n" +
    "2.2 Demostrar por qué un índice deja de usarse cuando se le aplica una función al predicado (UPPER, TRUNC) y resolverlo de dos maneras.\n" +
    "2.3 Mostrar un caso donde el optimizador decide NO usar un índice existente y explicar con qué información toma esa decisión (selectividad, histograma, clustering factor).\n" +
    "2.4 Eliminar el acceso a la tabla de una consulta agregada mediante un índice de cobertura y discutir su límite.\n" +
    "2.5 Medir el costo de escritura de cada índice y proponer la lista definitiva de índices del esquema, justificando cada uno y descartando los innecesarios.\n\n" +
    "PARTE 3 — SQL analítico, jerárquico y MERGE (15 min, 10 puntos):\n" +
    "3.1 Top 3 productos por categoría con el porcentaje sobre el total (RANK/DENSE_RANK/ROW_NUMBER y RATIO_TO_REPORT).\n" +
    "3.2 Evolución mensual con acumulado del año, variación contra el mes anterior y promedio móvil de tres meses (SUM() OVER, LAG(), ROWS vs RANGE).\n" +
    "3.3 Comparar dos planes que resuelven lo mismo (subconsulta correlacionada vs función analítica) y un caso donde no son equivalentes.\n" +
    "3.4 Facturación por categoría raíz resolviendo una jerarquía de tres niveles con CTE recursiva, comparándola con CONNECT BY.\n" +
    "3.5 Aplicar ajustes de inventario con MERGE, incluyendo el borrado de filas en cero, explicando por qué se agrupa el origen y qué esconde GREATEST(...,0).\n" +
    "3.6 PIVOT, LISTAGG, FETCH FIRST ... WITH TIES, y un informe de clientes PREMIUM sin comprar hace más de 120 días.\n\n" +
    "PARTE 4 — Reto integrador, lo que se entrega (15 min, 10 puntos):\n" +
    "a. Identificar los cuatro defectos (concurrencia, transaccionalidad, uno que oculta el problema, rendimiento) de la secuencia que ejecuta la aplicación al confirmar un pedido, reproduciendo el primero desde dos conexiones.\n" +
    "b. Reescribir la secuencia usando solo SQL (FOR UPDATE, MERGE, un solo COMMIT, el CHECK de la tabla) y demostrarla correcta desde las dos conexiones al mismo tiempo.\n" +
    "c. Optimizar la consulta del tablero de gerencia, capturando el plan antes y después y justificando por qué no conviene crear un índice adicional.\n" +
    "d. Redactar un párrafo para el jefe de Operaciones sobre qué práctica organizacional (no qué sentencia) debe cambiar para que el problema no se repita.",

  imagen: imgNote.src,

  tecnologias: [
    "Oracle",
    "Oracle Autonomous Database",
    "SQL Developer",
    "SQL",
  ],

  demo: "",

  codigo: "/pdf/Taller_BD2_MercaAndes_Scripts.zip",

  pdfUrl: "/pdf/Taller_BD2_MercaAndes_apoyo.pdf",

  pdfUrlSolucion: "/pdf/Taller_BD2_MercaAndes_Respuestas.pdf",

  conceptosAplicados: [
    "Se aprendió que el bloqueo de fila por sí solo no evita una actualización perdida si el UPDATE escribe un valor fijo calculado antes por la aplicación, en vez de recalcularlo sobre el dato vigente (columna = columna - n).",

    "Se aprendió a elegir entre bloqueo pesimista y optimista según el nivel de contención esperado: pesimista en tablas donde muchas sesiones chocan por la misma fila (INVENTARIO), optimista donde el conflicto es raro (CLIENTE, PEDIDO).",

    "Se aprendió que FOR UPDATE SKIP LOCKED es la base de las colas de trabajo repartidas entre varios procesos, evitando tanto la espera de FOR UPDATE simple como el fallo inmediato de NOWAIT.",

    "Se aprendió que una llave foránea sin índice provoca un bloqueo de tabla (no solo de fila) al borrar o actualizar el padre, y que ese problema solo existe si realmente se borran filas del padre.",

    "Se aprendió que Oracle resuelve un interbloqueo sacrificando una sola sentencia (no toda la transacción), dejando la sesión víctima con bloqueos pendientes que debe liberar con ROLLBACK.",

    "Se aprendió la regla general para el orden de columnas en un índice compuesto: primero las de predicado de igualdad, al final las de rango.",

    "Se aprendió que un índice existente puede no bajar el costo si la consulta necesita columnas fuera del índice o si el clustering factor es muy alto (una entrada por bloque distinto).",

    "Se aprendió que el optimizador decide usar o no un índice según estadísticas reales (num_distinct, density, histogramas) y no solo por la existencia del índice.",

    "Se aprendió la técnica de índice de cobertura para eliminar el acceso a la tabla, y su límite: cada columna agregada encarece cada escritura.",

    "Se aprendió a medir el costo real de mantener índices comparando tiempos de INSERT con y sin ellos, y a decidir la lista definitiva de índices para toda la carga de trabajo, no para una sola consulta.",

    "Se aprendió a diferenciar RANK, DENSE_RANK y ROW_NUMBER ante empates, y a elegir ROW_NUMBER cuando se necesita un número exacto de filas.",

    "Se aprendió la diferencia entre ROWS y RANGE en funciones de ventana, y que solo producen resultados distintos cuando hay filas empatadas en el ORDER BY.",

    "Se aprendió que una CTE recursiva y CONNECT BY resuelven jerarquías de forma distinta: la CTE por niveles y permitiendo joins libres, CONNECT BY rama por rama con LEVEL y SYS_CONNECT_BY_PATH incluidos.",

    "Se aprendió que MERGE falla con ORA-30926 si el origen tiene duplicados por clave, y que hay que agruparlo antes; y que enmascarar un dato inconsistente (GREATEST(...,0)) esconde un problema en vez de reportarlo.",

    "Se aprendió a diagnosticar y corregir en conjunto un problema real de e-commerce (venta de más stock del disponible, confirmaciones a medias, tablero lento), entendiendo que las reglas críticas del negocio deben vivir en la base de datos y no repetirse en el código de cada canal.",
  ],

  categoria: "SQL",
},

];

export const evidencias = evidenciasBase.map((evidencia) => ({
  ...evidencia,
  slug: slugify(evidencia.titulo),
}));
