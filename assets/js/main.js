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
    title: "杉集 · 校园二手交易与跑腿",
    desc: "面向校园的二手交易 + 快递代拿 + 跑腿类 HarmonyOS 应用（App 与 PC 端二合一）。ArkTS 开发，Node.js 单文件后端；含学生认证、黑名单、聊天与收藏。参加 2026 开源鸿蒙大学生创新大赛。",
    tags: ["HarmonyOS", "ArkTS", "Node.js", "ArkUI"],
    demo: "",
    repo: "https://github.com/drumstarcow/sanda-market"
  },
  {
    title: "杉课 · 鸿蒙 PC 课程表",
    desc: "华为鸿蒙 PC 课程开发课作品，已上架华为应用市场（v1.0.2，2026-10-18）。课表周视图、周次切换、上课提醒；适配鸿蒙 PC 窗口形态。",
    tags: ["HarmonyOS PC", "ArkTS", "已上架"],
    demo: "",
    repo: "https://github.com/drumstarcow/my-timetable"
  },
  {
    title: "吃饱饱助手 · 校园吃饭决策智能体",
    desc: "开源 AI 技术实践期末项目（路径 B）。不是给更多选项，而是把选做完：多轮对话澄清偏好、拒绝后真实重排概率、最后落到一道菜。规则优先、模型补缝，全程可追溯。后续计划做成独立 App。",
    tags: ["Agent", "Python", "概率排序", "多轮对话"],
    demo: "",
    repo: "https://github.com/drumstarcow/sandac-choice-agent"
  },
  {
    title: "施工隐患与整改闭环协同助手",
    desc: "FDE 微专业综合项目（客户：远筑工程）。围绕一笔业务核对资料来源与版本，生成待人工复核的交接清单：不自动销项、不写业务系统。知识库 49 条、知识图谱 89 节点 / 278 关系，回答必带引用；100 笔历史回放自动关联率 84%。",
    tags: ["FastAPI", "知识图谱", "RAG", "审计留痕", "规则+LLM"],
    demo: "",
    repo: "https://github.com/drumstarcow/fde-construction-safety"
  },
  {
    title: "投标智能体平台",
    desc: "基于 FastAPI 与 SQLite 的投标辅助智能体：标讯智能匹配、招标文件废标风险体检、RAG 知识问答、投标建议书一键生成；内置工具调用智能体（规则模式 + 可选 LLM），全程审计日志与人工确认闭环。",
    tags: ["FastAPI", "SQLite", "Agent", "RAG", "LLM"],
    demo: "",
    repo: "https://github.com/drumstarcow/bid-agent"
  },
  {
    title: "开源许可合规测试报告",
    desc: "开源技术实践课程作业：对开源许可条款做合规性核查与测试记录，覆盖许可证类型识别、传染性判断与使用边界，形成可复核的测试报告。",
    tags: ["开源合规", "许可证", "测试报告"],
    demo: "",
    repo: "https://github.com/drumstarcow/open-source-license-test-report"
  }
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
