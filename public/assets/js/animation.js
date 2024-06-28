gsap.registerPlugin(ScrollTrigger);

// '.jsfadeIn'クラスを持つすべての要素を選択し、下からフェードイン
document.querySelectorAll(".jsfadeIn").forEach((element) => {
  gsap.from(element, {
    scrollTrigger: {
      trigger: element, // この要素がビューポートに入るとトリガーされる
      start: "top 90%", // 要素の上端がビューポートの下から10%の位置に来たときにアニメーション開始
      end: "bottom 60%", // 要素の下端がビューポートの上から40%の位置に来たときにアニメーション終了
      toggleActions: "play none none none", // スクロール時のアクション設定: スタートで再生、他のイベントは無視
      // markers: true, // 開発用のタイミングマーカー（デバッグ時に有効にする）
    },
    duration: 1, // アニメーションの持続時間（秒）
    opacity: 0, // 開始時の透明度（0は完全に透明）
    y: 50, // 開始時に要素を垂直方向に50ピクセル下から開始
    ease: "power1.out", // アニメーションのイージング関数（ここではpower1のアウトを使用）
  });
});

// '.jsfadeInDown'クラスを持つすべての要素を選択し、上からフェードイン
document.querySelectorAll(".jsfadeInDown").forEach((element) => {
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      start: "top 90%",
      end: "bottom 60%",
      toggleActions: "play none none none",
      //   markers: true, // 開発用タイミング確認用
    },
    duration: 1,
    opacity: 0,
    y: -50,
    ease: "power1.out",
  });
});

// '.jsfadeInLeft'クラスを持つすべての要素を選択し、左からフェードイン
document.querySelectorAll(".jsfadeInLeft").forEach((element) => {
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      start: "top 90%",
      end: "bottom 60%",
      toggleActions: "play none none none",
      //   markers: true, // 開発用タイミング確認用
    },
    duration: 1,
    opacity: 0,
    x: -50,
    ease: "power1.out",
  });
});

// '.jsfadeInRight'クラスを持つすべての要素を選択し、右からフェードイン
document.querySelectorAll(".jsfadeInRight").forEach((element) => {
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      start: "top 90%",
      end: "bottom 60%",
      toggleActions: "play none none none",
      //   markers: true, // 開発用タイミング確認用
    },
    duration: 1,
    opacity: 0,
    x: 50,
    ease: "power1.out",
  });
});

// jsScaleクラスを持つすべての要素を選択し、拡大→元のサイズへ縮小しながらフェードイン
document.querySelectorAll(".jsScale").forEach((jsScale) => {
  gsap.fromTo(
    jsScale,
    { scale: 1.3, opacity: 0 }, // 初期状態はやや拡大され、透明度は0
    {
      scrollTrigger: {
        trigger: jsScale, // トリガーとなるのは各`.jsScale`要素自身
        start: "top bottom",
        end: "top center",
        toggleActions: "play none none none",
        once: true,
      },
      scale: 1, // （元のサイズに戻る）
      opacity: 1, // 元の透明度に戻る
      ease: "power1.out",
      duration: 1.8,
    }
  );
});
