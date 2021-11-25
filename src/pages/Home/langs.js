const langs = {
  en: {
    chart: {
      heading: `Power Table`,
    },
    table1: {
      heading: `Recently Mined`,
      emptyText: `No recently mined blocks`,
      cols: [`Height`, `Miner`, `Time`, "Luck"],
    },
    table2: {
      heading: `Power Ranking`,
      cols: [
        `Rank`,
        `Launcher ID`,
        {
          title: `Estimated Power`,
          description: "https://rupoolproject.com/faq#3",
        },
      ],
    },
    lucks: {
      2: "Extremly Unlucky",
      3: "Very Unlucky",
      4: "Unlucky",
      5: "Average",
      6: "Lucky",
      7: "Very Lucky",
      8: "Extremly Lucky",
    },
  },
  ru: {
    chart: {
      heading: `График мощности`,
    },
    table1: {
      heading: `Недавно найденые блоки`,
      emptyText: `Пока нет найденых блоков`,
      cols: [`Высота`, `Майнер`, `Время`, `Удача`],
    },
    table2: {
      heading: `Рейтинг мощности`,
      cols: [
        `Позиция`,
        `Launcher ID`,
        {
          title: `Вычисленная мощность`,
          description: "https://rupoolproject.com/faq#3",
        },
      ],
    },
    lucks: {
      2: "Невероятно Неудачный",
      3: "Очень Неудачный",
      4: "Неудачный",
      5: "Средний",
      6: "Удачный",
      7: "Очень Удачный",
      8: "Невероятно Удачный",
    },
  },
};

export default langs;
