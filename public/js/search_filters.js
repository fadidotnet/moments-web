//  we will use it later if client required to update results by ajax
function apply_filters(){
    document.getElementById("filters_form").submit();
    // var queryString = $('#filters_form').serialize();
    //    $.ajax({
    //     url: "{{env('APP_URL')}}"+'/search?'+queryString,
    //     type: 'GET',            
    //     success: function (data, status)
	// 	{
    //       console.log(data);          
	// 	}
	// });
}

function reset(){
    $(':input','#filters_form')
    .not(':button, :submit, :reset, :hidden')
    .val('')
    .removeAttr('checked')
    .removeAttr('selected');
    reset_mileage_limit_range_selector();
    reset_price_range_selector();
    document.getElementById("filters_form").submit();
}

function reset_mileage_range_selider(){
    reset_mileage_limit_range_selector();
    document.getElementById("filters_form").submit();
}

function reset_price_range_selider(){
    reset_price_range_selector();
    document.getElementById("filters_form").submit();
}