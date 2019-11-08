// Smooth Scroll
var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 700
});

// Icon Animation: TimelineMax and ScrollMagic Method
// // Init controller for ScrollMagic
const controller = new ScrollMagic.Controller();

// // Timeline animation to show icons
var tl = new TimelineMax({});
// params: element, delay, style
tl.from('.html', 0, { opacity: 0 });
tl.from('.css', 0, { opacity: 0 });
tl.from('.js', 0, { opacity: 0 });
tl.from('.node', 0, { opacity: 0 });
tl.to('.html', 1, { opacity: 1 });
tl.to('.css', 1, { opacity: 1 });
tl.to('.js', 1, { opacity: 1 });
tl.to('.node', 1, { opacity: 1 });

// create a scene
const scene = new ScrollMagic.Scene({
  triggerElement: '#about',
  triggerHook: 'onEnter'
})
  .setTween(tl)
  .addTo(controller);

// Timeline animation to hide icons
// var tl2 = new TimelineMax({});
// tl2.from('.html', 1, { opacity: 1 });
// tl2.from('.css', 1, { opacity: 1 });
// tl2.from('.js', 1, { opacity: 1 });
// tl2.from('.node', 1, { opacity: 1 });
// tl2.to('.html', 1, { opacity: 0 });
// tl2.to('.css', 1, { opacity: 0 });
// tl2.to('.js', 1, { opacity: 0 });
// tl2.to('.node', 1, { opacity: 0 });

// // create a scene
// const scene2 = new ScrollMagic.Scene({
//   triggerElement: '#about',
//   triggerHook: 'onLeave'
// })
//   .setTween(tl2)
//   .addTo(controller);

// Icon Animation TweenMax Method

// Get DOM elements
// aboutBtn = document.querySelector('.about-btn');

// Add EventListeners for About Section
// aboutBtn.addEventListener('click', () => {
//   TweenMax.to('.html', 1, {
//     opacity: 1
//   });
//   TweenMax.to('.css', 1, {
//     opacity: 1
//   }).delay(1);
//   TweenMax.to('.js', 1, {
//     opacity: 1
//   }).delay(2);
//   TweenMax.to('.node', 1, {
//     opacity: 1
//   }).delay(3);
// });
