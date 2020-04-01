import Transform from './Transform';
import SetupParallaxEnviroment from './SetupParallaxEnviroment';

class AnimateMileStonesOnScroll extends SetupParallaxEnviroment {
  constructor(scroller) {
    function displayMileStoneDiscription(element) {
      element.querySelector('.milestone__description').classList.add('milestone__description--is-visible');
    }
    super(scroller, '.milestone', 200 - window.innerHeight, displayMileStoneDiscription);
    this.scroller = scroller;
    this.xLimits = { start: -50, end: 0 };
    this.setTransformObjects();
  }
  setTransformObjects() {
    this.elements.forEach((element, i) => {
      const topBorderElement = element.querySelector('.milestone__top-border');
      new Transform(this.scroller, this.relativeScrollInputs[i], topBorderElement, this.xLimits, '%');
    });
  }
}

export default AnimateMileStonesOnScroll;
