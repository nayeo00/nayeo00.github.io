// AI Content Portfolio — main.js
// 스크롤하면 섹션이 살짝 페이드인 되는 효과만 담당합니다.
// 이 파일은 수정하지 않아도 됩니다.

document.addEventListener("DOMContentLoaded", function () {
  var targets = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    // 구형 브라우저 대비: 관찰자 API가 없으면 그냥 다 보이게 처리
    targets.forEach(function (el) { el.classList.add("is-visible"); });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    { threshold: 0.15 }
  );

  targets.forEach(function (el) { observer.observe(el); });

  // --- CHRONOS 갤러리 라이트박스 (이미지 클릭 시 크게 보기) ---
  var galleryImgs = document.querySelectorAll(".gallery img");
  var lightbox = document.getElementById("lightbox");
  var lightboxImg = document.getElementById("lightboxImg");
  var lightboxCaption = document.getElementById("lightboxCaption");
  var lightboxClose = document.getElementById("lightboxClose");

  function openLightbox(imgEl) {
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = imgEl.src;
    lightboxImg.alt = imgEl.alt || "";
    var caption = imgEl.parentElement.querySelector("figcaption");
    if (lightboxCaption) {
      lightboxCaption.textContent = caption ? caption.textContent : "";
    }
    lightbox.classList.add("is-open");
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove("is-open");
    if (lightboxImg) lightboxImg.src = "";
  }

  galleryImgs.forEach(function (img) {
    img.addEventListener("click", function () { openLightbox(img); });
  });

  if (lightboxClose) {
    lightboxClose.addEventListener("click", closeLightbox);
  }
  if (lightbox) {
    // 배경(이미지 바깥) 클릭 시 닫기
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) closeLightbox();
    });
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeLightbox();
  });
});
