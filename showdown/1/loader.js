/// <!------
/// ====== Ubuntu App Showdown Widget ====== (Idea from @mhall119 asked if I could make one, Thanks!)
/// --
/// -- @SEE: http://developer.ubuntu.com Official Showdown! Site, mine are down below & lists contacts. 
/// -- 
/// -- @File: loader.js (browset) widget loader for the Ubuntu App Showdown Competion 4 any website!
/// -- Made with Love by bholtsclaw@github / +Brandon Holtsclaw on G+,got a Qestion? Perfet, just 
/// -- Invite me to Hangout on G+ and we'll try to solve realtime sharing a Screen & Voice ! /~~~~~~/
/// --
/// -- @About me:
/// -- I make cool things, mostly on the Web, I do it by Consulting Freelance so if you have a 
/// -- unique problem you'd like to confidentially go over with me just use any of my contacts.
/// -- My website @ http://www.brandonholtsclaw.com , Referals for stuff I use.
/// ------>

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
  function main() { 
    ubjQuery(document).ready(function($) {
      $("<link>", {rel:"stylesheet", type:"text/css", href:"http://bholtsclaw.github.com/showdown/1/full.min.css?v=42"}).appendTo("head");
      $.getScript('http://bholtsclaw.github.com/showdown/1/full.js?v=42', function(){
        var c=new Date(2012, 6, 9, 23, 59, 0, 0);
        var b=new Date(2012, 5, 18, 0, 0, 0, 1);
  	    var a=new luxCountdown ({
        title: "<a href='http://developer.ubuntu.com/showdown?from=widget' _target='_top'><img id='app-showdown-widget-logo' src='https://developer.ubuntu.com/wp-content/themes/wordpress-theme-ubuntudeveloper/img/logo-ubuntu.png'><span class='app_showdown_widget_header'><span class='ufont'>App Developer</span></span> <div id='app_showdown_widget_action_title'><span class='ufont'><em>Showdown !</em></span></div></a>",
        text: "<br><hr size='1' noshadow shadow='none' color='#ccc' border-color='#ccc' style='width: 95%;padding: -25px 0 0 0;' /><div class='copy'><span class='ufont'>ubuntu's</span> <a href='//developer.ubuntu.com'>Developer Community</a> is growing. Come Check out the new <a href='//developer.ubuntu.com/'>Ubuntu Dev Portal</a>. We send twitter status updates <a href='//twitter.com/ubuntuappdev'>@ubuntuappdev</a></div><hr size='1' noshadow shadow='none' color='#ccc' border-color='#ccc' style='width: 95%;padding: -25px 0 0 0;'/></div>",
        start: b,
        end: c,
        startText: '',
        endText: ''
      });
      $('#showdown-widget-1').html(a.getCountdown());
  	});
  });}
})();
/// <!-- google-analytics -->
var _gaq=_gaq||[];_gaq.push(['_setAccount','UA-1997599-9']);_gaq.push(['_setDomainName','ubuntu.com']);_gaq.push(['_trackPageview']);
(function(){var ga=document.createElement('script');ga.type='text/javascript';ga.async=true;ga.src='https://ssl.google-analytics.com/ga.js';var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(ga,s);})();
/// <!-- google-analytics -->