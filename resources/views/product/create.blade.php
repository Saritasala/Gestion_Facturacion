<!doctype html>
<html lang="en">
<head>
<title>Crear Producto</title>
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
    <div class="header pb-2 pt-2">
        <div class="container-fluid">
            <div class="header-body">
                <div class="row align-items-center py-4">
                    <div class="col text-left">
                        <nav aria-label="breadcrumb" class="d-none d-md-inline-block">
                            <ol class="breadcrumb breadcrumb-links breadcrumb-dark">
                                <li class="breadcrumb-item"><a href="{{route('home')}}"><i
                                            class="fa fa-home mr-3"></i></a></li>
                                <li class="breadcrumb-item"><a
                                        href="{{route('index.product')}}">Productos</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Crear</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div class="container-fluid mt--2">
        @if ($errors->any())
        <div class="alert alert-danger">
            @foreach ($errors->all() as $error)
            - {{ $error }} <br>
            @endforeach
        </div>
        @endif
        <form action="" method="POST" enctype="multipart/form-data">
            <input type="hidden" name="" value="">
            <div class="row mt-5">
                <div class="col-4">
                    <div class="card">
                        <img class="card-img-top imgUpdate"
                            src="https://scotturb.com/wp-content/uploads/2016/11/product-placeholder.jpg"
                            alt="Card image cap">
                        <div class="card-body text-success">
                            <h5 class="card-title">Datos del producto</h5>
                            <div class="form-group">
                                <label>Imagen *</label>
                                <br>
                                <input type="file" name="imgProduct" class="form-control inputImg">
                            </div>
                            <div class="form-group">
                                <label>Descripción</label>
                                <textarea name="description" cols="30" rows="5"
                                    class="form-control"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-8">
                    <div class="card bg-secondary shadow mb-3">
                        <div class="card-header bg-white border-0">
                            <h3 class="mb-0">Características del producto</h3>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="form-group">
                                    <label>Nombre *</label>
                                    <input type="text" name="name" class="form-control" placeholder="Nombre del producto"
                                        value="">
                                </div>
                                <div class="form-group">
                                    <label>Precio *</label>
                                    <div class="input-group">
                                        <input name="value" type="number" class="form-control" placeholder="Precio" required
                                            value="">
                                    </div>
                                </div>
                            
                                <div class="form-group">
                                    <label>Cantidad *</label>
                                    <div class="input-group">
                                        
                                        <input name="quantity" type="number" class="form-control" placeholder="Cantidad"
                                            required value="">
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="btn btn-info btn-block mt-4"> Guardar </button>
                </div>
            </div>
        </form>
    </div>

    
    @push('js')
    
    @endpush
    

<script src="../../js/jquery.min.js"></script>
<script src="../../js/popper.js"></script>
<script src="../../js/bootstrap.min.js"></script>
<script src="../../js/main.js"></script>
</body>
</html>
