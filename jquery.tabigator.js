/*!
 * jQuery Tabigator Plugin
 * Copyright (c) 2010 Luke Hutscal
 * Version: 0.1 (July 14, 2010)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) and GPL (http://creativecommons.org/licenses/GPL/2.0/) licenses.
 * Requires: jQuery v1.2 or later
 */
(function($) {
  var ver = '0.1';
  
  jQuery.fn.tabigator = function(options) {
    return this.each(function() {
      var $this = $(this);
      var $this = $this;
      $this.find('a').click(function() {
        $this.find('li').removeClass('on');
        $(this).parent().addClass('on');
        $('.navigable').hide();
        $($(this).attr('href')).show();
        // return false;
      });
      if(window.location.hash) {
        $this.find('a[href="' + window.location.hash + '"]').click();
      } else {
        $this.find('li.on a:first').click();
      }
    });
  };
  $.fn.tabigator.ver = function() { return "jquery.tabigator ver. " + ver; };
})(jQuery);