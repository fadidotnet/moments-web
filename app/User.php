<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Validator;

use App\Order;
use App\Car;
use Auth;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'fname', 'lname','photo','prefered_language','aboutme','phone','transmission','address','email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public static function boot()
    {
        parent::boot();
        static::creating(function ($user) {
            $user->token = str_random(40);
        });
    }

    public function cars(){
         return $this->hasMany(Car::class);
    }

    public function orders(){
         return $this->hasMany(Order::class);
    }

    public static function my_cars_rental_requests(){
       $cars_ids = Auth::user()->cars->pluck('id');
       return Order::whereIn('car_id',$cars_ids); 
    }


   public function deleteImage(){
        $photo_path = public_path().'/images/users/'.$this->photo;
            if($this->update(['photo'=>''])){
                is_file($photo_path)? unlink($photo_path): null;
                return true;
            }else{
                return false;
            }
    }

    public function confirmEmail()
    {
        $this->verified = true;
        $this->token = null;
        $this->save();
    }

    public function confirmsFirstTimeLogin()
    {
        if($this->first_time_login){
            $this->first_time_login = false;
            $this->save();
            return true;
        }else{
            return false;
        }
    }

    public function validator($user_id,$user)
    {
        return Validator::make($user, [
            'fname' => 'required|max:255',
            'lname' => 'required|max:255',
            'phone' => 'required|max:20',
            'address' => 'max:200',
            'aboutme' => 'max:2000',
            'email' => 'required|unique:users,id,'.$user_id,
            'main_photo' =>  'mimes:jpeg,jpg,png|max:4000',
        ]);
    }
}
