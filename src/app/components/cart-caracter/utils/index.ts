import cart1 from "@/../public/missao.png";
import cart2 from "@/../public/visao.png";
import cart3 from "@/../public/valores.png";
import { cartProps } from "../cart";

export const dataCart: cartProps[] = [
  {
    id: 0.5,
    image: cart1,
    title: "MISSÃO",
    descripition: `
      Promover o desenvolvimento de habilidades tecnológicas
       e criativas nos jovens, estimulando o interesse
        pela ciência, engenharia e áreas...
      `,
  },
  {
    id: 0.7,
    image: cart2,
    title: "VISAO",
    descripition: `
      Ser um centro de referência em tecnologia e inovação para jovens, 
      reconhecido por sua excelência na formação de cidadãos críticos, 
      criativos e inovadores....
        `,
  },
  {
    id: 0.9,
    image: cart3,
    title: "Visao",
    descripition: `
        O Núcleo Tecnológico do CAF atua com ética e responsabilidade em todas as suas acções,
         é transparente em suas decisões e actividades, respeita a diversidade...
        `,
  },
];
