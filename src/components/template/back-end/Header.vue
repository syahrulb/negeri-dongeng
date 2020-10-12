<template>
    <nav class="navbar fixed-top navbar-default">
        <div class="d-flex align-items-center navbar-left">
            <a href="javascript:" class="menu-button d-none d-md-block">
                <div class="text-center">
                    <svg class="main" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 17">
                        <rect x="0.48" y="0.5" width="7" height="1" />
                        <rect x="0.48" y="7.5" width="7" height="1" />
                        <rect x="0.48" y="15.5" width="7" height="1" />
                    </svg>
                    <svg class="sub" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 17">
                        <rect x="1.56" y="0.5" width="16" height="1" />
                        <rect x="1.56" y="7.5" width="16" height="1" />
                        <rect x="1.56" y="15.5" width="16" height="1" />
                    </svg>
                </div>
            </a>
            <a href="javascript:" class="menu-button-mobile d-xs-block d-sm-block d-md-none" >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 17">
                    <rect x="0.5" y="0.5" width="25" height="1" />
                    <rect x="0.5" y="7.5" width="25" height="1" />
                    <rect x="0.5" y="15.5" width="25" height="1" />
                </svg>
            </a>
        </div>
        <router-link class="navbar-logo" tag="a" to="/admin/home">
            <span class="logo d-none d-xs-block"></span>
            <span class="logo-mobile d-block d-xs-none"></span>
        </router-link>
        <div class="navbar-right">
            <div class="header-icons d-inline-block align-middle">
                <div class="position-relative d-none d-sm-inline-block">
                    <div class="btn-group">
                        <b-button class="header-icon btn-sm" variant="empty" @click="toggleFullScreen">
                            <i :class="{'d-inline-block':true,'simple-icon-size-actual':fullScreen,'simple-icon-size-fullscreen':!fullScreen }" />
                        </b-button>
                    </div>
                </div>
            </div>
                
            <div class="user d-inline-block ">
                <b-dropdown class="dropdown-menu-right p-0" right variant="empty" toggle-class="p-0" menu-class="mt-0" no-caret>
                    <template slot="button-content">
                        <span class="name mr-1">Admin</span>
                        <span>
                        </span>
                    </template>
                    <b-dropdown-item class="p-0 ">Profile</b-dropdown-item>
                    <b-dropdown-divider />
                    <b-dropdown-item class="p-0">Sign out</b-dropdown-item>
                </b-dropdown>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    data() {
        return {
            fullScreen: false,
        };
    },
    methods: {
        toggleFullScreen() {
            const isInFullScreen = this.isInFullScreen();
            var docElm = document.documentElement;
            if (!isInFullScreen) {
                if (docElm.requestFullscreen) {
                    docElm.requestFullscreen();
                } else if (docElm.mozRequestFullScreen) {
                    docElm.mozRequestFullScreen();
                } else if (docElm.webkitRequestFullScreen) {
                    docElm.webkitRequestFullScreen();
                } else if (docElm.msRequestFullscreen) {
                    docElm.msRequestFullscreen();
                }
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
            }
            this.fullScreen = !isInFullScreen;
        },
        isInFullScreen() {
            return (
                (document.fullscreenElement && document.fullscreenElement !== null) ||
                (document.webkitFullscreenElement &&
                    document.webkitFullscreenElement !== null) ||
                (document.mozFullScreenElement &&
                    document.mozFullScreenElement !== null) ||
                (document.msFullscreenElement && document.msFullscreenElement !== null)
            );
        }
    }
}
</script>