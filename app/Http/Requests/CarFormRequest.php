<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Response;
class CarFormRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */

    public function response(array $errors){

        if ($this->ajax() || $this->wantsJson()){
            return Response::json(['errors'=>$errors]);
        }
    }

    public function rules()
    {
        switch($this->method())
        {
            case 'PATCH': {

               if($this->get('form')=='1'){
                   return [
                    'title'      => 'required|max:50',
                    'location'   => 'required|max:100',
                    'price'      => 'required|numeric',
                    'car_type'   => 'required',
                    'car_number_plate' => 'required',
                    'manufacture_id' => 'required',
                    'model' => 'required',
                  ];
               }else if($this->get('form')=='3'){
                   return [
                    'cover_photo' =>   'mimes:jpeg,jpg,png|max:4000',
                    'gallery.*'   =>   'mimes:jpeg,jpg,png|max:4000',
                    'video_url'   =>   array('regex:/((https:\/\/www\.youtube\.com\/watch\?v=.+)|(https:\/\/www\.youtube\.com\/embed\/.+))/')  
                ];

               }else if($this->get('form')=='4'){
                   return [
                            'mileage_limit_day'    => 'required|numeric|min:0',
                            'mileage_limit_month'  => 'required|numeric|min:0',
                            'mileage_limit_week'   => 'required|numeric|min:0',
                            'kilometer'            => 'required|numeric|min:0'
                        ];
               }else if($this->get('form')=='2'){
                   return [];
               }
            }
          case 'POST': {
              if($this->get('form')=='1'){
                  $this['main_photo'] ='';
                  $this['registration_number']='';
                   return [
                    'title'      => 'required|max:50',
                    'location'   => 'required|max:100',
                    'price'      => 'required|numeric',
                    'car_type'   => 'required',
                    'car_number_plate' => 'required',
                    'manufacture_id' => 'required',
                    'model' => 'required',
                  ];
               }
          }  
            
            default:break;
        }
       
    }
}
