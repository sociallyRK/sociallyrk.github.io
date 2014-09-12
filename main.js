$(".intro-name").fitText()
$(".intro-title").fitText(1.4,{maxFontSize:"52px"})
$(".about-description").fitText(1.4,{maxFontSize:"52px"})
$(".project-title").fitText();

$('#about-link').click(function(){
  $(".main").moveTo(2);
});
$('#portfolio-link').click(function(){
  $(".main").moveTo(3);
});
$('#contact-link').click(function(){
  $(".main").moveTo(4);
});

$(".main").onepage_scroll({
  sectionContainer: "section",
  easing: "ease-in-out",
  animationTime: 1000,
  pagination: false,
  updateURL: false,
  beforeMove: function(index) {},
  afterMove: function(index) {},
  loop: false,
  keyboard: true,
  responsiveFallback: false,
  direction: "vertical"
});