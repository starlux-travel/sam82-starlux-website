
import { storage, db, auth } from './firebase-config.js';
import { ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

window.toggleLogoInput = function (type) {
  document.getElementById('logoTextInput').style.display = type === 'text' ? 'block' : 'none';
  document.getElementById('logoImageUpload').style.display = type === 'image' ? 'block' : 'none';
}

document.getElementById('cmsForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const logoType = document.querySelector('input[name="logoType"]:checked').value;
  let logoUrl = "";
  if (logoType === 'image') {
    const file = document.getElementById('logoImage').files[0];
    if (file) {
      const storageRef = ref(storage, `logos/${file.name}`);
      const snapshot = await uploadBytes(storageRef, file);
      logoUrl = await getDownloadURL(snapshot.ref);
    } else {
      alert('請選擇一張 LOGO 圖片！');
      return;
    }
  }

  const data = {
    siteName: document.getElementById('siteName').value,
    logoType,
    logoText: document.getElementById('logoText').value,
    logoUrl,
    font: document.getElementById('font').value,
    themeColor: document.getElementById('themeColor').value,
    languages: Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(cb => cb.value),
    phone: document.getElementById('phone').value,
    email: document.getElementById('email').value,
    messenger: document.getElementById('messenger').value,
    instagram: document.getElementById('instagram').value,
    about: document.getElementById('about').value,
    promo: document.getElementById('promo').value,
    carousel: [
      document.getElementById('carousel1').value,
      document.getElementById('carousel2').value,
      document.getElementById('carousel3').value
    ],
    defaultLang: document.getElementById('defaultLang').value,
    updatedAt: new Date()
  };

  try {
    await setDoc(doc(db, "settings", "general"), data);
    alert('✅ 儲存成功！');
  } catch (error) {
    console.error('❌ 儲存失敗:', error);
    alert('❌ 儲存失敗，請查看 Console！');
  }
});
