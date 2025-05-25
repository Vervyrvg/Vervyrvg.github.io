interface HardSkill {
  name: string;
  description: string;
  icon: string;
}

const hardSkills: HardSkill[] = [
  {
    name: "Fortinet",
    description: "My favorite static site generator for building modern websites",
    icon: "astro_dark"
  },
  {
    name: "WatchGuard",
    description: "My favorite React framework for building modern web apps",
    icon: "nextjs_icon_dark"
  },
  {
    name: "CheckPoint",
    description: "I've been using NodeJs for backend development since 2018",
    icon: "nodejs"
  },
  {
    name: "Palo Alto Network",
    description: "My favorite database for modern apps",
    icon: "mongodb"
  }
];

export default hardSkills;
