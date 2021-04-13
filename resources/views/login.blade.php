<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Gestion | Facturacion</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">

		<!-- STYLE CSS -->
		<link rel="stylesheet" href="css/style.css">
	</head>

	<body>

		<div class="wrapper">
			<div class="inner">
				<div class="image-holder">
					<img src="img/registro.jpg" alt="">
				</div>
				<form role="form" action="{{route('login.login')}}" method="POST" autocomplete="off">
					@csrf
					
					<h3>Iniciar sesion</h3>

					<div class="form-holder">
						<input type="text" name="email" placeholder="e-mail" class="form-control">
					</div>
					<div class="form-holder">
						<input type="password" name="password" placeholder="Password" class="form-control" style="font-size: 15px;">
					</div>
					<div class="checkbox">
						<label>
							<input type="checkbox" checked> I agree all statement in <a href="#">Terms & Conditions</a>
							<span class="checkmark"></span>
						</label>
					</div>
					
					<div class="form-login">
						<button>Sign up</button>
						<!--
						<p>Crear una cuenta? <a href="">Registrarte</a></p>
						-->
						<br>
					</div>
					<br>
				
				</form>
			</div>
		</div>

		<script src="js/jquery-3.3.1.min.js"></script>
		<script src="js/main.js"></script>
	</body><!-- This templates was made by Colorlib (https://colorlib.com) -->
</html>
