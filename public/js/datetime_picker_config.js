
$(function () {
        // set the format of datetime picker
        $('#datetimepicker_pick_up').datetimepicker({ format: 'Y-MM-DD H:mm:ss',ignoreReadonly:true,icons: {time:'datetime-picker-icon'}});
        $('#datetimepicker_return_on').datetimepicker({
            format: 'Y-MM-DD H:mm:ss',
            useCurrent: false,
            ignoreReadonly:true,icons: {time:'datetime-picker-icon'}
        });

        $('#datetimepicker_pick_up_detail').datetimepicker({ format: 'Y-MM-DD H:mm:ss',ignoreReadonly:true,icons: {time:'datetime-picker-icon'} });
        $('#datetimepicker_return_on_detail').datetimepicker({
            useCurrent: false,
            format: 'Y-MM-DD H:mm:ss',
            ignoreReadonly:true,icons: {time:'datetime-picker-icon'}
        });

        // make sure user can select date less than current date
        $('#datetimepicker_pick_up').data("DateTimePicker").minDate(moment().add(30, 'minutes'));
        
        if($('#datetimepicker_pick_up_detail').data("DateTimePicker") != undefined){
            $('#datetimepicker_pick_up_detail').data("DateTimePicker").minDate(moment().add(30, 'minutes'));
        }

        // make sure when user select pickup date, it sets return on dates
        $("#datetimepicker_pick_up").on("dp.change", function (e) {
             $('#datetimepicker_return_on').data("DateTimePicker").minDate(e.date);
             $('#datetimepicker_return_on').data("DateTimePicker").date(e.date);
            
            if($('#datetimepicker_pick_up_detail').data("DateTimePicker")){
               $('#datetimepicker_pick_up_detail').data("DateTimePicker").date(e.date);
            }
        });

        $("#datetimepicker_pick_up_detail").on("dp.change", function (e) {
            $('#datetimepicker_return_on_detail').data("DateTimePicker").minDate(e.date);
            $('#datetimepicker_return_on_detail').data("DateTimePicker").date(e.date);
            $('#datetimepicker_pick_up').data("DateTimePicker").date(e.date);
        });

        // make sure return on date sync with return on date on detail and pop page for sent request page
        $("#datetimepicker_return_on").on("dp.change", function (e) {
           if($('#datetimepicker_return_on_detail').data("DateTimePicker") != undefined){ 
            $('#datetimepicker_return_on_detail').data("DateTimePicker").date(e.date);
           }
        });
        
        $("#datetimepicker_return_on_detail").on("dp.change", function (e) {
            $('#datetimepicker_return_on').data("DateTimePicker").date(e.date);
        });
       
        // make sure we set return on date according to pickup date on load
        if($('#datetimepicker_return_on_detail').data("DateTimePicker") != undefined){
            $('#datetimepicker_return_on_detail').data("DateTimePicker").minDate($('#datetimepicker_pick_up_detail').data("DateTimePicker").date());
        }
        $('#datetimepicker_return_on').data("DateTimePicker").minDate($('#datetimepicker_pick_up').data("DateTimePicker").date());
        
});
