<?php
namespace App\Http\Controllers;
class VueController extends Controller
{
    public function __invoke()
    {
        $sysos = $_SERVER["SERVER_SOFTWARE"];
        $server = $_SERVER;
        $sysversion = PHP_VERSION;
        return view('index/index', [
            'packages' =>$server
        ]);
    }
}
