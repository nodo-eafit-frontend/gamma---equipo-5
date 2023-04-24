import {
  HOME,
  TESTIMONIOS,
  DONACIONES,
  REALIZAR_DONACIONES,
} from "../../routes/paths";

export const HEADER = {
  logo: {
    id: 1,
    title: "Logo filantropía",
    img: "/src/assets/images/Logo_Filantropia.png",
    href: HOME,
  },
  navbar: [
    {
      id: "0",
      title: "Inicio",
      href: HOME,
    },
    {
      id: "1",
      title: "¿Quienes somos?",
      href: "#quienes_somos",
    },
    {
      id: "2",
      title: "Causas",
      href: "#causas",
    },
    {
      id: "3",
      title: "Iniciativas",
      href: "#iniciativas",
    },
    {
      id: "4",
      title: "¿Cómo donar?",
      href: "#como_donar",
    },
    {
      id: "5",
      title: "Más",
      href: "#mas",
    },
    {
      id: "6",
      title: "Testimonios",
      href: TESTIMONIOS,
    },
    {
      id: "7",
      title: "Donaciones",
      href: `${DONACIONES}/${REALIZAR_DONACIONES}`,
    },
  ],
};
