(function() {
  var ubjQuery;

  if (window.jQuery === undefined || window.jQuery.fn.jquery !== '1.7.2') {
    var script_tag = document.createElement('script');
    script_tag.setAttribute("type", "text/javascript");
    script_tag.setAttribute("src", "https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js");
    if (script_tag.readyState) {
      script_tag.onreadystatechange = function () {
        if (this.readyState === 'complete' || this.readyState === 'loaded') { scriptLoadHandler(); }
      };
    } else {
      script_tag.onload = scriptLoadHandler;
    }
    (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
  } else {
    ubjQuery = window.jQuery;
    main();
  }

  function scriptLoadHandler() {
    ubjQuery = window.jQuery.noConflict(true);
    main(); 
  }

  function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
      vars[key] = value;
    });
    return vars;
  }
  
  function main() { 
    ubjQuery(document).ready(function($) {
      var css_link = $("<link>", { 
        rel: "stylesheet",
        type: "text/css", 
        href: "http://bholtsclaw.github.com/assets/buttons/download-for-ubuntu.css" 
      });
      css_link.appendTo('head');
      var dfuLink = $('#download-for-ubuntu').data().link; 
      var jsonp_url = "http://api.websitedevops.com/json?req=download-for-ubuntu&linkto="+dfuLink+"&callback=?";
      $.getJSON(jsonp_url, function(data) {
        $('#download-for-ubuntu').html(data.html);
      });
    });
  }
})();