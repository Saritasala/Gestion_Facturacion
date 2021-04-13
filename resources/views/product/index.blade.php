<!doctype html>
<html lang="en">
<head>
<title>Listado de productos</title>
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
    <div class="custom-menu">
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
             <li><a href="{{ route('index') }}"><span class="fa fa-shopping-cart mr-3"></span> Productos</a>
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


        <h1 class="centrado">Lista de Productos</h1>

        <div class="">
    <a class="btn btn-submit creacion" href="{{route('create.product')}}" style="color:'white';">Crear producto</a>
</div>

<div class="table-responsive">
	<table id="userList" class="table align-items-center table-bordered table-hover table-striped">
		<thead class="styled-table">
		<tr>
			<th scope="col">Numero</th>
			<th scope="col">Fecha</th>
			<th scope="col">Creador</th>
			<th scope="col">empleado</th>
			<th scope="col">E-mail</th>
			<th></th>
		</tr>
		</thead>
		<tbody>
		<tr>
			<th scope="row">1</th>
			<td>15-04-2021</td>
			<td>Ruiz</td>
			<td>c.r.username</td>
			<td>c.r.username@blog.com</td>
			<td>
				<a class="btn btn-sm btn-warning" href="{{route('edit.product')}}"><i class="fas fa-edit"></i> Editar</a>
                <button class="btn btn-sm btn-danger btnDeleteProduct"><i class="fas fa-trash-alt"></i> Eliminar</button>
			</td>
		</tr>
		</tbody>
	</table>














</div>




<script src="../../js/jquery.min.js"></script>
<script src="../../js/popper.js"></script>
<script src="../../js/bootstrap.min.js"></script>
<script src="../../js/main.js"></script>
</body>
</html>
