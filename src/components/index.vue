<template>
    <div :class="[this.$route.meta==='front-end'?'wrapper':'']">
        <transition name="fade" enter-active-class="animate__animated animate__fadeInLeft" leave-active-class="animate__animated animate__fadeOutRight">
            <component :is="header" />
        </transition>
        <transition name="flip" enter-active-class="animate__animated animate__fadeIn animate__faster" leave-active-class="animate__animated animate__fadeOut animate__faster">
            <router-view ></router-view>
        </transition>
        <transition name="fade" enter-active-class="animate__animated animate__fadeInLeft" leave-active-class="animate__animated animate__fadeOutRight">
            <component :is="footer" />
        </transition>
    </div>
</template>
<script>
import HeaderFrontEnd from "./template/front-end/Header";
import FooterFrontEnd from "./template/front-end/Footer";

export default {
    components: {
        appHeaderFrontEnd: HeaderFrontEnd,
        appFooterFrontEnd: FooterFrontEnd
    },
    computed: {
        header(){
            if(this.$route.meta==='front-end'){
                return 'appHeaderFrontEnd';
            }
            else{
                return'';
            }
        },
        footer(){
            if(this.$route.meta==='front-end'){
                return 'appFooterFrontEnd';
            }
            else{
                return'';
            }
        },
    },
}
</script>
