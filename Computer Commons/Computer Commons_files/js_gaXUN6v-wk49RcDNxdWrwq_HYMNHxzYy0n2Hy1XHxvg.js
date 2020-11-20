/*!
	Colorbox 1.6.1
	license: MIT
	http://www.jacklmoore.com/colorbox
*/
!function(t,e,i){var n,o,r,a,h,s,l,d,c,g,u,f,p,m,w,v,x,y,b,T,C,H,k,W,E,I,L,M,P,S,F,R,K,B={html:!1,photo:!1,iframe:!1,inline:!1,transition:"elastic",speed:300,fadeOut:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,opacity:.9,preloading:!0,className:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:void 0,closeButton:!0,fastIframe:!0,open:!1,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",photoRegex:/\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,retinaImage:!1,retinaUrl:!1,retinaSuffix:"@2x.$1",current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",returnFocus:!0,trapFocus:!0,onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,rel:function(){return this.rel},href:function(){return t(this).attr("href")},title:function(){return this.title},createImg:function(){var e=new Image,i=t(this).data("cbox-img-attrs");return"object"==typeof i&&t.each(i,function(t,i){e[t]=i}),e},createIframe:function(){var i=e.createElement("iframe"),n=t(this).data("cbox-iframe-attrs");return"object"==typeof n&&t.each(n,function(t,e){i[t]=e}),"frameBorder"in i&&(i.frameBorder=0),"allowTransparency"in i&&(i.allowTransparency="true"),i.name=(new Date).getTime(),i.allowFullScreen=!0,i}},O="colorbox",$="cbox",N=$+"Element",_=$+"_open",j=$+"_load",D=$+"_complete",z=$+"_cleanup",A=$+"_closed",U=$+"_purge",q=t("<a/>"),G="div",Q=0,J={};function V(i,n,o){var r=e.createElement(i);return n&&(r.id=$+n),o&&(r.style.cssText=o),t(r)}function X(){return i.innerHeight?i.innerHeight:t(i).height()}function Y(e,i){i!==Object(i)&&(i={}),this.cache={},this.el=e,this.value=function(e){var n;return void 0===this.cache[e]&&(void 0!==(n=t(this.el).attr("data-cbox-"+e))?this.cache[e]=n:void 0!==i[e]?this.cache[e]=i[e]:void 0!==B[e]&&(this.cache[e]=B[e])),this.cache[e]},this.get=function(e){var i=this.value(e);return t.isFunction(i)?i.call(this.el,this):i}}function Z(t){var e=c.length,i=(I+t)%e;return i<0?e+i:i}function tt(t,e){return Math.round((/%/.test(t)?("x"===e?g.width():X())/100:1)*parseInt(t,10))}function et(t,e){return t.get("photo")||t.get("photoRegex").test(e)}function it(t,e){return t.get("retinaUrl")&&i.devicePixelRatio>1?e.replace(t.get("photoRegex"),t.get("retinaSuffix")):e}function nt(t){"contains"in o[0]&&!o[0].contains(t.target)&&t.target!==n[0]&&(t.stopPropagation(),o.focus())}function ot(t){ot.str!==t&&(o.add(n).removeClass(ot.str).addClass(t),ot.str=t)}function rt(i){t(e).trigger(i),q.triggerHandler(i)}var at=function(){var t,e,i=$+"Slideshow_",n="click."+$;function r(){clearTimeout(e)}function a(){(C.get("loop")||c[I+1])&&(r(),e=setTimeout(R.next,C.get("slideshowSpeed")))}function h(){v.html(C.get("slideshowStop")).unbind(n).one(n,s),q.bind(D,a).bind(j,r),o.removeClass(i+"off").addClass(i+"on")}function s(){r(),q.unbind(D,a).unbind(j,r),v.html(C.get("slideshowStart")).unbind(n).one(n,function(){R.next(),h()}),o.removeClass(i+"on").addClass(i+"off")}function l(){t=!1,v.hide(),r(),q.unbind(D,a).unbind(j,r),o.removeClass(i+"off "+i+"on")}return function(){t?C.get("slideshow")||(q.unbind(z,l),l()):C.get("slideshow")&&c[1]&&(t=!0,q.one(z,l),C.get("slideshowAuto")?h():s(),v.show())}}();function ht(r){var g,w;if(!S){if(g=t(r).data(O),C=new Y(r,g),w=C.get("rel"),I=0,w&&!1!==w&&"nofollow"!==w?(c=t("."+N).filter(function(){return new Y(this,t.data(this,O)).get("rel")===w}),-1===(I=c.index(C.el))&&(c=c.add(C.el),I=c.length-1)):c=t(C.el),!M){M=P=!0,ot(C.get("className")),o.css({visibility:"hidden",display:"block",opacity:""}),u=V(G,"LoadedContent","width:0; height:0; overflow:hidden; visibility:hidden"),a.css({width:"",height:""}).append(u),H=h.height()+d.height()+a.outerHeight(!0)-a.height(),k=s.width()+l.width()+a.outerWidth(!0)-a.width(),W=u.outerHeight(!0),E=u.outerWidth(!0);var v=tt(C.get("initialWidth"),"x"),x=tt(C.get("initialHeight"),"y"),y=C.get("maxWidth"),K=C.get("maxHeight");C.w=(!1!==y?Math.min(v,tt(y,"x")):v)-E-k,C.h=(!1!==K?Math.min(x,tt(K,"y")):x)-W-H,u.css({width:"",height:C.h}),R.position(),rt(_),C.get("onOpen"),T.add(m).hide(),o.focus(),C.get("trapFocus")&&e.addEventListener&&(e.addEventListener("focus",nt,!0),q.one(A,function(){e.removeEventListener("focus",nt,!0)})),C.get("returnFocus")&&q.one(A,function(){t(C.el).focus()})}var B=parseFloat(C.get("opacity"));n.css({opacity:B==B?B:"",cursor:C.get("overlayClose")?"pointer":"",visibility:"visible"}).show(),C.get("closeButton")?b.html(C.get("close")).appendTo(a):b.appendTo("<div/>"),function(){var e,n,o,r=R.prep,a=++Q;P=!0,L=!1,rt(U),rt(j),C.get("onLoad"),C.h=C.get("height")?tt(C.get("height"),"y")-W-H:C.get("innerHeight")&&tt(C.get("innerHeight"),"y"),C.w=C.get("width")?tt(C.get("width"),"x")-E-k:C.get("innerWidth")&&tt(C.get("innerWidth"),"x"),C.mw=C.w,C.mh=C.h,C.get("maxWidth")&&(C.mw=tt(C.get("maxWidth"),"x")-E-k,C.mw=C.w&&C.w<C.mw?C.w:C.mw);C.get("maxHeight")&&(C.mh=tt(C.get("maxHeight"),"y")-W-H,C.mh=C.h&&C.h<C.mh?C.h:C.mh);if(e=C.get("href"),F=setTimeout(function(){p.show()},100),C.get("inline")){var h=t(e);o=t("<div>").hide().insertBefore(h),q.one(U,function(){o.replaceWith(h)}),r(h)}else C.get("iframe")?r(" "):C.get("html")?r(C.get("html")):et(C,e)?(e=it(C,e),L=C.get("createImg"),t(L).addClass($+"Photo").bind("error."+$,function(){r(V(G,"Error").html(C.get("imgError")))}).one("load",function(){a===Q&&setTimeout(function(){var e;C.get("retinaImage")&&i.devicePixelRatio>1&&(L.height=L.height/i.devicePixelRatio,L.width=L.width/i.devicePixelRatio),C.get("scalePhotos")&&(n=function(){L.height-=L.height*e,L.width-=L.width*e},C.mw&&L.width>C.mw&&(e=(L.width-C.mw)/L.width,n()),C.mh&&L.height>C.mh&&(e=(L.height-C.mh)/L.height,n())),C.h&&(L.style.marginTop=Math.max(C.mh-L.height,0)/2+"px"),c[1]&&(C.get("loop")||c[I+1])&&(L.style.cursor="pointer",t(L).bind("click."+$,function(){R.next()})),L.style.width=L.width+"px",L.style.height=L.height+"px",r(L)},1)}),L.src=e):e&&f.load(e,C.get("data"),function(e,i){a===Q&&r("error"===i?V(G,"Error").html(C.get("xhrError")):t(this).contents())})}()}}function st(){o||(K=!1,g=t(i),o=V(G).attr({id:O,class:!1===t.support.opacity?$+"IE":"",role:"dialog",tabindex:"-1"}).hide(),n=V(G,"Overlay").hide(),p=t([V(G,"LoadingOverlay")[0],V(G,"LoadingGraphic")[0]]),r=V(G,"Wrapper"),a=V(G,"Content").append(m=V(G,"Title"),w=V(G,"Current"),y=t('<button type="button"/>').attr({id:$+"Previous","aria-label":"previous","aria-hidden":"true"}),x=t('<button type="button"/>').attr({id:$+"Next","aria-label":"next","aria-hidden":"true"}),v=t('<button type="button"/>').attr({id:$+"Slideshow","aria-label":"start slideshow","aria-hidden":"true"}),p),b=t('<button type="button"/>').attr({id:$+"Close","aria-label":"close","aria-hidden":"true"}),r.append(V(G).append(V(G,"TopLeft"),h=V(G,"TopCenter"),V(G,"TopRight")),V(G,!1,"clear:left").append(s=V(G,"MiddleLeft"),a,l=V(G,"MiddleRight")),V(G,!1,"clear:left").append(V(G,"BottomLeft"),d=V(G,"BottomCenter"),V(G,"BottomRight"))).find("div div").css({float:"left"}),f=V(G,!1,"position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;"),T=x.add(y).add(w).add(v)),e.body&&!o.parent().length&&t(e.body).append(n,o.append(r,f))}function lt(){function i(t){t.which>1||t.shiftKey||t.altKey||t.metaKey||t.ctrlKey||(t.preventDefault(),ht(this))}return!!o&&(K||(K=!0,x.click(function(){R.next()}),y.click(function(){R.prev()}),b.click(function(){R.close()}),n.click(function(){C.get("overlayClose")&&R.close()}),t(e).bind("keydown."+$,function(t){var e=t.keyCode;M&&C.get("escKey")&&27===e&&(t.preventDefault(),R.close()),M&&C.get("arrowKey")&&c[1]&&!t.altKey&&(37===e?(t.preventDefault(),y.click()):39===e&&(t.preventDefault(),x.click()))}),t.isFunction(t.fn.on)?t(e).on("click."+$,"."+N,i):t("."+N).live("click."+$,i)),!0)}t[O]||(t(st),(R=t.fn[O]=t[O]=function(e,i){var n=this;return e=e||{},t.isFunction(n)&&(n=t("<a/>"),e.open=!0),n[0]?(st(),lt()&&(i&&(e.onComplete=i),n.each(function(){var i=t.data(this,O)||{};t.data(this,O,t.extend(i,e))}).addClass(N),new Y(n[0],e).get("open")&&ht(n[0])),n):n}).position=function(e,i){var n,c,u,f=0,p=0,m=o.offset();function w(){h[0].style.width=d[0].style.width=a[0].style.width=parseInt(o[0].style.width,10)-k+"px",a[0].style.height=s[0].style.height=l[0].style.height=parseInt(o[0].style.height,10)-H+"px"}if(g.unbind("resize."+$),o.css({top:-9e4,left:-9e4}),c=g.scrollTop(),u=g.scrollLeft(),C.get("fixed")?(m.top-=c,m.left-=u,o.css({position:"fixed"})):(f=c,p=u,o.css({position:"absolute"})),!1!==C.get("right")?p+=Math.max(g.width()-C.w-E-k-tt(C.get("right"),"x"),0):!1!==C.get("left")?p+=tt(C.get("left"),"x"):p+=Math.round(Math.max(g.width()-C.w-E-k,0)/2),!1!==C.get("bottom")?f+=Math.max(X()-C.h-W-H-tt(C.get("bottom"),"y"),0):!1!==C.get("top")?f+=tt(C.get("top"),"y"):f+=Math.round(Math.max(X()-C.h-W-H,0)/2),o.css({top:m.top,left:m.left,visibility:"visible"}),r[0].style.width=r[0].style.height="9999px",n={width:C.w+E+k,height:C.h+W+H,top:f,left:p},e){var v=0;t.each(n,function(t){n[t]===J[t]||(v=e)}),e=v}J=n,e||o.css(n),o.dequeue().animate(n,{duration:e||0,complete:function(){w(),P=!1,r[0].style.width=C.w+E+k+"px",r[0].style.height=C.h+W+H+"px",C.get("reposition")&&setTimeout(function(){g.bind("resize."+$,R.position)},1),t.isFunction(i)&&i()},step:w})},R.resize=function(t){var e;M&&((t=t||{}).width&&(C.w=tt(t.width,"x")-E-k),t.innerWidth&&(C.w=tt(t.innerWidth,"x")),u.css({width:C.w}),t.height&&(C.h=tt(t.height,"y")-W-H),t.innerHeight&&(C.h=tt(t.innerHeight,"y")),t.innerHeight||t.height||(e=u.scrollTop(),u.css({height:"auto"}),C.h=u.height()),u.css({height:C.h}),e&&u.scrollTop(e),R.position("none"===C.get("transition")?0:C.get("speed")))},R.prep=function(i){if(M){var n,r="none"===C.get("transition")?0:C.get("speed");u.remove(),(u=V(G,"LoadedContent").append(i)).hide().appendTo(f.show()).css({width:(C.w=C.w||u.width(),C.w=C.mw&&C.mw<C.w?C.mw:C.w,C.w),overflow:C.get("scrolling")?"auto":"hidden"}).css({height:(C.h=C.h||u.height(),C.h=C.mh&&C.mh<C.h?C.mh:C.h,C.h)}).prependTo(a),f.hide(),t(L).css({float:"none"}),ot(C.get("className")),n=function(){var i,n,a=c.length;function h(){!1===t.support.opacity&&o[0].style.removeAttribute("filter")}M&&(n=function(){clearTimeout(F),p.hide(),rt(D),C.get("onComplete")},m.html(C.get("title")).show(),u.show(),a>1?("string"==typeof C.get("current")&&w.html(C.get("current").replace("{current}",I+1).replace("{total}",a)).show(),$showNext=C.get("loop")||I<a-1,x[$showNext?"show":"hide"]().html(C.get("next")).attr("aria-hidden",$showNext?"false":"true").attr("aria-label",C.get("next")),$showPrev=C.get("loop")||I,y[$showPrev?"show":"hide"]().html(C.get("previous")).attr("aria-hidden",$showPrev?"false":"true").attr("aria-label",C.get("previous")),at(),C.get("preloading")&&t.each([Z(-1),Z(1)],function(){var i=c[this],n=new Y(i,t.data(i,O)),o=n.get("href");o&&et(n,o)&&(o=it(n,o),e.createElement("img").src=o)})):T.hide(),C.get("iframe")?(i=C.get("createIframe"),C.get("scrolling")||(i.scrolling="no"),t(i).attr({src:C.get("href"),class:$+"Iframe"}).one("load",n).appendTo(u),q.one(U,function(){i.src="//about:blank"}),C.get("fastIframe")&&t(i).trigger("load")):n(),"fade"===C.get("transition")?o.fadeTo(r,1,h):h())},"fade"===C.get("transition")?o.fadeTo(r,0,function(){R.position(0,n)}):R.position(r,n)}},R.next=function(){!P&&c[1]&&(C.get("loop")||c[I+1])&&(I=Z(1),ht(c[I]))},R.prev=function(){!P&&c[1]&&(C.get("loop")||I)&&(I=Z(-1),ht(c[I]))},R.close=function(){M&&!S&&(S=!0,M=!1,rt(z),C.get("onCleanup"),g.unbind("."+$),n.fadeTo(C.get("fadeOut")||0,0),o.stop().fadeTo(C.get("fadeOut")||0,0,function(){o.hide().attr("aria-hidden","true"),n.hide(),rt(U),u.remove(),setTimeout(function(){S=!1,rt(A),C.get("onClosed")},1)}))},R.remove=function(){o&&(o.stop(),t[O].close(),o.stop(!1,!0).remove(),n.remove(),S=!1,o=null,t("."+N).removeData(O).removeClass(N),t(e).unbind("click."+$).unbind("keydown."+$))},R.element=function(){return t(C.el)},R.settings=B)}(jQuery,document,window);
;
/**
 * @file
 * Colorbox module init js.
 */

(function ($) {

Drupal.behaviors.initColorbox = {
  attach: function (context, settings) {
    if (!$.isFunction($('a, area, input', context).colorbox) || typeof settings.colorbox === 'undefined') {
      return;
    }

    if (settings.colorbox.mobiledetect && window.matchMedia) {
      // Disable Colorbox for small screens.
      var mq = window.matchMedia("(max-device-width: " + settings.colorbox.mobiledevicewidth + ")");
      if (mq.matches) {
        return;
      }
    }

    // Use "data-colorbox-gallery" if set otherwise use "rel".
    settings.colorbox.rel = function () {
      if ($(this).data('colorbox-gallery')) {
        return $(this).data('colorbox-gallery');
      }
      else {
        return $(this).attr('rel');
      }
    };

    $('.colorbox', context)
      .once('init-colorbox').each(function(){
        $(this).colorbox(settings.colorbox);
      });

    $(context).bind('cbox_complete', function () {
      Drupal.attachBehaviors('#cboxLoadedContent');
    });
  }
};

})(jQuery);
;
/**
 * @file
 * Colorbox module style js.
 */

(function ($) {

Drupal.behaviors.initColorboxDefaultStyle = {
  attach: function (context, settings) {
    $(context).bind('cbox_complete', function () {
      // Only run if there is a title.
      if ($('#cboxTitle:empty', context).length == false) {
        $('#cboxLoadedContent img', context).bind('mouseover', function () {
          $('#cboxTitle', context).slideDown();
        });
        $('#cboxOverlay', context).bind('mouseover', function () {
          $('#cboxTitle', context).slideUp();
        });
      }
      else {
        $('#cboxTitle', context).hide();
      }
    });
  }
};

})(jQuery);
;
(function ($) {

Drupal.googleanalytics = {};

$(document).ready(function() {

  // Attach mousedown, keyup, touchstart events to document only and catch
  // clicks on all elements.
  $(document.body).bind("mousedown keyup touchstart", function(event) {

    // Catch the closest surrounding link of a clicked element.
    $(event.target).closest("a,area").each(function() {

      // Is the clicked URL internal?
      if (Drupal.googleanalytics.isInternal(this.href)) {
        // Skip 'click' tracking, if custom tracking events are bound.
        if ($(this).is('.colorbox') && (Drupal.settings.googleanalytics.trackColorbox)) {
          // Do nothing here. The custom event will handle all tracking.
          //console.info("Click on .colorbox item has been detected.");
        }
        // Is download tracking activated and the file extension configured for download tracking?
        else if (Drupal.settings.googleanalytics.trackDownload && Drupal.googleanalytics.isDownload(this.href)) {
          // Download link clicked.
          ga("send", {
            "hitType": "event",
            "eventCategory": "Downloads",
            "eventAction": Drupal.googleanalytics.getDownloadExtension(this.href).toUpperCase(),
            "eventLabel": Drupal.googleanalytics.getPageUrl(this.href),
            "transport": "beacon"
          });
        }
        else if (Drupal.googleanalytics.isInternalSpecial(this.href)) {
          // Keep the internal URL for Google Analytics website overlay intact.
          ga("send", {
            "hitType": "pageview",
            "page": Drupal.googleanalytics.getPageUrl(this.href),
            "transport": "beacon"
          });
        }
      }
      else {
        if (Drupal.settings.googleanalytics.trackMailto && $(this).is("a[href^='mailto:'],area[href^='mailto:']")) {
          // Mailto link clicked.
          ga("send", {
            "hitType": "event",
            "eventCategory": "Mails",
            "eventAction": "Click",
            "eventLabel": this.href.substring(7),
            "transport": "beacon"
          });
        }
        else if (Drupal.settings.googleanalytics.trackOutbound && this.href.match(/^\w+:\/\//i)) {
          if (Drupal.settings.googleanalytics.trackDomainMode !== 2 || (Drupal.settings.googleanalytics.trackDomainMode === 2 && !Drupal.googleanalytics.isCrossDomain(this.hostname, Drupal.settings.googleanalytics.trackCrossDomains))) {
            // External link clicked / No top-level cross domain clicked.
            ga("send", {
              "hitType": "event",
              "eventCategory": "Outbound links",
              "eventAction": "Click",
              "eventLabel": this.href,
              "transport": "beacon"
            });
          }
        }
      }
    });
  });

  // Track hash changes as unique pageviews, if this option has been enabled.
  if (Drupal.settings.googleanalytics.trackUrlFragments) {
    window.onhashchange = function() {
      ga("send", {
        "hitType": "pageview",
        "page": location.pathname + location.search + location.hash
      });
    };
  }

  // Colorbox: This event triggers when the transition has completed and the
  // newly loaded content has been revealed.
  if (Drupal.settings.googleanalytics.trackColorbox) {
    $(document).bind("cbox_complete", function () {
      var href = $.colorbox.element().attr("href");
      if (href) {
        ga("send", {
          "hitType": "pageview",
          "page": Drupal.googleanalytics.getPageUrl(href)
        });
      }
    });
  }

});

/**
 * Check whether the hostname is part of the cross domains or not.
 *
 * @param string hostname
 *   The hostname of the clicked URL.
 * @param array crossDomains
 *   All cross domain hostnames as JS array.
 *
 * @return boolean
 */
Drupal.googleanalytics.isCrossDomain = function (hostname, crossDomains) {
  /**
   * jQuery < 1.6.3 bug: $.inArray crushes IE6 and Chrome if second argument is
   * `null` or `undefined`, https://bugs.jquery.com/ticket/10076,
   * https://github.com/jquery/jquery/commit/a839af034db2bd934e4d4fa6758a3fed8de74174
   *
   * @todo: Remove/Refactor in D8
   */
  if (!crossDomains) {
    return false;
  }
  else {
    return $.inArray(hostname, crossDomains) > -1 ? true : false;
  }
};

/**
 * Check whether this is a download URL or not.
 *
 * @param string url
 *   The web url to check.
 *
 * @return boolean
 */
Drupal.googleanalytics.isDownload = function (url) {
  var isDownload = new RegExp("\\.(" + Drupal.settings.googleanalytics.trackDownloadExtensions + ")([\?#].*)?$", "i");
  return isDownload.test(url);
};

/**
 * Check whether this is an absolute internal URL or not.
 *
 * @param string url
 *   The web url to check.
 *
 * @return boolean
 */
Drupal.googleanalytics.isInternal = function (url) {
  var isInternal = new RegExp("^(https?):\/\/" + window.location.host, "i");
  return isInternal.test(url);
};

/**
 * Check whether this is a special URL or not.
 *
 * URL types:
 *  - gotwo.module /go/* links.
 *
 * @param string url
 *   The web url to check.
 *
 * @return boolean
 */
Drupal.googleanalytics.isInternalSpecial = function (url) {
  var isInternalSpecial = new RegExp("(\/go\/.*)$", "i");
  return isInternalSpecial.test(url);
};

/**
 * Extract the relative internal URL from an absolute internal URL.
 *
 * Examples:
 * - https://mydomain.com/node/1 -> /node/1
 * - https://example.com/foo/bar -> https://example.com/foo/bar
 *
 * @param string url
 *   The web url to check.
 *
 * @return string
 *   Internal website URL
 */
Drupal.googleanalytics.getPageUrl = function (url) {
  var extractInternalUrl = new RegExp("^(https?):\/\/" + window.location.host, "i");
  return url.replace(extractInternalUrl, '');
};

/**
 * Extract the download file extension from the URL.
 *
 * @param string url
 *   The web url to check.
 *
 * @return string
 *   The file extension of the passed url. e.g. "zip", "txt"
 */
Drupal.googleanalytics.getDownloadExtension = function (url) {
  var extractDownloadextension = new RegExp("\\.(" + Drupal.settings.googleanalytics.trackDownloadExtensions + ")([\?#].*)?$", "i");
  var extension = extractDownloadextension.exec(url);
  return (extension === null) ? '' : extension[1];
};

})(jQuery);
;
