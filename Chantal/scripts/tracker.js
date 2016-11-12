(function(){!function(e,$){"use strict";var t,n;return t="GFTracker",n=function(){function n(e,t){if(this.identifier=e,!this.identifier)throw new TypeError("Tracker has not identifier");this.create()}return n.prototype.create=function(){return e.ga||!function(e,t,n,i,r,a,c){e.GoogleAnalyticsObject=r,e[r]=e[r]||function(){(e[r].q=e[r].q||[]).push(arguments)},e[r].l=1*new Date,a=t.createElement(n),c=t.getElementsByTagName(n)[0],a.async=1,a.src=i,c.parentNode.insertBefore(a,c)}(e,document,"script","http://www.google-analytics.com/analytics.js","ga"),ga("create",this.identifier,"auto",{name:t})},n.prototype.notify=function(e,n){return e&&n?ga(t+".send","event",n,e):ga(t+".send","pageview")},n}(),e.LMDNavigationTracking={},e.LMDNavigationTracking.Tracker=n}(window,jQuery)}).call(this);

$(document).ready(function(){


      $(window).scroll(function(){

        var windowHeight = $(window).height();
        var scroll = $(window).scrollTop();

        if ( scroll > (windowHeight/5)){
        	console.log(windowHeight);
            $('#u240').addClass("ciaobella");
        }
      });
 });
  

