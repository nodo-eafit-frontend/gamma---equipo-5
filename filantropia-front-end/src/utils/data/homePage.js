import { DONACIONES, TESTIMONIOS } from "../../routes/paths";

export const HOME_PAGE = {
  carrousel: {
    videos: [
      {
        id: 1,
        title: "Testimonio Tomás Maya Jaramillo",
        src: "https://www.youtube.com/embed/AiawXUVgnns",
      },
      {
        id: 2,
        title: "Testimonio Maria Isabel Garcia García",
        src: "https://www.youtube.com/embed/Dr3ZJ7Z8lb0",
      },
      {
        id: 3,
        title: "Testimonio Juan David Arcila Moreno",
        src: "https://www.youtube.com/embed/n0fEDFvT-cs",
      },
      {
        id: 4,
        title: "Testimonio Sebastián Vanegas Rendón",
        src: "https://www.youtube.com/embed/4CkI8txZpKw",
      },
    ],
    button: {
      title: "Ver más",
      href: TESTIMONIOS,
      
    },
  },
  whatIsFilantropia: [
    {
      id: "1",
      title: "¿Qué es filantropía eafit?",
      paragraph:
        "H​ace parte de la Dirección de Desarrollo Institucional y Vínculos, ​y es el área donde se cultiva la transformación social por medi​o de ​​iniciativas filantrópicas, para contribuir al desarrollo de la sociedad.",
    },
    {
      id: "2",
      title: "¿Qué buscamos?",
      paragraph:
        "Promovemos la tran​​sformación social por medio de vínculos de confianza y solidaridad para generar oportunidades a través de la educación.​​",
    },
  ],
  ourCauses: {
    title: "Nuestras causas",
    cards: [
      {
        id: 1,
        img: {
          title: "Equidad social e inclusión",
          src: "/src/assets/images/equidad_social_e_inclusion.jpg",
        },
        title: "Equidad social e inclusión",
        paragraph:
          "Brind​amos acceso a la Universidad EAFIT ​a jóvenes que cuentan con un excelente desempeño académico y que no disponen de los recursos económicos para asumir el valor de la ma​trícula en la Ins​​titución.​​",
        button: {
          title: "Ver más",
          href: "EQUIDAD_SOCIAL_E_INCLUSION",
        },
      },
      {
        id: 2,
        img: {
          title: "Ciencia, tecnología e innovación",
          src: "/src/assets/images/ciencia_tecnologia_innovacion.jpg",
        },
        title: "Ciencia, tecnología e innovación",
        paragraph:
          "Con tus aportes a los proyectos de investigación científica y aplicada, impulsas la producción de respuestas innovadoras que contribuyen a la solución de problemáticas ​de ​nuestra sociedad.",
        button: {
          title: "Ver más",
          href: "CIENCIA_TECNOLOGIA_E_INNOVACION",
        },
      },
      {
        id: 3,
        img: {
          title: "Inspiracion - voluntariado",
          src: "/src/assets/images/inspiracion_voluntariado.jpg",
        },
        title: "Inspiracion - voluntariado",
        paragraph:
          "El voluntariado EAFIT es un puente de transformación social y cultural, que inspira a la comunidad eafitense y sus allegados a vincularse con iniciativas ​​​sociales, académicas, comunitarias, culturales.",
        button: {
          title: "Ver más",
          href: "INSPIRACION_VOLUNTARIADO",
        },
      },
      {
        id: 4,
        img: {
          title: "Transformación humanista",
          src: "/src/assets/images/transformacion_humanista.jpg",
        },
        title: "Transformación humanista",
        paragraph:
          "La formación no se da solo en las aulas, también en diferentes espacios deportivos, artísticos y culturales. Con tus aportes a esta causa contribuyes a la creación de un ambiente que favorece el aprendizaje integral de su comunidad.​",
        button: {
          title: "Ver más",
          href: "TRANSFORMACION_HUMANISTA",
        },
      },
    ],
    modals: {
      equidadSocial: {
        img: {
          title: "Equidad social e inclusión",
          src: "/src/assets/images/equidad_social_e_inclusion.jpg",
        },
        title: "Equidad social e inclusión",
        body: {
          title:
            "Estudiantes con oportunidades a través de becas y apoyos académicos",
          paragraphs: [
            "​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​En C​olombia, más de dos millones de jóvenes ​se inscriben a una Institución de Educación Superior​​,​ pero solo el 41% ​logra matricularse.​",
            "En Antioquia, de cada 1​0 jóvene​​s entre los 17 y 21 años, solo 5 ingresan a una Institución de Educación Superior.​",
            "​En Medellín, de cada 100 e​​​studiantes qu​​​e culminan el grado 11, solo 48 hacen tránsito inmediato a la Educación Superior.​",
            "​Con Filantropía EAFIT, la Univ​ersidad, con el apoyo de diversos aliados, ha logrado otorgar más de 2.540 becas cada semestre.​",
          ],
          spans: [
            "Datos de 20​​20",
            "Fuente: https://snies.mineducaci​​on.gov.co​​ ​y datos propios de la Universidad EAFIT.​​​",
          ],
        },
        fondoBecas: {
          title: "Conoce el fondo de becas",
          subtitle:
            "¡Cono​​​​ce los test​​im​onios ​​de los estudiantesque han sido beneficiados!​",
          card: {
            img: {
              title: "Fondo de becas",
              src: "/src/assets/images/fondo_de_becas.png",
            },
            paragraph:
              "Brind​amos acceso a la Universidad EAFIT ​a jóvenes que cuentan con un excelente desempeño académico y que no disponen de los recursos económicos para asumir el valor de la ma​trícula en la Ins​​titución.",
          },
          paragraph:
            "Gracias a tus aportes a nuest​​ro​ fondo de becas, lograre​mos qu​​e muchos ​m​ás estudiantes puedan acceder a una ins​​​titución de alta calidad ​que ayud​​ará a que la vida de esto​s jóvenes se transforme ​para siem​​pre ​logrando así una sociedad más equitativa.",
        },
        button: {
          title: "Ver testimonios",
          href: TESTIMONIOS,
        },
      },
      cienciaTecnologia: {
        title: "Ciencia, tecnología e innovación",
        img: {
          title: "Ciencia, tecnología e innovación",
          src: "/src/assets/images/ciencia_tecnologia_innovacion.jpg",
        },
        body: {
          title:
            "Apalancamos​​​ proyectos de investigación ​para ​beneficio de la humanidad",
          paragraphs: [
            "Creamos valor social a partir de proyectos de investigación, ​​logrando de una forma eficiente resolver los problemas sociales y contribuir a la generación de conocimiento.",
            "Uno de los propósit​​os de nuestra Institución que inspira, crea y transforma es desarrollar la capacidad intelectual de los estudiantes y profesores en todos los programas académicos con la investigación como soporte básico.",
            "​Con tus aportes a los proyectos de investigación científica y aplicada, impulsas la producción de respuestas innovadoras que contribuyen a la solución de problemáticas ​de ​nuestra sociedad.",
          ],
        },
      },
      inspiracionInnovacion: {
        img: {
          title: "Inspiración - voluntariado",
          src: "/src/assets/images/modal_inspiracion_voluntariado.jpg",
        },
        title: "Inspiración - voluntariado",
        body: {
          title: "Conectamos talento ​​para un mayor impacto​",
          paragraphs: [
            "​​​​​El voluntariado EAFIT es un puente de transformación social y cultural, que inspira a la comunidad eafitense y sus allegados a vincularse con iniciativas ​​​sociales, académicas, comunitarias, culturales y para la filantropía, ​permitiendo asumir responsabilidad y rol en la sociedad y/o al interior de la Universidad a través de la contribución eficaz de tiempo y conocimiento.​​​​​​​",
          ],
          cards: [
            {
              id: 1,
              title: "¿Quiénes somos?",
              paragraph: "Conócenos",
              button: {
                title: "Ver más",
                href: "https://www.eafit.edu.co/institucional/centro-filantropia/Paginas/quienes_somos_voluntariado.aspx",
              },
            },
            {
              id: 2,
              title: "Beneficios",
              paragraph: "Encuéntralos aquí",
              button: {
                title: "Ver más",
                href: "https://www.eafit.edu.co/institucional/centro-filantropia/Paginas/beneficios-voluntariado-EAFIT.aspx",
              },
            },
            {
              id: 3,
              title: "Formas de voluntariado",
              paragraph: "Conoce más",
              button: {
                title: "Ver más",
                href: "https://www.eafit.edu.co/institucional/centro-filantropia/Paginas/formas-de-voluntariado.aspx",
              },
            },
            {
              id: 4,
              title: "Políticas y reglamentos",
              paragraph: "Conoce más",
              button: {
                title: "Ver más",
                href: "https://www.eafit.edu.co/institucional/centro-filantropia/Documents/pol%C3%ADtica-de-voluntariado.pdf",
              },
            },
          ],
          subtitle: "¡Haz parte del voluntariado!",
          button: {
            title: "Incríbete aquí",
            href: "https://forms.office.com/pages/responsepage.aspx?id=XrX3mb6ce0aBQ5GXgpGK-x0jvEkZ8mJKr-W85ajA-YVUNTZBSVcwVTIyRjlJWVMxRU83NkFLSU5SQy4u",
          },
        },
        statistics: {
          img: {
            title: "Impacto del voluntariado 2022",
            src: "/src/assets/images/estadisticas_voluntariado.jpg",
          },
          subtitle: "Conoce el repositorio de conocimientos",
          button: {
            title: "Haz click aquí",
            href: "https://www.eafit.edu.co/institucional/centro-filantropia/Paginas/repositorio-conocimiento.aspx",
          },
        },
      },
      transformacionHumanista: {
        img: {
          title: "",
          src: "/src/assets/images/modal_transformacion_humanista.png",
        },
        title: "Tranformación humanista",
        body: {
          title: "Un proyect​o h​u​manista​​ y científico para todos",
          paragraphs: [
            "EAFIT es una Universidad que a lo largo de su historia ha promovido el desarrollo del arte, el deporte y la cultura como pa​​​rte fundamental de la institución, adicionalmente en más de medio siglo de existencia, la Universidad se ha preocupado por ofrecer la mejor infraestructura para el desarrollo de las actividades universitarias, en un ambiente que favorece el bienestar de sus estudiantes, empleados, docentes y visitantes. La formación no se da solo en las aulas, también en diferentes espacios deportivos, artísticos y culturales. Con tus aportes a esta causa contribuyes a la creación de un ambiente que favorece el aprendizaje integral de su comunidad.​",
          ],
        },
        fondos: {
          title: "Conoce los fondos a los que puedes aportar",
          cards: [
            {
              id: 1,
              img: {
                title: "Cultura",
                src: "/src/assets/images/card_cultura.png",
              },
              title: "Cultura",
              paragraph:
                "Apoyamos ​actividades culturales y artístic​as de la Universidad, tales como obras de literatura, arte, películas, documentales, música, entre otras. Además, con esta inicia​​tiva se contribuye al fortalecimiento del acervo documental de la Universidad.​​",
            },
            {
              id: 2,
              img: {
                title: "De´prte",
                src: "/src/assets/images/card_deporte.png",
              },
              title: "Deporte",
              paragraph:
                "Foment​amos el deporte y contrib​uimos al desarrollo integral de los deportistas de EAFIT en diferentes competencias y eventos a nivel representativo de la Institución.​",
            },
          ],
          paragraphs: [
            "Gracias a tus aportes a nuest​​ro​ fondo de becas, lograre​mos qu​​e muchos ​m​ás estudiantes puedan acceder a una ins​​​titución de alta calidad ​que ayud​​ará a que la vida de esto​s jóvenes se transforme ​para siem​​pre ​logrando así una sociedad más equitativa.",
          ],
        },
      },
    },
    donateHere: {
      title: "Ayuda a volar, empieza a donar",
      button: {
        title: "Dona aquí",
        href: DONACIONES,
      },
    },
  },
  
  initiatives: {
    title: "Iniciativas",
    cards: [
      {
        id: 1,
        imagen: {
          title: "Eafit vamos pa'lante",
          src: "/src/assets/images/vamos_pa_lante.png",
        },
        title: "Eafit vamos pa'lante",
        button: {
          title: "Ver más",
          href: "https://www.eafit.edu.co/institucional/centro-filantropia/campanias/Paginas/vamospalante.aspx",
        },
      },
      {
        id: 2,
        imagen: {
          title: "Giving Day Eafit",
          src: "/src/assets/images/giving_day.jpg",
        },
        title: "Giving Day Eafit",
        button: {
          title: "Ver más",
          href: "https://www.eafit.edu.co/institucional/centro-filantropia/campanias/Paginas/giving-day.aspx",
        },
      },
      {
        id: 3,
        imagen: {
          title: "Productos con sentido Eafitense",
          src: "/src/assets/images/productos_con_sentido.jpg",
        },
        title: "Productos con sentido Eafitense",
        button: {
          title: "Ver más",
          href: "https://www.eafit.edu.co/institucional/centro-filantropia/campanias/Paginas/productosconsentido.aspx",
        },
      },
      {
        id: 4,
        imagen: {
          title: "Vincúlate a creadores de principios",
          src: "/src/assets/images/creadores_de_principios.jpg",
        },
        title: "Vincúlate a creadores de principios",
        button: {
          title: "Ver más",
          href: "https://www.eafit.edu.co/institucional/centro-filantropia/campanias/Paginas/creadoresdeprincipios.aspx",
        },
      },
      {
        id: 5,
        imagen: {
          title: "Volemos juntos",
          src: "/src/assets/images/volemos_juntos.png",
        },
        title: "Volemos juntos",
        button: {
          title: "Ver más",
          href: "https://www.eafit.edu.co/institucional/centro-filantropia/campanias/Paginas/volemosjuntos.aspx",
        },
      },
    ],
  },
  howToDonate: {
    title: "¿Cómo donar?",
    subtitle:
      "En Filantropía EAFIT contamos con diferentes canales​para facilitar ​el proceso de don​​ación.​",
    cards: [
      {
        id: 1,
        img: {
          title: "Donación en línea",
          src: "/src/assets/images/donacion_en_linea.png",
        },
        title: "Donación en línea",
        paragraphs: [
          "De forma fácil y segura realiza la donación con ta​rjeta de crédito o débito​ haciendo clic en el í​​cono o ​​​a través ​de ​​nuestro siti​o web de donaciones​.​​​​",
          "​*Para realizar transacciones electrónicas por internet recomendamos utilizar el navegador Google Chrome.​",
        ],
      },
      {
        id: 2,
        img: {
          title: "Transferencia",
          src: "/src/assets/images/transferencia.png",
        },
        title: "Transferencia",
        paragraphs: [
          "Puedes programar tus donaciones recurrentes desde la sucursal virtual personas inscribiendo el convenio No. 76787 a nombre de EAFIT CENTRO FILANTROPÍA por la opción “pagos facturas” o puedes acercarte a cualquier sucursal Bancolombia y solicitar la inscripción al mismo convenio.",
        ],
      },
      {
        id: 3,
        img: {
          title: "Con código QR",
          src: "/src/assets/images/con_codigo_qr.png",
        },
        title: "Con código QR",
        paragraphs: [
          "Selecciona la opción “Transferencias”, luego elige la opción “con código QR” y escoge “Transferir usando la cámara.”​",
          "Desde la sucursal virtual, la app personas o directamente desde una oficina:​​​​",
          "A la cuenta de ahorros Bancolombia número 935-948075-78 a nombre de la Universidad EAFIT.​​",
          "*Recuerda enviarnos el comprobante de cualquier transacción, tu nombre, ​tu documento de identidad y tu número de teléfono al correo ​​​cfilantropia@eafit.edu.co​​​​​​",
        ],
      },
      {
        id: 4,
        img: {
          title: "Cheque o donación en especie",
          src: "/src/assets/images/cheque_o_donacion_en_especie .png",
        },
        title: "Cheque o donación en especie",
        paragraphs: [
          "Comunícate con Filantropía EAFIT:(57) 604​ 2619500 ext 9297",
          "​cfilantropia@eafit.edu.co",
        ],
      },
      {
        id: 5,
        img: {
          title: "Personalmente en la Universidad EAFIT",
          src: "/src/assets/images/personalmente_en_la_universidad_eafit.png",
        },
        title: "Personalmente en la Universidad EAFIT",
        paragraphs: [
          "Dirígete a la caja principal del campus en Medellín, ubicado ​en la ​c​ra 49 #7 Sur-50 Bloque 29, piso 1.​",
        ],
      },
      {
        id: 6,
        img: {
          title: "Deducción de nómina para empleados",
          src: "/src/assets/images/deduccion_de_nomina_para_empleados.png",
        },
        title: "Deducción de nómina para empleados",
        paragraphs: [
          "Si eres profesor o empleado de la Universidad, puedes realizar tu donación ingr​esando a este link y diligenciando el formulario.​​",
          "​Si deseas hacerlo físico,​ ​ descarga el formato de deducción de nómina​ y envíalo firmado, como documento adjunto, a los correos mavelasquc@eafit.edu.co​​ y ​ ​cfilant​ropia@eafit.edu.co.​​",
        ],
      },
      {
        id: 7,
        img: {
          title: "Tiempo y talento",
          src: "/src/assets/images/tiempo_talento.png",
        },
        title: "Tiempo y talento",
        paragraphs: [
          "Puedes donar tu tiempo, talento y/o conocimiento participando de los diferentes proyectos ​de voluntariado en temas comunitarios, sociales, culturales, educativos y filantrópicos, ​contribuyendo con la transformación social del país y obteniendo incontables experiencias ​​​que le aportarán ​a tu proyecto de vida. Únete.",
          "Ingresa y diligencia el formulario haciendo clic aquí​​​​​",
        ],
      },
    ],
    paragraph:
      "Para donaciones en especie, títulos valores, y donaciones que superen los 39 millones de pesos, comunícate con Filantropía EAFIT ​al teléfono (57) 604​ 26195, extensión 9297, o envíanos un correo electrónico a cfilantropia@eafit.edu.co​.​​",
  },
  more: {
    title: "Más",
    accordion: {
      informesDeGestion: {
        title: "Informes de gestión",
        cards: [
          {
            id: 1,
            img: {
              title: "Informe de gestión 2019",
              src: "/src/assets/images/informe_gestion_2019.jpg",
            },
            title: "Informe de gestión 2019",
            button: {
              title: "Ver más",
              href: "https://www.eafit.edu.co/institucional/centro-filantropia/Paginas/informe-de-gestion-filantropia2019.aspx",
            },
          },
          {
            id: 2,
            img: {
              title: "Informe de gestión 2020",
              src: "/src/assets/images/informe_gestion_2020.jpg",
            },
            title: "Informe de gestión 2020",
            button: {
              title: "Ver más",
              href: "https://www.eafit.edu.co/institucional/centro-filantropia/Paginas/informe-de-gestion-filantropia2020.aspx",
            },
          },
          {
            id: 1,
            img: {
              title: "Informe de gestión 2021",
              src: "/src/assets/images/informe_gestion_2021.jpg",
            },
            title: "Informe de gestión 2021",
            button: {
              title: "Ver más",
              href: "https://www.eafit.edu.co/institucional/centro-filantropia/Paginas/informegestion2021.aspx",
            },
          },
          {
            id: 2,
            img: {
              title: "Informe de gestión 2022",
              src: "/src/assets/images/informe_gestion_2022.jpg",
            },
            title: "Informe de gestión 2022",
            button: {
              title: "Ver más",
              href: "https://www.eafit.edu.co/institucional/centro-filantropia/Paginas/informe-de-gestion-2022.aspx",
            },
          },
        ],
      },
      noticias: {
        title: "Noticias",
        cards: [
          {
            id: 1,
            img: {
              title: "noticia_1",
              src: "/src/assets/images/noticia_1.jpeg",
            },
            date: "Nov 23,2020",
            category: "INSTITUCIONAL",
            paragraph:
              "El Centro de Filantropía sigue sumando esfuerzos para apoyar de manera integral a todos los eafitenses",
            button: {
              title: "Ver más",
              href: "https://www.eafit.edu.co/noticias/egresados/2020/centro-filantropia-sumando-esfuerzos-para-apoyar-eafitenses",
            },
          },
          {
            id: 2,
            img: {
              title: "noticia_2",
              src: "/src/assets/images/noticia_2.jpeg",
            },
            date: "Sep 24,2020",
            category: "INSTITUCIONAL",
            paragraph: "¡Recuerda que la solidaridad empieza por casa!",
            button: {
              title: "Ver más",
              href: "https://www.eafit.edu.co/noticias/estudiantes/2020/recuerda-solidaridad-empieza-casa",
            },
          },
          {
            id: 3,
            img: {
              title: "noticia_3",
              src: "/src/assets/images/noticia_3.jpeg",
            },
            date: "Jul 3,2020",
            category: "EAFITENSES",
            paragraph:
              "¡Eafitenses, 1127 estudiantes de la U fueron beneficiados por el Fondo de Solidaridad 60 años EAFIT!",
            button: {
              title: "Ver más",
              href: "https://www.eafit.edu.co/noticias/estudiantes/2020/eafitenses-1127-estudiantes-beneficiados-por-fondo-solidaridad-60-anios-eafit",
            },
          },
          {
            id: 4,
            img: {
              title: "noticia_4",
              src: "/src/assets/images/noticia_4.jpeg",
            },
            date: "May 21,2020",
            category: "INSTITUCIONAL",
            paragraph: '"La solidaridad, eje transversal entre los eafitenses"',
            button: {
              title: "Ver más",
              href: "https://www.eafit.edu.co/noticias/estudiantes/2020/la-solidaridad-eje-transversal-entre-los-eafitenses",
            },
          },
          {
            id: 5,
            img: {
              title: "noticia_5",
              src: "/src/assets/images/noticia_5.jpeg",
            },
            date: "May 19,2020",
            category: "PROYECCIÓN",
            paragraph:
              "EAFIT crea el Fondo de Solidaridad 60 años para apoyar la continuidad del aprendizaje de estudiantes con dificultades económicas",
            button: {
              title: "Ver más",
              href: "https://www.eafit.edu.co/noticias/agenciadenoticias/2020/EAFIT-crea-el-Fondo-de-Solidaridad-60-anios-para-apoyar-la-continuidad-del-aprendizaje-de-estudiantes-con-dificultades-economicas",
            },
          },
          {
            id: 6,
            img: {
              title: "noticia_6",
              src: "/src/assets/images/noticia_6.jpeg",
            },
            date: "Abr 13,2020",
            category: "PROYECCIÓN",
            paragraph:
              "El Centro de Filantropía sigue sumando esfuerzos para apoyar de manera integral a todos los eafitenses",
            button: {
              title: "Ver más",
              href: "https://www.eafit.edu.co/noticias/egresados/2020/egresados-eafitenses-la-solidaridad-empieza-por-casa",
            },
          },
          {
            id: 7,
            img: {
              title: "noticia_7",
              src: "/src/assets/images/noticia_7.jpeg",
            },
            date: "Sep 26, 2019",
            category: "ACADEMIA",
            paragraph:
              "Open Day, un espacio para conocer la oferta de posgrados de EAFIT",
            button: {
              title: "Ver más",
              href: "https://www.eafit.edu.co/noticias/agenciadenoticias/2019/open-day-un-espacio-para-conocer-la-oferta-de-posgrados-de-eafit",
            },
          },
          {
            id: 8,
            img: {
              title: "noticia_8",
              src: "/src/assets/images/noticia_8.jpeg",
            },
            date: "Jul 15, 2019",
            category: "EGRESADOS",
            paragraph:
              "Estos jóvenes le darán una nueva dimensión al campo colombiano",
            button: {
              title: "Ver más",
              href: "https://www.eafit.edu.co/noticias/egresados/2019/estos-jovenes-daran-nueva-dimension-al-campo-colombiano",
            },
          },
          {
            id: 9,
            img: {
              title: "noticia_9",
              src: "/src/assets/images/noticia_9.jpeg",
            },
            date: "Feb 7, 2019",
            category: "ACADEMIA",
            paragraph:
              "Un nuevo Centro para potenciar la transformación social desde la filantropía",
            button: {
              title: "Ver más",
              href: "https://www.eafit.edu.co/noticias/egresados/2019/un-nuevo-centro-para-potenciar-la-transformacion-social-desde-la-filantropia",
            },
          },
          {
            id: 10,
            img: {
              title: "noticia_10",
              src: "/src/assets/images/noticia_10.jpeg",
            },
            date: "Feb 6, 2019",
            category: "ANÁLISIS ACADÉMICO",
            paragraph:
              "La filantropía es el motor de la humanidad: Juan Luis Mejía",
            button: {
              title: "Ver más",
              href: "https://www.eafit.edu.co/noticias/agenciadenoticias/2019/la-filantropia-es-el-motor-de-la-humanidad-juan-luis-mejia",
            },
          },
        ],
      },
      preguntasFrecuentes: {
        title: "Preguntas frecuentes",
        cards: [
          {
            id: 1,
            title: "¿Qué es una donación?",
            paragraph:
              "Es el acto por el cual una persona natural o jurídica, denominada donante, transfiere a título gratuito una parte de sus bienes a otra que la acepta, denominado donatario.",
            modal: {
              title: "¿Qué es una donación?",
              paragraphs: [
                "Es el acto por el cual una persona natural o jurídica, denominada donante, transfiere a título gratuito una parte de sus bienes a otra que la acepta, denominado donatario.",
              ],
            },
            button: {
              title: "Ver más",
              href: 1,
            },
          },
          {
            id: 2,
            title: "¿Cómo puedo hacer una donación?",
            paragraph:
              "​Desde Filantropía EAFIT contamos con diferentes canales para facilitar el proceso de donación. Para resolver cualquier inquietud comunícate con...",
            modal: {
              title: "¿Cómo puedo hacer una donación?",
              paragraphs: [
                "Es el acto por el cual una persona natural o jurídica, denominada donante, transfiere a título gratuito una parte de sus bienes a otra que la acepta, denominado donatario.",
                "Para resolver cualquier inquietud comunícate con Filantropía EAFIT al teléfono 604 2619500 extensión 9297, o envíanos un correo electrónico a cfilantropia@eafit.edu.co.",
                "Medios para realizar una donación",
                "Pago en línea: De forma fácil y segura puedes realizar la donación con tarjeta crédito o débito a través de nuestro sitio web de donaciones.",
                "Transferencia electrónica:  Puedes realizar tu donación por medio de transferencia a la cuenta de ahorros Bancolombia número 935-948075-78 a nombre de la Universidad EAFIT y enviarnos copia del comprobante al correo cfilantropia@eafit.edu.co.",
                "Cheque: Comunícate con Filantropía EAFIT al teléfono 604 2619500 extensión 9297, o envíanos un correo electrónico a cfilantropia@eafit.edu.co",
                "Caja principal Universidad EAFIT:  Puedes dirigirte a la Universidad EAFIT en la dirección Carrera 49 N° 7 Sur-50, Bloque 29 Piso 1, Medellín, Colombia.",
                "Para donaciones en especie, títulos valores u otros, comunícate con Filantropía EAFIT al teléfono 604 2619500 extensión 9297, o envíanos un correo electrónico a cfilantropia@eafit.edu.co.",
              ],
            },
            button: {
              title: "Ver más",
              href: 2,
            },
          },
          {
            id: 3,
            title: "¿Quiénes pueden donar?",
            paragraph:
              "​Todas las personas interesadas en apoyar a la Universidad EAFIT, entre ellos estudiantes, egresados, empleados, aliados, y personas jurídicas como organizaciones y fundaciones.",
            modal: {
              title: "¿Quiénes pueden donar?",
              paragraphs: [
                "​Todas las personas interesadas en apoyar a la Universidad EAFIT, entre ellos estudiantes, egresados, empleados, aliados, y personas jurídicas como organizaciones y fundaciones.",
              ],
            },
            button: {
              title: "Ver más",
              href: 3,
            },
          },
          {
            id: 4,
            title: "¿Cómo puedo hacer donaciones en especie?",
            paragraph:
              "​La Universidad EAFIT también recibe donaciones en especie. Entre estas se cuentan equipos para laboratorios, equipos deportivos, computadores, libros...",
            modal: {
              title: "¿Cómo puedo hacer donaciones en especie?",
              paragraphs: [
                "​La Universidad EAFIT también recibe donaciones en especie. Entre estas se cuentan equipos para laboratorios, equipos deportivos, computadores, libros, dotación para las aulas, instrumentos para la orquesta sinfónica EAFIT, entre otros. Estos aportes permiten a nuestros estudiantes tener acceso a herramientas indispensables para su aprendizaje e igualmente contribuyen con la labor docente y de investigación de nuestros profesores. Para hacer una donación en especie, envíanos un correo a cfilantropia@eafit.edu.co o comunícate al teléfono (57) 604 2619500 extensión 9297.",
              ],
            },
            button: {
              title: "Ver más",
              href: 4,
            },
          },
          {
            id: 5,
            title: "¿Cómo obtengo el certificado de donación?",
            paragraph:
              "Filantropía EAFIT hará llegar el certificado de donación durante los tres primeros meses del año siguiente al año en que realizaste la donación a la dirección registrada por el donante...",
            modal: {
              title: "¿Cómo obtengo el certificado de donación?",
              paragraphs: [
                "Filantropía EAFIT hará llegar el certificado de donación durante los tres primeros meses del año siguiente al año en que realizaste la donación a la dirección registrada por el donante, en caso de necesitar el certificado de manera inmediata realiza tu solicitud al correo electrónico cfilantropia@eafit.edu.co",
              ],
            },
            button: {
              title: "Ver más",
              href: 5,
            },
          },
          {
            id: 6,
            title:
              "¿Qué beneficios tributarios obtengo al realizar una donación?",
            paragraph:
              "​La Universidad EAFIT, en su calidad de donataria y en cumplimiento de la ley fiscal, otorga el certificado de donación independientemente de su monto...",
            modal: {
              title:
                "¿Qué beneficios tributarios obtengo al realizar una donación?",
              paragraphs: [
                "​La Universidad EAFIT, en su calidad de donataria y en cumplimiento de la ley fiscal, otorga el certificado de donación independientemente de su monto, debidamente suscrito por el revisor fiscal, el cual dará lugar a un descuento sobre el impuesto de renta y complementarios, bien sea persona natural o jurídica.",
              ],
            },
            button: {
              title: "Ver más",
              href: 6,
            },
          },
          {
            id: 7,
            title: "¿Qué es una donación recurrente?",
            paragraph:
              "Son donaciones que puedes programar para que se realicen de forma automática periódicamente.",
            modal: {
              title: "¿Qué es una donación recurrente?",
              paragraphs: [
                "Son donaciones que puedes programar para que se realicen de forma automática periódicamente.",
              ],
            },
            button: {
              title: "Ver más",
              href: 7,
            },
          },
          {
            id: 8,
            title:
              "¿Cómo y cuándo puedo cancelar la recurrencia de una donación?",
            paragraph:
              "​Se puede cancelar la recurrencia en el momento que el donante lo decida, solo debes enviar un correo electrónico a la dirección...",
            modal: {
              title:
                "¿Cómo y cuándo puedo cancelar la recurrencia de una donación?",
              paragraphs: [
                "Se puede cancelar la recurrencia en el momento que el donante lo decida, solo debes enviar un correo electrónico a la dirección: cfilantropia@eafit.edu.co, o comunicarte al teléfono (57) 604 2619500 extensión 9297.",
              ],
            },
            button: {
              title: "Ver más",
              href: 8,
            },
          },
          {
            id: 9,
            title:
              "¿Cuál es el monto mínimo y máximo para hacer una donación en línea?",
            paragraph:
              "Se pueden realizar donaciones desde $10.000 pesos colombianos hasta $39 millones de pesos colombianos.",
            modal: {
              title: "",
              paragraphs: [
                "Se pueden realizar donaciones desde $10.000 pesos colombianos hasta $39 millones de pesos colombianos.",
              ],
            },
            button: {
              title: "Ver más",
              href: 9,
            },
          },
          {
            id: 10,
            title: "¿Cuándo una donación requiere insinuación notarial?",
            paragraph:
              "Todas las donaciones en dinero o en especie que superen los 50SMLMV requieren insinuación notarial. Para saber más...",
            modal: {
              title: "¿Cuándo una donación requiere insinuación notarial?",
              paragraphs: [
                "Todas las donaciones en dinero o en especie que superen los 50SMLMV requieren insinuación notarial. Para saber más de este proceso comunícate a cfilantropia@eafit.edu.co o al teléfono (57) 604 2619500 extensión 9297.",
              ],
            },
            button: {
              title: "Ver más",
              href: 10,
            },
          },
        ],
      },
      contacto: {
        title: "Contacto",
        subtitle: "Escríbenos a cfilantropia@eafit.edu.co",
        cards: [
          {
            id: 1,
            img: {
              title: "Maria Clara Ceballos Arango",
              src: "/src/assets/images/MariaClaraCeballos.png",
            },
            name: "Maria Clara Ceballos Arango",
            ocupation: "Jefa de Filantroía Eafit",
            tel: "Teléfono: (57) 604 261 9500, extensión 8857​​​",
            emailFirst: "mceball4@eafit.edu.co",
            emailSecondary: "cfil​antropia@eafit.edu.co",
          },
          {
            id: 2,
            img: {
              title: "María Cristina Montoya Vélez",
              src: "/src/assets/images/MariaCristinaMontoya.png",
            },
            name: "María Cristina Montoya Vélez",
            ocupation: "Coordinadora Administrativa",
            emailFirst: "mmonto41@eafit.edu.co​",
            emailSecondary: "cfil​antropia@eafit.edu.co",
          },
          {
            id: 3,
            img: {
              title: "Luz Adriana Yepes Arias",
              src: "/src/assets/images/LuzAdrianaYepes.png",
            },
            name: "Luz Adriana Yepes Arias",
            ocupation: "Analisat de información",
            emailFirst: "layepesa@eafit.edu.co​",
          },
          {
            id: 4,
            img: {
              title: "Lizyenny Osorio Álvarez",
              src: "/src/assets/images/LizyennyOsorio.png",
            },
            name: "Lizyenny Osorio Álvarez",
            ocupation: "Analista de información",
            emailFirst: "losorioa@eafit.edu.co",
          },
          {
            id: 5,
            img: {
              title: "Marcela Builes Toro",
              src: "/src/assets/images/MarcelaBuilesToro.png",
            },
            name: "Marcela Builes Toro",
            ocupation: "Analista de comunicaciones",
            emailFirst: "mbuiles10@eafit.edu.co​",
            emailSecondary: "cfil​antropia@eafit.edu.co",
          },
          {
            id: 6,
            img: {
              title: "Nury Sepúlveda Muñoz",
              src: "/src/assets/images/NuryAndreaSepulveda.png",
            },
            name: "Nury Sepúlveda Muñoz",
            ocupation: "Auxiliar administrativa",
            tel: "Teléfono: (57) 604 261 9500, extensión 9297​​​",
            emailFirst: "nsepulv2@eafit.edu.co",
          },
        ],
      },
    },
  },
};
