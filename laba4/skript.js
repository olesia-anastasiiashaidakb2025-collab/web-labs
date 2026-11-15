// ===== 1. Інформація про ОС і браузер + localStorage =====
const info = {
  userAgent: navigator.userAgent,
  platform: navigator.platform,
  language: navigator.language,
  vendor: navigator.vendor,
  cookiesEnabled: navigator.cookieEnabled,
  screen: screen.width + "x" + screen.height,
  online: navigator.onLine
};

for (const key in info) {
  localStorage.setItem(key, info[key]);
}

const list = document.getElementById("storageInfo");
for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  const li = document.createElement("li");
  li.textContent = key + ": " + localStorage.getItem(key);
  list.appendChild(li);
}

// ===== 2. Відгуки з сервера =====
async function loadReviews() {
  const box = document.getElementById("reviews");
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/27/comments");
    const comments = await response.json();
    comments.forEach(c => {
      const div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `<h4>${c.name}</h4><small>${c.email}</small><p>${c.body}</p>`;
      box.appendChild(div);
    });
  } catch (error) {
    box.textContent = "Не вдалося завантажити відгуки";
    console.error(error);
  }
}
loadReviews();

// ===== 3. Модальне вікно через 1 хвилину =====
const modal = document.getElementById("modal");

setTimeout(() => {
  modal.classList.add("open");
}, 60000);

document.getElementById("closeModal").addEventListener("click", () => {
  modal.classList.remove("open");
});

// ===== 4. Тема день/ніч =====
function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
}

function autoTheme() {
  const hour = new Date().getHours();
  return (hour >= 7 && hour < 21) ? "light" : "dark";
}

applyTheme(autoTheme());

document.getElementById("themeToggle").addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  applyTheme(current === "dark" ? "light" : "dark");
});

// ===== Зміна вигляду для лабораторної №5: чорно-рожева тема =====
document.title = "Резюме - Шайда Олеся-Анастасія (лаб. №5)";

const style = document.createElement("style");
style.textContent = `
  /* ---- Темна тема (чорно-рожева) ---- */
  body {
    background: linear-gradient(135deg, #000000 0%, #1a0010 45%, #ff2e93 130%) fixed !important;
    color: #ffe6f2 !important;
    font-family: "Segoe UI", Arial, sans-serif;
    max-width: 900px;
    margin: 0 auto;
    padding: 20px 24px;
    border-top: 8px solid;
    border-image: linear-gradient(90deg, #ff2e93, #000000, #ff2e93) 1;
  }
  header {
    text-align: center;
    padding: 20px;
    border-radius: 16px;
    background: linear-gradient(135deg, rgba(255,46,147,.35), rgba(0,0,0,.6));
    box-shadow: 0 0 25px rgba(255,46,147,.4);
  }
  h1 {
    margin: 0 0 6px;
    background: linear-gradient(90deg, #ffffff, #ff6fb5);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
  h2 {
    color: #ff6fb5;
    border-bottom: 2px solid #ff2e93;
    padding-bottom: 4px;
  }
  section, footer {
    background: rgba(0,0,0,.45);
    border: 1px solid rgba(255,46,147,.35);
    border-radius: 14px;
    padding: 6px 20px 14px;
    margin: 18px 0;
  }
  .card {
    background: rgba(255,46,147,.12) !important;
    border: 1px solid rgba(255,46,147,.4);
    color: #ffe6f2 !important;
  }
  a { color: #ff8ec6 !important; }
  button {
    background: linear-gradient(90deg, #ff2e93, #b3005e);
    color: #fff;
    border: none;
    border-radius: 20px;
    padding: 8px 18px;
    cursor: pointer;
    transition: transform .2s, box-shadow .2s;
  }
  button:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 14px rgba(255,46,147,.8);
  }
  .modal-content {
    background: #0d0007 !important;
    color: #ffe6f2 !important;
    border: 1px solid #ff2e93;
    box-shadow: 0 0 30px rgba(255,46,147,.5);
  }

  /* ---- Світла тема (біло-рожева) ---- */
  [data-theme="light"] body {
    background: linear-gradient(135deg, #ffffff 0%, #ffd6ea 55%, #ff8ec6 130%) fixed !important;
    color: #2a0017 !important;
  }
  [data-theme="light"] header {
    background: linear-gradient(135deg, rgba(255,46,147,.3), rgba(255,255,255,.7));
  }
  [data-theme="light"] h1 {
    background: linear-gradient(90deg, #2a0017, #ff2e93);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
  [data-theme="light"] h2 { color: #c4006a; }
  [data-theme="light"] section,
  [data-theme="light"] footer {
    background: rgba(255,255,255,.65);
  }
  [data-theme="light"] .card {
    background: rgba(255,46,147,.12) !important;
    color: #2a0017 !important;
  }
  [data-theme="light"] a { color: #c4006a !important; }
  [data-theme="light"] .modal-content {
    background: #ffffff !important;
    color: #2a0017 !important;
  }
`;
document.head.appendChild(style);
