import pkg from './package'
import webpack from 'webpack'
require("dotenv").config();
export default {
    // mode: 'universal',

  /*
  ** Headers of the page
  */
    head: {
        title: 'Dandy Pérez | Web Developer - Ing. Sistemas',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Desarrollo de aplicaciones web, páginas administrables, tiendas, pasarelas de pagos, aplicaciones moviles, apps' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', type: 'text/css', href: 'web/css/bootstrap.css' },
            { rel: 'stylesheet', type: 'text/css', href: 'web/css/normalize.css' },
            { rel: 'stylesheet', type: 'text/css', href: 'web/css/transition-animations.css' },
            { rel: 'stylesheet', type: 'text/css', href: 'web/css/owl.carousel.css' },
            { rel: 'stylesheet', type: 'text/css', href: 'web/css/magnific-popup.css' },
            { rel: 'stylesheet', type: 'text/css', href: 'web/css/animate.css' },
            { rel: 'stylesheet', type: 'text/css', href: 'web/css/main.css' }
        ],
        script: [
            { src: 'web/js/jquery-2.1.3.min.js' },
            { src: 'web/js/modernizr.custom.js' },
            { src: 'web/js/bootstrap.min.js' },
            /*{ src: 'web/js/page-transition.js' },*/
            { src: 'web/js/imagesloaded.pkgd.min.js' },
            { src: 'web/js/validator.js' },
            { src: 'web/js/jquery.shuffle.min.js' },
            { src: 'web/js/masonry.pkgd.min.js' },
            { src: 'web/js/owl.carousel.min.js' },
            { src: 'web/js/jquery.magnific-popup.min.js' },
            { src: 'web/js/jquery.hoverdir.js' },
            { src: 'web/js/main.js' },
            { src: 'web/js/sendForm.js' }
        ]
    },

    /*
    ** Customize the progress-bar color
    */
    loading: { color: '#fff' },

  /*
  ** Global CSS
  */
    css: [
    ],

  /*
  ** Plugins to load before mounting the App
  */
    plugins: [
      '~/plugins/axios',
      // '~/plugins/formValidation',      
    ],

  /*
  ** Nuxt.js modules
  */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        "@nuxtjs/dotenv"
    ],
  /*
  ** Axios module configuration
  */
    axios: {
        // See https://github.com/nuxt-community/axios-module#options
    },
    
    router: {
      trailingSlash: false
    },
  /*
  ** Build configuration
  */
    build: {
        /*vendor: [
            'jquery',
        ],
        plugins: [
            new webpack.ProvidePlugin({
                '$': 'jquery',
                'jQuery': 'jquery',
                'window.jQuery': 'jquery',
            })
        ],*/
        /*
        ** You can extend webpack config here
        */
        extend(config, ctx) {
        }
    }
}