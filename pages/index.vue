<template>
  	<!-- Home Subpage data-id="home"-->
    <section class="pt-page pt-page-1 section-with-bg section-paddings-0" :style="{ 'background-image': 'url(' + bgImg + ')' }">
      	<div class="home-page-block-bg">
        	<div class="mask"></div>
      	</div>
      	<div class="home-page-block">
        	<div class="v-align">
          		<h2>Dandy Pérez</h2>
          		<div id="rotate" class="text-rotate">
		            <div>
		              <p class="home-page-description">Full Stack Developer</p>
		            </div>
					<div>
		              <p class="home-page-description">Web Designer</p>
		            </div>
		            <div>
		              <p class="home-page-description">Web Developer</p>
		            </div>
		            <div>
		              <p class="home-page-description">backend Developer</p>
		            </div>
		            <div>
		              <p class="home-page-description">Frontend Developer</p>
		            </div>
		        </div>

	          	<div class="block end" style="text-align: center">
		            <ul class="info-list">
						<li><span class="title">Profesión</span><span class="value">Ing. de Sistemas</span></li>
						<li><span class="title">Dirección</span><span class="value">Calle Neptuno 177, San Roque - Santiago de Surco</span></li>
						<li><span class="title">Email</span><span class="value"><a href="#"><span class="__cf_email__">edandy.perez@gmail.com</span></a></span></li>
						<li><span class="title">Celular</span><span class="value">+51 955 106 414</span></li>
						<li><span class="title">Freelance</span><span class="value available">Disponible</span></li>
		            </ul>
	          	</div>
	        </div>
      	</div>
    </section>
    <!-- End of Home Subpage -->
</template>

<script>
	var bgImg = '/web/images/home_page_bg_2.jpg'
	export default {
		data() {
			return {
				bgImg: bgImg
			}
		}
	}
</script>