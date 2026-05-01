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

// Este es el de la pagina de Proyectos 

export const proyectos = [
  {
    titulo: "Caso Integrador El Bosque Shop - 4 Integrantes",
    descripcion:
      "Es un programa en Java que gestiona una biblioteca, permitiendo registrar usuarios y libros, administrar préstamos y devoluciones, realizar búsquedas de préstamos por título del libro o por usuario, y listar todos los préstamos activos. Además, la aplicación permite crear, actualizar y eliminar usuarios, préstamos y libros. Toda la información se almacena mediante archivos CSV conectados a OneDrive para garantizar la persistencia de los datos.",
    imagen: VintageTone.src,
    tecnologias: ["Github", "css", "Onedrive", "JavaScript" ,"Java"],
    demo: "",
    codigo: "https://github.com/MarianaDuran2903/BibliotecaBosque/tree/main",
    categoria: "Proyecto",
  },
  {
    titulo: "Caso Integrador El Bosque Shop - Salón ",
    descripcion:
      "Es un programa que da continuidad al proyecto anterior, incorporando un módulo de reportes que permite identificar los usuarios que viven en una dirección específica, los libros que fueron prestados en cada mes, los usuarios que tienen préstamos vencidos, aquellos que no han solicitado libros en el último mes y los usuarios que cumplen años en un mes determinado. Toda la información se almacena mediante archivos CSV conectados a OneDrive, garantizando así la persistencia de los datos.",
    imagen: ReactEcommerce.src,
    tecnologias: ["Github", "css", "Onedrive", "JavaScript" ,"Java"],
    demo: "",
    codigo: "https://github.com/mmolinasdev/LibraryApp",
    categoria: "Proyecto",
  },
  {
    titulo: "Aerolinea App",
    descripcion:
      "Programa que gestiona la aerolínea mediante una base de datos relacional, permitiendo registrar y administrar aviones, pilotos y tripulación. El sistema almacena información de los aviones, como su código o número de cola, tipo de aeronave y base a la que pertenecen y deben regresar tras un determinado número de horas; de los pilotos, incluyendo su código, nombre y horas de vuelo; y de los miembros de la tripulación, con su código, nombre y teléfonos, teniendo en cuenta que tanto pilotos como tripulación regresan a su base asignada al finalizar cada jornada. Además, el sistema registra los vuelos, especificando su número, origen, destino y hora programada.",
    imagen: AstroEcommers.src,
    tecnologias: ["Github", "css", "Onedrive", "JavaScript" ,"Java"],
    demo: "https://docs.google.com/document/d/19AwbXye3hAnuqUbtmwqrvgdtWicaBBM9WNdKITRW1gk/edit?usp=sharing",
    codigo: "https://github.com/MarianaDuran2903/AerolineaBD/tree/main",
    categoria: "Proyecto",
  },
  {
    titulo: "Hospital App",
    descripcion:
      "Se diseña un modelo Entidad–Relación (E/R) para gestionar el área de Urgencias de un hospital, que permita registrar la información de los pacientes, incluyendo su cédula, nombre y apellidos, dirección, teléfonos de contacto, fecha de nacimiento y edad, así como la de los médicos, con su cédula, nombre completo, especialidad y número de celular. El diseño debe contemplar además el registro del proceso de Triage, indicando si un paciente ya fue evaluado, la fecha en que se realizó dicha evaluación y el nivel asignado en el Triage.",
    imagen: imgNote.src,
    tecnologias: ["Github", "css", "Onedrive", "JavaScript" ,"Java"],
    demo: "https://docs.google.com/document/d/1xl0CHhZpvu4kJj4AFF1jffZ7vPgg8N_lfKZ-jIEB-9g/edit?usp=sharing",
    codigo: "https://github.com/MarianaDuran2903/HospitalBD/tree/main",
    categoria: "Proyecto",
  },

  {
    titulo: "Trabajo Individual - University Champions League",
    descripcion:
      "Se diseña un modelo Entidad–Relación (E/R) para gestionar datos relacionados a torneos de futbol.",
    imagen: imgNote.src,
    tecnologias: ["Draw io"],
    demo: "https://docs.google.com/document/d/1G92fC-Yy6XnKH9us9g5k2z7Bqp159VKOhxICgjHVNqk/edit?usp=sharing",
    codigo: "",
    categoria: "Modelado",
  },

  {
    titulo: "Trabajo Individual - Plataforma de streaming",
    descripcion:
      "Se diseña un modelo Entidad–Relación (E/R) para gestionar el acceso a contenido de los estudiantes.",
    imagen: imgNote.src,
    tecnologias: ["Draw io"],
    demo: "https://docs.google.com/document/d/1F8-6njq6tEhQiq_OoFTTFt1oI80yzKjFNj94wyRBWe4/edit?usp=sharing",
    codigo: "",
    categoria: "Modelado",
  },

  {
    titulo: "Taller E-R - Ejercicios resueltos",
    descripcion:
      "Se diseña un modelo Entidad–Relación (E/R) para cada ejercicio del taller # 1.",
    imagen: imgNote.src,
    tecnologias: ["Draw io"],
    demo:  "/pdf/TALLER MER E-R .pdf",
    codigo: "",
    categoria: "Modelado",
  },

  {
    titulo: "Taller MERE_V3 - Ejercicios resueltos",
    descripcion:
      "Se diseña un modelo Entidad–Relación (E/R) para cada ejercicio del taller # 2.",
    imagen: imgNote.src,
    tecnologias: ["Draw io"],
    demo:  "/pdf/Taller_MERE_v3.pdf",
    codigo: "",
    categoria: "Modelado",
  },

  {
    titulo: "Taller MER_V4 - Ejercicios resueltos",
    descripcion:
      "Se diseña un modelo Entidad–Relación (E/R) para cada ejercicio del taller # 3.",
    imagen: imgNote.src,
    tecnologias: ["Draw io"],
    demo:  "/pdf/TALLER MER_V4.pdf",
    codigo: "",
    categoria: "Modelado",
  },

  
  {
    titulo: "Taller_Modelado_Avanzado",
    descripcion:
      "Evaluar dominio real del modelado de datos mediante MER, MER-E y Modelo Relacional.Ejercicios: Residuos Tóxicos, Comidas a Domicilio y Nómina",
    imagen: imgNote.src,
    tecnologias: ["Lucid Chart"],
    demo:  "/pdf/EJERCICIOS TALLER GRUPAL.pdf",
    codigo: "/pdf/EJERCICIO TODOS.zip",
    categoria: "Normalización",
  },

    {
    titulo: "Normalizacion-Guía de Ejercicios",
    descripcion:
      "Se realiza el proceso de normalización de bases de datos, partiendo de tablas sin normalizar y aplicando de manera progresiva las reglas de la Primera, Segunda y Tercera Forma Normal. ",
    imagen: imgNote.src,
    tecnologias: ["Microsoft Excel"],
    demo:  "",
    codigo: "https://unbosqueeduco-my.sharepoint.com/:x:/g/personal/dsgomezd_unbosque_edu_co/IQC2LqmRtAoKSaCLJ6nJjzb5AZpQOxJeMSn-wEALz-TCH30?rtime=NCUtO6yn3kg",
    categoria: "Normalización",
  },

    {
    titulo: "Taller_Normalizacion",
    descripcion:
      "Este taller consiste en analizar tablas no normalizadas y transformarlas paso a paso aplicando las formas normales (1FN, 2FN y 3FN). ",
    imagen: imgNote.src,
    tecnologias: ["Microsoft Excel"],
    demo:  "",
    codigo: "https://unbosqueeduco-my.sharepoint.com/:x:/g/personal/dsgomezd_unbosque_edu_co/IQC2LqmRtAoKSaCLJ6nJjzb5AZpQOxJeMSn-wEALz-TCH30?rtime=NCUtO6yn3kg",
    categoria: "Normalización",
  },

  
    {
    titulo: "Taller_Avanzado_Normalizacion_B",
    descripcion:
      "Evaluación práctica orientada a la aplicación de las formas normales (1FN, 2FN y 3FN), mediante la transformación de tablas sin normalizar. Se evalúa la capacidad de identificar dependencias funcionales, eliminar redundancias y estructurar adecuadamente la información.",
    imagen: imgNote.src,
    tecnologias: ["Microsoft Excel"],
    demo:  "",
    codigo: "https://unbosqueeduco-my.sharepoint.com/:x:/g/personal/dsgomezd_unbosque_edu_co/IQC2LqmRtAoKSaCLJ6nJjzb5AZpQOxJeMSn-wEALz-TCH30?rtime=NCUtO6yn3kg",
    categoria: "Normalización",
  },

];

