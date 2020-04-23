import ScrollInput from './ScrollInput';
import Transform from './Transform';

class SetupParallaxEnviroment {
  constructor(selector, offset = { top: 0, bottom: 0 }, limits) {
    this.elements = document.querySelectorAll(selector);
    this.limits = limits;
    this.offset = offset;
    this.topBoundings = this.getTopElementsBounding();
    this.relativeScrollInputs = this.getRelativeScrollInputs();

    this.setTransformObjects();
  }

  getTopElementsBounding() {
    const topBoundings = [];

    this.elements.forEach(element => {
      const topBounding = element.getBoundingClientRect().top;

      topBoundings.push({
        start: topBounding - window.innerHeight + this.offset.top,
        end: topBounding + element.clientHeight + this.offset.bottom,
      });
    });

    return topBoundings;
  }

  getRelativeScrollInputs() {
    const relativeScrollInputs = [];

    this.elements.forEach((element, i) => {
      relativeScrollInputs.push(new ScrollInput(this.topBoundings[i]));
    });

    return relativeScrollInputs;
  }

  setTransformObjects() {
    this.elements.forEach((element, i) => {
      new Transform(element, this.relativeScrollInputs[i], this.limits, this.transformFunction);
    });
  }
}

export default SetupParallaxEnviroment;
