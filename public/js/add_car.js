// This file is written by Muhammad Ateek

$(function () {
        $("#year_picker_add_car").datepicker( {
            format: " yyyy", // Notice the Extra space at the beginning
            viewMode: "years", 
            minViewMode: "years"
        });

       $('#add_car_1').on('keyup keypress', function(e) {
            var keyCode = e.keyCode || e.which;
            if (keyCode === 13) { 
                e.preventDefault();
                return false;
            }
        });

     
});


$("#add_car_1").submit(function(event) {
    openOverLay();
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
        }
    });

    event.preventDefault();
    var url=$(this).attr("action");
    var method=$(this).attr("method");
    $.ajax({
        url: url,
        type: method,            
        data: {
                'title'   : $('#title').val(),
                'location': $('#autocomplete').val(),
                'price'   : $('#price').val(),
                'model'   : $('#model').val(),
                'car_type': $("#car_type option:selected").text().trim(),
                'car_number_plate':  $('#car_number_plate').val(),
                'form'            :$('#form').val(),  
                'manufacture_id'  :  document.getElementById("manufacture_id").options[ document.getElementById("manufacture_id").selectedIndex].value,
         },
        
        processData: true,
        success: function (data, status){
            closeOverLay();
            if(data['errors']){
               
                if(data['errors']['title']){
                    document.getElementById("error_title").innerHTML = data['errors']['title'][0];    
                }else{document.getElementById("error_title").innerHTML = '';}

            
                if(data['errors']['location']){
                    document.getElementById("error_location").innerHTML = data['errors']['location'][0];    
                }else{document.getElementById("error_location").innerHTML = '';}
            
                if(data['errors']['manufacture_id']){
                    document.getElementById("error_manufacture_id").innerHTML = data['errors']['manufacture_id'][0];    
                }else{document.getElementById("error_manufacture_id").innerHTML = '';}
            
                if(data['errors']['price']){
                    document.getElementById("error_price").innerHTML = data['errors']['price'][0];    
                }else{document.getElementById("error_price").innerHTML = '';}
            


           
                if(data['errors']['model']){
                    document.getElementById("error_model").innerHTML = data['errors']['model'][0];    
                }else{document.getElementById("error_model").innerHTML = '';}

                
                if(data['errors']['car_type']){
                    document.getElementById("error_car_type").innerHTML = data['errors']['car_type'][0];    
                }else{document.getElementById("error_car_type").innerHTML = '';}

                if(data['errors']['car_number_plate']){
                    document.getElementById("error_car_number_plate").innerHTML = data['errors']['car_number_plate'][0];    
                }else{document.getElementById("error_car_number_plate").innerHTML = '';}

                toastr.error('Car information could not save');
              }else{
                 
                 document.getElementById('car_id').dataset.carid = data['id'];
                 $('#step_1').hide();
                 $('#step_2').show();
                 $('#step_3').hide();
                  toastr.success('Car information is stored');
              }



            
            console.log(data);
            console.log(status);    
        }

    });    
});




$("#add_car_2").submit(function(event) {
    openOverLay();
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
        }
    });

    var data = {
        '_method': 'patch',
        'form'                  :2,
        'security_system'       :$('#security_system').prop("checked")? 1 : 0,
        'air_bag'               :$('#air_bag').prop("checked")? 1 : 0,
        'air_condition'         :$('#air_condition').prop("checked")? 1 : 0,
        'intermitent_wiper'     :$('#intermitent_wiper').prop("checked")? 1 : 0,
        'driver_side_air_bag'   :$('#driver_side_air_bag').prop("checked")? 1 : 0,
        'alloy_wheels'          :$('#alloy_wheels').prop("checked")? 1 : 0,
        'keyless_entery'        :$('#keyless_entery').prop("checked")? 1 : 0,
        'power_windows'         :$('#power_windows').prop("checked")? 1 : 0, 
        'anti_theft'            :$('#anti_theft').prop("checked")? 1 : 0,
        'power_seats'           :$('#power_seats').prop("checked")? 1 : 0,
        'remote_start'          :$('#remote_start').prop("checked")? 1 : 0,
        'power_mirror'          :$('#power_mirror').prop("checked")? 1 : 0,
        'antilock_breaker'      :$('#antilock_breaker').prop("checked")? 1 : 0,
        'anti_starter'          :$('#anti_starter').prop("checked")? 1 : 0,
        'power_steering'        :$('#power_steering').prop("checked")? 1 : 0
    }

    event.preventDefault();
    var url="/cars/" + $('#car_id').data('carid');
    $.ajax({
        url: url,
        type: 'POST',            
        data: data,
        processData: true,
        success: function (data, status){
          closeOverLay();
          if(!data['errors']){
            $('#step_1').hide();
            $('#step_2').hide();
            $('#step_3').show();
            toastr.success('Car specifications are save');
          }else{
            toastr.error('Car specifications could not save');
          }
        }

    });    
});


$("#add_car_3").submit(function(event) {
    openOverLay();
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
        }
    });
    event.preventDefault();
    var url="/cars/" + $('#car_id').data('carid');
    $.ajax({
        url: url,
        type: 'POST',            
        data: new FormData(this),
        processData: false,
        contentType: false,
        success: function (data, status){
            console.log(data);
            closeOverLay();
            sessionStorage.setItem('car_id', data['id']);
            // $.session.set("car_id", data['id']);
          if(!data['errors']){
            window.location.hash = 'reload';
            location.reload();
           
          }else{
              if(data['errors']['video_url']){
                 document.getElementById("error_video_url").innerHTML = data['errors']['video_url'][0];    
              }
          }
        }

    });    
});

document.addEventListener("DOMContentLoaded", function(event) { 
    	if(window.location.hash == "#reload"){
             openOverLay();
    		$('#step_1').hide();
            $('#step_2').hide();
            $('#step_3').hide();
            $('#step_4').show();
            window.location.hash = '';
            var car_id = sessionStorage.getItem('car_id');
            console.log(car_id);
            $('#car_id').attr("data-carid",car_id);
            console.log($('#car_id'));
             sessionStorage.setItem('car_id', null);
             closeOverLay();
    	}else{
    		console.log("The page has a new hit!");
    	}
}); 


$("#add_car_4").submit(function(event) {
    openOverLay();
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
        }
    });

    event.preventDefault();
    var url="/cars/" + $('#car_id').data('carid');
    $.ajax({
        url: url,
        type: 'POST',            
        data: new FormData(this),
        processData: false,
        contentType: false,
        success: function (data, status){
          closeOverLay();
          if(data['errors']){
            if(data['errors']['mileage_limit_day']){
                    document.getElementById("error_mileage_limit_day").innerHTML = data['errors']['mileage_limit_day'][0];    
                }else{document.getElementById("error_mileage_limit_day").innerHTML = '';}

            if(data['errors']['mileage_limit_week']){
                    document.getElementById("error_mileage_limit_week").innerHTML = data['errors']['mileage_limit_week'][0];    
                }else{document.getElementById("error_mileage_limit_week").innerHTML = '';}

           if(data['errors']['mileage_limit_month']){
                    document.getElementById("error_mileage_limit_month").innerHTML = data['errors']['mileage_limit_month'][0];    
                }else{document.getElementById("error_mileage_limit_month").innerHTML = '';}

           if(data['errors']['kilometer']){
                    document.getElementById("error_kilometer").innerHTML = data['errors']['kilometer'][0];    
                }else{document.getElementById("error_kilometer").innerHTML = '';}

            toastr.error('Car Detail could not save');    
          }else{
              window.location = '/';
          }
        }

    });    
});


function show(step_id){
    console.log(step_id)
      $('#'+step_id).show();
  if(step_id=='step_1'){
      $('#step_2').hide();
      $('#step_3').hide();
      $('#step_4').hide();
  }else if(step_id=='step_2'){
      $('#step_1').hide();
      $('#step_3').hide();
      $('#step_4').hide();
  }else if(step_id=='step_3'){
      $('#step_1').hide();
      $('#step_2').hide();
      $('#step_4').hide();
  }else if(step_id=='step_4'){
      $('#step_1').hide();
      $('#step_2').hide();
      $('#step_3').hide();
  }
}