function compare_car(check_box, car_id) {
    // console.log(check_box);
    // console.log(car_id);
        $.ajax({
            url: $('#store_session_'+car_id).attr('action'),
            type: 'POST',
            data: $('#store_session_'+car_id).serialize(),
            success: function (data) {
                console.log(data);
                if(data){
                   console.log(data)
                   $('#compare_vehicles').text('COMPARE VEHICLES: '+ Object.keys(data).length);
                   toastr.success(Object.keys(data).length + (Object.keys(data).length>1? ' Cars are': ' Car is') +' selected to compare');  
                }else{
                   check_box.attr('checked', false);
                   toastr.error('your already selected limited vehicles to compare');  
                }
            },
        });

}

function clear_compare_vehicles(){
     $.ajax({
            url: $('#compare_vehicles_clear').data('url'),
            type: 'GET',
            success: function (data) {
                if(data){
                   $('#compare_vehicles').text('COMPARE VEHICLES: 0');
                   $('input:checkbox').removeAttr('checked');
                   toastr.success('All selected cars are un selected to compare');  
                }else{
                    toastr.error('Cars could not unselect');  
                }
            },
        });
}
