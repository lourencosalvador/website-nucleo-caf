export interface dataNavBar {
  id: number;
  name: string;
  total: number;
}

export interface dataCartSoluctionProps {
  title: string;
  frame: string[];
}

export const dataNavBarSoluction: dataNavBar[] = [
  {
    id: 0.5,
    name: "Ferramentas",
    total: 22,
  },
  {
    id: 0.7,
    name: "Protótipos",
    total: 6,
  },
  {
    id: 0.9,
    name: "Webites",
    total: 16,
  },
  {
    id: 0.11,
    name: "Maquetes",
    total: 12,
  },
  {
    id: 0.13,
    name: "Aplicativos",
    total: 4,
  },
];

export const dataCartSoluction: dataCartSoluctionProps[] = [
  {
    title: "SDK Para envio de mensagem",
    frame: ["Framework", "Python", "Query", "Sqlite"],
  },
  {
    title: "SDK Para validar expressões ofensivas",
    frame: ["Framework", "Python", "AI"],
  },
  {
    title: "SDK Para envio de mensagem",
    frame: ["Framework", "Python", "Query", "Gemini"],
  },
  {
    title: "SDK Para envio de mensagem",
    frame: ["Framework", "Python", "Query", "Gemini"],
  },
  {
    title: "SDK Para validar expressões ofensivas",
    frame: ["Framework", "Python", "AI"],
  },
  {
    title: "SDK Para envio de mensagem",
    frame: ["Framework", "Python", "Query", "Sqlite"],
  }
];
