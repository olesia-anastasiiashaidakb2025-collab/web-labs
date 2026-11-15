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

