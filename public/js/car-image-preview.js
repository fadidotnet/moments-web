document.getElementById('gallery_selector').addEventListener('change', handleFileSelect, false);
// document.getElementById('clear')
function handleFileSelect(event){
    if(window.File && window.FileList && window.FileReader)
    {      
        // console.log('supoort')
            // $('#gallery_images').change(function(event) {
                console.log('change');
                var files = event.target.files; //FileList object
                var output = document.getElementById("selected_gallery");
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
                        $('#clear, #result').show();
                        picReader.readAsDataURL(file);
                        }else{
                            alert("Image Size is too big. Minimum size is 2MB.");
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


//    document.getElementById('gallery').on("change", function() {
        
//     });

  $('#gallery_selector').on("change", function() {
         $('#selected_gallery').empty();
        // $('result').hide();
            //  $(this).val("");
    });

    $('#clear').on("click", function() {
        $('#selected_gallery').empty();
        // $('#result').hide();
  document.getElementById('gallery_selector').val("");
        $(this).hide();
    });


// ->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


document.getElementById('cover_photo_selector').addEventListener('change', handleCoverPhotoSelect, false);
// document.getElementById('clear')
function handleCoverPhotoSelect(event){
    if(window.File && window.FileList && window.FileReader)
    {
       
        // console.log('supoort')
            // $('#gallery_images').change(function(event) {
                console.log('change');
                var files = event.target.files; //FileList object
                var output = document.getElementById("cover_photo_section");
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
                        $('#clear_cover_photo').show();
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


 $('#cover_photo_selector').on("change", function() {
        $('#cover_photo_section').empty();
        // $('result').hide();
        // $(this).val("");
    });

    $('#clear_cover_photo').on("click", function() {
        $('#cover_photo_section').empty();
        // $('#result').hide();
        $('#cover_photo_selector').val("");
        $(this).hide();
    });




