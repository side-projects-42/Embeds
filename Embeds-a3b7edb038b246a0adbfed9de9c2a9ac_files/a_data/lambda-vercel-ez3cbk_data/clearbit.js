;(function (w) {
  if (w.__clearbit_tagsjs) {
    w.console &&
      w.console.error &&
      w.console.error("Clearbit tags.js snippet included twice.");
    return;
  }

  w.__clearbit_tagsjs = true;

  

  var destjs = document.createElement("script");
  destjs.src = 'https://x.clearbitjs.com/v2/pk_cf7f6c8b720be71dfc730b02eb55b0bd/destinations.min.js'

  var first = document.getElementsByTagName("script")[0];
  destjs.async = true;
  first.parentNode.insertBefore(destjs, first);

  
    
      var tracking = (w.clearbit = w.clearbit || []);

      if (!tracking.initialize) {
        var clearbitjs = document.createElement("script");
        clearbitjs.src = 'https://x.clearbitjs.com/v2/pk_cf7f6c8b720be71dfc730b02eb55b0bd/tracking.min.js';

        var first = document.getElementsByTagName("script")[0];
        clearbitjs.async = true;
        first.parentNode.insertBefore(clearbitjs, first);
      }
    

    
  

  
})(window);
