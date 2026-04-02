document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    
    // スライド画像が存在しないページでのエラーを防ぐ
    if (slides.length === 0) return;

    let currentSlide = 0;

    // 4秒ごとに画像を切り替える処理
    setInterval(() => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }, 4000);
});