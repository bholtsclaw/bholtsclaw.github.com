//<!-- Ubuntu App Showdown Widget http://www.brandonholtsclaw.com/. Copyright 2012 Brandon Holtsclaw. -->
/*
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
*/

window.jQuery.ready(function($) {
  window.jQuery("<link>", {rel:"stylesheet", type:"text/css", href:"http://bholtsclaw.github.com/showdown/1/full.min.css?v=42"}).appendTo("head");
  //$.getScript('http://bholtsclaw.github.com/showdown/1/luxUtilities.min.js?ver=42');
  //$.getScript('http://bholtsclaw.github.com/showdown/1/luxCountdown.min.js?ver=42');
  $('body').append('http://bholtsclaw.github.com/showdown/1/full.js?v=42');
    var c=new Date(2012, 6, 9, 23, 59, 0, 0);
    var b=new Date(2012, 5, 18, 0, 0, 0, 1);
  	var a=new luxCountdown ({
    title: "<img id='app-showdown-widget-logo' src='https://developer.ubuntu.com/wp-content/themes/wordpress-theme-ubuntudeveloper/img/logo-ubuntu.png'><span class='app_showdown_widget_header'><span class='ufont'>App Developer</span></span> <div id='app_showdown_widget_action_title'><span class='ufont'><em>Showdown !</em></span></div>",
    text: "<br><hr size='1' noshadow shadow='none' color='#ccc' border-color='#ccc' style='width: 95%;padding: -25px 0 0 0;' /><div class='copy'><span class='ufont'>ubuntu's</span> <a href='//developer.ubuntu.com'>Developer Community</a> is growing. Come Check out the new <a href='//developer.ubuntu.com/'>Ubuntu Dev Portal</a>. We send twitter status updates <a href='//twitter.com/ubuntuappdev'>@ubuntuappdev</a> too !</div><hr size='1' noshadow shadow='none' color='#ccc' border-color='#ccc' style='width: 95%;padding: -25px 0 0 0;'/></div>",
    start: b,
    end: c,
    startText: '',
    endText: ''
  });
  $('#showdown-widget-1').append(a.getCountdown());
})();

//$("<link>", {rel:"stylesheet", type:"text/css", href:"http://bholtsclaw.github.com/showdown/1/luxCountdown.css?v=42"}).appendTo("head");
//$.getScript('http://bholtsclaw.github.com/showdown/1/luxUtilities.min.js?ver=42');
//$.getScript('http://bholtsclaw.github.com/showdown/1/luxCountdown.min.js?ver=42');

//<!-- partial html or one element and its children -->
//$("#app_showdown_widget_01").load('http://bholtsclaw.github.com/showdown/1/rendered.html #some_optional_div_id');

// Ajax flexable get/post with success and failure callbacks, complex compared but powerful
//$.ajax({
//  url:"/showdown/1/showdown.json",
//  type:"GET",
//  data:data,
//  dataType:"json",
//  success: function(data){
//    $('#app_showdown_widget_01').html(data.html);
//  });
