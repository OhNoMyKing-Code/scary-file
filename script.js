setTimeout(() => {

    document.getElementById("loading").style.display = "none";

    const scare = document.getElementById("scare");

    scare.style.display = "flex";

    document.body.classList.add("shake");

    // Phát âm thanh
    const scream = document.getElementById("scream");

    scream.volume = 1;

    scream.play().catch(() => {
        console.log("Trình duyệt chặn autoplay âm thanh.");
    });

    // Đổi tiêu đề tab
    document.title = "👁️ ĐỪNG NHÌN";

}, 4500);
