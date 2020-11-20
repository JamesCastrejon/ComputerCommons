(function($) {

/**
 * jQuery debugging helper.
 *
 * Invented for Dreditor.
 *
 * @usage
 *   $.debug(var [, name]);
 *   $variable.debug( [name] );
 */
jQuery.extend({
  debug: function () {
    // Setup debug storage in global window. We want to look into it.
    window.debug = window.debug || [];

    args = jQuery.makeArray(arguments);
    // Determine data source; this is an object for $variable.debug().
    // Also determine the identifier to store data with.
    if (typeof this == 'object') {
      var name = (args.length ? args[0] : window.debug.length);
      var data = this;
    }
    else {
      var name = (args.length > 1 ? args.pop() : window.debug.length);
      var data = args[0];
    }
    // Store data.
    window.debug[name] = data;
    // Dump data into Firebug console.
    if (typeof console != 'undefined') {
      console.log(name, data);
    }
    return this;
  }
});
// @todo Is this the right way?
jQuery.fn.debug = jQuery.debug;

})(jQuery);
;
(function ($, Drupal) {
  "use strict";

  Drupal.behaviors.fatvChatbotBlockBehavior = {
    attach: function (context) {
      $(window).on("load", function () {
        if ($("#sliding-popup").length) {
          if ($(".fatv12").length) {
            $(".eu-cookie-compliance-agree-button").click(function () {
              $(".fatv12").css("bottom", "");
              $(".fatv12").css("bottom", "10px");
            });
          }
        }
        else {
          $(".fatv12").css("bottom", "");
          $(".fatv12").css("bottom", "10px");
        }
      });
    },
  };
})(jQuery, Drupal);
;
