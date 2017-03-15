<?php 

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Http\Input;
use Illuminate\Http\Validator;
use Illuminate\Http\Redirect;
use Illuminate\Http\Session;
class ApplyController extends Controller 
{
  public function upload(Request $request) 
  {
    if($request->hasFile('image')) 
    {
      $file = $request->file('image');
      $filename = time() . '_' . uniqid() .rand(11111,99999). '.' . $file->getClientOriginalExtension();
      $file->move('uploads', $filename);
    
      echo json_encode(array('success' => 1, 'message' => 'File uploaded successfully.','photo_name' => $filename));
      die();
    }
    else 
    {
      echo json_encode(array('success' => 0, 'message' => 'Uploaded file is not valid.'));
      die();
    }
  }
}