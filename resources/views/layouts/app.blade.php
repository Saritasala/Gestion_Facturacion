<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Gestion de facturacion</title>
    <link href="https://cdn.jsdelivr.net/npm/@ttskch/select2-bootstrap4-theme@1.3.4/dist/select2-bootstrap4.min.css"
        rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-beta.1/dist/css/select2.min.css" rel="stylesheet">
    <!-- Favicon -->
    {{-- <link href="{{ asset('argon') }}/img/brand/big-logo.png" rel="icon" type="image/png"> --}}
    <!-- Fonts -->
    {{-- <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet"> --}}
    <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">
    <!-- Icons -->
    <link href="{{ asset('argon') }}/vendor/nucleo/css/nucleo.css" rel="stylesheet">
    <link href="{{ asset('argon') }}/vendor/@fortawesome/fontawesome-free/css/all.min.css" rel="stylesheet">
    <!-- Argon CSS -->
    <link type="text/css" href="{{ asset('argon') }}/css/argon.css?v=1.0.0" rel="stylesheet">
    <link href="{{ asset('assets/css/styles.css') }}" rel="stylesheet">
    @yield('css')
</head>

<body class="{{ $class ?? '' }}">

    <nav class="navbar navbar-vertical fixed-left navbar-expand-md navbar-light bg-white" id="sidenav-main">
        <div class="container-fluid">
            <!-- Toggler -->
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#sidenav-collapse-main"
                aria-controls="sidenav-main" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <!-- Brand -->
            <a class="navbar-brand pt-0" href="/">
            </a>
            <!-- User -->
            <ul class="nav align-items-center d-md-none">
                <li class="nav-item dropdown">
                    <a class="nav-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false">
                        <div class="media align-items-center">
                            <span class="avatar avatar-sm rounded-circle">
                                <img alt="Image placeholder" src="{{asset('argon') . '/img/brand/logo_factura.png' }}">
                            </span>
                        </div>
                    </a>
                    <div class="dropdown-menu dropdown-menu-arrow dropdown-menu-right">

                        <a href="{{ route('home') }}" class="dropdown-item">
                            <i class="ni ni-single-02"></i>
                            <span>Mi perfil</span>
                        </a>


                        <a href="{{ route('home') }}" class="dropdown-item">
                            <i class="fas fa-users"></i>
                            <span>Usuarios</span>
                        </a>
                        <a href="{{ route('home') }}" class="dropdown-item">
                            <i class="fas fa-lock"></i>
                            <span>Permisos</span>
                        </a>
                        <div class="dropdown-divider"></div>
                        <a href="/" class="dropdown-item" onclick="event.preventDefault();
                  document.getElementById('logout-form').submit();">
                            <i class="ni ni-user-run"></i>
                            <span>Cerrar sesión</span>
                        </a>
                    </div>
                </li>
            </ul>
            <!-- Collapse -->
            <div class="collapse navbar-collapse" id="sidenav-collapse-main">
                <!-- Collapse header -->
                <div class="navbar-collapse-header d-md-none">
                    <div class="row">
                        <div class="col-6 collapse-brand">
                            <a href="/">
                                <img src="{{asset('argon') . '/img/brand/logo_factura.png' }}">
                            </a>
                        </div>
                        <div class="col-6 collapse-close">
                            <button type="button" class="navbar-toggler" data-toggle="collapse"
                                data-target="#sidenav-collapse-main" aria-controls="sidenav-main" aria-expanded="false"
                                aria-label="Toggle sidenav">
                                <span></span>
                                <span></span>
                            </button>
                        </div>
                    </div>
                </div>
                <!-- Navigation -->
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="/administrator">
                            <i class="color-session fas fa-chart-line text-info"></i> Productos
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="{{ route('home') }}">
                            <i class="color-session fas fa-store text-info"></i> Ordenes
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="{{ route('home') }}">
                            <i class="color-session fas fa-store text-info"></i> Listado de usuarios
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="{{ route('home') }}">
                            <i class="color-session fas fa-shopping-cart text-info"></i> Listado de ordenes
                        </a>
                    </li>

                </ul>
            </div>
        </div>
    </nav>

    <div class="main-content">
        <nav class="navbar navbar-top navbar-expand-md navbar-dark" id="navbar-main">
            <div class="container-fluid">
                <!-- Brand -->
                <a class="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block" href="/"></a>
                <!-- User -->

                <ul class="navbar-nav align-items-center d-none d-md-flex">

                    <li class="nav-item dropdown">
                        <a class="nav-link pr-0" href="#" role="button" data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false">
                            <div class="media align-items-center">
                                <div class="media-body ml-2 d-none d-lg-block">
                                    <span class="mb-0 text-sm  font-weight-bold">

                                    </span>
                                </div>
                            </div>
                        </a>
                        <div class="dropdown-menu dropdown-menu-arrow dropdown-menu-right">

                            <a href="{{route('home')}}" class="dropdown-item">
                                <i class="ni ni-single-02"></i>
                                <span>Mi perfil</span>
                            </a>




                            <a href="{{ route('home') }}" class="dropdown-item">
                                <i class="fas fa-users"></i>
                                <span>Usuarios</span>
                            </a>



                            <a href="{{ route('home') }}" class="dropdown-item">
                                <i class="fas fa-lock"></i>
                                <span>Permisos</span>
                            </a>

                            <div class="dropdown-divider"></div>
                            <a href="/" class="dropdown-item" onclick="event.preventDefault();
                  document.getElementById('').submit();">
                                <i class="ni ni-user-run"></i>
                                <span>Cerrar sesión</span>
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>

        @yield('content')

    </div>


    <script src="{{ asset('argon') }}/vendor/jquery/dist/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-beta.1/dist/js/select2.min.js"></script>
    <script src="{{ asset('argon') }}/vendor/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
    @stack('js')
    <script>
        $(document).ready(function() {
   $('.selecttwo').select2({
      theme: 'bootstrap4',
      /* dropdownParent: $("#createEmployes",) */
   });
});

    </script>


    <!-- Argon JS -->
    <script src="{{ asset('argon') }}/js/argon.js?v=1.0.0"></script>
    <script src="{{ asset('/js/app.js') }}"></script>
    <script src="{{ asset('js') }}/payU.js"></script>
    <script
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA01EIKVqGmy9BAhcDyT-nsJsLtBUbU_gA&libraries=places&callback=initMap">
    </script>
</body>
<footer class=" ml-8  pt-4">

    <!-- Copyright -->

    <!-- Copyright -->

</footer>

</html>
