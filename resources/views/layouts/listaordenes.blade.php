<!doctype html>
<html lang="en">
<head>
<title>LISTA ORDENES</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900" rel="stylesheet">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" href="../../css/style.css">
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
                <a href="#"><span class="fa fa-home mr-3"></span> Inicio</a>
                    </li>
                    <ul class="acorh">
                     <li><a href="#"><span class="fa fa-shopping-cart mr-3"></span> Productos</a>
                     <ul>
                         <li><a href="">Crear Producto</a></li>
                         <li><a href="">Editar Producto</a></li>
                     </ul>
                     </li>

                     <li> <a href="#"><span class="fa fa-folder mr-3"></span> Ordenes</a>
                     <ul>
                     <li><a href="">Crear Ordenes</a></li>
                     <li><a href="">Editar Ordenes</a></li>
                    </ul>
                    </li>

                    <li>  <a href="#"><span class="fa fa-users  mr-3"></span> Lista de usuarios</a>
                     <ul>
                     <li><a href="">Editar usuario</a></li>
                     <li><a href="">Crear usuario</a></li>
                    </ul>
                    </li>

                    <li>   <a href="#"><span class="fa fa-address-card mr-3"></span> Lista de ordenes</a>
                     <ul>
                     <li><a href="">Editar ordenes</a></li>

                    </ul>
                    </li>


</ul>

</nav>

<div id="content" class="p-4 p-md-5 pt-5">


        <h1 class="centrado">LISTA ORDENES</h1>

        <div class="">
    <button type="submit" class="creacion">Crear Ordenes</button>
</div>

<div class="table-responsive">
	<table id="userList" class="table table-bordered table-hover table-striped">
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
				<a href="#"><i class="fa fa-edit"></i>ver</a> | <a href="#"><i class="fa fa-user-times">editar</i></a>| <a href="#"><i class="fa fa-trash">eliminar</i></a>
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
