$(function() {
	$('#smartInputData').renderSmartInput({"mask": "99/99/9999", "regex": "(?:[\d]{4}\s){3}[\d]{4}"});

	$('#smartInputPhone').renderSmartInput({"mask": "(99)9999-9999", "regex": "(?:[\d]{4}\s){3}[\d]{4}"});
});

$.fn.renderSmartInput = function(options, callback) {
    var _self = this;

    options = $.extend({
        "mask": "9999 9999 9999 9999", 
        "regex": "(?:[\d]{4}\s){3}[\d]{4}"
    }, options);

    $(this).each(function() {
    	var _this = this;

    	

    });


    //Callback
    if (typeof eval(callback) == 'function') {
        jQuery.fn.callback = callback;
        _self.callback();
    }

    //Return
    return this;
});