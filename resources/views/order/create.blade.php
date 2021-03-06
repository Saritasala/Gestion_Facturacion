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
                                        href="{{route('order.index')}}">Ordenes</a></li>
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
        <form action="{{ route('categories.store') }}" enctype="multipart/form-data" method="post">
            @csrf
            <div class="row mt-5">
                <div class="col-5">
                    <div class="card card-profile shadow mb-3">
                        <div class="row justify-content-center">
                            <div class="col-lg-3 order-lg-2">
                                <div class="card-profile-image">
                                    <img class="profile-user-img img-fluid mx-auto d-block imgUpdate"
                                        src="https://scotturb.com/wp-content/uploads/2016/11/product-placeholder.jpg"
                                        alt="User profile picture">
                                </div>
                            </div>
                        </div>
                        <div class="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4"></div>
                        <div class="card-body pt-0 pt-md-4">
                            <div class="row">
                                <div class="col">
                                    <div class="card-profile-stats d-flex justify-content-center mt-md-5">
                                        <div class="form-group">
                                            <label>Imagen *</label>
                                            <input type="file" name="img_category" class="form-control inputImg">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card mt-2">
                        <div class="card-body">
                            <label>Tipo de categor??a</label>
                            <small>Subcategor??a require una categor??a padre</small>
                            <div class="form-group mb-0">
                                <div class="custom-control custom-radio custom-control-inline">
                                    <input type="radio" value="cat1" id="cat1" name="radioCategoryType" checked
                                        class="custom-control-input radioCategoryTypes">
                                    <label class="custom-control-label" for="cat1">Categor??a principal</label>
                                </div>
                                <div class="custom-control custom-radio custom-control-inline">
                                    <input type="radio" value="cat2" id="cat2" name="radioCategoryType"
                                        class="custom-control-input radioCategoryTypes">
                                    <label class="custom-control-label" for="cat2">Subcategor??a</label>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                   
                    <div class="card mt-2 ">
                        <div class="card-body">
                            <label class="mt-0 mb-0">Categor??a padre (Opcional)</label><br>
                            <small>Las categor??as listadas no tienen productos asignados</small>
                            <div class="row mt-2">
                               
                                <div class="col-6">
                                    <div class="custom-control custom-radio">
                                        <input type="radio" id="" disabled name="parent_id"
                                            value="" class="custom-control-input categoryRadios">
                                        <label class="custom-control-label"
                                            for="">{</label>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div class="col-7">
                    @if ($errors->any())
                    <div class="alert alert-danger">
                        @foreach ($errors->all() as $error)
                        - {{ $error }} <br>
                        @endforeach
                    </div>
                    @endif
                    @if (Session::has('success'))
                    <div class="alert alert-success">
                        Categor??a creada existosamente
                    </div>
                    @endif
                    <div class="card bg-secondary shadow">
                        <div class="card-header bg-white border-0">
                            <div class="row align-items-center">
                                <h3 class="mb-0">Crear categor??a de producto</h3>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col">
                                    <div class="form-group">
                                        <label>Nombre *</label>
                                        <input type="text" name="name" id="input-name" class="form-control"
                                            value="" placeholder="Nombre de la categor??a" required>
                                    </div>
                                </div>
                               
                                <div class="col">
                                    <div class="form-group">
                                        <label>Comercio *</label>
                                        <select name="commerce_id" class="selecttwo form-control selectCommerce" required>
                                            <option value="" selected disabled>Seleccione un comercio</option>
                                           
                                            <option value="">
                                            </option>
                                            
                                        </select>
                                    </div>
                                </div>
                                
                                <input type="hidden" name="" value="">
                                
                            </div>
                            <!-- <div class="form-group">
                                                    <label>Imagen *</label>
                                                    <input type="file" name="img_category" class="form-control inputImg" id="img_category" required lang="en">
                                                </div> -->
                            <div class="form-group">
                                <label>Descripci??n</label>
                                <textarea name="description" class="form-control" placeholder="Descripci??n"
                                    id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <button type="submit" class="btn btn-success btn-block"> <i class="fat-add"></i> A??adir
                                Orden </button>
                        </div>
                    </div>
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
