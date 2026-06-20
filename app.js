const imageUrl = "https://i.ibb.co/sd58ppxM/splash.jpg";

// Preload image during logo animation
const preloadImg = new Image();
preloadImg.src = imageUrl;

setTimeout(() => {
    document.getElementById("logoScreen").style.display = "none";

    const splashScreen = document.getElementById("splashScreen");
    const splashImage = document.getElementById("splashImage");

    splashImage.src = imageUrl;
    splashScreen.style.display = "block";

    startLoading();
}, 4000);

function startLoading() {
    const bar = document.getElementById("loadingBar");

    let progress = 0;

    // Reach 77% in 3 seconds
    const interval = setInterval(() => {
        progress += 1;

        if (progress <= 77) {
            bar.style.width = progress + "%";
        }

        if (progress >= 77) {
            clearInterval(interval);

            // Wait 2 seconds
            setTimeout(() => {

                // Jump to 100%
                bar.style.width = "100%";

                // Wait 1 second
                setTimeout(() => {

                    // Next page/game code here
                    console.log("Loading complete");

                }, 1000);

            }, 2000);
        }
    }, 3000 / 77);
}