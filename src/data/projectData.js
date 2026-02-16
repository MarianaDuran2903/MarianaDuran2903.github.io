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


export const proyectos = [
  {
    titulo: "Libreria App 4 Integrantes",
    descripcion:
      "Es un programa en Java que gestiona una biblioteca, permitiendo registrar usuarios y libros, administrar préstamos y devoluciones, realizar búsquedas de préstamos por título del libro o por usuario, y listar todos los préstamos activos. Además, la aplicación permite crear, actualizar y eliminar usuarios, préstamos y libros. Toda la información se almacena mediante archivos CSV conectados a OneDrive para garantizar la persistencia de los datos.",
    imagen: VintageTone.src,
    tecnologias: ["Github", "css", "Onedrive", "JavaScript" ,"Java"],
    demo: "https://vintage-tone-front-vue.vercel.app",
    codigo: "https://github.com/MarianaDuran2903/BibliotecaBosque/tree/main",
    categoria: "Proyecto",
  },
  {
    titulo: "Libreria App Grupal de Salon ",
    descripcion:
      "Es un programa que da continuidad al proyecto anterior, incorporando un módulo de reportes que permite identificar los usuarios que viven en una dirección específica, los libros que fueron prestados en cada mes, los usuarios que tienen préstamos vencidos, aquellos que no han solicitado libros en el último mes y los usuarios que cumplen años en un mes determinado. Toda la información se almacena mediante archivos CSV conectados a OneDrive, garantizando así la persistencia de los datos.",
    imagen: ReactEcommerce.src,
    tecnologias: ["Github", "css", "Onedrive", "JavaScript" ,"Java"],
    demo: "https://react-e-commerce-three-phi.vercel.app",
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
];
