
// ->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


document.getElementById('user_photo_selector').addEventListener('change', handleUserPhotoSelect, false);
// document.getElementById('clear')
function handleUserPhotoSelect(event){
    if(window.File && window.FileList && window.FileReader)
    {
       
        // console.log('supoort')
            // $('#gallery_images').change(function(event) {
                console.log('change');
                var files = event.target.files; //FileList object
                var output = document.getElementById("user_photo_section");
                // console.log(files);
                for(var i = 0; i< files.length; i++){

                    var file = files[i];
                    //Only pics
                    // if(!file.type.match('image'))
                    if(file.type.match('image.*')){
                        if(this.files[0].size < 3097152){    
                    // continue;
                        var picReader = new FileReader();
                        picReader.addEventListener("load",function(event){
                            var picFile = event.target;
                            var span = document.createElement("span");
                            var image ="<span>"
                                        + "<label style='margin-bottom:25px' class='b-submit__main-file-label btn m-btn wow zoomInUp' data-wow-delay='0.3s'>" 
                                        +    "<div class='b-items__cars-one-img' style = 'width: 170px;height: 120px;position: relative;float: left;'>"
                                        +    "<img style='width: 160px;height: 121px;' src='" + picFile.result + "'" +"title='preview image'/>"
                                        +    "</div>"
                                        + "</label>"
                                        +"</span>";

                            span.innerHTML = image;
                            output.insertBefore(span,null);            
                        });
                        //Read the image
                        $('#clear_user_photo').show();
                        picReader.readAsDataURL(file);
                        }else{
                            alert("Image Size is too big. Minimum size is 3MB.");
                            $(this).val("");
                        }
                    }else{
                    alert("You can only upload image file.");
                    $(this).val("");
                }
                }                               
            
            // });
        }
        else{
            console.log("Your browser does not support File API");
        }
}


 $('#user_photo_selector').on("change", function() {
        $('#user_photo_section').empty();
        // $('result').hide();
        // $(this).val("");
    });

    $('#clear_user_photo').on("click", function() {
        $('#user_photo_section').empty();
        // $('#result').hide();
        $('#user_photo_selector').val("");
        $(this).hide();
    });
