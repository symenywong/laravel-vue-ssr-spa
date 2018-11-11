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
    private function getPackages(): array
    {
      $path = public_path('packages.json');
      $contents = file_get_contents($path);
      return json_decode($contents, true);
    }
}
