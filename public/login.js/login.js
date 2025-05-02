
const firebaseConfig = {
  apiKey: "你的apiKey",
  authDomain: "你的authDomain",
  projectId: "你的projectId",
  storageBucket: "你的storageBucket",
  messagingSenderId: "你的messagingSenderId",
  appId: "你的appId"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

document.getElementById('login-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert('登入成功！');
      window.location.href = 'dashboard.html';
    })
    .catch((error) => {
      alert('登入失敗，請檢查帳號或密碼！');
    });
});
