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
});
