export const DONATIONS = {
  header: {
    title: "TRANSFORMA VIDAS",
    subtitle: `“atraves de tus aportes para que alguien más alcance sus sueños”`,
    toggle: {
      buttonLeft: {
        title: "Realizar donaciones",
        href: "",
      },
      buttonRight: {
        title: "Generar certificado",
        href: "",
      },
    },
  },
  bodyRealizarDonaciones: {
    cuentanosDeTi: {},
    queTeMotiva: {},
  },
  bodyGenerarCertificados: {
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
