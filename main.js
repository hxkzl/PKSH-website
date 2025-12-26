import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

/* Firebase 初始化 */
const firebaseConfig = {
  apiKey: "你的",
  authDomain: "你的",
  projectId: "你的",
  appId: "你的"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

/* 打開登入視窗 */
window.handleAdminLoginClick = () => {
  document
    .getElementById('admin-login-modal')
    .classList.remove('hidden');
};

/* 管理員登入 */
window.adminLogin = async () => {
  const email = document.getElementById('admin-email').value;
  const password = document.getElementById('admin-password').value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert('登入成功');
    document.getElementById('admin-login-modal').classList.add('hidden');
  } catch (err) {
    alert('登入失敗：' + err.message);
  }
};
