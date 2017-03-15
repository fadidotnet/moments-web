<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Kamaln7\Toastr\Facades\Toastr;
class OrderFormRequest extends FormRequest
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
       Toastr::error('Order could not place', 'error');
        if ($this->ajax() || $this->wantsJson()){
            
            return Response::json(['errors'=>$errors]);
        }
    }

    public function rules()
    {
        switch($this->method())
        {
            case 'POST': {
                return [
                        'car_id'  =>    'required|numeric',
                        'from'    =>    'required',
                        'to'      =>    'required',
                        'status'  =>    'required|in:PENDING,REJECTED,ACCEPTED,VERIFIED'
                    ];
            }
        }    
    }
}
