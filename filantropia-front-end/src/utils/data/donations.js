import { motion } from "framer-motion";
import { REALIZAR_DONACIONES, GENERAR_CERTIFICADO } from "../../routes/paths";

export const DONATIONS = {
  header: {
    title: "TRANSFORMA VIDAS",
    subtitle: `“atraves de tus aportes para que alguien más alcance sus sueños”`,
    toggle: {
      buttonLeft: {
        title: "Realizar donaciones",
        href: GENERAR_CERTIFICADO,
      },
      buttonRight: {
        title: "Generar certificado",
        href: REALIZAR_DONACIONES,
      },
    },
  },
  bodyDonations: {
    cuentanosDeTi: {
      title: "Cuéntanos de ti",
      form: [
        {
          id: 1,
          label: "Tipo de documento",
          type: "select",
          name: "typeDocument",
          options: [
            {
              id: 1,
              label: "Selecciona una opción",
              value: "",
            },
            {
              id: 2,
              label: "Cédula de ciudadanía",
              value: "Cédula de ciudadanía",
            },
            {
              id: 3,
              label: "Cédula de extranjería",
              value: "Cédula de extranjería",
            },
            {
              id: 4,
              label: "Pasaporte",
              value: "Pasaporte",
            },
            {
              id: 5,
              label: "Nit",
              value: "Nit",
            },
          ],
        },
        {
          id: 2,
          label: "Documento",
          placeholder: "Ingresa tu número de documento",
          type: "text",
          name: "document",
        },
        {
          id: 3,
          label: "Nombres",
          placeholder: "Ingresa tus nombres",
          type: "text",
          name: "names",
        },
        {
          id: 4,
          label: "Apellidos",
          placeholder: "Ingresa tus apellidos",
          type: "text",
          name: "surnames",
        },
        {
          id: 5,
          label: "Teléfono - Celular",
          placeholder: "Ingresa tu número de teléfono - celular",
          type: "number",
          name: "tel",
        },
        {
          id: 6,
          label: "Género",
          type: "select",
          name: "genre",
          options: [
            {
              id: 1,
              label: "Selecciona una opción",
              value: "",
            },
            {
              id: 2,
              label: "Hombre",
              value: "hombre",
            },
            {
              id: 3,
              label: "Mujer",
              value: "mujer",
            },
          ],
        },
        {
          id: 7,
          label: "Correo electrónico",
          placeholder: "Ingresa tu correo electrónico",
          type: "email",
          name: "email",
        },
        {
          id: 8,
          label: "Estado civil",
          type: "select",
          name: "civilStatus",
          options: [
            {
              id: 1,
              label: "Selecciona una opción",
              value: "",
            },
            {
              id: 2,
              label: "Soltero",
              value: "soltero",
            },
            {
              id: 3,
              label: "Casado",
              value: "casado",
            },
            {
              id: 4,
              label: "Unión marital",
              value: "union marital",
            },
            {
              id: 5,
              label: "Otro",
              value: "otro",
            },
          ],
        },
        {
          id: 9,
          label: "Fecha de nacimiento",
          placeholder: "DD/MM/YYYY",
          type: "calendar",
          name: "calendar",
        },
        {
          id: 10,
          label: "País",
          type: "select",
          name: "country",
          options: [
            {
              id: 1,
              label: "Selecciona una opción",
              value: "",
            },
            {
              id: 2,
              label: "Colombia",
              value: "Colombia",
            },
            {
              id: 3,
              label: "Argentina",
              value: "Argentina",
            },
            {
              id: 4,
              label: "Brasil",
              value: "Brasil",
            },
            {
              id: 5,
              label: "Estados Unidos",
              value: "Estados Unidos",
            },
          ],
        },
        {
          id: 11,
          label: "Departamento",
          type: "select",
          name: "department",
          options: [
            {
              id: 1,
              label: "Selecciona una opción",
              value: "",
            },
            {
              id: 2,
              label: "Antioquia",
              value: "Antioquia",
            },
            {
              id: 3,
              label: "Atlántico",
              value: "Atlantico",
            },
            {
              id: 4,
              label: "Cundinamarca",
              value: "Cundinamarca",
            },
            {
              id: 5,
              label: "Boyacá",
              value: "Boyaca",
            },
          ],
        },
        {
          id: 12,
          label: "Ciudad",
          type: "select",
          name: "city",
          options: [
            {
              id: 1,
              label: "Selecciona una opción",
              value: "",
            },
            {
              id: 2,
              label: "Medellín",
              value: "Medellín",
            },
            {
              id: 3,
              label: "Envigado",
              value: "Envigado",
            },
            {
              id: 4,
              label: "Sabaneta",
              value: "Sabaneta",
            },
            {
              id: 5,
              label: "Santa Fé de Antioquia",
              value: "Santa Fé de Antioquia",
            },
          ],
        },
      ],
    },
    queTeMotiva: {
      title: "¿Qué te motiva?",
      subtitle: "Información de donación",
      form: [
        {
          id: 1,
          label: "Fondo de donación",
          type: "select",
          name: "donationFund",
          options: [
            {
              id: 1,
              label: "Selecciona una opción",
              value: "",
            },
            {
              id: 2,
              label: "Cultura",
              value: "Cultura",
            },
            {
              id: 3,
              label: "Deporte",
              value: "Deporte",
            },
            {
              id: 4,
              label: "Fondo de becas",
              value: "Fondo de becas",
            },
            {
              id: 5,
              label: "Fondo negocios internacionales",
              value: "Fondo negocios internacionales",
            },
            {
              id: 6,
              label: "Movilidad internacional",
              value: "Movilidad internacional",
            },
          ],
        },
        {
          id: 2,
          label: "Valor a donar",
          placeholder: "Valor sin espacios ni puntos (Pesos Colombianos)",
          type: "number",
          name: "valueOfDonation",
        },
        {
          id: 3,
          label: "Recurrencia",
          type: "checkbox",
          name: "recurrence",
        },
        {
          id: 4,
          label: "¿Cómo te enteraste de filantropía?",
          type: "select",
          name: "findUs",
          options: [
            {
              id: 1,
              label: "Selecciona una opción",
              value: "",
            },
            {
              id: 2,
              label: "Página web",
              value: "Página web",
            },
            {
              id: 3,
              label: "Correo electrónico",
              value: "Correo electrónico",
            },
            {
              id: 4,
              label: "Redes sociales",
              value: "Redes sociales",
            },
            {
              id: 5,
              label: "Teléfono",
              value: "Teléfono",
            },
            {
              id: 6,
              label: "Evento general",
              value: "Evento general",
            },
          ],
        },
        {
          id: 5,
          label: "Forma de pago",
          type: "select",
          name: "wayToPay",
          options: [
            {
              id: 1,
              label: "Selecciona una opción",
              value: "",
            },
            {
              id: 2,
              label: "Pago por PSE",
              value: "Pago por PSE",
            },
            {
              id: 3,
              label: "Código de barras",
              value: "Código de barras",
            },
            {
              id: 4,
              label: "Tarjeta de crédito",
              value: "Tarjeta de crédito",
            },
          ],
        },
        {
          id: 6,
          label: "Acepta términos y condiciones",
          type: "checkbox",
          name: "accept",
        },
      ],
      frequentQuestions: {
        title: "Preguntas frecuentes",
        questions: {
          title: "Preguntas Frecuentes",
          subtitle: "PREGUNTAS FRECUENTES SOBRE PAGOS ELECTRÓNICOS",
          list: [
            {
              id: 1,
              title: "1. ¿Qué es PlacetoPay?",
              paragraph:
                "PlacetoPay es la plataforma de pagos electrónicos que usa La Universidad EAFIT para procesar en línea las transacciones generadas en la tienda virtual con las formas de pago habilitadas para tal fin.",
            },
            {
              id: 2,
              title: "2. ¿Cómo puedo pagar?",
              paragraph:
                "En la tienda virtual de La Universidad EAFIT usted podrá realizar su pago con los medios habilitados para tal fin. Usted, de acuerdo a las opciones de pago escogidas por el comercio, podrá pagar a través de American Express, PSE, Diners Club, Master Card y Visa.",
            },
            {
              id: 3,
              title:
                "3. ¿Es seguro ingresar mis datos bancarios en este sitio web?",
              paragraph:
                "Para proteger tus datos La Universidad EAFIT delega en PlacetoPay la captura de la información sensible. Nuestra plataforma de pagos cumple con los más altos estándares exigidos por la norma internacional PCI DSS de seguridad en transacciones con tarjeta de crédito. Además tiene certificado de seguridad SSL expedido por GeoTrust una compañía Verisign, el cual garantiza comunicaciones seguras mediante la encriptación de todos los datos hacia y desde el sitio; de esta manera te podrás sentir seguro a la hora de ingresar la información de su tarjeta. Durante el proceso de pago, en el navegador se muestra el nombre de la organización autenticada, la autoridad que lo certifica y la barra de dirección cambia a color verde. Estas características son visibles de inmediato y dan garantía y confianza para completar la transacción en PlacetoPay. PlacetoPay también cuenta con el monitoreo constante de McAfee Secure y la firma de mensajes electrónicos con Certicámara.",
            },
            {
              id: 4,
              title:
                "4. ¿Puedo realizar el pago cualquier día y a cualquier hora?",
              paragraph:
                "Sí, en La Universidad EAFIT podrás realizar tus pagos en línea los 7 días de la semana, las 24 horas del día a sólo un clic de distancia.",
            },
            {
              id: 5,
              title: "5. ¿Puedo cambiar la forma de pago?",
              paragraph:
                "Si aún no has finalizado tu pago, podrás volver al paso inicial y elegir la forma de pago que prefieras. Una vez finalizada la compra no es posible cambiar la forma de pago.",
            },
            {
              id: 6,
              title:
                "6. ¿Pagar electrónicamente tiene algún valor para mí como comprador?",
              paragraph:
                "No, los pagos electrónicos realizados a través de PlacetoPay no generan costos adicionales para el comprador.",
            },
            {
              id: 7,
              title: "7. ¿Qué debo hacer si mi transacción no concluyó?",
              paragraph:
                "En primera instancia, revisar si llegó un email de confirmación de la transacción a la cuenta de correo electrónico inscrita en el momento de realizar el pago, en caso de no haberlo recibido, deberás ponerte en contacto con nosotros para confirmar el estado de la transacción.",
            },
            {
              id: 8,
              title: "8. ¿Qué debo hacer si no recibí el comprobante de pago?",
              paragraph:
                "Por cada transacción aprobada a través de PlacetoPay , recibirás un comprobante del pago con la referencia de compra en la dirección de correo electrónico que indicaste al momento de pagar. Si no lo recibes, podrás contactar a (Natalia Arroyave Giraldo) o a la línea (574) 261 9500 Ext. 9895 o al correo electrónico narroya4@eafit.edu.co, para solicitar el reenvío del comprobante a la misma dirección de correo electrónico registrada al momento de pagar.",
            },
          ],
        },
      },
      button: {
        title: "Realiza tu donación",
        href: "https://checkout.placetopay.com/spa/session/103878651/9b3ecb9e1d62ef4dbe4aa6c7834c1180",
      },
    },
  },
  bodyCertifictes: {
    solicitarCertificado: {
      title: "Solicitar Certificado",
      form: {
        tipoDocumento: {
          title: "Tipo de documento",
          type: "select",
          options: [
            {
              id: 1,
              label: "Cédula de ciudadanía",
              value: "Cédula de ciudadanía",
            },
            {
              id: 2,
              label: "Cédula de extranjería",
              value: "Cédula de extranjería",
            },
            {
              id: 3,
              label: "Pasaporte",
              value: "Pasaporte",
            },
            {
              id: 4,
              label: "Nit",
              value: "Nit",
            },
          ],
        },
        numeroDocumento: {
          title: "Número de documento",
          type: "text",
          placeholder: "Ingrese su número de documento",
        },
        correo: {
          title: "Correo electrónico",
          type: "text",
          placeholder: "Ingrese su correo electrónico",
        },
        tel: {
          title: "Teléfono",
          type: "number",
          placeholder: "Ingrese su teléfono",
        },
        button: {
          title: "Generar",
          href: "",
        },
      },
    },
    consultarCertificado: {
      title: "Consultar certificado",
      form: {
        tipoDocumento: {
          title: "Tipo de documento",
          type: "select",
          options: [
            {
              id: 1,
              label: "Cédula de ciudadanía",
              value: "Cédula de ciudadanía",
            },
            {
              id: 2,
              label: "Cédula de extranjería",
              value: "Cédula de extranjería",
            },
            {
              id: 3,
              label: "Pasaporte",
              value: "Pasaporte",
            },
            {
              id: 4,
              label: "Nit",
              value: "Nit",
            },
          ],
        },
        numeroDocumento: {
          title: "Número de documento",
          type: "text",
          placeholder: "Ingrese su número de documento",
        },
        button: {
          title: "Buscar",
          href: "",
        },
      },
    },
  },
  footer: {
    title: "Contáctanos",
    contacts: [
      {
        id: 1,
        title: "Dirección",
        paragraphs: [
          "Carrera 48 C 10 sur 106",
          "Casa 8 Egresados",
          "Barrio La Aguacatala II",
          "Medellín - Colombia",
        ],
      },
      {
        id: 2,
        title: "Teléfono",
        paragraphs: ["(574) 261 9500 Ext. 9297"],
      },
      {
        id: 3,
        title: "E-mail",
        paragraphs: ["cfilantropia@eafit.edu.co"],
      },
    ],
  },
};
