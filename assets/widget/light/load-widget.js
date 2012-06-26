(function() {
  function c() {
    b = window.jQuery.noConflict(!0);
    d()
  }
  function d() {
    b(document).ready(function(a) {
      a("<link>", {rel:"stylesheet", type:"text/css", href:"//www.assets-online.com/widgets/ubuntu-app-showdown/light/luxCountdown.css?asset_tag=1978"}).appendTo("head");
      var b = "//www.assets-online.com/widgets/ubuntu-app-showdown/light/light.json?asset_tag=1978&callback=cb";
      a.getJSON(b, function(b) {
        a("#app_showdown_widget_01").html(b.html)
      })
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