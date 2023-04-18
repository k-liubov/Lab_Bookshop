export {initSlider};

let imgs =[{
  url: "src/images/banner.png"
}, {
  url: "src/images/banner2.png"
}, {
  url: "src/images/banner3.png"
}];
function initSlider() {

  let sliderImages = document.querySelector(".slider__images");
  let sliderDots = document.querySelector(".slider__dots");

  initImages();
  initDots();
  initAutoplay();

  function initImages() {
      imgs.forEach((image, index) => {
          let imageDiv = `<div class = "image n${index} ${index === 0? "active":""}" style = "background-image: url(${imgs[index].url});" data-index = "${index}"></div>`;
          sliderImages.innerHTML += imageDiv;
        });

  }
  function initDots() {
      imgs.forEach((image, index) => {
        let dotsDiv = `<div class = "dots-item n${index} ${index === 0? "active":""}" data-index = "${index}"></div>`;
        sliderDots.innerHTML += dotsDiv;
      });
      sliderDots.querySelectorAll(".dots-item").forEach(dot => {
        dot.addEventListener("click", function() {
          moveSlider(this.dataset.index);
        });
      });
    }
    function moveSlider(num) {
      sliderImages.querySelector(".active").classList.remove("active");
      sliderImages.querySelector(".n" +num).classList.add("active");
      sliderDots.querySelector(".active").classList.remove("active");
      sliderDots.querySelector(".n" + num).classList.add("active");
    }
    function initAutoplay() {
      setInterval(() => {
        let curNum = +sliderImages.querySelector(".active").dataset.index;
        let nextNum = curNum === imgs.length - 1? 0 : curNum + 1;
        moveSlider(nextNum);
      }, 5000);
    }
}