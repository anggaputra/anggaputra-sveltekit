<script>
	import "../styles/app.scss";
	import "../styles/style.css";
	import Navbar from "$lib/components/Navbar.svelte";
</script>

<div class="container-fluid hero-section push blogpage">
	<div class="row">
		<div class="col-lg-2  col-xs-12">
			<Navbar />
		</div>
		<div class="col-lg-10 col-xs-12">
			<div class="row">
				<div class="page-content col-lg-8 col-xs-12">
					<slot />
				</div>
			</div>
		</div>
	</div>
</div>
