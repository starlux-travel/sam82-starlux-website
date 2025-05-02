
document.querySelectorAll('.tab').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    // 未來可將分類值傳入搜尋查詢參數
    console.log('切換至分類：', btn.dataset.category);
  });
});
