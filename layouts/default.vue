<template>
    <div id="appweb">
        <!-- Loading animation -->
        <div class="preloader">
            <div class="preloader-animation">
                <div class="dot1"></div>
                <div class="dot2"></div>
            </div>
        </div>
        <!-- /Loading animation -->

        <div id="page" class="page">
            <!-- Header -->
            <header-page />
            <!-- /Header -->

            <!-- Mobile Header -->
            <header-smart />      
            <!-- /Mobile Header -->

            <!-- Main Content -->
            <div id="main" class="site-main">
                <!-- Page changer wrapper -->
                <div class="pt-wrapper">
                    <!-- Subpages -->
                    <div class="subpages">
                        <nuxt />
                    </div>
                </div>
            </div>
            <!-- /Main Content -->
        </div>
    </div>
</template>

<script>
    import HeaderPage from './partials/header'
    import HeaderSmart from './partials/header-smart'
    export default {
        components: {
            HeaderPage,
            HeaderSmart
        }
    }
</script>