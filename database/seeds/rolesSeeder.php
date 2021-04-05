<?php
use App\roles;
use Illuminate\Database\Seeder;

class rolesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        roles::create([
            'name' => 'Administrador',
            'unique' => 1,
            'state'=> 1
        ]);
        roles::create([
            'name' => 'Empleado',
            'unique' => 2, 
            'state'=> 1
        ]);
       
    }
}
