<!-- Modal -->
<div id="myModal" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Upload Photo</h4>
      </div>
      <div class="modal-body">
        <form id="photo_form" enctype="multipart/form-data" method="post" action="{{route('upload_photo')}}">
          <div class="form-group">
            <input type="file" required name="image" id="fileToUpload" onchange="fileSelected();" class="file">
            <div class="input-group col-xs-12">
              <span class="input-group-addon"><i class="glyphicon glyphicon-picture"></i></span>
              <input type="text" class="form-control input-lg" disabled placeholder="Upload Image">
              <span class="input-group-btn">
                <button class="browse btn btn-primary input-lg" type="button"><i class="glyphicon glyphicon-search"></i> Browse</button>
              </span>
            </div>
          </div>
          <div id="photo_info">
            <div id="fileName"></div>
            <div id="fileSize"></div>
            <div id="fileType"></div>
          </div>
          <div class="row" style="margin-top: 40px;text-align: center;">
            <input type="button" class="btn btn-warning" onclick="uploadFile()" value="Upload" />
          </div>
          <div style="text-align: center;margin-top:20px" id="progressNumber"></div>
        </form>
        
        @include('pages.modals.partials._submission_form')
        <div id="thank_you" class="row" style="text-align:center;margin:30px;display:none;">
          <h4>Thank You</h4>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>

  </div>
</div>

<script type="text/javascript">
      function fileSelected() {
        var file = document.getElementById('fileToUpload').files[0];
        if (file) {
          var fileSize = 0;
          if (file.size > 1024 * 1024)
            fileSize = (Math.round(file.size * 100 / (1024 * 1024)) / 100).toString() + 'MB';
          else
            fileSize = (Math.round(file.size * 100 / 1024) / 100).toString() + 'KB';
          $("#photo_info").show();
          document.getElementById('fileName').innerHTML = 'Name: ' + file.name;
          document.getElementById('fileSize').innerHTML = 'Size: ' + fileSize;
          document.getElementById('fileType').innerHTML = 'Type: ' + file.type;
        }
      }

      function uploadFile() {

        var fileName = $("#fileToUpload").val();

        if(!fileName) 
        { 
            return;
        }
        var url = $("#photo_form").attr('action');
        var fd = new FormData();
        fd.append("image", document.getElementById('fileToUpload').files[0]);
        var xhr = new XMLHttpRequest();
        xhr.upload.addEventListener("progress", uploadProgress, false);
        xhr.addEventListener("load", uploadComplete, false);
        xhr.addEventListener("error", uploadFailed, false);
        xhr.addEventListener("abort", uploadCanceled, false);
        xhr.open("POST", url);
        xhr.send(fd);
      }

      function uploadProgress(evt) {
        if (evt.lengthComputable) {
          var percentComplete = Math.round(evt.loaded * 100 / evt.total);
          document.getElementById('progressNumber').innerHTML = percentComplete.toString() + '%';
        }
        else {
          document.getElementById('progressNumber').innerHTML = 'unable to compute';
        }
      }

      function uploadComplete(evt) {
        var obj = JSON.parse(evt.target.responseText);
        console.log(obj);
        if(obj.success == 1)
        {
          $("#photo_name").val(obj.photo_name);
          $("#photo_form").hide();
          $("#info_form").show();
        }
        
        document.getElementById('progressNumber').innerHTML =  '0%';
      }

      function uploadFailed(evt) {
        alert("There was an error attempting to upload the file.");
      }

      function uploadCanceled(evt) {
        alert("The upload has been canceled by the user or the browser dropped the connection.");
      }
      
    </script>