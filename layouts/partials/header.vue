<template>
	<header id="site_header" class="header mobile-menu-hide">
        <div class="my-photo">
          	<img src="/web/images/dandy.jpg" alt="image">
          	<div class="mask"></div>
        </div>

        <div class="site-title-block">
          	<h1 class="site-title">Dandy Pérez</h1>
          	<p class="site-description">Web Developer</p>
        </div>

        <!-- Navigation & Social buttons -->
        <div class="site-nav">
          	<!-- Main menu -->
          	<ul id="nav" class="site-main-menu">
	            <li>
	              <nuxt-link to="/" @click.native="rotateText">Inicio</nuxt-link>
	            </li>
	            <li>
	              <nuxt-link to="/sobre-mi">Sobre mi</nuxt-link>
	            </li>
	            <li>
	              <nuxt-link to="/perfil" @click.native="addClassJs">Mi perfil</nuxt-link>
	            </li>
	            <!-- <li>
	              <nuxt-link to="/portafolio">Portafolio</nuxt-link>
	            </li>
	            <li>
	              <nuxt-link to="/blog">Blog</nuxt-link>
	            </li> -->
	            <li>
	              <nuxt-link to="/contactame">Contáctame</nuxt-link>
	            </li>
          	</ul>
          	<!-- /Main menu -->

          	<!-- Social buttons -->
          	<ul class="social-links">
	            <li><a class="tip social-button" href="https://twitter.com/edandyy" target="_blank" title="Twitter"><i class="fa fa-twitter"></i></a></li>
	            <li><a class="tip social-button" href="https://www.facebook.com/edandy.perez" target="_blank" title="Facebook"><i class="fa fa-facebook"></i></a></li>
	            <li><a class="tip social-button" href="https://www.linkedin.com/in/dandy-perez/" target="_blank" title="Linkedin"><i class="fa fa-linkedin"></i></a></li>
	            <!--<li><a class="tip social-button" href="#" title="Youtube"><i class="fa fa-youtube"></i></a></li>-->
	            <!--<li><a class="tip social-button" href="#" title="last.fm"><i class="fa fa-lastfm"></i></a></li>-->
	            <!--<li><a class="tip social-button" href="#" title="Dribbble"><i class="fa fa-dribbble"></i></a></li>-->
          	</ul>
          	<!-- /Social buttons -->
        </div>
        <!-- Navigation & Social buttons -->
    </header>
</template>

<script>
	export default{
		methods: {
			rotateText() {
				setTimeout(function(){
					$.fn.extend({rotaterator:function(options){var defaults={fadeSpeed:500,pauseSpeed:100,child:null};
					var options=$.extend(defaults,options);return this.each(function(){var o=options;var obj=$(this);var items=$(obj.children(),obj);items.each(function(){$(this).hide();});if(!o.child){var next=$(obj).children(':first');}else{var next=o.child;}
					$(next).fadeIn(o.fadeSpeed,function(){$(next).delay(o.pauseSpeed).fadeOut(o.fadeSpeed,function(){var next=$(this).next();if(next.length===0){next=$(obj).children(':first');}
					$(obj).rotaterator({child:next,fadeSpeed:o.fadeSpeed,pauseSpeed:o.pauseSpeed});});});});}});
			  		$('#rotate').rotaterator({fadeSpeed:800,pauseSpeed:1900});
		  		}, 100);	
			},
			addClassJs() {
				/*$('.pt-page').addClass('js');
				$('.pt-page .skill-percentage').css('width', 0);*/
			}
		}
	}
</script>