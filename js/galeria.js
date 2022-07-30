let lastWindowChange;
function displayWindowSize() {
    setTimeout(() => {
        if (window.outerWidth < 620 && (!lastWindowChange || lastWindowChange > 620)) {
            lastWindowChange = window.outerWidth;
            let oldSliderArr = document.getElementsByClassName("big-slider");
            let i;
            let oldSliderActive;
            for (i = 0; i < oldSliderArr.length; i++) {
                oldSliderArr[i].className = oldSliderArr[i].className.replace("section02-slider", "");
                if (oldSliderArr[i].style.display === "block")
                    oldSliderActive = oldSliderArr[i];
                oldSliderArr[i].style.display = "block";
            }
            let newSliderArr = document.getElementsByClassName("section02-content");
            for (i = 0; i < newSliderArr.length; i++) {
                newSliderArr[i].classList.add("section02-slider");
                newSliderArr[i].style.display = "none";
            }
            oldSliderActive.getElementsByClassName("section02-content")[0].style.display = "block";
        } else if (window.outerWidth > 600 && (!lastWindowChange || lastWindowChange < 600)) {
            let oldSliderArr = document.getElementsByClassName("section02-content");
            let i;
            let oldSliderActive;
            if (!lastWindowChange && !oldSliderArr[0].className.includes("section02-slider")) return;
            lastWindowChange = window.outerWidth;
            for (i = 0; i < oldSliderArr.length; i++) {
                oldSliderArr[i].className = oldSliderArr[i].className.replace("section02-slider", "");
                if (oldSliderArr[i].style.display === "block" && !oldSliderActive) {
                    oldSliderActive = oldSliderArr[i];
                }
                oldSliderArr[i].style.display = "block";
            }
            let newSliderArr = document.getElementsByClassName("big-slider");
            for (i = 0; i < newSliderArr.length; i++) {
                newSliderArr[i].classList.add("section02-slider");
                newSliderArr[i].style.display = "none";
            }
            oldSliderActive.parentElement.parentElement.style.display = "block";
        }
    }, 0)
}

document.addEventListener("DOMContentLoaded", function (event) {
    displayWindowSize();
});
window.addEventListener("resize", displayWindowSize);
showSlides(1, 'mySlides', true, null);
showSlides(1, 'section02-slider', false, null);

// Next/previous controls;
function plusSlides(isNext, className) {
    showSlides(null, className, false, isNext);
}

// Thumbnail image controls
function currentSlide(index, className) {
    showSlides(index, className, true, null);
}

function showSlides(previewIndex, className, useDots, isNext) {

    let i;
    let slides = document.getElementsByClassName(className);
    let slideIndex = 1;

    if (!previewIndex && slides.length > 0) {
        const slidesArr = [...slides];
        let currentIndex = slidesArr.findIndex(slide => slide.style.display === "block") + 1;

        // if (currentIndex === 0) currentIndex = 1;

        if (isNext) {
            previewIndex = currentIndex + 1;
        } else {
            previewIndex = currentIndex - 1;
        }
    }

    if (previewIndex > slides.length) {
        slideIndex = 1
    } else if (previewIndex < 1) {
        slideIndex = slides.length

    } else {
        slideIndex = previewIndex

    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    if (useDots) {
        let dots = document.getElementsByClassName("dot");
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        dots[slideIndex - 1].className += " active";
    }
    slides[slideIndex - 1].style.display = "block";
}