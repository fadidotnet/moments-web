<?php

use Illuminate\Database\Seeder;
use App\Manufacture;
use App\Car;
use App\User;

class ClearDbSeed extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Car::getQuery()->delete(); //delete all records from car table, before seeding of cars table
        Manufacture::getQuery()->delete();//delete all records from Manufactures table, before seeding of Manufactures table
        User::getQuery()->delete(); //delete all records from user table, before seeding of users table
    }
}
