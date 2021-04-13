<!doctype html>
<html lang="en">
<head>
<title>MENU</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900" rel="stylesheet">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
<link href="{{ asset('assets/css/styles.css') }}" rel="stylesheet">
<link rel="icon" type="image/jpg" href="../../img/user.png" />
</head>
<body>
    <div class="wrapper d-flex align-items-stretch">
        <nav id="sidebar">
    <div class="custom- menu">
             <button type="button" id="sidebarCollapse" class="btn btn-primary">
             <i class="fa fa-bars"></i>
                <span class="sr-only"></span>
             </button>
                          </div>
                   <h1><a href="index.html" class="logo">JOSTMA</a></h1>
                   <ul class="list-unstyled components mb-5">
            <li class="active">
                <a href="{{ route('home') }}"><span class="fa fa-home mr-3"></span> Inicio</a>
                    </li>
                    <ul class="acorh">
                     <li><a href="{{ route('index.product') }}"><span class="fa fa-shopping-cart mr-3"></span> Productos</a>
                     <ul>
                         <li><a href="{{ route('create.product') }}">Crear Producto</a></li>
                     </ul>
                     </li>

                     <li> <a href="{{ route('order.index') }}"><span class="fa fa-folder mr-3"></span> Ordenes</a>
                     <ul>
                     <li><a href="{{ route('create.order') }}">Crear Ordenes</a></li>
                     
                    </ul>
                    </li>

                    <li>  <a href="#"><span class="fa fa-users  mr-3"></span> Lista de usuarios</a>
                     <ul>
                
                     <li><a href="{{ route('create.product') }}">Crear usuario</a></li>
                    </ul>
                    </li>

                    <li>   <a href="#"><span class="fa fa-address-card mr-3"></span> Lista de ordenes</a>
                    </li>


</ul>

</nav>

<div id="content" class="p-4 p-md-5 pt-5">
        <center><h2 class="mb-4">MENU DE GESTIÓN DE FACTURACIÓN</h2></center>
<div class="full-box text-center" style="padding: 30px 10px;">
			<article class="full-box tile">
				<div class="full-box tile-title text-center text-titles text-uppercase">
					Productos
				</div>
				<div class="full-box tile-icon text-center">
					<i class="zmdi zmdi-account"></i>
				</div>
				<div class="full-box tile-number text-titles">
					<p class="full-box">0</p>
					<small>Registros</small>
				</div>
			</article>
			<article class="full-box tile">
				<div class="full-box tile-title text-center text-titles text-uppercase">
					Ordenes
				</div>
				<div class="full-box tile-icon text-center">
					<i class="zmdi zmdi-male-alt"></i>
				</div>
				<div class="full-box tile-number text-titles">
					<p class="full-box">0</p>
					<small>Registros</small>
				</div>
			</article>
			<article class="full-box tile">
				<div class="full-box tile-title text-center text-titles text-uppercase">
					Lista de usuarios
				</div>
				<div class="full-box tile-icon text-center">
					<i class="zmdi zmdi-face"></i>
				</div>
				<div class="full-box tile-number text-titles">
					<p class="full-box">0</p>
					<small>Registros</small>
				</div>
			</article>
			<article class="full-box tile">
				<div class="full-box tile-title text-center text-titles text-uppercase">
					Listas de ordenes
				</div>
				<div class="full-box tile-icon text-center">
					<i class="zmdi zmdi-male-female"></i>
				</div>
				<div class="full-box tile-number text-titles">
					<p class="full-box">0</p>
					<small>Registros</small>
				</div>
			</article>
		</div>
<script src="../../js/jquery.min.js"></script>
<script src="../../js/popper.js"></script>
<script src="../../js/bootstrap.min.js"></script>
<script src="../../js/main.js"></script>
</body>
</html>
