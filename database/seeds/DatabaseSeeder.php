<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call(ClearDbSeed::class);
        $this->call(UsersTableSeeder::class);
        $this->call(ManufactureTableSeeder::class);
        $this->call(CarsTableSeeder::class);
    }
}
