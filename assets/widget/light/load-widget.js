(function() {
  function c() {
    b = window.jQuery.noConflict(!0);
    d()
  }
  function d() {
    b(document).ready(function(a) {
      a("<link>", {rel:"stylesheet", type:"text/css", href:"/assets/widget/light/luxCountdown.css?ver=42"}).appendTo("head");
      //var b = "/assets/widget/light/light.json?ver=42&callback=cb";
      a("#app_showdown_widget_01").load('/assets/widget/light/light.json?ver=42&callback=cb');
    })
  }
  var b;
  if(void 0 === window.jQuery || "1.7.2" !== window.jQuery.fn.jquery) {
    var a = document.createElement("script");
    a.setAttribute("type", "text/javascript");
    a.setAttribute("src", "https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js");
    a.readyState ? a.onreadystatechange = function() {
      ("complete" === this.readyState || "loaded" === this.readyState) && c()
    } : a.onload = c;
    (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(a)
  }else {
    b = window.jQuery, d()
  }
})();