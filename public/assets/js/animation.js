// 共通アニメーション //
// 下からフェードイン
document.addEventListener("DOMContentLoaded", () => {
  const fadeInElements = document.querySelectorAll(".jsfadeIn");

  // .jsfadeIn 要素が存在する場合のみ処理を実行
  if (fadeInElements.length > 0) {
    fadeInElements.forEach((element) => {
      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          start: "top 90%",
          end: "bottom 60%",
          toggleActions: "play none none none",
          // scrub: true,
          // markers: true, // デバッグ用マーカー
        },
        duration: 1,
        opacity: 0,
        y: 50,
        ease: "power1.out",
      });
    });
  }
});

// 左からフェードイン
document.addEventListener("DOMContentLoaded", () => {
  const fadeInLeftElements = document.querySelectorAll(".jsfadeInLeft");

  // .jsfadeInLeft 要素が存在する場合のみ処理を実行
  if (fadeInLeftElements.length > 0) {
    fadeInLeftElements.forEach((element) => {
      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          start: "top 90%",
          end: "bottom 60%",
          toggleActions: "play none none none",
          // scrub: true,
          // markers: true, // デバッグ用マーカー
        },
        duration: 1,
        opacity: 0,
        x: -50,
        ease: "power1.out",
      });
    });
  }
});

// 右からフェードイン
document.addEventListener("DOMContentLoaded", () => {
  const fadeInRightElements = document.querySelectorAll(".jsfadeInRight");

  // .jsfadeInRight 要素が存在する場合のみ処理を実行
  if (fadeInRightElements.length > 0) {
    fadeInRightElements.forEach((element) => {
      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          start: "top 90%",
          end: "bottom 60%",
          toggleActions: "play none none none",
          // markers: true, // デバッグ用マーカー
        },
        duration: 1,
        opacity: 0,
        x: 50,
        ease: "power1.out",
      });
    });
  }
});

// 拡大から縮小
document.addEventListener("DOMContentLoaded", () => {
  const jsScaleElements = document.querySelectorAll(".jsScale");

  // .jsScale 要素が存在する場合のみ処理を実行
  if (jsScaleElements.length > 0) {
    jsScaleElements.forEach((jsScale) => {
      gsap.fromTo(
        jsScale,
        { scale: 1.2 }, // 初期状態はやや拡大され、透明度は0
        {
          scrollTrigger: {
            trigger: jsScale, // トリガーとなるのは各`.jsScale`要素自身
            start: "top 90%", // ビューポートの下端に要素の上端が来た時にアニメーション開始
            end: "bottom 60%", // ビューポートの中央に要素の上端が来た時にアニメーション終了
            toggleActions: "play none none none", // アニメーションを1回再生して終了
            once: true, // アニメーションを1回限り実行
            // markers: true, // デバッグ用マーカー
          },
          scale: 1, // 目標とするスケール（元のサイズに戻る）
          ease: "power1.out", // アニメーションのイージングを滑らかにする
          duration: 2.0, // アニメーションの持続時間を2秒に設定
        }
      );
    });
  }
});
