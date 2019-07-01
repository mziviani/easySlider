var _easySlider = function(id,setup={}) {
  var slide = null;
  var duration = 8000;
  var currentSlide = 0;
  var totalSlide = 0;

  if(!isNaN(setup.duration) && setup.duration >= 1000) {
    duration = setup.duration;
  }

  return {
    init: function() {
      slide = document.querySelectorAll("#"+id + " ul li");
      totalSlide = slide.length;

      if(totalSlide>1) {
        window.setInterval(this.nextSlide.bind(this), duration);
      }
    },
    nextSlide: function() {
      var nextSlide

      if(currentSlide==totalSlide-1) {
        nextSlide = 0;
      } else {
        nextSlide = currentSlide+1;
      }

      slide[currentSlide].setAttribute('style','opacity:0;');

      slide[nextSlide].setAttribute('style','opacity:1;');

      currentSlide = nextSlide;

    }
  }
}
