/* =========================================================
   孙涵韬 · 个人展示平台
   说明：本文件集中管理「项目」与「技能」数据。
   你只需要修改下面的 PROJECTS 和 SKILLS 数组即可，
   无需改动 HTML 结构，页面会自动渲染。
   ========================================================= */

/* ------------------- 项目数据 -------------------
   每个项目包含：
   - title    项目名称
   - desc     项目简介
   - tags     技术标签（数组）
   - demo     演示链接（没有可留空 ""）
   - repo     代码仓库链接（没有可留空 ""）
   想新增项目，直接往数组里加一个 {...} 即可。 */
const PROJECTS = [
  {
    title: "学生成绩管理系统",
    desc: "基于 MySQL 设计并实现学生成绩管理数据库（学生表、课程表、成绩表），完成表结构设计与约束设置；编写 SQL 脚本实现增删改查、成绩统计、挂科率分析；并用 Excel / Tableau 制作成绩分布看板，直观展示班级成绩情况。",
    tags: ["MySQL", "SQL", "Excel", "Tableau", "数据可视化"],
    demo: "",
    repo: ""
  }
  // ↓↓↓ 在这里继续添加你做过的其他项目，复制下面这段并修改即可 ↓↓↓
  // ,
  // {
  //   title: "项目二名称",
  //   desc: "项目简介……",
  //   tags: ["技术A", "技术B"],
  //   demo: "",   // 有在线演示就填链接
  //   repo: ""    // 有代码仓库就填 GitHub 链接
  // }
];

/* ------------------- 技能数据 -------------------
   每个分类包含 title（分类名）与 items（技能列表）。 */
const SKILLS = [
  {
    title: "数据处理工具",
    items: ["SQL（MySQL / Navicat）", "Python（Pandas / NumPy）", "Matplotlib / Seaborn", "Excel（透视表 / VLOOKUP）", "Tableau"]
  },
  {
    title: "专业知识",
    items: ["统计学基础（均值 / 方差 / 相关性）", "数据结构与算法", "数据库原理", "数据可视化", "Hadoop / Spark 概念"]
  },
  {
    title: "软技能",
    items: ["逻辑思维与数据敏感度", "文档撰写与报告表达", "团队协作", "业务需求理解"]
  }
];

/* ================== 渲染逻辑（一般无需修改） ================== */
function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;
  grid.innerHTML = PROJECTS.map(p => {
    const links = [];
    if (p.repo) links.push(`<a href="${p.repo}" target="_blank" rel="noopener">代码仓库 ↗</a>`);
    if (p.demo) links.push(`<a href="${p.demo}" target="_blank" rel="noopener">在线演示 ↗</a>`);
    const tags = (p.tags || []).map(t => `<span>${t}</span>`).join("");
    return `
      <article class="project-card">
        <h3>${p.title}</h3>
        <div class="project-tags">${tags}</div>
        <p>${p.desc}</p>
        <div class="project-links">${links.join("")}</div>
      </article>`;
  }).join("");
}

function renderSkills() {
  const grid = document.getElementById("skillsGrid");
  if (!grid) return;
  grid.innerHTML = SKILLS.map(s => {
    const tags = (s.items || []).map(i => `<span>${i}</span>`).join("");
    return `
      <div class="skill-card">
        <h3>${s.title}</h3>
        <div class="skill-tags">${tags}</div>
      </div>`;
  }).join("");
}

/* ================== 交互逻辑 ================== */
function initNav() {
  const toggle = document.getElementById("navToggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => links.classList.toggle("open"));
    links.querySelectorAll("a").forEach(a =>
      a.addEventListener("click", () => links.classList.remove("open"))
    );
  }
  const nav = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if (nav) nav.style.boxShadow = window.scrollY > 10 ? "0 4px 20px rgba(0,0,0,.06)" : "none";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  renderSkills();
  initNav();
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
