
const DOWNLOAD_URL = "https://www.mediafire.com/file/3qi6hx88em833t8/MangaLix1.0.apk/file";

document.querySelectorAll('[data-download]').forEach((link) => {
  link.addEventListener('click', (event) => {
    if (!DOWNLOAD_URL || DOWNLOAD_URL.includes('PUT_YOUR')) {
      event.preventDefault();
      alert('ضع رابط MediaFire الخاص بملف APK داخل script.js أولاً.');
      return;
    }
    link.href = DOWNLOAD_URL;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  });
});

document.getElementById('year').textContent = new Date().getFullYear();
