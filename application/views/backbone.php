<!DOCTYPE html>
<html lang="en" class="app">
<head>
<meta charset="utf-8" />
<title>Story | Web Application</title>
<meta name="description"
	content="app, web app, responsive, admin dashboard, admin, flat, flat ui, ui kit, off screen nav" />
<meta name="viewport"
	content="width=device-width, initial-scale=1, maximum-scale=1" />
<link rel="stylesheet"
	href="<?php echo base_url()?>theme/css/bootstrap.css" type="text/css" />
<link rel="stylesheet"
	href="<?php echo base_url()?>theme/css/animate.css" type="text/css" />
<link rel="stylesheet"
	href="<?php echo base_url()?>theme/css/font-awesome.min.css"
	type="text/css" />
<link rel="stylesheet"
	href="<?php echo base_url()?>theme/css/simple-line-icons.css"
	type="text/css" />
<link rel="stylesheet" href="<?php echo base_url()?>theme/css/font.css"
	type="text/css" />
<link rel="stylesheet" href="<?php echo base_url()?>theme/css/app.css"
	type="text/css" />
<link rel="stylesheet" href="<?php echo base_url()?>css/style.css"
	type="text/css" />
<!--[if lt IE 9]>
    <script src="<?php echo base_url()?>theme/js/ie/html5shiv.js"></script>
    <script src="<?php echo base_url()?>theme/js/ie/respond.min.js"></script>
    <script src="<?php echo base_url()?>theme/js/ie/excanvas.js"></script>
  <![endif]-->
</head>
<body class="container">
	<section class="vbox">
		<header id="navigate"
			class="bg-white-only header header-md navbar navbar-fixed-top-xs"> </header>
		<section>
			<section class="hbox stretch">
				<!-- .aside -->
				<aside class="bg-black dk nav-xs aside hidden-print" id="nav">
					<section class="vbox">
						<section class="scrollable">
							<div class="slim-scroll" data-height="auto"
								data-disable-fade-out="true" data-distance="0" data-size="10px"
								data-railOpacity="0.2">

								<!-- nav -->
								<nav id="menu" class="nav-primary hidden-xs"></nav>
								<!-- / nav -->
							</div>
						</section>

					</section>
				</aside>
				<!-- /.aside -->
				<section id="content"></section>
			</section>
		</section>
	</section>
	<script src="<?php echo base_url()?>theme/js/jquery.min.js"></script>
	<!-- Bootstrap -->
	<script src="<?php echo base_url()?>theme/js/bootstrap.js"></script>
	<!-- App -->
	<script src="<?php echo base_url()?>theme/js/app.js"></script>
	<script
		src="<?php echo base_url()?>theme/js/slimscroll/jquery.slimscroll.min.js"></script>
	<script
		src="<?php echo base_url()?>theme/js/wizard/jquery.bootstrap.wizard.js"></script>

	<!-- wysiwyg -->
	<script src="<?php echo base_url()?>theme/js/wysiwyg/jquery.hotkeys.js"></script>
	<script src="<?php echo base_url()?>theme/js/wysiwyg/bootstrap-wysiwyg.js"></script>

	<script src="<?php echo base_url()?>theme/js/app.plugin.js"></script>
	<script src="<?php echo base_url()?>script/libs/require.js"
		data-main="/script/main.js?<?php echo time(); ?>"></script>
</body>
</html>