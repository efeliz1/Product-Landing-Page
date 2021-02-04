/*============================================================================
  #Theme Libraries
==============================================================================*/

/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.5.9
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):"undefined"!=typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){"use strict";var b=window.Slick||{};b=function(){function c(c,d){var f,e=this;e.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:a(c),appendDots:a(c),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(a,b){return'<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">'+(b+1)+"</button>"},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!1,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},e.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},a.extend(e,e.initials),e.activeBreakpoint=null,e.animType=null,e.animProp=null,e.breakpoints=[],e.breakpointSettings=[],e.cssTransitions=!1,e.hidden="hidden",e.paused=!1,e.positionProp=null,e.respondTo=null,e.rowCount=1,e.shouldClick=!0,e.$slider=a(c),e.$slidesCache=null,e.transformType=null,e.transitionType=null,e.visibilityChange="visibilitychange",e.windowWidth=0,e.windowTimer=null,f=a(c).data("slick")||{},e.options=a.extend({},e.defaults,f,d),e.currentSlide=e.options.initialSlide,e.originalSettings=e.options,"undefined"!=typeof document.mozHidden?(e.hidden="mozHidden",e.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(e.hidden="webkitHidden",e.visibilityChange="webkitvisibilitychange"),e.autoPlay=a.proxy(e.autoPlay,e),e.autoPlayClear=a.proxy(e.autoPlayClear,e),e.changeSlide=a.proxy(e.changeSlide,e),e.clickHandler=a.proxy(e.clickHandler,e),e.selectHandler=a.proxy(e.selectHandler,e),e.setPosition=a.proxy(e.setPosition,e),e.swipeHandler=a.proxy(e.swipeHandler,e),e.dragHandler=a.proxy(e.dragHandler,e),e.keyHandler=a.proxy(e.keyHandler,e),e.autoPlayIterator=a.proxy(e.autoPlayIterator,e),e.instanceUid=b++,e.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,e.registerBreakpoints(),e.init(!0),e.checkResponsive(!0)}var b=0;return c}(),b.prototype.addSlide=b.prototype.slickAdd=function(b,c,d){var e=this;if("boolean"==typeof c)d=c,c=null;else if(0>c||c>=e.slideCount)return!1;e.unload(),"number"==typeof c?0===c&&0===e.$slides.length?a(b).appendTo(e.$slideTrack):d?a(b).insertBefore(e.$slides.eq(c)):a(b).insertAfter(e.$slides.eq(c)):d===!0?a(b).prependTo(e.$slideTrack):a(b).appendTo(e.$slideTrack),e.$slides=e.$slideTrack.children(this.options.slide),e.$slideTrack.children(this.options.slide).detach(),e.$slideTrack.append(e.$slides),e.$slides.each(function(b,c){a(c).attr("data-slick-index",b)}),e.$slidesCache=e.$slides,e.reinit()},b.prototype.animateHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.animate({height:b},a.options.speed)}},b.prototype.animateSlide=function(b,c){var d={},e=this;e.animateHeight(),e.options.rtl===!0&&e.options.vertical===!1&&(b=-b),e.transformsEnabled===!1?e.options.vertical===!1?e.$slideTrack.animate({left:b},e.options.speed,e.options.easing,c):e.$slideTrack.animate({top:b},e.options.speed,e.options.easing,c):e.cssTransitions===!1?(e.options.rtl===!0&&(e.currentLeft=-e.currentLeft),a({animStart:e.currentLeft}).animate({animStart:b},{duration:e.options.speed,easing:e.options.easing,step:function(a){a=Math.ceil(a),e.options.vertical===!1?(d[e.animType]="translate("+a+"px, 0px)",e.$slideTrack.css(d)):(d[e.animType]="translate(0px,"+a+"px)",e.$slideTrack.css(d))},complete:function(){c&&c.call()}})):(e.applyTransition(),b=Math.ceil(b),e.options.vertical===!1?d[e.animType]="translate3d("+b+"px, 0px, 0px)":d[e.animType]="translate3d(0px,"+b+"px, 0px)",e.$slideTrack.css(d),c&&setTimeout(function(){e.disableTransition(),c.call()},e.options.speed))},b.prototype.asNavFor=function(b){var c=this,d=c.options.asNavFor;d&&null!==d&&(d=a(d).not(c.$slider)),null!==d&&"object"==typeof d&&d.each(function(){var c=a(this).slick("getSlick");c.unslicked||c.slideHandler(b,!0)})},b.prototype.applyTransition=function(a){var b=this,c={};b.options.fade===!1?c[b.transitionType]=b.transformType+" "+b.options.speed+"ms "+b.options.cssEase:c[b.transitionType]="opacity "+b.options.speed+"ms "+b.options.cssEase,b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.autoPlay=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer),a.slideCount>a.options.slidesToShow&&a.paused!==!0&&(a.autoPlayTimer=setInterval(a.autoPlayIterator,a.options.autoplaySpeed))},b.prototype.autoPlayClear=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer)},b.prototype.autoPlayIterator=function(){var a=this;a.options.infinite===!1?1===a.direction?(a.currentSlide+1===a.slideCount-1&&(a.direction=0),a.slideHandler(a.currentSlide+a.options.slidesToScroll)):(a.currentSlide-1===0&&(a.direction=1),a.slideHandler(a.currentSlide-a.options.slidesToScroll)):a.slideHandler(a.currentSlide+a.options.slidesToScroll)},b.prototype.buildArrows=function(){var b=this;b.options.arrows===!0&&(b.$prevArrow=a(b.options.prevArrow).addClass("slick-arrow"),b.$nextArrow=a(b.options.nextArrow).addClass("slick-arrow"),b.slideCount>b.options.slidesToShow?(b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.prependTo(b.options.appendArrows),b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.appendTo(b.options.appendArrows),b.options.infinite!==!0&&b.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},b.prototype.buildDots=function(){var c,d,b=this;if(b.options.dots===!0&&b.slideCount>b.options.slidesToShow){for(d='<ul class="'+b.options.dotsClass+'">',c=0;c<=b.getDotCount();c+=1)d+="<li>"+b.options.customPaging.call(this,b,c)+"</li>";d+="</ul>",b.$dots=a(d).appendTo(b.options.appendDots),b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden","false")}},b.prototype.buildOut=function(){var b=this;b.$slides=b.$slider.children(b.options.slide+":not(.slick-cloned)").addClass("slick-slide"),b.slideCount=b.$slides.length,b.$slides.each(function(b,c){a(c).attr("data-slick-index",b).data("originalStyling",a(c).attr("style")||"")}),b.$slider.addClass("slick-slider"),b.$slideTrack=0===b.slideCount?a('<div class="slick-track"/>').appendTo(b.$slider):b.$slides.wrapAll('<div class="slick-track"/>').parent(),b.$list=b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),b.$slideTrack.css("opacity",0),(b.options.centerMode===!0||b.options.swipeToSlide===!0)&&(b.options.slidesToScroll=1),a("img[data-lazy]",b.$slider).not("[src]").addClass("slick-loading"),b.setupInfinite(),b.buildArrows(),b.buildDots(),b.updateDots(),b.setSlideClasses("number"==typeof b.currentSlide?b.currentSlide:0),b.options.draggable===!0&&b.$list.addClass("draggable")},b.prototype.buildRows=function(){var b,c,d,e,f,g,h,a=this;if(e=document.createDocumentFragment(),g=a.$slider.children(),a.options.rows>1){for(h=a.options.slidesPerRow*a.options.rows,f=Math.ceil(g.length/h),b=0;f>b;b++){var i=document.createElement("div");for(c=0;c<a.options.rows;c++){var j=document.createElement("div");for(d=0;d<a.options.slidesPerRow;d++){var k=b*h+(c*a.options.slidesPerRow+d);g.get(k)&&j.appendChild(g.get(k))}i.appendChild(j)}e.appendChild(i)}a.$slider.html(e),a.$slider.children().children().children().css({width:100/a.options.slidesPerRow+"%",display:"inline-block"})}},b.prototype.checkResponsive=function(b,c){var e,f,g,d=this,h=!1,i=d.$slider.width(),j=window.innerWidth||a(window).width();if("window"===d.respondTo?g=j:"slider"===d.respondTo?g=i:"min"===d.respondTo&&(g=Math.min(j,i)),d.options.responsive&&d.options.responsive.length&&null!==d.options.responsive){f=null;for(e in d.breakpoints)d.breakpoints.hasOwnProperty(e)&&(d.originalSettings.mobileFirst===!1?g<d.breakpoints[e]&&(f=d.breakpoints[e]):g>d.breakpoints[e]&&(f=d.breakpoints[e]));null!==f?null!==d.activeBreakpoint?(f!==d.activeBreakpoint||c)&&(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):null!==d.activeBreakpoint&&(d.activeBreakpoint=null,d.options=d.originalSettings,b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b),h=f),b||h===!1||d.$slider.trigger("breakpoint",[d,h])}},b.prototype.changeSlide=function(b,c){var f,g,h,d=this,e=a(b.target);switch(e.is("a")&&b.preventDefault(),e.is("li")||(e=e.closest("li")),h=d.slideCount%d.options.slidesToScroll!==0,f=h?0:(d.slideCount-d.currentSlide)%d.options.slidesToScroll,b.data.message){case"previous":g=0===f?d.options.slidesToScroll:d.options.slidesToShow-f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide-g,!1,c);break;case"next":g=0===f?d.options.slidesToScroll:f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide+g,!1,c);break;case"index":var i=0===b.data.index?0:b.data.index||e.index()*d.options.slidesToScroll;d.slideHandler(d.checkNavigable(i),!1,c),e.children().trigger("focus");break;default:return}},b.prototype.checkNavigable=function(a){var c,d,b=this;if(c=b.getNavigableIndexes(),d=0,a>c[c.length-1])a=c[c.length-1];else for(var e in c){if(a<c[e]){a=d;break}d=c[e]}return a},b.prototype.cleanUpEvents=function(){var b=this;b.options.dots&&null!==b.$dots&&(a("li",b.$dots).off("click.slick",b.changeSlide),b.options.pauseOnDotsHover===!0&&b.options.autoplay===!0&&a("li",b.$dots).off("mouseenter.slick",a.proxy(b.setPaused,b,!0)).off("mouseleave.slick",a.proxy(b.setPaused,b,!1))),b.options.arrows===!0&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow&&b.$prevArrow.off("click.slick",b.changeSlide),b.$nextArrow&&b.$nextArrow.off("click.slick",b.changeSlide)),b.$list.off("touchstart.slick mousedown.slick",b.swipeHandler),b.$list.off("touchmove.slick mousemove.slick",b.swipeHandler),b.$list.off("touchend.slick mouseup.slick",b.swipeHandler),b.$list.off("touchcancel.slick mouseleave.slick",b.swipeHandler),b.$list.off("click.slick",b.clickHandler),a(document).off(b.visibilityChange,b.visibility),b.$list.off("mouseenter.slick",a.proxy(b.setPaused,b,!0)),b.$list.off("mouseleave.slick",a.proxy(b.setPaused,b,!1)),b.options.accessibility===!0&&b.$list.off("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().off("click.slick",b.selectHandler),a(window).off("orientationchange.slick.slick-"+b.instanceUid,b.orientationChange),a(window).off("resize.slick.slick-"+b.instanceUid,b.resize),a("[draggable!=true]",b.$slideTrack).off("dragstart",b.preventDefault),a(window).off("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).off("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.cleanUpRows=function(){var b,a=this;a.options.rows>1&&(b=a.$slides.children().children(),b.removeAttr("style"),a.$slider.html(b))},b.prototype.clickHandler=function(a){var b=this;b.shouldClick===!1&&(a.stopImmediatePropagation(),a.stopPropagation(),a.preventDefault())},b.prototype.destroy=function(b){var c=this;c.autoPlayClear(),c.touchObject={},c.cleanUpEvents(),a(".slick-cloned",c.$slider).detach(),c.$dots&&c.$dots.remove(),c.$prevArrow&&c.$prevArrow.length&&(c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.prevArrow)&&c.$prevArrow.remove()),c.$nextArrow&&c.$nextArrow.length&&(c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.nextArrow)&&c.$nextArrow.remove()),c.$slides&&(c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){a(this).attr("style",a(this).data("originalStyling"))}),c.$slideTrack.children(this.options.slide).detach(),c.$slideTrack.detach(),c.$list.detach(),c.$slider.append(c.$slides)),c.cleanUpRows(),c.$slider.removeClass("slick-slider"),c.$slider.removeClass("slick-initialized"),c.unslicked=!0,b||c.$slider.trigger("destroy",[c])},b.prototype.disableTransition=function(a){var b=this,c={};c[b.transitionType]="",b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.fadeSlide=function(a,b){var c=this;c.cssTransitions===!1?(c.$slides.eq(a).css({zIndex:c.options.zIndex}),c.$slides.eq(a).animate({opacity:1},c.options.speed,c.options.easing,b)):(c.applyTransition(a),c.$slides.eq(a).css({opacity:1,zIndex:c.options.zIndex}),b&&setTimeout(function(){c.disableTransition(a),b.call()},c.options.speed))},b.prototype.fadeSlideOut=function(a){var b=this;b.cssTransitions===!1?b.$slides.eq(a).animate({opacity:0,zIndex:b.options.zIndex-2},b.options.speed,b.options.easing):(b.applyTransition(a),b.$slides.eq(a).css({opacity:0,zIndex:b.options.zIndex-2}))},b.prototype.filterSlides=b.prototype.slickFilter=function(a){var b=this;null!==a&&(b.$slidesCache=b.$slides,b.unload(),b.$slideTrack.children(this.options.slide).detach(),b.$slidesCache.filter(a).appendTo(b.$slideTrack),b.reinit())},b.prototype.getCurrent=b.prototype.slickCurrentSlide=function(){var a=this;return a.currentSlide},b.prototype.getDotCount=function(){var a=this,b=0,c=0,d=0;if(a.options.infinite===!0)for(;b<a.slideCount;)++d,b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;else if(a.options.centerMode===!0)d=a.slideCount;else for(;b<a.slideCount;)++d,b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d-1},b.prototype.getLeft=function(a){var c,d,f,b=this,e=0;return b.slideOffset=0,d=b.$slides.first().outerHeight(!0),b.options.infinite===!0?(b.slideCount>b.options.slidesToShow&&(b.slideOffset=b.slideWidth*b.options.slidesToShow*-1,e=d*b.options.slidesToShow*-1),b.slideCount%b.options.slidesToScroll!==0&&a+b.options.slidesToScroll>b.slideCount&&b.slideCount>b.options.slidesToShow&&(a>b.slideCount?(b.slideOffset=(b.options.slidesToShow-(a-b.slideCount))*b.slideWidth*-1,e=(b.options.slidesToShow-(a-b.slideCount))*d*-1):(b.slideOffset=b.slideCount%b.options.slidesToScroll*b.slideWidth*-1,e=b.slideCount%b.options.slidesToScroll*d*-1))):a+b.options.slidesToShow>b.slideCount&&(b.slideOffset=(a+b.options.slidesToShow-b.slideCount)*b.slideWidth,e=(a+b.options.slidesToShow-b.slideCount)*d),b.slideCount<=b.options.slidesToShow&&(b.slideOffset=0,e=0),b.options.centerMode===!0&&b.options.infinite===!0?b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)-b.slideWidth:b.options.centerMode===!0&&(b.slideOffset=0,b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)),c=b.options.vertical===!1?a*b.slideWidth*-1+b.slideOffset:a*d*-1+e,b.options.variableWidth===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow),c=b.options.rtl===!0?f[0]?-1*(b.$slideTrack.width()-f[0].offsetLeft-f.width()):0:f[0]?-1*f[0].offsetLeft:0,b.options.centerMode===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow+1),c=b.options.rtl===!0?f[0]?-1*(b.$slideTrack.width()-f[0].offsetLeft-f.width()):0:f[0]?-1*f[0].offsetLeft:0,c+=(b.$list.width()-f.outerWidth())/2)),c},b.prototype.getOption=b.prototype.slickGetOption=function(a){var b=this;return b.options[a]},b.prototype.getNavigableIndexes=function(){var e,a=this,b=0,c=0,d=[];for(a.options.infinite===!1?e=a.slideCount:(b=-1*a.options.slidesToScroll,c=-1*a.options.slidesToScroll,e=2*a.slideCount);e>b;)d.push(b),b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d},b.prototype.getSlick=function(){return this},b.prototype.getSlideCount=function(){var c,d,e,b=this;return e=b.options.centerMode===!0?b.slideWidth*Math.floor(b.options.slidesToShow/2):0,b.options.swipeToSlide===!0?(b.$slideTrack.find(".slick-slide").each(function(c,f){return f.offsetLeft-e+a(f).outerWidth()/2>-1*b.swipeLeft?(d=f,!1):void 0}),c=Math.abs(a(d).attr("data-slick-index")-b.currentSlide)||1):b.options.slidesToScroll},b.prototype.goTo=b.prototype.slickGoTo=function(a,b){var c=this;c.changeSlide({data:{message:"index",index:parseInt(a)}},b)},b.prototype.init=function(b){var c=this;a(c.$slider).hasClass("slick-initialized")||(a(c.$slider).addClass("slick-initialized"),c.buildRows(),c.buildOut(),c.setProps(),c.startLoad(),c.loadSlider(),c.initializeEvents(),c.updateArrows(),c.updateDots()),b&&c.$slider.trigger("init",[c]),c.options.accessibility===!0&&c.initADA()},b.prototype.initArrowEvents=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.on("click.slick",{message:"previous"},a.changeSlide),a.$nextArrow.on("click.slick",{message:"next"},a.changeSlide))},b.prototype.initDotEvents=function(){var b=this;b.options.dots===!0&&b.slideCount>b.options.slidesToShow&&a("li",b.$dots).on("click.slick",{message:"index"},b.changeSlide),b.options.dots===!0&&b.options.pauseOnDotsHover===!0&&b.options.autoplay===!0&&a("li",b.$dots).on("mouseenter.slick",a.proxy(b.setPaused,b,!0)).on("mouseleave.slick",a.proxy(b.setPaused,b,!1))},b.prototype.initializeEvents=function(){var b=this;b.initArrowEvents(),b.initDotEvents(),b.$list.on("touchstart.slick mousedown.slick",{action:"start"},b.swipeHandler),b.$list.on("touchmove.slick mousemove.slick",{action:"move"},b.swipeHandler),b.$list.on("touchend.slick mouseup.slick",{action:"end"},b.swipeHandler),b.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},b.swipeHandler),b.$list.on("click.slick",b.clickHandler),a(document).on(b.visibilityChange,a.proxy(b.visibility,b)),b.$list.on("mouseenter.slick",a.proxy(b.setPaused,b,!0)),b.$list.on("mouseleave.slick",a.proxy(b.setPaused,b,!1)),b.options.accessibility===!0&&b.$list.on("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),a(window).on("orientationchange.slick.slick-"+b.instanceUid,a.proxy(b.orientationChange,b)),a(window).on("resize.slick.slick-"+b.instanceUid,a.proxy(b.resize,b)),a("[draggable!=true]",b.$slideTrack).on("dragstart",b.preventDefault),a(window).on("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).on("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.initUI=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.show(),a.$nextArrow.show()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.show(),a.options.autoplay===!0&&a.autoPlay()},b.prototype.keyHandler=function(a){var b=this;a.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===a.keyCode&&b.options.accessibility===!0?b.changeSlide({data:{message:"previous"}}):39===a.keyCode&&b.options.accessibility===!0&&b.changeSlide({data:{message:"next"}}))},b.prototype.lazyLoad=function(){function g(b){a("img[data-lazy]",b).each(function(){var b=a(this),c=a(this).attr("data-lazy"),d=document.createElement("img");d.onload=function(){b.animate({opacity:0},100,function(){b.attr("src",c).animate({opacity:1},200,function(){b.removeAttr("data-lazy").removeClass("slick-loading")})})},d.src=c})}var c,d,e,f,b=this;b.options.centerMode===!0?b.options.infinite===!0?(e=b.currentSlide+(b.options.slidesToShow/2+1),f=e+b.options.slidesToShow+2):(e=Math.max(0,b.currentSlide-(b.options.slidesToShow/2+1)),f=2+(b.options.slidesToShow/2+1)+b.currentSlide):(e=b.options.infinite?b.options.slidesToShow+b.currentSlide:b.currentSlide,f=e+b.options.slidesToShow,b.options.fade===!0&&(e>0&&e--,f<=b.slideCount&&f++)),c=b.$slider.find(".slick-slide").slice(e,f),g(c),b.slideCount<=b.options.slidesToShow?(d=b.$slider.find(".slick-slide"),g(d)):b.currentSlide>=b.slideCount-b.options.slidesToShow?(d=b.$slider.find(".slick-cloned").slice(0,b.options.slidesToShow),g(d)):0===b.currentSlide&&(d=b.$slider.find(".slick-cloned").slice(-1*b.options.slidesToShow),g(d))},b.prototype.loadSlider=function(){var a=this;a.setPosition(),a.$slideTrack.css({opacity:1}),a.$slider.removeClass("slick-loading"),a.initUI(),"progressive"===a.options.lazyLoad&&a.progressiveLazyLoad()},b.prototype.next=b.prototype.slickNext=function(){var a=this;a.changeSlide({data:{message:"next"}})},b.prototype.orientationChange=function(){var a=this;a.checkResponsive(),a.setPosition()},b.prototype.pause=b.prototype.slickPause=function(){var a=this;a.autoPlayClear(),a.paused=!0},b.prototype.play=b.prototype.slickPlay=function(){var a=this;a.paused=!1,a.autoPlay()},b.prototype.postSlide=function(a){var b=this;b.$slider.trigger("afterChange",[b,a]),b.animating=!1,b.setPosition(),b.swipeLeft=null,b.options.autoplay===!0&&b.paused===!1&&b.autoPlay(),b.options.accessibility===!0&&b.initADA()},b.prototype.prev=b.prototype.slickPrev=function(){var a=this;a.changeSlide({data:{message:"previous"}})},b.prototype.preventDefault=function(a){a.preventDefault()},b.prototype.progressiveLazyLoad=function(){var c,d,b=this;c=a("img[data-lazy]",b.$slider).length,c>0&&(d=a("img[data-lazy]",b.$slider).first(),d.attr("src",null),d.attr("src",d.attr("data-lazy")).removeClass("slick-loading").load(function(){d.removeAttr("data-lazy"),b.progressiveLazyLoad(),b.options.adaptiveHeight===!0&&b.setPosition()}).error(function(){d.removeAttr("data-lazy"),b.progressiveLazyLoad()}))},b.prototype.refresh=function(b){var d,e,c=this;e=c.slideCount-c.options.slidesToShow,c.options.infinite||(c.slideCount<=c.options.slidesToShow?c.currentSlide=0:c.currentSlide>e&&(c.currentSlide=e)),d=c.currentSlide,c.destroy(!0),a.extend(c,c.initials,{currentSlide:d}),c.init(),b||c.changeSlide({data:{message:"index",index:d}},!1)},b.prototype.registerBreakpoints=function(){var c,d,e,b=this,f=b.options.responsive||null;if("array"===a.type(f)&&f.length){b.respondTo=b.options.respondTo||"window";for(c in f)if(e=b.breakpoints.length-1,d=f[c].breakpoint,f.hasOwnProperty(c)){for(;e>=0;)b.breakpoints[e]&&b.breakpoints[e]===d&&b.breakpoints.splice(e,1),e--;b.breakpoints.push(d),b.breakpointSettings[d]=f[c].settings}b.breakpoints.sort(function(a,c){return b.options.mobileFirst?a-c:c-a})}},b.prototype.reinit=function(){var b=this;b.$slides=b.$slideTrack.children(b.options.slide).addClass("slick-slide"),b.slideCount=b.$slides.length,b.currentSlide>=b.slideCount&&0!==b.currentSlide&&(b.currentSlide=b.currentSlide-b.options.slidesToScroll),b.slideCount<=b.options.slidesToShow&&(b.currentSlide=0),b.registerBreakpoints(),b.setProps(),b.setupInfinite(),b.buildArrows(),b.updateArrows(),b.initArrowEvents(),b.buildDots(),b.updateDots(),b.initDotEvents(),b.checkResponsive(!1,!0),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),b.setSlideClasses(0),b.setPosition(),b.$slider.trigger("reInit",[b]),b.options.autoplay===!0&&b.focusHandler()},b.prototype.resize=function(){var b=this;a(window).width()!==b.windowWidth&&(clearTimeout(b.windowDelay),b.windowDelay=window.setTimeout(function(){b.windowWidth=a(window).width(),b.checkResponsive(),b.unslicked||b.setPosition()},50))},b.prototype.removeSlide=b.prototype.slickRemove=function(a,b,c){var d=this;return"boolean"==typeof a?(b=a,a=b===!0?0:d.slideCount-1):a=b===!0?--a:a,d.slideCount<1||0>a||a>d.slideCount-1?!1:(d.unload(),c===!0?d.$slideTrack.children().remove():d.$slideTrack.children(this.options.slide).eq(a).remove(),d.$slides=d.$slideTrack.children(this.options.slide),d.$slideTrack.children(this.options.slide).detach(),d.$slideTrack.append(d.$slides),d.$slidesCache=d.$slides,void d.reinit())},b.prototype.setCSS=function(a){var d,e,b=this,c={};b.options.rtl===!0&&(a=-a),d="left"==b.positionProp?Math.ceil(a)+"px":"0px",e="top"==b.positionProp?Math.ceil(a)+"px":"0px",c[b.positionProp]=a,b.transformsEnabled===!1?b.$slideTrack.css(c):(c={},b.cssTransitions===!1?(c[b.animType]="translate("+d+", "+e+")",b.$slideTrack.css(c)):(c[b.animType]="translate3d("+d+", "+e+", 0px)",b.$slideTrack.css(c)))},b.prototype.setDimensions=function(){var a=this;a.options.vertical===!1?a.options.centerMode===!0&&a.$list.css({padding:"0px "+a.options.centerPadding}):(a.$list.height(a.$slides.first().outerHeight(!0)*a.options.slidesToShow),a.options.centerMode===!0&&a.$list.css({padding:a.options.centerPadding+" 0px"})),a.listWidth=a.$list.width(),a.listHeight=a.$list.height(),a.options.vertical===!1&&a.options.variableWidth===!1?(a.slideWidth=Math.ceil(a.listWidth/a.options.slidesToShow),a.$slideTrack.width(Math.ceil(a.slideWidth*a.$slideTrack.children(".slick-slide").length))):a.options.variableWidth===!0?a.$slideTrack.width(5e3*a.slideCount):(a.slideWidth=Math.ceil(a.listWidth),a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0)*a.$slideTrack.children(".slick-slide").length)));var b=a.$slides.first().outerWidth(!0)-a.$slides.first().width();a.options.variableWidth===!1&&a.$slideTrack.children(".slick-slide").width(a.slideWidth-b)},b.prototype.setFade=function(){var c,b=this;b.$slides.each(function(d,e){c=b.slideWidth*d*-1,b.options.rtl===!0?a(e).css({position:"relative",right:c,top:0,zIndex:b.options.zIndex-2,opacity:0}):a(e).css({position:"relative",left:c,top:0,zIndex:b.options.zIndex-2,opacity:0})}),b.$slides.eq(b.currentSlide).css({zIndex:b.options.zIndex-1,opacity:1})},b.prototype.setHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.css("height",b)}},b.prototype.setOption=b.prototype.slickSetOption=function(b,c,d){var f,g,e=this;if("responsive"===b&&"array"===a.type(c))for(g in c)if("array"!==a.type(e.options.responsive))e.options.responsive=[c[g]];else{for(f=e.options.responsive.length-1;f>=0;)e.options.responsive[f].breakpoint===c[g].breakpoint&&e.options.responsive.splice(f,1),f--;e.options.responsive.push(c[g])}else e.options[b]=c;d===!0&&(e.unload(),e.reinit())},b.prototype.setPosition=function(){var a=this;a.setDimensions(),a.setHeight(),a.options.fade===!1?a.setCSS(a.getLeft(a.currentSlide)):a.setFade(),a.$slider.trigger("setPosition",[a])},b.prototype.setProps=function(){var a=this,b=document.body.style;a.positionProp=a.options.vertical===!0?"top":"left","top"===a.positionProp?a.$slider.addClass("slick-vertical"):a.$slider.removeClass("slick-vertical"),(void 0!==b.WebkitTransition||void 0!==b.MozTransition||void 0!==b.msTransition)&&a.options.useCSS===!0&&(a.cssTransitions=!0),a.options.fade&&("number"==typeof a.options.zIndex?a.options.zIndex<3&&(a.options.zIndex=3):a.options.zIndex=a.defaults.zIndex),void 0!==b.OTransform&&(a.animType="OTransform",a.transformType="-o-transform",a.transitionType="OTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.MozTransform&&(a.animType="MozTransform",a.transformType="-moz-transform",a.transitionType="MozTransition",void 0===b.perspectiveProperty&&void 0===b.MozPerspective&&(a.animType=!1)),void 0!==b.webkitTransform&&(a.animType="webkitTransform",a.transformType="-webkit-transform",a.transitionType="webkitTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.msTransform&&(a.animType="msTransform",a.transformType="-ms-transform",a.transitionType="msTransition",void 0===b.msTransform&&(a.animType=!1)),void 0!==b.transform&&a.animType!==!1&&(a.animType="transform",a.transformType="transform",a.transitionType="transition"),a.transformsEnabled=a.options.useTransform&&null!==a.animType&&a.animType!==!1},b.prototype.setSlideClasses=function(a){var c,d,e,f,b=this;d=b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),b.$slides.eq(a).addClass("slick-current"),b.options.centerMode===!0?(c=Math.floor(b.options.slidesToShow/2),b.options.infinite===!0&&(a>=c&&a<=b.slideCount-1-c?b.$slides.slice(a-c,a+c+1).addClass("slick-active").attr("aria-hidden","false"):(e=b.options.slidesToShow+a,d.slice(e-c+1,e+c+2).addClass("slick-active").attr("aria-hidden","false")),0===a?d.eq(d.length-1-b.options.slidesToShow).addClass("slick-center"):a===b.slideCount-1&&d.eq(b.options.slidesToShow).addClass("slick-center")),b.$slides.eq(a).addClass("slick-center")):a>=0&&a<=b.slideCount-b.options.slidesToShow?b.$slides.slice(a,a+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):d.length<=b.options.slidesToShow?d.addClass("slick-active").attr("aria-hidden","false"):(f=b.slideCount%b.options.slidesToShow,e=b.options.infinite===!0?b.options.slidesToShow+a:a,b.options.slidesToShow==b.options.slidesToScroll&&b.slideCount-a<b.options.slidesToShow?d.slice(e-(b.options.slidesToShow-f),e+f).addClass("slick-active").attr("aria-hidden","false"):d.slice(e,e+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")),"ondemand"===b.options.lazyLoad&&b.lazyLoad()},b.prototype.setupInfinite=function(){var c,d,e,b=this;if(b.options.fade===!0&&(b.options.centerMode=!1),b.options.infinite===!0&&b.options.fade===!1&&(d=null,b.slideCount>b.options.slidesToShow)){for(e=b.options.centerMode===!0?b.options.slidesToShow+1:b.options.slidesToShow,c=b.slideCount;c>b.slideCount-e;c-=1)d=c-1,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d-b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");for(c=0;e>c;c+=1)d=c,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d+b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");b.$slideTrack.find(".slick-cloned").find("[id]").each(function(){a(this).attr("id","")})}},b.prototype.setPaused=function(a){var b=this;b.options.autoplay===!0&&b.options.pauseOnHover===!0&&(b.paused=a,a?b.autoPlayClear():b.autoPlay())},b.prototype.selectHandler=function(b){var c=this,d=a(b.target).is(".slick-slide")?a(b.target):a(b.target).parents(".slick-slide"),e=parseInt(d.attr("data-slick-index"));return e||(e=0),c.slideCount<=c.options.slidesToShow?(c.setSlideClasses(e),void c.asNavFor(e)):void c.slideHandler(e)},b.prototype.slideHandler=function(a,b,c){var d,e,f,g,h=null,i=this;return b=b||!1,i.animating===!0&&i.options.waitForAnimate===!0||i.options.fade===!0&&i.currentSlide===a||i.slideCount<=i.options.slidesToShow?void 0:(b===!1&&i.asNavFor(a),d=a,h=i.getLeft(d),g=i.getLeft(i.currentSlide),i.currentLeft=null===i.swipeLeft?g:i.swipeLeft,i.options.infinite===!1&&i.options.centerMode===!1&&(0>a||a>i.getDotCount()*i.options.slidesToScroll)?void(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d);
}):i.postSlide(d))):i.options.infinite===!1&&i.options.centerMode===!0&&(0>a||a>i.slideCount-i.options.slidesToScroll)?void(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d))):(i.options.autoplay===!0&&clearInterval(i.autoPlayTimer),e=0>d?i.slideCount%i.options.slidesToScroll!==0?i.slideCount-i.slideCount%i.options.slidesToScroll:i.slideCount+d:d>=i.slideCount?i.slideCount%i.options.slidesToScroll!==0?0:d-i.slideCount:d,i.animating=!0,i.$slider.trigger("beforeChange",[i,i.currentSlide,e]),f=i.currentSlide,i.currentSlide=e,i.setSlideClasses(i.currentSlide),i.updateDots(),i.updateArrows(),i.options.fade===!0?(c!==!0?(i.fadeSlideOut(f),i.fadeSlide(e,function(){i.postSlide(e)})):i.postSlide(e),void i.animateHeight()):void(c!==!0?i.animateSlide(h,function(){i.postSlide(e)}):i.postSlide(e))))},b.prototype.startLoad=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.hide(),a.$nextArrow.hide()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.hide(),a.$slider.addClass("slick-loading")},b.prototype.swipeDirection=function(){var a,b,c,d,e=this;return a=e.touchObject.startX-e.touchObject.curX,b=e.touchObject.startY-e.touchObject.curY,c=Math.atan2(b,a),d=Math.round(180*c/Math.PI),0>d&&(d=360-Math.abs(d)),45>=d&&d>=0?e.options.rtl===!1?"left":"right":360>=d&&d>=315?e.options.rtl===!1?"left":"right":d>=135&&225>=d?e.options.rtl===!1?"right":"left":e.options.verticalSwiping===!0?d>=35&&135>=d?"left":"right":"vertical"},b.prototype.swipeEnd=function(a){var c,b=this;if(b.dragging=!1,b.shouldClick=b.touchObject.swipeLength>10?!1:!0,void 0===b.touchObject.curX)return!1;if(b.touchObject.edgeHit===!0&&b.$slider.trigger("edge",[b,b.swipeDirection()]),b.touchObject.swipeLength>=b.touchObject.minSwipe)switch(b.swipeDirection()){case"left":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide+b.getSlideCount()):b.currentSlide+b.getSlideCount(),b.slideHandler(c),b.currentDirection=0,b.touchObject={},b.$slider.trigger("swipe",[b,"left"]);break;case"right":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide-b.getSlideCount()):b.currentSlide-b.getSlideCount(),b.slideHandler(c),b.currentDirection=1,b.touchObject={},b.$slider.trigger("swipe",[b,"right"])}else b.touchObject.startX!==b.touchObject.curX&&(b.slideHandler(b.currentSlide),b.touchObject={})},b.prototype.swipeHandler=function(a){var b=this;if(!(b.options.swipe===!1||"ontouchend"in document&&b.options.swipe===!1||b.options.draggable===!1&&-1!==a.type.indexOf("mouse")))switch(b.touchObject.fingerCount=a.originalEvent&&void 0!==a.originalEvent.touches?a.originalEvent.touches.length:1,b.touchObject.minSwipe=b.listWidth/b.options.touchThreshold,b.options.verticalSwiping===!0&&(b.touchObject.minSwipe=b.listHeight/b.options.touchThreshold),a.data.action){case"start":b.swipeStart(a);break;case"move":b.swipeMove(a);break;case"end":b.swipeEnd(a)}},b.prototype.swipeMove=function(a){var d,e,f,g,h,b=this;return h=void 0!==a.originalEvent?a.originalEvent.touches:null,!b.dragging||h&&1!==h.length?!1:(d=b.getLeft(b.currentSlide),b.touchObject.curX=void 0!==h?h[0].pageX:a.clientX,b.touchObject.curY=void 0!==h?h[0].pageY:a.clientY,b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curX-b.touchObject.startX,2))),b.options.verticalSwiping===!0&&(b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curY-b.touchObject.startY,2)))),e=b.swipeDirection(),"vertical"!==e?(void 0!==a.originalEvent&&b.touchObject.swipeLength>4&&a.preventDefault(),g=(b.options.rtl===!1?1:-1)*(b.touchObject.curX>b.touchObject.startX?1:-1),b.options.verticalSwiping===!0&&(g=b.touchObject.curY>b.touchObject.startY?1:-1),f=b.touchObject.swipeLength,b.touchObject.edgeHit=!1,b.options.infinite===!1&&(0===b.currentSlide&&"right"===e||b.currentSlide>=b.getDotCount()&&"left"===e)&&(f=b.touchObject.swipeLength*b.options.edgeFriction,b.touchObject.edgeHit=!0),b.options.vertical===!1?b.swipeLeft=d+f*g:b.swipeLeft=d+f*(b.$list.height()/b.listWidth)*g,b.options.verticalSwiping===!0&&(b.swipeLeft=d+f*g),b.options.fade===!0||b.options.touchMove===!1?!1:b.animating===!0?(b.swipeLeft=null,!1):void b.setCSS(b.swipeLeft)):void 0)},b.prototype.swipeStart=function(a){var c,b=this;return 1!==b.touchObject.fingerCount||b.slideCount<=b.options.slidesToShow?(b.touchObject={},!1):(void 0!==a.originalEvent&&void 0!==a.originalEvent.touches&&(c=a.originalEvent.touches[0]),b.touchObject.startX=b.touchObject.curX=void 0!==c?c.pageX:a.clientX,b.touchObject.startY=b.touchObject.curY=void 0!==c?c.pageY:a.clientY,void(b.dragging=!0))},b.prototype.unfilterSlides=b.prototype.slickUnfilter=function(){var a=this;null!==a.$slidesCache&&(a.unload(),a.$slideTrack.children(this.options.slide).detach(),a.$slidesCache.appendTo(a.$slideTrack),a.reinit())},b.prototype.unload=function(){var b=this;a(".slick-cloned",b.$slider).remove(),b.$dots&&b.$dots.remove(),b.$prevArrow&&b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.remove(),b.$nextArrow&&b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.remove(),b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},b.prototype.unslick=function(a){var b=this;b.$slider.trigger("unslick",[b,a]),b.destroy()},b.prototype.updateArrows=function(){var b,a=this;b=Math.floor(a.options.slidesToShow/2),a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&!a.options.infinite&&(a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===a.currentSlide?(a.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-a.options.slidesToShow&&a.options.centerMode===!1?(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-1&&a.options.centerMode===!0&&(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},b.prototype.updateDots=function(){var a=this;null!==a.$dots&&(a.$dots.find("li").removeClass("slick-active").attr("aria-hidden","true"),a.$dots.find("li").eq(Math.floor(a.currentSlide/a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden","false"))},b.prototype.visibility=function(){var a=this;document[a.hidden]?(a.paused=!0,a.autoPlayClear()):a.options.autoplay===!0&&(a.paused=!1,a.autoPlay())},b.prototype.initADA=function(){var b=this;b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),b.$slideTrack.attr("role","listbox"),b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function(c){a(this).attr({role:"option","aria-describedby":"slick-slide"+b.instanceUid+c})}),null!==b.$dots&&b.$dots.attr("role","tablist").find("li").each(function(c){a(this).attr({role:"presentation","aria-selected":"false","aria-controls":"navigation"+b.instanceUid+c,id:"slick-slide"+b.instanceUid+c})}).first().attr("aria-selected","true").end().find("button").attr("role","button").end().closest("div").attr("role","toolbar"),b.activateADA()},b.prototype.activateADA=function(){var a=this;a.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},b.prototype.focusHandler=function(){var b=this;b.$slider.on("focus.slick blur.slick","*",function(c){c.stopImmediatePropagation();var d=a(this);setTimeout(function(){b.isPlay&&(d.is(":focus")?(b.autoPlayClear(),b.paused=!0):(b.paused=!1,b.autoPlay()))},0)})},a.fn.slick=function(){var f,g,a=this,c=arguments[0],d=Array.prototype.slice.call(arguments,1),e=a.length;for(f=0;e>f;f++)if("object"==typeof c||"undefined"==typeof c?a[f].slick=new b(a[f],c):g=a[f].slick[c].apply(a[f].slick,d),"undefined"!=typeof g)return g;return a}});

/*!
 * JavaScript Cookie v2.1.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
!function(e){if("function"==typeof define&&define.amd)define(e);else if("object"==typeof exports)module.exports=e();else{var n=window.Cookies,t=window.Cookies=e();t.noConflict=function(){return window.Cookies=n,t}}}(function(){function e(){for(var e=0,n={};e<arguments.length;e++){var t=arguments[e];for(var o in t)n[o]=t[o]}return n}function n(t){function o(n,r,i){var c;if("undefined"!=typeof document){if(arguments.length>1){if(i=e({path:"/"},o.defaults,i),"number"==typeof i.expires){var s=new Date;s.setMilliseconds(s.getMilliseconds()+864e5*i.expires),i.expires=s}try{c=JSON.stringify(r),/^[\{\[]/.test(c)&&(r=c)}catch(a){}return r=t.write?t.write(r,n):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),n=encodeURIComponent(String(n)),n=n.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent),n=n.replace(/[\(\)]/g,escape),document.cookie=[n,"=",r,i.expires&&"; expires="+i.expires.toUTCString(),i.path&&"; path="+i.path,i.domain&&"; domain="+i.domain,i.secure?"; secure":""].join("")}n||(c={});for(var p=document.cookie?document.cookie.split("; "):[],u=/(%[0-9A-Z]{2})+/g,d=0;d<p.length;d++){var f=p[d].split("="),l=f[0].replace(u,decodeURIComponent),m=f.slice(1).join("=");'"'===m.charAt(0)&&(m=m.slice(1,-1));try{if(m=t.read?t.read(m,l):t(m,l)||m.replace(u,decodeURIComponent),this.json)try{m=JSON.parse(m)}catch(a){}if(n===l){c=m;break}n||(c[l]=m)}catch(a){}}return c}}return o.set=o,o.get=function(e){return o(e)},o.getJSON=function(){return o.apply({json:!0},[].slice.call(arguments))},o.defaults={},o.remove=function(n,t){o(n,"",e(t,{expires:-1}))},o.withConverter=n,o}return n(function(){})});

/*! Magnific Popup - v1.0.0 - 2015-09-17
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2015 Dmitry Semenov; */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(a){var b,c,d,e,f,g,h="Close",i="BeforeClose",j="AfterClose",k="BeforeAppend",l="MarkupParse",m="Open",n="Change",o="mfp",p="."+o,q="mfp-ready",r="mfp-removing",s="mfp-prevent-close",t=function(){},u=!!window.jQuery,v=a(window),w=function(a,c){b.ev.on(o+a+p,c)},x=function(b,c,d,e){var f=document.createElement("div");return f.className="mfp-"+b,d&&(f.innerHTML=d),e?c&&c.appendChild(f):(f=a(f),c&&f.appendTo(c)),f},y=function(c,d){b.ev.triggerHandler(o+c,d),b.st.callbacks&&(c=c.charAt(0).toLowerCase()+c.slice(1),b.st.callbacks[c]&&b.st.callbacks[c].apply(b,a.isArray(d)?d:[d]))},z=function(c){return c===g&&b.currTemplate.closeBtn||(b.currTemplate.closeBtn=a(b.st.closeMarkup.replace("%title%",b.st.tClose)),g=c),b.currTemplate.closeBtn},A=function(){a.magnificPopup.instance||(b=new t,b.init(),a.magnificPopup.instance=b)},B=function(){var a=document.createElement("p").style,b=["ms","O","Moz","Webkit"];if(void 0!==a.transition)return!0;for(;b.length;)if(b.pop()+"Transition"in a)return!0;return!1};t.prototype={constructor:t,init:function(){var c=navigator.appVersion;b.isIE7=-1!==c.indexOf("MSIE 7."),b.isIE8=-1!==c.indexOf("MSIE 8."),b.isLowIE=b.isIE7||b.isIE8,b.isAndroid=/android/gi.test(c),b.isIOS=/iphone|ipad|ipod/gi.test(c),b.supportsTransition=B(),b.probablyMobile=b.isAndroid||b.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),d=a(document),b.popupsCache={}},open:function(c){var e;if(c.isObj===!1){b.items=c.items.toArray(),b.index=0;var g,h=c.items;for(e=0;e<h.length;e++)if(g=h[e],g.parsed&&(g=g.el[0]),g===c.el[0]){b.index=e;break}}else b.items=a.isArray(c.items)?c.items:[c.items],b.index=c.index||0;if(b.isOpen)return void b.updateItemHTML();b.types=[],f="",c.mainEl&&c.mainEl.length?b.ev=c.mainEl.eq(0):b.ev=d,c.key?(b.popupsCache[c.key]||(b.popupsCache[c.key]={}),b.currTemplate=b.popupsCache[c.key]):b.currTemplate={},b.st=a.extend(!0,{},a.magnificPopup.defaults,c),b.fixedContentPos="auto"===b.st.fixedContentPos?!b.probablyMobile:b.st.fixedContentPos,b.st.modal&&(b.st.closeOnContentClick=!1,b.st.closeOnBgClick=!1,b.st.showCloseBtn=!1,b.st.enableEscapeKey=!1),b.bgOverlay||(b.bgOverlay=x("bg").on("click"+p,function(){b.close()}),b.wrap=x("wrap").attr("tabindex",-1).on("click"+p,function(a){b._checkIfClose(a.target)&&b.close()}),b.container=x("container",b.wrap)),b.contentContainer=x("content"),b.st.preloader&&(b.preloader=x("preloader",b.container,b.st.tLoading));var i=a.magnificPopup.modules;for(e=0;e<i.length;e++){var j=i[e];j=j.charAt(0).toUpperCase()+j.slice(1),b["init"+j].call(b)}y("BeforeOpen"),b.st.showCloseBtn&&(b.st.closeBtnInside?(w(l,function(a,b,c,d){c.close_replaceWith=z(d.type)}),f+=" mfp-close-btn-in"):b.wrap.append(z())),b.st.alignTop&&(f+=" mfp-align-top"),b.fixedContentPos?b.wrap.css({overflow:b.st.overflowY,overflowX:"hidden",overflowY:b.st.overflowY}):b.wrap.css({top:v.scrollTop(),position:"absolute"}),(b.st.fixedBgPos===!1||"auto"===b.st.fixedBgPos&&!b.fixedContentPos)&&b.bgOverlay.css({height:d.height(),position:"absolute"}),b.st.enableEscapeKey&&d.on("keyup"+p,function(a){27===a.keyCode&&b.close()}),v.on("resize"+p,function(){b.updateSize()}),b.st.closeOnContentClick||(f+=" mfp-auto-cursor"),f&&b.wrap.addClass(f);var k=b.wH=v.height(),n={};if(b.fixedContentPos&&b._hasScrollBar(k)){var o=b._getScrollbarSize();o&&(n.marginRight=o)}b.fixedContentPos&&(b.isIE7?a("body, html").css("overflow","hidden"):n.overflow="hidden");var r=b.st.mainClass;return b.isIE7&&(r+=" mfp-ie7"),r&&b._addClassToMFP(r),b.updateItemHTML(),y("BuildControls"),a("html").css(n),b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo||a(document.body)),b._lastFocusedEl=document.activeElement,setTimeout(function(){b.content?(b._addClassToMFP(q),b._setFocus()):b.bgOverlay.addClass(q),d.on("focusin"+p,b._onFocusIn)},16),b.isOpen=!0,b.updateSize(k),y(m),c},close:function(){b.isOpen&&(y(i),b.isOpen=!1,b.st.removalDelay&&!b.isLowIE&&b.supportsTransition?(b._addClassToMFP(r),setTimeout(function(){b._close()},b.st.removalDelay)):b._close())},_close:function(){y(h);var c=r+" "+q+" ";if(b.bgOverlay.detach(),b.wrap.detach(),b.container.empty(),b.st.mainClass&&(c+=b.st.mainClass+" "),b._removeClassFromMFP(c),b.fixedContentPos){var e={marginRight:""};b.isIE7?a("body, html").css("overflow",""):e.overflow="",a("html").css(e)}d.off("keyup"+p+" focusin"+p),b.ev.off(p),b.wrap.attr("class","mfp-wrap").removeAttr("style"),b.bgOverlay.attr("class","mfp-bg"),b.container.attr("class","mfp-container"),!b.st.showCloseBtn||b.st.closeBtnInside&&b.currTemplate[b.currItem.type]!==!0||b.currTemplate.closeBtn&&b.currTemplate.closeBtn.detach(),b._lastFocusedEl&&a(b._lastFocusedEl).focus(),b.currItem=null,b.content=null,b.currTemplate=null,b.prevHeight=0,y(j)},updateSize:function(a){if(b.isIOS){var c=document.documentElement.clientWidth/window.innerWidth,d=window.innerHeight*c;b.wrap.css("height",d),b.wH=d}else b.wH=a||v.height();b.fixedContentPos||b.wrap.css("height",b.wH),y("Resize")},updateItemHTML:function(){var c=b.items[b.index];b.contentContainer.detach(),b.content&&b.content.detach(),c.parsed||(c=b.parseEl(b.index));var d=c.type;if(y("BeforeChange",[b.currItem?b.currItem.type:"",d]),b.currItem=c,!b.currTemplate[d]){var f=b.st[d]?b.st[d].markup:!1;y("FirstMarkupParse",f),f?b.currTemplate[d]=a(f):b.currTemplate[d]=!0}e&&e!==c.type&&b.container.removeClass("mfp-"+e+"-holder");var g=b["get"+d.charAt(0).toUpperCase()+d.slice(1)](c,b.currTemplate[d]);b.appendContent(g,d),c.preloaded=!0,y(n,c),e=c.type,b.container.prepend(b.contentContainer),y("AfterChange")},appendContent:function(a,c){b.content=a,a?b.st.showCloseBtn&&b.st.closeBtnInside&&b.currTemplate[c]===!0?b.content.find(".mfp-close").length||b.content.append(z()):b.content=a:b.content="",y(k),b.container.addClass("mfp-"+c+"-holder"),b.contentContainer.append(b.content)},parseEl:function(c){var d,e=b.items[c];if(e.tagName?e={el:a(e)}:(d=e.type,e={data:e,src:e.src}),e.el){for(var f=b.types,g=0;g<f.length;g++)if(e.el.hasClass("mfp-"+f[g])){d=f[g];break}e.src=e.el.attr("data-mfp-src"),e.src||(e.src=e.el.attr("href"))}return e.type=d||b.st.type||"inline",e.index=c,e.parsed=!0,b.items[c]=e,y("ElementParse",e),b.items[c]},addGroup:function(a,c){var d=function(d){d.mfpEl=this,b._openClick(d,a,c)};c||(c={});var e="click.magnificPopup";c.mainEl=a,c.items?(c.isObj=!0,a.off(e).on(e,d)):(c.isObj=!1,c.delegate?a.off(e).on(e,c.delegate,d):(c.items=a,a.off(e).on(e,d)))},_openClick:function(c,d,e){var f=void 0!==e.midClick?e.midClick:a.magnificPopup.defaults.midClick;if(f||!(2===c.which||c.ctrlKey||c.metaKey||c.altKey||c.shiftKey)){var g=void 0!==e.disableOn?e.disableOn:a.magnificPopup.defaults.disableOn;if(g)if(a.isFunction(g)){if(!g.call(b))return!0}else if(v.width()<g)return!0;c.type&&(c.preventDefault(),b.isOpen&&c.stopPropagation()),e.el=a(c.mfpEl),e.delegate&&(e.items=d.find(e.delegate)),b.open(e)}},updateStatus:function(a,d){if(b.preloader){c!==a&&b.container.removeClass("mfp-s-"+c),d||"loading"!==a||(d=b.st.tLoading);var e={status:a,text:d};y("UpdateStatus",e),a=e.status,d=e.text,b.preloader.html(d),b.preloader.find("a").on("click",function(a){a.stopImmediatePropagation()}),b.container.addClass("mfp-s-"+a),c=a}},_checkIfClose:function(c){if(!a(c).hasClass(s)){var d=b.st.closeOnContentClick,e=b.st.closeOnBgClick;if(d&&e)return!0;if(!b.content||a(c).hasClass("mfp-close")||b.preloader&&c===b.preloader[0])return!0;if(c===b.content[0]||a.contains(b.content[0],c)){if(d)return!0}else if(e&&a.contains(document,c))return!0;return!1}},_addClassToMFP:function(a){b.bgOverlay.addClass(a),b.wrap.addClass(a)},_removeClassFromMFP:function(a){this.bgOverlay.removeClass(a),b.wrap.removeClass(a)},_hasScrollBar:function(a){return(b.isIE7?d.height():document.body.scrollHeight)>(a||v.height())},_setFocus:function(){(b.st.focus?b.content.find(b.st.focus).eq(0):b.wrap).focus()},_onFocusIn:function(c){return c.target===b.wrap[0]||a.contains(b.wrap[0],c.target)?void 0:(b._setFocus(),!1)},_parseMarkup:function(b,c,d){var e;d.data&&(c=a.extend(d.data,c)),y(l,[b,c,d]),a.each(c,function(a,c){if(void 0===c||c===!1)return!0;if(e=a.split("_"),e.length>1){var d=b.find(p+"-"+e[0]);if(d.length>0){var f=e[1];"replaceWith"===f?d[0]!==c[0]&&d.replaceWith(c):"img"===f?d.is("img")?d.attr("src",c):d.replaceWith('<img src="'+c+'" class="'+d.attr("class")+'" />'):d.attr(e[1],c)}}else b.find(p+"-"+a).html(c)})},_getScrollbarSize:function(){if(void 0===b.scrollbarSize){var a=document.createElement("div");a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(a),b.scrollbarSize=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return b.scrollbarSize}},a.magnificPopup={instance:null,proto:t.prototype,modules:[],open:function(b,c){return A(),b=b?a.extend(!0,{},b):{},b.isObj=!0,b.index=c||0,this.instance.open(b)},close:function(){return a.magnificPopup.instance&&a.magnificPopup.instance.close()},registerModule:function(b,c){c.options&&(a.magnificPopup.defaults[b]=c.options),a.extend(this.proto,c.proto),this.modules.push(b)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading..."}},a.fn.magnificPopup=function(c){A();var d=a(this);if("string"==typeof c)if("open"===c){var e,f=u?d.data("magnificPopup"):d[0].magnificPopup,g=parseInt(arguments[1],10)||0;f.items?e=f.items[g]:(e=d,f.delegate&&(e=e.find(f.delegate)),e=e.eq(g)),b._openClick({mfpEl:e},d,f)}else b.isOpen&&b[c].apply(b,Array.prototype.slice.call(arguments,1));else c=a.extend(!0,{},c),u?d.data("magnificPopup",c):d[0].magnificPopup=c,b.addGroup(d,c);return d};var C,D,E,F="inline",G=function(){E&&(D.after(E.addClass(C)).detach(),E=null)};a.magnificPopup.registerModule(F,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){b.types.push(F),w(h+"."+F,function(){G()})},getInline:function(c,d){if(G(),c.src){var e=b.st.inline,f=a(c.src);if(f.length){var g=f[0].parentNode;g&&g.tagName&&(D||(C=e.hiddenClass,D=x(C),C="mfp-"+C),E=f.after(D).detach().removeClass(C)),b.updateStatus("ready")}else b.updateStatus("error",e.tNotFound),f=a("<div>");return c.inlineElement=f,f}return b.updateStatus("ready"),b._parseMarkup(d,{},c),d}}});var H,I="ajax",J=function(){H&&a(document.body).removeClass(H)},K=function(){J(),b.req&&b.req.abort()};a.magnificPopup.registerModule(I,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){b.types.push(I),H=b.st.ajax.cursor,w(h+"."+I,K),w("BeforeChange."+I,K)},getAjax:function(c){H&&a(document.body).addClass(H),b.updateStatus("loading");var d=a.extend({url:c.src,success:function(d,e,f){var g={data:d,xhr:f};y("ParseAjax",g),b.appendContent(a(g.data),I),c.finished=!0,J(),b._setFocus(),setTimeout(function(){b.wrap.addClass(q)},16),b.updateStatus("ready"),y("AjaxContentAdded")},error:function(){J(),c.finished=c.loadError=!0,b.updateStatus("error",b.st.ajax.tError.replace("%url%",c.src))}},b.st.ajax.settings);return b.req=a.ajax(d),""}}});var L,M=function(c){if(c.data&&void 0!==c.data.title)return c.data.title;var d=b.st.image.titleSrc;if(d){if(a.isFunction(d))return d.call(b,c);if(c.el)return c.el.attr(d)||""}return""};a.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var c=b.st.image,d=".image";b.types.push("image"),w(m+d,function(){"image"===b.currItem.type&&c.cursor&&a(document.body).addClass(c.cursor)}),w(h+d,function(){c.cursor&&a(document.body).removeClass(c.cursor),v.off("resize"+p)}),w("Resize"+d,b.resizeImage),b.isLowIE&&w("AfterChange",b.resizeImage)},resizeImage:function(){var a=b.currItem;if(a&&a.img&&b.st.image.verticalFit){var c=0;b.isLowIE&&(c=parseInt(a.img.css("padding-top"),10)+parseInt(a.img.css("padding-bottom"),10)),a.img.css("max-height",b.wH-c)}},_onImageHasSize:function(a){a.img&&(a.hasSize=!0,L&&clearInterval(L),a.isCheckingImgSize=!1,y("ImageHasSize",a),a.imgHidden&&(b.content&&b.content.removeClass("mfp-loading"),a.imgHidden=!1))},findImageSize:function(a){var c=0,d=a.img[0],e=function(f){L&&clearInterval(L),L=setInterval(function(){return d.naturalWidth>0?void b._onImageHasSize(a):(c>200&&clearInterval(L),c++,void(3===c?e(10):40===c?e(50):100===c&&e(500)))},f)};e(1)},getImage:function(c,d){var e=0,f=function(){c&&(c.img[0].complete?(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("ready")),c.hasSize=!0,c.loaded=!0,y("ImageLoadComplete")):(e++,200>e?setTimeout(f,100):g()))},g=function(){c&&(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("error",h.tError.replace("%url%",c.src))),c.hasSize=!0,c.loaded=!0,c.loadError=!0)},h=b.st.image,i=d.find(".mfp-img");if(i.length){var j=document.createElement("img");j.className="mfp-img",c.el&&c.el.find("img").length&&(j.alt=c.el.find("img").attr("alt")),c.img=a(j).on("load.mfploader",f).on("error.mfploader",g),j.src=c.src,i.is("img")&&(c.img=c.img.clone()),j=c.img[0],j.naturalWidth>0?c.hasSize=!0:j.width||(c.hasSize=!1)}return b._parseMarkup(d,{title:M(c),img_replaceWith:c.img},c),b.resizeImage(),c.hasSize?(L&&clearInterval(L),c.loadError?(d.addClass("mfp-loading"),b.updateStatus("error",h.tError.replace("%url%",c.src))):(d.removeClass("mfp-loading"),b.updateStatus("ready")),d):(b.updateStatus("loading"),c.loading=!0,c.hasSize||(c.imgHidden=!0,d.addClass("mfp-loading"),b.findImageSize(c)),d)}}});var N,O=function(){return void 0===N&&(N=void 0!==document.createElement("p").style.MozTransform),N};a.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(a){return a.is("img")?a:a.find("img")}},proto:{initZoom:function(){var a,c=b.st.zoom,d=".zoom";if(c.enabled&&b.supportsTransition){var e,f,g=c.duration,j=function(a){var b=a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),d="all "+c.duration/1e3+"s "+c.easing,e={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},f="transition";return e["-webkit-"+f]=e["-moz-"+f]=e["-o-"+f]=e[f]=d,b.css(e),b},k=function(){b.content.css("visibility","visible")};w("BuildControls"+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.content.css("visibility","hidden"),a=b._getItemToZoom(),!a)return void k();f=j(a),f.css(b._getOffset()),b.wrap.append(f),e=setTimeout(function(){f.css(b._getOffset(!0)),e=setTimeout(function(){k(),setTimeout(function(){f.remove(),a=f=null,y("ZoomAnimationEnded")},16)},g)},16)}}),w(i+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.st.removalDelay=g,!a){if(a=b._getItemToZoom(),!a)return;f=j(a)}f.css(b._getOffset(!0)),b.wrap.append(f),b.content.css("visibility","hidden"),setTimeout(function(){f.css(b._getOffset())},16)}}),w(h+d,function(){b._allowZoom()&&(k(),f&&f.remove(),a=null)})}},_allowZoom:function(){return"image"===b.currItem.type},_getItemToZoom:function(){return b.currItem.hasSize?b.currItem.img:!1},_getOffset:function(c){var d;d=c?b.currItem.img:b.st.zoom.opener(b.currItem.el||b.currItem);var e=d.offset(),f=parseInt(d.css("padding-top"),10),g=parseInt(d.css("padding-bottom"),10);e.top-=a(window).scrollTop()-f;var h={width:d.width(),height:(u?d.innerHeight():d[0].offsetHeight)-g-f};return O()?h["-moz-transform"]=h.transform="translate("+e.left+"px,"+e.top+"px)":(h.left=e.left,h.top=e.top),h}}});var P="iframe",Q="//about:blank",R=function(a){if(b.currTemplate[P]){var c=b.currTemplate[P].find("iframe");c.length&&(a||(c[0].src=Q),b.isIE8&&c.css("display",a?"block":"none"))}};a.magnificPopup.registerModule(P,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){b.types.push(P),w("BeforeChange",function(a,b,c){b!==c&&(b===P?R():c===P&&R(!0))}),w(h+"."+P,function(){R()})},getIframe:function(c,d){var e=c.src,f=b.st.iframe;a.each(f.patterns,function(){return e.indexOf(this.index)>-1?(this.id&&(e="string"==typeof this.id?e.substr(e.lastIndexOf(this.id)+this.id.length,e.length):this.id.call(this,e)),e=this.src.replace("%id%",e),!1):void 0});var g={};return f.srcAction&&(g[f.srcAction]=e),b._parseMarkup(d,g,c),b.updateStatus("ready"),d}}});var S=function(a){var c=b.items.length;return a>c-1?a-c:0>a?c+a:a},T=function(a,b,c){return a.replace(/%curr%/gi,b+1).replace(/%total%/gi,c)};a.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var c=b.st.gallery,e=".mfp-gallery",g=Boolean(a.fn.mfpFastClick);return b.direction=!0,c&&c.enabled?(f+=" mfp-gallery",w(m+e,function(){c.navigateByImgClick&&b.wrap.on("click"+e,".mfp-img",function(){return b.items.length>1?(b.next(),!1):void 0}),d.on("keydown"+e,function(a){37===a.keyCode?b.prev():39===a.keyCode&&b.next()})}),w("UpdateStatus"+e,function(a,c){c.text&&(c.text=T(c.text,b.currItem.index,b.items.length))}),w(l+e,function(a,d,e,f){var g=b.items.length;e.counter=g>1?T(c.tCounter,f.index,g):""}),w("BuildControls"+e,function(){if(b.items.length>1&&c.arrows&&!b.arrowLeft){var d=c.arrowMarkup,e=b.arrowLeft=a(d.replace(/%title%/gi,c.tPrev).replace(/%dir%/gi,"left")).addClass(s),f=b.arrowRight=a(d.replace(/%title%/gi,c.tNext).replace(/%dir%/gi,"right")).addClass(s),h=g?"mfpFastClick":"click";e[h](function(){b.prev()}),f[h](function(){b.next()}),b.isIE7&&(x("b",e[0],!1,!0),x("a",e[0],!1,!0),x("b",f[0],!1,!0),x("a",f[0],!1,!0)),b.container.append(e.add(f))}}),w(n+e,function(){b._preloadTimeout&&clearTimeout(b._preloadTimeout),b._preloadTimeout=setTimeout(function(){b.preloadNearbyImages(),b._preloadTimeout=null},16)}),void w(h+e,function(){d.off(e),b.wrap.off("click"+e),b.arrowLeft&&g&&b.arrowLeft.add(b.arrowRight).destroyMfpFastClick(),b.arrowRight=b.arrowLeft=null})):!1},next:function(){b.direction=!0,b.index=S(b.index+1),b.updateItemHTML()},prev:function(){b.direction=!1,b.index=S(b.index-1),b.updateItemHTML()},goTo:function(a){b.direction=a>=b.index,b.index=a,b.updateItemHTML()},preloadNearbyImages:function(){var a,c=b.st.gallery.preload,d=Math.min(c[0],b.items.length),e=Math.min(c[1],b.items.length);for(a=1;a<=(b.direction?e:d);a++)b._preloadItem(b.index+a);for(a=1;a<=(b.direction?d:e);a++)b._preloadItem(b.index-a)},_preloadItem:function(c){if(c=S(c),!b.items[c].preloaded){var d=b.items[c];d.parsed||(d=b.parseEl(c)),y("LazyLoad",d),"image"===d.type&&(d.img=a('<img class="mfp-img" />').on("load.mfploader",function(){d.hasSize=!0}).on("error.mfploader",function(){d.hasSize=!0,d.loadError=!0,y("LazyLoadError",d)}).attr("src",d.src)),d.preloaded=!0}}}});var U="retina";a.magnificPopup.registerModule(U,{options:{replaceSrc:function(a){return a.src.replace(/\.\w+$/,function(a){return"@2x"+a})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var a=b.st.retina,c=a.ratio;c=isNaN(c)?c():c,c>1&&(w("ImageHasSize."+U,function(a,b){b.img.css({"max-width":b.img[0].naturalWidth/c,width:"100%"})}),w("ElementParse."+U,function(b,d){d.src=a.replaceSrc(d,c)}))}}}}),function(){var b=1e3,c="ontouchstart"in window,d=function(){v.off("touchmove"+f+" touchend"+f)},e="mfpFastClick",f="."+e;a.fn.mfpFastClick=function(e){return a(this).each(function(){var g,h=a(this);if(c){var i,j,k,l,m,n;h.on("touchstart"+f,function(a){l=!1,n=1,m=a.originalEvent?a.originalEvent.touches[0]:a.touches[0],j=m.clientX,k=m.clientY,v.on("touchmove"+f,function(a){m=a.originalEvent?a.originalEvent.touches:a.touches,n=m.length,m=m[0],(Math.abs(m.clientX-j)>10||Math.abs(m.clientY-k)>10)&&(l=!0,d())}).on("touchend"+f,function(a){d(),l||n>1||(g=!0,a.preventDefault(),clearTimeout(i),i=setTimeout(function(){g=!1},b),e())})})}h.on("click"+f,function(){g||e()})})},a.fn.destroyMfpFastClick=function(){a(this).off("touchstart"+f+" click"+f),c&&v.off("touchmove"+f+" touchend"+f)}}(),A()});

/*!
  Zoom 1.7.21
  license: MIT
  http://www.jacklmoore.com/zoom
*/
(function(o){var t={url:!1,callback:!1,target:!1,duration:120,on:"mouseover",touch:!0,onZoomIn:!1,onZoomOut:!1,magnify:1};o.zoom=function(t,n,e,i){var u,c,a,r,m,l,s,f=o(t),h=f.css("position"),d=o(n);return t.style.position=/(absolute|fixed)/.test(h)?h:"relative",t.style.overflow="hidden",e.style.width=e.style.height="",o(e).addClass("zoomImg").css({position:"absolute",top:0,left:0,opacity:0,width:e.width*i,height:e.height*i,border:"none",maxWidth:"none",maxHeight:"none"}).appendTo(t),{init:function(){c=f.outerWidth(),u=f.outerHeight(),n===t?(r=c,a=u):(r=d.outerWidth(),a=d.outerHeight()),m=(e.width-c)/r,l=(e.height-u)/a,s=d.offset()},move:function(o){var t=o.pageX-s.left,n=o.pageY-s.top;n=Math.max(Math.min(n,a),0),t=Math.max(Math.min(t,r),0),e.style.left=t*-m+"px",e.style.top=n*-l+"px"}}},o.fn.zoom=function(n){return this.each(function(){var e=o.extend({},t,n||{}),i=e.target&&o(e.target)[0]||this,u=this,c=o(u),a=document.createElement("img"),r=o(a),m="mousemove.zoom",l=!1,s=!1;if(!e.url){var f=u.querySelector("img");if(f&&(e.url=f.getAttribute("data-src")||f.currentSrc||f.src),!e.url)return}c.one("zoom.destroy",function(o,t){c.off(".zoom"),i.style.position=o,i.style.overflow=t,a.onload=null,r.remove()}.bind(this,i.style.position,i.style.overflow)),a.onload=function(){function t(t){f.init(),f.move(t),r.stop().fadeTo(o.support.opacity?e.duration:0,1,o.isFunction(e.onZoomIn)?e.onZoomIn.call(a):!1)}function n(){r.stop().fadeTo(e.duration,0,o.isFunction(e.onZoomOut)?e.onZoomOut.call(a):!1)}var f=o.zoom(i,u,a,e.magnify);"grab"===e.on?c.on("mousedown.zoom",function(e){1===e.which&&(o(document).one("mouseup.zoom",function(){n(),o(document).off(m,f.move)}),t(e),o(document).on(m,f.move),e.preventDefault())}):"click"===e.on?c.on("click.zoom",function(e){return l?void 0:(l=!0,t(e),o(document).on(m,f.move),o(document).one("click.zoom",function(){n(),l=!1,o(document).off(m,f.move)}),!1)}):"toggle"===e.on?c.on("click.zoom",function(o){l?n():t(o),l=!l}):"mouseover"===e.on&&(f.init(),c.on("mouseenter.zoom",t).on("mouseleave.zoom",n).on(m,f.move)),e.touch&&c.on("touchstart.zoom",function(o){o.preventDefault(),s?(s=!1,n()):(s=!0,t(o.originalEvent.touches[0]||o.originalEvent.changedTouches[0]))}).on("touchmove.zoom",function(o){o.preventDefault(),f.move(o.originalEvent.touches[0]||o.originalEvent.changedTouches[0])}).on("touchend.zoom",function(o){o.preventDefault(),s&&(s=!1,n())}),o.isFunction(e.callback)&&e.callback.call(a)},a.setAttribute("role","presentation"),a.alt="",a.src=e.url})},o.fn.zoom.defaults=t})(window.jQuery);

/*============================================================================
  #Theme JS
==============================================================================*/

// Theme functions
window.theme = window.theme || {};

theme.init = function () {
  theme.animations();
  theme.topbarRegion();
  theme.headerSearch();
  const countdown = $('.js-countdown');
  if (countdown) {
    theme.promoCountdown();
  }
  theme.mobileNav();
  theme.dropdownCarousel();
  theme.hero();
  theme.homepageFeaturedCollection();
  theme.homepageFeaturedBanner();
  theme.homepageFeaturedBlogCarousel();
  theme.collectionFilter();
  theme.productHero();
  theme.productSwatches();
  theme.productDescription();
  theme.productRelatedCarousel();
  theme.productBundle();
  theme.blogCarousel();
  theme.swatchCarousel();
  theme.teamFilter();
  theme.teamMemberPopup();
  theme.cart();
  theme.wholesale();
  theme.wholesaleCart();
  theme.sizeCharts();
  theme.popups();
  theme.socialSharing();
  theme.retinaImages();
};

theme.animations = function () {
  setTimeout(function() {
    $('.fade-in').addClass('fade-in--active');
  }, 400);

  $(window).load(function() {
    $('.fade-in-on-load').addClass('fade-in-on-load--active');
  });
};

theme.topbarRegion = function () {
  $('.topbar__region-select').val('North America');

  $('.topbar__region-select').change(function() {
    var redirectValue = $(this).val();
    window.location.href = redirectValue;
  });
};

theme.headerSearch = function () {
  $('.site-header__search-toggle').click(function() {
    $('.site-header__search').toggleClass('active');

    setTimeout(function() {
      if ($('.site-header__search').hasClass('active')) {
        $('.site-header__search input').focus();
      }
    }, 200);
  });
};

theme.promoStart = new Date().getTime();
theme.promoTime = 0;

theme.promoCountdown = function () {
  if($('div').hasClass('site-promo')) {
    $(window).scroll(function() {
      if($(window).width() >= 1360) {
        if($(window).scrollTop() >= 130) {
          var promobarHeight = $('.promo-bar').height() + 'px';
          $('.promo-bar').addClass('sticky');
          $('.site-header').css('margin-bottom',promobarHeight);
        } else {
          $('.promo-bar').removeClass('sticky');
          $('.site-header').css('margin-bottom','0');
        }
      } else if($(window).width() >= 1025 && $(window).width() < 1360) {
        if($(window).scrollTop() >= 108) {
          var promobarHeight = $('.promo-bar').height() + 'px';
          $('.promo-bar').addClass('sticky');
          $('.site-header').css('margin-bottom',promobarHeight);
        } else {
          $('.promo-bar').removeClass('sticky');
          $('.site-header').css('margin-bottom','0');
        }
      } else {
        if($(window).scrollTop() >= 97) {
          var promobarHeight = $('.promo-bar').height() + 'px';
          $('.promo-bar').addClass('sticky');
          $('.site-header').css('margin-bottom',promobarHeight);
        } else {
          $('.promo-bar').removeClass('sticky');
          $('.site-header').css('margin-bottom','0');
        }
      }
    });
  }

  const $seconds = $('.countdown .js-countdown-seconds');
  let seconds = parseInt($seconds.html());
  if (seconds === 0) {
    const $minutes = $('.countdown .js-countdown-minutes');
    let minutes = parseInt($minutes.html());
    if (minutes === 0) {
      const $hours = $('.countdown .js-countdown-hours');
      const hours = parseInt($hours.html());
      if (hours === 0) {
        /*
        const $days = $('.countdown .js-countdown-days');
        const days = parseInt($days.html());
        if (days !== 0) {
          $days.html(('00'+(days - 1)).slice(-2));
          $hours.html(23);
          $minutes.html(59);
          $seconds.html(59);
        }
        */
      } else {
        $hours.html(hours - 1);
      }
      $minutes.html(59);
      $seconds.html(59);
    } else {
      if (minutes - 1 < 10) {
        minutes = "0" + (minutes - 1);
      } else {
        minutes = minutes - 1;
      }
      $minutes.html(minutes);
      $seconds.html(59);
    }
  } else {
    if (seconds - 1 < 10) {
      seconds = "0" + (seconds - 1);
    } else {
      seconds = seconds - 1;
    }
    $seconds.html(seconds);
  }

  // adjust for latency
  theme.promoTime += 1000;
  const diff = (new Date().getTime() - theme.promoStart) - theme.promoTime;
  window.setTimeout(theme.promoCountdown, (1000 - diff));
};

theme.mobileNav = function () {
  $('.site-nav__menu').click(function() {
    $('.mobile-nav').toggleClass('active');
  });

  $('.mobile-nav__link--has-toggle').click(function() {
    $(this).next('.mobile-nav__toggle').click();
  });
};

theme.dropdownCarousel = function () {
  $('.site-nav__dropdown-carousel').slick({
    speed: 200,
    autoplay: false,
    fade: false,
    arrows: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });
};

theme.hero = function () {
  $('.hero').slick({
    speed: 1200,
    autoplay: true,
    autoplaySpeed: 8000,
    pauseOnHover: false,
    fade: true,
    arrows: false,
    dots: false,
    slide: ".hero__slide"
  });

  // Loading Bars
  var percentTime;
  var tick;
  var time = 1;
  var progressBarIndex = 0;

  $('.hero-progress .hero-progress__bar').each(function(index) {
    var progress = "<div class='in-progress in-progress" + index + "'></div>";
    $(this).html(progress);
  });

  function startProgressbar() {
    resetProgressbar();
    percentTime = 0;
    tick = setInterval(interval, 7);
  }

  function interval() {
    if (($('.hero .slick-track div[data-slick-index="' + progressBarIndex + '"]').attr("aria-hidden")) === "true") {
      progressBarIndex = $('.hero .slick-track div[aria-hidden="false"]').data("slickIndex");
      startProgressbar();
    } else {
      percentTime += 1 / (time + 5);
      $('.in-progress' + progressBarIndex).css({
        width: percentTime + "%"
      });
      if (percentTime >= 100) {
        $('.hero').slick('slickNext');
        progressBarIndex++;
        if (progressBarIndex > 1) {
            progressBarIndex = 0;
        }
        startProgressbar();
      }
    }
  }

  function resetProgressbar() {
    $('.in-progress').css({
        width: 0 + '%'
    });
    clearInterval(tick);
  }

  startProgressbar();

  $('.hero-progress div').click(function () {
    clearInterval(tick);
    var goToThisIndex = $(this).find("span").data("slickIndex");
    $('.hero').slick('slickGoTo', goToThisIndex, false);
    startProgressbar();
  });
};

theme.homepageFeaturedCollection = function () {
  if (!$('div').hasClass('size-chart')) {
    $('.featured-collection__carousel').slick({
      speed: 200,
      autoplay: false,
      fade: false,
      arrows: true,
      dots: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: '<button type="button" class="slick-next main-arrow"><span class="icon icon-arrow-right"></span></button>',
      prevArrow: '<button type="button" class="slick-prev main-arrow"><span class="icon icon-arrow-left"></span></button>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            arrows: false
          }
        },
        {
          breakpoint: 749,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: true,
            arrows: false
          }
        },
        {
          breakpoint: 550,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            arrows: false
          }
        }
      ]
    });

    if ($(window).width() >= 750) {
      var imageHeight = $('.featured-collection .collection__item-image').height() / 2 + 'px';
      $('.featured-collection .main-arrow').css('top',imageHeight);
    }

    $(window).load(function() {
      if ($(window).width() >= 750) {
        var imageHeight = $('.featured-collection .collection__item-image').height() / 2 + 'px';
        $('.featured-collection .main-arrow').css('top',imageHeight);
      }
    });

    $(window).resize(function() {
      if ($(window).width() >= 750) {
        var imageHeight = $('.featured-collection .collection__item-image').height() / 2 + 'px';
        $('.featured-collection .main-arrow').css('top',imageHeight);
      }
    });
  }
}

theme.homepageFeaturedBanner = function () {
  if ($(window).width() >= 750) {
    var imageHeight = $('.featured-banner img').height() + 'px';
    $('.featured-banner .display-table').css('height',imageHeight);
  } else {
    $('.featured-banner .display-table').css('height','auto');
  }

  $(window).load(function() {
    if ($(window).width() >= 750) {
      var imageHeight = $('.featured-banner img').height() + 'px';
      $('.featured-banner .display-table').css('height',imageHeight);
    } else {
      $('.featured-banner .display-table').css('height','auto');
    }
  });

  $(window).resize(function() {
    if ($(window).width() >= 750) {
      var imageHeight = $('.featured-banner img').height() + 'px';
      $('.featured-banner .display-table').css('height',imageHeight);
    } else {
      $('.featured-banner .display-table').css('height','auto');
    }
  });
};

theme.homepageFeaturedBlogCarousel = function () {
  $('.featured-blog__carousel').slick({
    speed: 200,
    autoplay: false,
    fade: false,
    arrows: true,
    dots: false,
    slidesToShow: 3,
    nextArrow: '<button type="button" class="slick-next"><span class="icon icon-arrow-right"></span></button>',
    prevArrow: '<button type="button" class="slick-prev"><span class="icon icon-arrow-left"></span></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          arrows: false
        }
      },
      {
        breakpoint: 749,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          arrows: false
        }
      }
    ]
  });
};

theme.collectionFilter = function () {
  $('.filter-trigger').click(function() {
    if ($(window).width() >= 1025) {
      // Get current state
      var currentState = $('.filter-trigger h3').text();

      if (currentState === 'Show Filters') {
        $('.filter-trigger h3').text('Hide Filters');
        $('.collection__filter').addClass('collection__filter--active');
        $('.collection__grid').addClass('collection__grid--filter-active');
        $('.collection__wrapper').removeClass('filter-disabled');
        Cookies.set('filter', 'active');
      } else {
        $('.filter-trigger h3').text('Show Filters');
        $('.collection__filter').removeClass('collection__filter--active');
        $('.collection__grid').removeClass('collection__grid--filter-active');
        $('.collection__wrapper').addClass('filter-disabled');
        Cookies.set('filter', 'disabled');
      }

      // Update Collection Ad height
      setTimeout(function() {
        var adHeight = $('.collection__item').height() + 20 + 'px';
        $('.collection__ad').css('height',adHeight);
      }, 200);

    } else {

      // Get current state
      var currentState = $('.filter-trigger h3').text();

      // Always disable filter cookie after submission on mobile
      Cookies.set('filter', 'disabled');

      if (currentState === 'Show Filters') {
        $('.filter-trigger h3').text('Hide Filters');
        $('.collection__filter').addClass('collection__filter--active');
        $('.collection__grid').addClass('collection__grid--filter-active');
      } else {
        $('.filter-trigger h3').text('Show Filters');
        $('.collection__filter').removeClass('collection__filter--active');
        $('.collection__grid').removeClass('collection__grid--filter-active');
      }
    }
  });

  // If filter is active trigger grid on load
  if (Cookies.get('filter') === 'active') {
    $('.filter-trigger').click();
  } else {
    $('.collection__wrapper').addClass('filter-disabled');
  }

  // Toggle active class on click
  $('.filter-group h4').click(function() {
    var currentGroup = $(this).data('handle');

    if (Cookies.get(currentGroup) === 'active') {
      Cookies.set(currentGroup, 'disabled');
      $(this).parents('.filter-group').removeClass('filter-group--active');
    } else {
      Cookies.set(currentGroup, 'active');
      $(this).parents('.filter-group').addClass('filter-group--active');
    }
  });

  // If current group is active on load open it
  $('.filter-group').each(function() {
    var currentGroup = $(this).find('h4').data('handle');

    if (Cookies.get(currentGroup) === 'active') {
      $(this).addClass('filter-group--active');
    }
  });
};

theme.productHero = function () {
  setTimeout(function() {
    $('.product-single__hero').addClass('active');
  }, 100);

  $('.product-single__thumbnails').slick({
    speed: 200,
    autoplay: false,
    fade: false,
    arrows: true,
    dots: false,
    vertical: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    prevArrow: '<button type="button" class="slick-prev"><span class="icon icon-arrow-left"></span></button>',
    nextArrow: '<button type="button" class="slick-next"><span class="icon icon-arrow-right"></span></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          vertical: false,
          slidesToShow: 1
        }
      }
    ]
  });

  $('.product-single__thumbnails li').click(function() {
    $('.product-single__thumbnails li').removeClass('active');
    $(this).addClass('active');

    if ($(window).width() >= 1025) {
      $('.zoomImg').remove();

      setTimeout(function() {
        $('.product-single__photos').zoom({ on:'click' });
      }, 100);
    }
  });

  // Image zoom
  if ($(window).width() >= 1025) {
    $('.product-single__photos').zoom({ on:'click' });

    $('.product-single__photos').click(function() {
      $(this).toggleClass('zoom-active');
      $('.product-single__thumbs-wrap, .product-single__content-wrap').toggleClass('zoom-active');
    });
  }

  // If user clicks off zoom
  $('body').click(function() {
    if ($('.product-single__photos').hasClass('zoom-active')) {
      $('.product-single__thumbs-wrap, .product-single__photos, .product-single__content-wrap').removeClass('zoom-active');
      $('.zoomImg').remove();
      $('.product-single__photos').zoom({ on:'click' });
    }
  });
};

theme.productSwatches = function () {
  $(window).load(function() {
    var filtered = false;

    $('.product-single .swatch-element.color').click(function() {
      if ($(window).width() >= 1025) {
        $('.zoomImg').remove();

        setTimeout(function() {
          $('.product-single__photos').zoom({ on:'click' });
        }, 100);
      }

      var swatchName = $(this).data('value');
      var swatchNameHandle = $(this).data('value').replace('/','-').replace(' ', '-');

      if($('.product-single .swatch-element.color').length >= 2 && !$('.product-single').hasClass('product-single--bundle')) {
        if (filtered === false) {
          $('.product-single__thumbnails').slick('slickFilter','.'+swatchNameHandle);
          filtered = true;
        } else {
          $('.product-single__thumbnails').slick('slickUnfilter');
          $('.product-single__thumbnails').slick('slickFilter','.'+swatchNameHandle);
          filtered = true;
        }
      }

      if ($('.product-single .swatch').length > 1) {
        if($('.product-single').hasClass('product-single--bundle')) {
          // Set all swatches to soldout
          $(this).parents('.product-single__bundle-product').find('.swatch[data-option-index="0"] .swatch-element').addClass('soldout');

          // Check variant map
          $(this).parents('.product-single__bundle-product').find('.variant-map__item').each(function() {
            if ($(this).text().indexOf(swatchName) >= 0) {
              var swatchValue = $(this).text().split(' /')[0];
              $(this).parents('.product-single__bundle-product').find('.swatch[data-option-index="0"] .swatch-element[data-value="'+swatchValue+'"]').removeClass('soldout');
            }
          });
        } else {
          // Set all swatches to soldout
          $('.product-single .swatch[data-option-index="0"] .swatch-element').addClass('no-stock');

          // Check variant map
          $('.variant-map__item').each(function() {
            if ($(this).text().indexOf(swatchName) >= 0 && !$(this).hasClass('variant-unavailable')) {
              var swatchValue = $(this).text().split(' /')[0];
              $('.swatch[data-option-index="0"] .swatch-element[data-value="'+swatchValue+'"]').removeClass('no-stock');
            }
          });
        }
      }
    });

    $('.product-single__bundle-product .swatch-element.color').click(function() {
      if($(this).data('variant-image').length) {
        var image = $(this).data('variant-image');
        $(this).parents('.product-single__bundle-product').find('img').attr('src',image);
      }
    });

    $('.single-variant label').click();
    $('.single-variant input').prop('checked',true).trigger('click');
  });
};

theme.productDescription = function () {
  $('.product-single__details').find('*').removeAttr('style');
};

theme.blogCarousel = function () {
  $('.blog__carousel').slick({
    speed: 200,
    autoplay: false,
    fade: false,
    arrows: true,
    dots: false,
    slidesToShow: 3,
    nextArrow: '<button type="button" class="slick-next"><span class="icon icon-arrow-right"></span></button>',
    prevArrow: '<button type="button" class="slick-prev"><span class="icon icon-arrow-left"></span></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          arrows: false
        }
      },
      {
        breakpoint: 749,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          arrows: false
        }
      }
    ]
  });
};

theme.productRelatedCarousel = function () {
  $('.related-products__carousel').slick({
    speed: 200,
    autoplay: false,
    fade: false,
    arrows: true,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: '<button type="button" class="slick-next related-arrow"><span class="icon icon-arrow-right"></span></button>',
    prevArrow: '<button type="button" class="slick-prev related-arrow"><span class="icon icon-arrow-left"></span></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
          arrows: false
        }
      },
      {
        breakpoint: 749,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          arrows: false
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          arrows: false
        }
      }
    ]
  });

  if ($(window).width() >= 750) {
    var imageHeight = $('.related-products .collection__item-image').height() / 2 + 'px';
    $('.related-products .related-arrow').css('top',imageHeight);
  }

  $(window).load(function() {
    if ($(window).width() >= 750) {
      var imageHeight = $('.related-products .collection__item-image').height() / 2 + 'px';
      $('.related-products .related-arrow').css('top',imageHeight);
    }
  });

  $(window).resize(function() {
    if ($(window).width() >= 750) {
      var imageHeight = $('.related-products .collection__item-image').height() / 2 + 'px';
      $('.related-products .related-arrow').css('top',imageHeight);
    }
  });
};

theme.productBundle = function () {
  if($('.product-single').hasClass('product-single--bundle')) {
    if($(window).width() >= 1025) {
      var contentHeight = $('.product-single__content-wrap').height() + 120 + 'px';
      $('.product-single__hero').css('height',contentHeight);
    }

    $(window).resize(function() {
      if($(window).width() >= 1025) {
        var contentHeight = $('.product-single__content-wrap').height() + 120 + 'px';
        $('.product-single__hero').css('height',contentHeight);
      } else {
        $('.product-single__hero').css('height','auto');
      }
    });

    setInterval(function() {
      if($('.product-single__bundle-product form').hasClass('sold-out')) {
        $('.product-single__submit').addClass('disabled').prop('disabled',true);
      } else {
        var formLength = $('.product-single__bundle-product form').length;
        var activeFormLength = $('.product-single__bundle-product form.cta-active').length;

        if(formLength == activeFormLength) {
          $('.product-single__submit').removeClass('disabled').prop('disabled',false);
        }
      }
    }, 1000);

    // Submit item
    $('.product-single__submit').click(function() {
      if(!$(this).hasClass('disabled')) {
        $('.product-single__bundle-product form').each(function() {
          var index = $(this).data('index');
          var productTitle = $(this).data('product-title');
          var variantTitle = $(this).data('variant-title');
          var variantID = $(this).data('variant-id');
          var variantSKU = $(this).data('variant-sku');

          $('.bundle-product-'+index+'__product-title').val(productTitle + ' - ' + variantTitle);
          $('.bundle-product-'+index+'__variant-id').val(variantID);
          $('.bundle-product-'+index+'__variant-sku').val(variantSKU);

          setTimeout(function() {
            $('.product-single__bundle-form .btn').click();
            $('html, body').scrollTop(0);
          }, 500);
        });
      }
    });
  }
};

theme.swatchCarousel = function () {
  if ($(window).width() >= 1025 && !$('div').hasClass('size-chart')) {
    $('.swatch__carousel').slick({
      speed: 200,
      autoplay: false,
      fade: false,
      arrows: true,
      dots: false,
      slidesToShow: 4,
      slidesToScroll: 4,
      nextArrow: '<button type="button" class="slick-next"><span class="icon icon-arrow-right"></span></button>',
      prevArrow: '<button type="button" class="slick-prev"><span class="icon icon-arrow-left"></span></button>'
    });

    $('.collection__item .swatch-element.color').click(function() {
      var variantImage = $(this).data('variant-image');
      if (variantImage.length >= 1) {
        $(this).parents('.collection__item').find('.collection__item-image img').attr('src',variantImage);
      }
    });
  }
};

theme.teamFilter = function () {
  $('.team__filter span').click(function() {
    $('.team__filter span').removeClass('active');
    $(this).addClass('active');

    var filter = $(this).data('filter');

    if (filter == 'all') {
      $('.grid__item--team').removeClass('hide');
    } else {
      $('.grid__item--team').addClass('hide');
      $('.grid__item--team.'+filter).removeClass('hide');
    }
  });
};

theme.teamMemberPopup = function () {
  $(window).load(function() {
    $('.team-member .popup-trigger.has-collection').click();

    setTimeout(function() {
      $('.mfp-close').click();
    }, 50);

    $('.team-member .popup-trigger').click(function() {
      $('.team-member__collection').slick('unslick');
      $('.swatch__carousel').slick('unslick');

      $('.team-member__collection').slick({
        speed: 200,
        autoplay: false,
        fade: false,
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1
      });

      $('.swatch__carousel').slick({
        speed: 200,
        autoplay: false,
        fade: false,
        arrows: true,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: '<button type="button" class="slick-next"><span class="icon icon-arrow-right"></span></button>',
        prevArrow: '<button type="button" class="slick-prev"><span class="icon icon-arrow-left"></span></button>'
      });

      var popupHeight = $('.team-member__popup .large--seven-tenths').height() + 'px';
      $('.team-member__popup-image').css('height', popupHeight);

      $('.team-member__popup .grid--full').fadeTo('fast',1);
    });

    $(window).resize(function() {
      setTimeout(function() {
        var popupHeight = $('.team-member__popup .large--seven-tenths').height() + 'px';
        $('.team-member__popup-image').css('height', popupHeight);
      }, 100);
    });

    $('.team-member__collection').slick({
      speed: 200,
      autoplay: false,
      fade: false,
      arrows: false,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1
    });
  });
};

theme.cart = function () {
  $('[data-drawer]').on('click', (event) => {
    let formClicked = $(event.target).parent().closest('form')[0];
    if (typeof formClicked == 'undefined' ) { return }

    if (formClicked.getAttribute('action') == '/cart') {
      // Quantity Selector
      if (event.target.classList.contains('btnqty')) {
        const max = parseInt($(event.target).attr('data-quantity-value-max'), 10) || 10000;
        let value = parseInt($(event.target).attr('data-quantity-value'), 10) || 0;

        if (event.target.classList.contains('icon-minus')) {
          value -= 1;
        } else if (event.target.classList.contains('icon-plus')) {
          value += 1;
        }

        if (value > max) {
          value = max;
        }

        const varID = event.target.getAttribute('data-quantity-variant-id');
        let updates = {};

        if (varID) {
          updates[varID] = value;
          let updateData = {
            updates: updates
          }
          updateLineItems(updateData, true);
        }
      // Variant Selectors
      } else if (event.target.hasAttribute('data-option')) {
        event.target.addEventListener('change', variantChanged);
      // Remove
      } else if (event.target.hasAttribute('data-cart-remove')) {
        event.preventDefault();
        const varID = event.target.getAttribute('data-cart-remove');
        let updates = {};

        if (varID) {
          updates[varID] = 0;
          let updateData = {
            updates: updates
          }
          updateLineItems(updateData, true);
        }
      }
    } else if (formClicked.getAttribute('action') == '/cart/add' && event.target.hasAttribute('data-upsell-submit')) {
      event.preventDefault();
      const firstOptionValue = $(formClicked).find('.single-option-selector[data-option="option1"]').val();
      if (!firstOptionValue) { return; }
      const addID = $(formClicked).find('[data-upsell-selector]')[0].value;
      let addData = {
        items: [{
          id: addID,
          quantity: 1
        }]
      };
      fetch('/cart/add.js', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
          'X-Requested-With': 'xmlhttprequest',
        },
        body: JSON.stringify(addData),
      }).then((response) => {
        return response.json();
      }).then((result) => {
        if (result.status) {
          throw new Error(result.description);
        }
        loadCart();
        return null;
      }).catch((error) => {
        console.log(error);
      });
    } else if (formClicked.getAttribute('action') == '/cart/add' && event.target.hasAttribute('data-option')) {
      event.target.addEventListener('change', () => {
        const upsellSelect = formClicked.querySelector('[data-upsell-selector]');
        if (upsellSelect.hasAttribute('disabled')) {
          formClicked.querySelector('[data-upsell-submit]').classList.add('disabled');
        } else {
          formClicked.querySelector('[data-upsell-submit]').classList.remove('disabled');
        }
      });
    }
  });

  function updateLineItems(updateData, checkgift) {
    fetch('/cart/update.js', {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'xmlhttprequest',
      },
      body: JSON.stringify(updateData),
    }).then((response) => {
      return response.json();
    }).then((data) => {
      // check for free gift / total / threshold
      if ($('[data-free-gift]').length > 0 && checkgift == true) {
        const threshold = parseInt($('[data-free-gift-threshold]').attr('data-free-gift-threshold'), 10);
        // if over threshold and no free gift -- add free gift
        if ((data.items_subtotal_price / 100) >= threshold && $('[data-cart-free-gift="true"]').length < 1) {
          const giftID = $('[data-free-gift]').attr('data-free-gift');
          const lineItems = {
            items: [],
          };
          lineItems.items.push({
            id: giftID,
            quantity: 1,
            properties: {
              _free_gift: true
            }
          });
          fetch('/cart/add.js', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
              'Content-Type': 'application/json',
              'X-Requested-With': 'xmlhttprequest',
            },
            body: JSON.stringify(lineItems),
          }).then((response) => {
            return response.json();
          }).then((result) => {
            if (result.status) {
              throw new Error(result.description);
            }
            loadCart();
            return null;
          }).catch((error) => {
            console.log(error);
          });
        // if under threshold and free gift exists -- remove free gift
        } else if ((data.items_subtotal_price / 100) <= threshold && $('[data-cart-free-gift="true"]').length > 0) {
          const giftID = $('[data-cart-free-gift="true"]').attr('data-cart-variant');
          let updates = {};
          updates[giftID] = 0;
          let giftData = {
            updates: updates
          }
          updateLineItems(giftData, false);
        } else {
          loadCart();
        }
      } else {
        loadCart();
        return null;
      }
    }).catch((error) => {
      console.log(error);
    });
  }

  function variantChanged(event) {
    const cartDrawer = document.querySelector('[data-drawer="cart"]');
    const selector = event.target;
    let currentProductID = selector.getAttribute('id').split('-')[1];
    let currentVariantID = cartDrawer.querySelector(`[data-cart-product="${currentProductID}"]`).getAttribute('data-cart-variant');
    let currentQuantity = cartDrawer.querySelector(`[data-variant-id="${currentVariantID}"]`).value;
    let newVariantID = cartDrawer.querySelector(`[data-cart-product="${currentProductID}"]`).value;
    let freeGift = cartDrawer.querySelector(`[data-cart-product="${currentProductID}"]`).getAttribute('data-cart-free-gift');
    let updates = {};
    updates[currentVariantID] = 0;
    let updateData = {
      updates: updates
    };
    const lineItems = {
      items: [],
    };

    if (freeGift == 'true') {
      lineItems.items.push({
        id: newVariantID,
        quantity: currentQuantity,
        properties: {
          _free_gift: true
        }
      });
    } else {
      lineItems.items.push({
        id: newVariantID,
        quantity: currentQuantity
      });
    }

    // remove from cart
    fetch('/cart/update.js', {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'xmlhttprequest',
      },
      body: JSON.stringify(updateData),
    }).then((response) => {
      return response.json();
    }).then(() => {
      // add to cart
      fetch('/cart/add.js', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
          'X-Requested-With': 'xmlhttprequest',
        },
        body: JSON.stringify(lineItems),
      }).then((response) => {
        return response.json();
      }).then((result) => {
        if (result.status) {
          throw new Error(result.description);
        }
        loadCart();
        return null;
      }).catch((error) => {
        console.log(error);
      });
    }).catch((error) => {
      console.log(error);
    });
  }

  if ($('body').hasClass('template-cart')) {
    var cartSubtotal = 0;
    $('.cart__item-price span').each(function () {
      cartSubtotal += parseFloat($(this).text().replace('$','').replace(',',''));
    });

    $('.cart__subtotal').text('$'+cartSubtotal.toFixed(2));
  }

  function loadCart(slideOpenDrawer) {
    const ajaxCartContent = document.querySelector('[data-ajaxcart-content]');
    const cartDrawer = document.querySelector('[data-drawer="cart"]');
    const closeDrawer = document.querySelector('[data-drawer-close="cart"]');

    fetch('/cart?view=content', {
      credentials: 'same-origin',
      headers: {
        'X-Requested-With': 'xmlhttprequest',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        Pragma: 'no-cache',
        Expires: 0,
      },
    }).then((response) => {
      return response.text();
    }).then((html) => {
      const responseDOMParser = new DOMParser();
      const responseDocument = responseDOMParser.parseFromString(html, 'text/html');
      const cartHTML = responseDocument.querySelector('[data-cart-content]').innerHTML;
      ajaxCartContent.innerHTML = cartHTML;

      const productSelectScript = responseDocument.querySelectorAll('[data-cart-selector-script]');
      productSelectScript.forEach((script) => {
        const scriptContent = script.innerHTML;
        const scriptElem = document.createElement('script');
        scriptElem.textContent = scriptContent;
        ajaxCartContent.appendChild(scriptElem);
      });

      const cartCount = ajaxCartContent.querySelector('[data-ajaxcart-count]');
      if (cartCount) {
        document.querySelector('[data-cart-count]').innerHTML = cartCount.getAttribute('data-ajaxcart-count');
      }

      const cartUpsells = document.querySelector('[data-cart-upsells]');
      if (cartUpsells) {
        if (cartUpsells.querySelectorAll('form').length < 1) {
          cartUpsells.classList.add('hide');
        } else {
          const upsellForms = cartUpsells.querySelectorAll('form');
          upsellForms.forEach((upsellForm) => {
            const upsellSelect = upsellForm.querySelector('[data-upsell-selector]');
            if (upsellSelect) {
              if (upsellSelect.hasAttribute('disabled')) {
                upsellForm.querySelector('[data-upsell-submit]').classList.add('disabled');
              }
            }
          });
        }
      }

      if (slideOpenDrawer) {
        cartDrawer.classList.add('is-active');
      }
      $('html').addClass('drawer-open');
    }).catch((error) => {
      console.log(error);
    });

    closeDrawer.addEventListener('click', () => {
      cartDrawer.classList.remove('is-active');
      $('html').removeClass('drawer-open');
    });

    document.body.addEventListener('click', (event) => {
      if (event.target !== ajaxCartContent && !ajaxCartContent.contains(event.target)) {
        cartDrawer.classList.remove('is-active');
        $('html').removeClass('drawer-open');
      }
    });
  }

  const openDrawer = document.querySelectorAll('[data-drawer-open="cart"]');
  openDrawer.forEach((open) => {
    open.addEventListener('click', (e) => {
      e.preventDefault();
      loadCart(true);
    });
  });

  if (window.location.href.indexOf('?cart') !== -1) {
    loadCart(true);
  }
};

theme.wholesale = function () {
  $(window).load(function() {
    // Create queue array
    Shopify.queue = [];

    // Move along items into queue, when done reload page
    Shopify.moveAlong = function() {
      if (Shopify.queue.length) {
        var request = Shopify.queue.shift();
        Shopify.addItem(request.variantId, request.quantity, request.properties, Shopify.moveAlong);
      } else {
        location.reload();
      }
    };

    // Move along items into queue without refresh
    Shopify.moveAlongNoRefresh = function() {
      if (Shopify.queue.length) {
        var request = Shopify.queue.shift();
        Shopify.addItem(request.variantId, request.quantity, request.properties, Shopify.moveAlongNoRefresh);
      } else {
        $('.wholesale__summary-submit').removeClass('disabled');
        $('.wholesale__summary-item-quantity').prop('disabled',false);
      }
    };

    // Move along items into queue, when done redirect to checkout
    Shopify.moveAlongCheckout = function() {
      if (Shopify.queue.length) {
        var request = Shopify.queue.shift();
        Shopify.addItem(request.variantId, request.quantity, request.properties, Shopify.moveAlongCheckout);
      } else {
        window.location.href = 'https://fuji-sports-com.myshopify.com/checkout';
      }
    };

    // Create a new Shopify.addItem function that takes the 'properties' parameter
    Shopify.addItem = function(id, qty, properties, callback) {
      var params = {
        quantity: qty,
        id: id
      };
      if(properties != false){
        params.properties = properties;
      }
      $.ajax({
        type: 'POST',
        url: '/cart/add.js',
        dataType: 'json',
        data: params,
        success: function(){
          if(typeof callback === 'function'){
            callback();
          }
        },
        error: function(){}
      });
    }

    // Push items into queue
    function push_to_queue(variantID, quantity, properties) {
      Shopify.queue.push({
        variantId: variantID,
        quantity: quantity,
        properties: properties
      });
    }

    // Submit item
    $('.wholesale__item-submit').click(function() {
      var productId = $(this).data('id');

      $('.'+productId+' .wholesale__item-variant').each(function() {
        var variantQuantity = $(this).find('input').val();
        var variantId = $(this).data('variant');
        var variantWholesalePrice = $(this).data('wholesale-variant-price');

        if (variantWholesalePrice != '') {
          var wholesalePrice = {_wholesalePrice: variantWholesalePrice};

          if (variantQuantity >= 1) {
            push_to_queue(variantId, variantQuantity, wholesalePrice);
          }
        } else {
          if (variantQuantity >= 1) {
            push_to_queue(variantId, variantQuantity);
          }
        }
      });

      Shopify.moveAlong();
    });

    setTimeout(function() {
      // Update user item count
      $('.wholesale__summary-parent').each(function() {
        var productHandle = $(this).data('product-handle');
        var productCount = $(this).find('.wholesale__summary-parent-quantity').text().replace('x','').replace(' - ', '');
        $('.wholesale__item[data-product-handle='+productHandle+'] .wholesale__item-count-number').text(productCount);
      });
    }, 1000);

    // If user changes variant input value
    $('.wholesale__item-variant input').change(function() {
      // Update Item count
      var itemCount = 0;
      $(this).parents('.wholesale__item').find('input').each(function () {
        itemCount += parseInt($(this).val()) || 0;
      });

      if (itemCount >= 1) {
        $(this).parents('.wholesale__item-option').find('.wholesale__item-select-size').text(itemCount+' Selected');
      } else {
        $(this).parents('.wholesale__item-option').find('.wholesale__item-select-size').text('Select Sizes');
      }
    });

    // If variant input max is 0, disable input
    $('.wholesale__item-variant input').each(function() {
      if($(this).attr('max') == '0') {
        $(this).prop('disabled', true);
      }
    });

    // Toggle open sizes
    $('.wholesale__item-color').click(function() {
      $(this).toggleClass('active');
      $('.wholesale__item-sizes').not($(this).next('.wholesale__item-sizes')).addClass('hide');
      $('.wholesale__item-single').removeClass('hide');
      $(this).next('.wholesale__item-sizes').toggleClass('hide');
    });

    // Calculate line price total
    $('.wholesale__summary-item').each(function() {
      var summaryItemQuantity = $(this).find('input').val();
      var summaryItemPrice = parseFloat($(this).data('price').replace('$','').replace(',',''));
      var summaryItemTotalPrice = summaryItemPrice * summaryItemQuantity;
      $(this).attr('data-price-total','$'+summaryItemTotalPrice.toFixed(2));
    });

    // If user changes quantity on wholesale summary
    $('.wholesale__summary-item-quantity').change(function() {
      var summaryItemQuantity = $(this).val();
      var summaryItemPrice = parseFloat($(this).parents('.wholesale__summary-item').data('price').replace('$','').replace(',',''));
      var summaryItemTotalPrice = summaryItemPrice * summaryItemQuantity;

      $(this).parents('.wholesale__summary-item').attr('data-price-total','$'+summaryItemTotalPrice);
      updateSummaryParentPrice();
      updateSummaryParentQuantity();
      updateSummarySubtotal();
      updateTotalCount();
      updateCartNoRefresh();
    });

    // Update summary parent price
    function updateSummaryParentPrice() {
      $('.wholesale__summary-parent').each(function() {
        var parentTotal = 0;
        $(this).find('.wholesale__summary-item').each(function () {
          parentTotal += parseFloat($(this).attr('data-price-total').replace('$','').replace(',',''));
        });

        $(this).find('.wholesale__summary-parent-price').text('$'+parentTotal.toFixed(2));
      });
    };

    updateSummaryParentPrice();

    // Update summary parent quantity
    function updateSummaryParentQuantity() {
      $('.wholesale__summary-parent').each(function() {
        var parentQuantityTotal = 0;
        $(this).find('input').each(function () {
          parentQuantityTotal += parseFloat($(this).val());
        });

        $(this).find('.wholesale__summary-parent-quantity').text('x'+parentQuantityTotal+' - ');
      });
    };

    updateSummaryParentQuantity();

    // Update summary subtotal
    function updateSummarySubtotal() {
      var summarySubtotal = 0;
      $('.wholesale__summary-parent-price').each(function () {
        summarySubtotal += parseFloat($(this).text().replace('$','').replace(',',''));
      });
      $('.wholesale__summary-subtotal-amount').text('$'+summarySubtotal.toFixed(2));
    };

    updateSummarySubtotal();

    // Toggle parent product open
    $('.wholesale__summary-parent-toggle').click(function() {
      if ($(this).text() == 'More Details') {
        $(this).text('Hide Details');
      } else {
        $(this).text('More Details');
      }

      $(this).parents('.wholesale__summary-parent').toggleClass('active');
    });

    // Toggle product color open
    $('.wholesale__summary-color').click(function() {
      var productHandle = $(this).data('product-handle');
      var productColor = $(this).data('product-color');
      $('.wholesale__summary-item[data-product-handle='+productHandle+'][data-product-color='+productColor+']').toggleClass('active');
    });

    // Update cart no refresh
    function updateCartNoRefresh() {
      $.ajax({
        type: "POST",
        url: '/cart/clear.js',
        dataType: 'json'
      });

      $('.wholesale__summary-submit').addClass('disabled');
      $('.wholesale__summary-item-quantity').prop('disabled',true);

      setTimeout(function() {
        $($('.wholesale__summary-item-quantity').get().reverse()).each(function() {
          var variantId = $(this).data('variant-id');
          var variantProps = $(this).data('properties');
          var variantQuantity = $(this).val();
          var variantWholesalePrice = $(this).data('wholesale-variant-price');

          if (variantWholesalePrice != '') {
            variantProps._wholesalePrice = variantWholesalePrice;

            if (variantQuantity >= 1) {
              push_to_queue(variantId, variantQuantity, variantProps);
            }
          } else {
            if (variantQuantity >= 1) {
              push_to_queue(variantId, variantQuantity, variantProps);
            }
          }
        });

        Shopify.moveAlongNoRefresh();
      }, 300);
    };

    // Update Total Count
    function updateTotalCount() {
      var itemCount = 0;
      $('.wholesale__summary-item-quantity').each(function() {
        itemCount += parseFloat($(this).val());
      });
      $('.wholesale__summary-count').text(itemCount+' Items');
    };

    // Update cart no refresh
    function updateCartCheckout() {
      $.ajax({
        type: "POST",
        url: '/cart/clear.js',
        dataType: 'json'
      });

      $('.wholesale__summary-submit').addClass('disabled');

      setTimeout(function() {
        $($('.wholesale__summary-item-quantity').get().reverse()).each(function() {
          var variantId = $(this).data('variant-id');
          var variantProps = $(this).data('properties');
          var variantQuantity = $(this).val();
          var variantWholesalePrice = $(this).data('wholesale-variant-price');

          if (variantWholesalePrice != '') {
            variantProps._wholesalePrice = variantWholesalePrice;

            if (variantQuantity >= 1) {
              push_to_queue(variantId, variantQuantity, variantProps);
            }
          } else {
            if (variantQuantity >= 1) {
              push_to_queue(variantId, variantQuantity, variantProps);
            }
          }
        });

        Shopify.moveAlongCheckout();
      }, 300);
    };

    // Summary submit
    $('.wholesale__summary-submit').click(function() {
      if (!$(this).hasClass('disabled')) {
        updateCartCheckout();
      }
    });
  });
};

theme.wholesaleCart = function () {
  $('.cart__wholesale-checkout-btn').click(function() {
    wholesaleCheckout();
  });

  // Move along items into queue without refresh
  Shopify.moveAlongNoRefresh = function() {
    if (Shopify.queue.length) {
      var request = Shopify.queue.shift();
      Shopify.addItem(request.variantId, request.quantity, request.properties, Shopify.moveAlongNoRefresh);
    }
  };

  // Create a new Shopify.addItem function that takes the 'properties' parameter
  Shopify.addItem = function(id, qty, properties, callback) {
    var params = {
      quantity: qty,
      id: id
    };
    if(properties != false){
      params.properties = properties;
    }
    $.ajax({
      type: 'POST',
      url: '/cart/add.js',
      dataType: 'json',
      data: params,
      success: function(){
        if(typeof callback === 'function'){
          callback();
        }
      },
      error: function(){}
    });
  }

  // Push items into queue
  function push_to_queue(variantID, quantity, properties) {
    Shopify.queue.push({
      variantId: variantID,
      quantity: quantity,
      properties: properties
    });
  }

  function wholesaleCheckout() {
    $.ajax({
      type: "POST",
      url: '/cart/clear.js',
      dataType: 'json'
    });

    $('.cart__wholesale-checkout-btn').addClass('disabled');

    setTimeout(function() {
      $($('.cart__item-quantity').get().reverse()).each(function() {
        var variantId = $(this).data('variant-id');
        var variantProps = $(this).data('properties');
        var variantQuantity = $(this).val();
        var variantWholesalePrice = $(this).data('wholesale-variant-price');

        if (variantWholesalePrice != '') {
          variantProps._wholesalePrice = variantWholesalePrice;

          if (variantQuantity >= 1) {
            push_to_queue(variantId, variantQuantity, variantProps);
          }
        } else {
          if (variantQuantity >= 1) {
            push_to_queue(variantId, variantQuantity, variantProps);
          }
        }
      });
      Shopify.moveAlongCheckout();
    }, 300);
  };
};

theme.sizeCharts = function () {
  // Load collections
  $.ajax({
    url: '/pages/size-charts?view=size-charts-collections',
    type: 'GET'
  })
  .done(function(data) {
    // Append data
    $('.collections').append($(data).find('.collections').html());

    $('.size-charts__loader').addClass('hide');
    $('.size-charts__subtitle, .size-charts__nav').removeClass('hide');

    $('.featured-collection__carousel').slick({
      speed: 200,
      autoplay: false,
      fade: false,
      arrows: true,
      dots: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: '<button type="button" class="slick-next main-arrow"><span class="icon icon-arrow-right"></span></button>',
      prevArrow: '<button type="button" class="slick-prev main-arrow"><span class="icon icon-arrow-left"></span></button>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            arrows: false
          }
        },
        {
          breakpoint: 749,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: true,
            arrows: false
          }
        },
        {
          breakpoint: 550,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            arrows: false
          }
        }
      ]
    });

    if ($(window).width() >= 750) {
      var imageHeight = $('.featured-collection .collection__item-image').height() / 2 + 'px';
      $('.featured-collection .main-arrow').css('top',imageHeight);
    }

    if ($(window).width() >= 1025) {
      $('.swatch__carousel').slick({
        speed: 200,
        autoplay: false,
        fade: false,
        arrows: true,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: '<button type="button" class="slick-next"><span class="icon icon-arrow-right"></span></button>',
        prevArrow: '<button type="button" class="slick-prev"><span class="icon icon-arrow-left"></span></button>'
      });
    }
  });

  $('.size-charts__nav li').click(function() {
    var sizeChart = $(this).data('size-chart');

    $('.size-charts__nav li').removeClass('active');
    $(this).addClass('active');

    $('.size-chart').addClass('hide');
    $('.size-chart[data-size-chart='+sizeChart+']').removeClass('hide');

    $('.size-charts__clear').removeClass('hide');

    var category = $('.size-chart[data-size-chart='+sizeChart+'] .size-chart__categories li.active').data('category');
    var subCategory = $('.size-chart[data-size-chart='+sizeChart+'] .size-chart__sub-categories li.active').data('sub-category');

    $('.featured-collection').addClass('hide').removeClass('active');
    $('.featured-collection[data-size-chart='+sizeChart+'][data-category='+category+'][data-sub-category='+subCategory+']').removeClass('hide').addClass('active');
    $('.featured-collection.active .featured-collection__carousel').slick('resize');
    $('.featured-collection.active .swatch__carousel').slick('resize');

    setTimeout(function() {
      if ($(window).width() >= 750) {
        var imageHeight = $('.featured-collection.active .collection__item-image').height() / 2 + 'px';
        $('.featured-collection.active .main-arrow').css('top',imageHeight);
      }
    }, 500);

    $('.size-chart[data-size-chart='+sizeChart+'] .size-chart__categories li.active').click();
  });

  $('.size-chart__categories li').click(function() {
    $(this).parents('.size-chart').find('.size-chart__categories li').removeClass('active');
    $(this).addClass('active');
  });

  $('.size-chart__sub-categories li').click(function() {
    $(this).parents('.size-chart').find('.size-chart__sub-categories li').removeClass('active');
    $(this).addClass('active');
  });

  $('.size-chart__categories li, .size-chart__sub-categories li').click(function() {
    var sizeChart = $('.size-charts__nav li.active').data('size-chart');
    var category = $(this).parents('.size-chart').find('.size-chart__categories li.active').data('category');
    var subCategory = $(this).parents('.size-chart').find('.size-chart__sub-categories li.active').data('sub-category');

    $(this).parents('.size-chart').find('img').addClass('hide');
    $(this).parents('.size-chart').find('img[data-category='+category+'][data-sub-category='+subCategory+']').removeClass('hide');
    $(this).parents('.size-chart').find('img[data-category='+category+'][data-sub-category="all"]').removeClass('hide');

    $('.featured-collection').addClass('hide').removeClass('active');
    $('.featured-collection[data-size-chart='+sizeChart+'][data-category='+category+'][data-sub-category='+subCategory+']').removeClass('hide').addClass('active');
    $('.featured-collection[data-size-chart='+sizeChart+'][data-category='+category+'][data-sub-category="all"]').removeClass('hide').addClass('active');
    $('.featured-collection.active .featured-collection__carousel').slick('resize');
    $('.featured-collection.active .swatch__carousel').slick('resize');

    setTimeout(function() {
      if ($(window).width() >= 750) {
        var imageHeight = $('.featured-collection.active .collection__item-image').height() / 2 + 'px';
        $('.featured-collection.active .main-arrow').css('top',imageHeight);
      }
    }, 500);
  });

  $('.size-charts__clear').click(function() {
    $(this).addClass('hide');
    $('.size-chart').addClass('hide');
    $('.size-charts__nav li').removeClass('active');
    $('.featured-collection').addClass('hide');
  });
};

theme.popups = function () {
  $('.popup-trigger').magnificPopup({
    type: 'inline',
    preloader: false,
    removalDelay: 500,
    focus: '#name',
    callbacks: {
      beforeOpen: function() {
        this.st.mainClass = this.st.el.attr('data-effect');
      },
      open: function () {
        $('body .mfp-close').html('<span class="icon icon-x"></span>');
      },
      close: function () {
        $('.team__member-popup .grid--full').fadeTo('fast',0);
      }
    }
  });

  $('body').on('click' , '.mfp-close .icon', function() {
    $('body .mfp-close').click();
  });
};

theme.socialSharing = function () {
  $('.article-single__sharing a').click(function() {
    window.open(this.href , 'newwindow', 'width=700px' + ', height=500px' + ', top=200px' + ((window.innerHeight - 700) / 2) + ', left=' + ((window.innerWidth - 700) / 2));
  });
};

theme.retinaImages = function () {
  $(window).load(function() {
    /*! Retina.js v2.1.0 */
    !function(){function t(t){return Array.prototype.slice.call(t)}function e(t){var e=parseInt(t,10);return e>f?f:e}function r(t){return t.hasAttribute("data-no-resize")||(0===t.offsetWidth&&0===t.offsetHeight?(t.setAttribute("width",t.naturalWidth),t.setAttribute("height",t.naturalHeight)):(t.setAttribute("width",t.offsetWidth),t.setAttribute("height",t.offsetHeight))),t}function n(t,e){var n=t.nodeName.toLowerCase(),i=document.createElement("img");i.addEventListener("load",function(){"img"===n?r(t).setAttribute("src",e):t.style.backgroundImage="url("+e+")"}),i.setAttribute("src",e),t.setAttribute(h,!0)}function i(t,r){var i=arguments.length<=2||void 0===arguments[2]?1:arguments[2],o=e(i);if(r&&o>1){var a=r.replace(c,"@"+o+"x$1");n(t,a)}}function o(t,e,r){f>1&&n(t,r)}function a(e){return e?"function"==typeof e.forEach?e:t(e):"undefined"!=typeof document?t(document.querySelectorAll(g)):[]}function u(t){return t.style.backgroundImage.replace(l,"$2")}function d(t){a(t).forEach(function(t){if(!t.getAttribute(h)){var e="img"===t.nodeName.toLowerCase(),r=e?t.getAttribute("src"):u(t),n=t.getAttribute("data-rjs"),a=!isNaN(parseInt(n,10));a?i(t,r,n):o(t,r,n)}})}"undefined"==typeof exports&&(exports={}),Object.defineProperty(exports,"__esModule",{value:!0});var s="undefined"!=typeof window,f=s?window.devicePixelRatio||1:1,c=/(\.[A-z]{3,4}\/?(\?.*)?)$/,l=/url\(('|")?([^\)'"]+)('|")?\)/i,g="[data-rjs]",h="data-rjs-processed";s&&(window.addEventListener("load",d),window.retinajs=d),exports["default"]=d}();

    retinajs();
  });
};

theme.ShippingBar = (function() {
  var bar = document.querySelector('.announcement-bar');

  if (bar.hasAttribute('data-promo-distributor')) { return; }

  var promote_txt_left = document.querySelector('.announcement-bar__message').dataset.promote_left;
  var promote_txt_right = document.querySelector('.announcement-bar__message').dataset.promote_right;
  var promote_txt_after_left = document.querySelector('.announcement-bar__message').dataset.promote_after_left;
  var promote_txt_after_right = document.querySelector('.announcement-bar__message').dataset.promote_after_right;
  var unlocked_txt = bar.dataset.unlocked;
  var treshold = bar.dataset.treshold;

  function update()
  {
    $.getJSON('/cart.js').then(
      function(cart) {
        var value_left = treshold - cart.total_price;
        var value_left_money = Shopify.formatMoney(value_left);

        if(value_left <= 0) {
          bar.innerHTML =  '<p class="announcement-bar__message">' + unlocked_txt + '</p>';
        }
        else if (value_left <= treshold) {
          bar.innerHTML = '<p class="announcement-bar__message">' + promote_txt_after_left + ' ' + value_left_money + ' ' + promote_txt_after_right + '</p>';
        }
        else if (value_left >= treshold) {
          bar.innerHTML = '<p class="announcement-bar__message">' + promote_txt_left + ' ' + treshold + ' ' + promote_txt_right + '</p>';
        }
      }
    );
  }
  return { update: update }
}) ();

// Initialize Theme JS on docready
$(theme.init);
