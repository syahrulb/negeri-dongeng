<template>
    <div>
        <header>
            <div class="container">
                <div class="top-bar">
                    <div  class="menu-btn" @click="menuBtnOnClick">
                        <a href="#" title="">
                            <span class="bar1"></span>
                            <span class="bar2"></span>
                            <span class="bar3"></span>
                        </a>
                    </div><!--menu-btn end-->
                    <nav>
                        <ul>
                            <router-link tag="li" to="/">
                                <a href="javascript:" class="nav-link">Home</a>
                            </router-link>
                            <li><a href="javascript:" title="">Alur Film</a>
								<ul class="sub-menu">
									<li><a href="javascript:" title="">Horror</a></li>
									<li><a href="javascript:" title="">Adventure</a></li>
								</ul>
                            </li>
                        </ul>
                    </nav><!--navigation end-->
                    <div class="rt-subs">
                        <a class="subscribe-btn" href="#" title=""><i class="la la-envelope-o"></i> Subscribe</a>
                        <a class="search-btn" href="javascript:" title="" @click="searchMenuOnClick"><i class="la la-search"></i></a>
                    </div><!--rt-subs end-->
                    <div class="clearfix"></div>
                </div>
                <div class="bottom-header">
                    <div class="container">
                        <div class="logo">
                            <h2><a href="#" title="">Negeri Dongeng</a></h2>
                        </div><!-- logo end-->
                    </div>
                </div><!--bottom-header end-->
            </div>
        </header><!--HEADER END-->
        <div class="side-menu">
            <a href="javascript:" @click="menuBtnOnClick" class="close-sidemenu"><i class="la la-close"></i></a>
            <ul class="navigation">
                <li><a href="index.html" title="">Home</a></li>
                <li><a href="standar-post.html" title="">Standard Post</a></li>
                <li><a href="about.html" title="">About</a></li>
                <li><a href="contact.html" title="">Contact</a></li>
            </ul><!--navigation end-->
            <div class="logo">
                <h2><a href="#" title="">Negeri Dongeng</a></h2>
            </div><!-- logo end-->
        </div><!--side-menu end-->
        <div class="search-page">
			<form>
				<div class="container">
					<div class="form-field">
						<input type="text" name="search" autocomplete="off" placeholder="Cari Alur Film">
						<button type="submit"><i class="la la-search"></i></button>
					</div>
				</div>
			</form>
			<a href="javascript:" title="" @click="searchMenuOnClick" class="close-search"><i class="la la-close"></i></a>
		</div><!--SEARCH PAGE END-->
    </div>
</template>
<script>
export default {
    methods: {
        menuBtnOnClick() {
            console.log('oke');
            document.getElementsByClassName("menu-btn")[0].classList.toggle("active");
            document.getElementsByClassName("side-menu")[0].classList.toggle("active");
            document.body.classList.toggle("no-scroll");
        },
        searchMenuOnClick(){
            document.getElementsByClassName("search-page")[0].classList.toggle("active");
        }
    },
    destroyed(){
        document.body.classList.remove('no-scroll');
    },
}
</script>