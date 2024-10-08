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
      children:["day01.md","day02.md","day 03.md","day 04 29.md","day 05.md"],
    },
    {
      text:"大营销-抽奖 复盘",
      icon:"laptop-code",
      prefix:"md/big-market",
      children:["day 240916.md"],
    },
    {
      text:"测试学习",
      icon:"laptop-code",
      prefix:"md/ceshi",
      children:["jmeter.md"],
    },
    {
      text:"杂项",
      icon:"laptop-code",
      prefix:"md/zaxiang",
      children:["分布式锁.md","多模块的项目如何创建和启动以及部署.md","synchronized可以锁字符串吗.md","SpringBoot可以同时处理多少请求.md"],
    },
    {
      text:"RabbitMQ",
      icon:"laptop-code",
      prefix:"md/RabbitMQ",
      children:["day 01.md","day 02.md"],
    }

  ],
});
