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

];

export const evidencias = evidenciasBase.map((evidencia) => ({
  ...evidencia,
  slug: slugify(evidencia.titulo),
}));
