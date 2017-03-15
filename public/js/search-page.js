// This file is written by Muhammad Ateek

$(function () {
        
        $('#searchForm').on('keyup keypress', function(e) {
            var keyCode = e.keyCode || e.which;
            if (keyCode === 13) { 
                e.preventDefault();
                return false;
            }
        });
});


function enable_advance_search(obj){
    var advance_search_fields = document.getElementById("advance_search_fields");
    var submit_simple_search = document.getElementById("submit_simple_search");
    
    var advance_search_text = document.getElementById("advance_search_text");
    // when search is simple
    if(advance_search_fields.style.display == "inherit"){
        reset_mileage_limit_range_selector(); //reset form after toggle
        reset_price_range_selector();
        // hide advance search feature
        advance_search_fields.style.display = "none";
        // show submit button for simple search
        submit_simple_search.style.display = "inherit";
        // make sure that advance search anchor tag showing rite text
        advance_search_text.innerHTML = "advance search"
        
        document.getElementById("searchForm").reset();
        // $(':input','#searchForm')
        //     .not(':button, :submit, :reset, :hidden')
        //     .val('')
        //     .removeAttr('checked')
        //     .removeAttr('selected');

        // $('#featured').css('padding-top',100);    
          
    }else{ //when search is advance
        // hide submit button for advance search
        submit_simple_search.style.display = "none";
        // show advance search fields
        advance_search_fields.style.display = "inherit";
        // when advance search fields are showing then show rite text for anchor tag of toggle search botton
        advance_search_text.innerHTML = "simple search";
        $('#featured').css('padding-top',250);
      
    }
}

function reset_mileage_limit_range_selector(){
    //get min and max value which we have to set
    var min= $('#mileage_limit_day_min_all').data('min');
	var max= $('#mileage_limit_day_max_all').data('max');

    // set values of input fields
    $("#mileage_limit_day_min").val(min);
    $("#mileage_limit_day_max").val(max);

    // set text of slider selector of min and max 
    $("#mileage_slider .ui-slider-handle span.min").text(min);
	$("#mileage_slider .ui-slider-handle span.max").text(max);    
    
    // set slider inner color width
	$("#mileage_slider .ui-slider-range")[0].style.width= '100%';
	$("#mileage_slider .ui-slider-range")[0].style.left= '0%';    
    
    // set slider selector balls min and max
    $("#mileage_slider .ui-slider-handle")[0].style.left= '0%';
    $("#mileage_slider .ui-slider-handle")[1].style.left ='100%';
    
}


function reset_price_range_selector(){
    //get min and max value which we have to set
    var min= $('#price_min_all').data('min');
	var max= $('#price_max_all').data('max');

    // set values of input fields
    $("#price_min").val(min);
    $("#price_max").val(max);

    // set text of slider selector of min and max 
    $("#price_slider .ui-slider-handle span.min").text(min);
	$("#price_slider .ui-slider-handle span.max").text(max);    
    
    // set slider inner color width
	$("#price_slider .ui-slider-range")[0].style.width= '100%';
	$("#price_slider .ui-slider-range")[0].style.left= '0%';    
    
    // set slider selector balls min and max
    $("#price_slider .ui-slider-handle")[0].style.left= '0%';
    $("#price_slider .ui-slider-handle")[1].style.left ='100%';
    
}