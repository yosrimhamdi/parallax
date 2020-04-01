import ScrollerBar from './modules/ScrollerBar';
import scroller from './modules/Scroller';
import TranslateXFrontalHeadlinesOnScroll from './modules/TranslateXFrontalHeadlinesOnScroll';
import AnimateMileStonesOnScroll from './modules/AnimateMileStonesOnScroll';
import TranslateXHeadlinesOnScroll from './modules/TranslateXHeadlinesOnScroll';
import TransformWorkHeadlineOnScroll from './modules/TransformWorkHeadlineOnScroll';
import TranslateXStrokeHeadlinesOnScroll from './modules/TranslateXStrokeHeadlinesOnScroll';
import FixedHeaderPosition from './modules/FixedHeaderPosition';
import AnimateAvailabilityMessageOnScroll from './modules/AnimateAvailabilityMessageOnScroll';

new AnimateAvailabilityMessageOnScroll(scroller);
new FixedHeaderPosition(scroller);

new TranslateXStrokeHeadlinesOnScroll(scroller);
new TransformWorkHeadlineOnScroll(scroller);
new TranslateXHeadlinesOnScroll(scroller);
new AnimateMileStonesOnScroll(scroller);
new TranslateXFrontalHeadlinesOnScroll(scroller);
new ScrollerBar(scroller);
