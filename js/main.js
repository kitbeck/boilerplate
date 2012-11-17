var console;

$(document).ready(function() {

	$(".dial_green").dial({
		"min":0,
		"max":100,
		"fgColor": "#00e600"
	});
	
	$(".dial_orange").dial({
		"min": 0,
		"max": 100,
		"fgColor": "#e62e00"
	});
	
	$(".gain").dial({
		"min": -30,
		"max": 15,
		"bgColor": "#555",
		"fgColor": "#f2ff60",
		"width": 200,
		"thickness": 0.3, // thickness: knob band thickness - 0 -> 1
		"angleOffset": 220,
		"angleArc": 280,
		"stopper": true,
		"cursor": false, // false || integer
		"displayPrevious": true,
		"displayInput": true, // show number input in middle
		"change" : function (v) { console.log(v); },
		"draw" : function () { $(this.i).val(this.cv + 'dB'); }
	});
	
	$(".eq").bars({
		"min": -15,
		"max": 15,
        "fgColor": "#f2ff60",
        "bgColor": "#555",
        "cursor": false,
        "displayPrevious": true
        /*, change : function (value) {
            console.log("change : ", value);
        }*/
        /*, draw : function () {
            console.log(this.o);
        }*/
    });

});