import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "Lottery 项目开发日志",
      icon: "laptop-code",
      prefix: "md/dev-log/",
      children: ["day01.md","day02.md","day03.md","day04.md","day05.md","day06.md","day07~day08.md","day09~day10.md","day11.md","day12.md"],
    },
    {
      text: "DDD 架构学习日志",
      icon: "laptop-code",
      prefix: "md/DDD-log/",
      children: ["day1.md"],
    },
    {
      text:"Dubbo 学习日志",
      icon:"laptop-code",
      prefix:"md/Dubbo-log",
      children:["day01.md"],
    },
    {
      text:"大营销-抽奖 复盘",
      icon:"laptop-code",
      prefix:"md/Dubbo-log",
      children:["day 240916.md"],
    }

  ],
});
