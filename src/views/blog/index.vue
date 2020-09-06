<template>
    <div>
        <section class="blog-section">
			<b-container >
				<div class="blog-items main">
					<b-row>
						<b-col  md="8" >
							<div class="blog-item main-style" style="height: 100%;" >
								<div class="blog-img" style="height: 100%;">
									<img src="@/assets/images/blog-img1.jpg" class="img-fluid rounded " style="height: 100%;" alt="">
									<a href="#" title="" class="post-category">Lifestyle</a>
								</div><!--blog-img end-->
								<div class="blog-info">
									<h3 class="post-title"><a href="standard-post.html" title="">Claire Foy on Becoming Mother Trading Her Crown for a Dragon Tattoo</a></h3>
									<div class="met-soc">
										<ul class="meta">
											<li>December 22, 2018 </li>
											<li><i class="la la-eye"></i>3258</li>
											<li><a href="#" title=""><i class="la la-comment-o"></i>4</a></li>
										</ul>
									</div><!--met-soc end-->
								</div><!--blog-info end-->
							</div><!--blog-items end-->
						</b-col>
						<b-col  md="4" >
							<div class="blog-item" >
								<div class="blog-img" >
									<img src="@/assets/images/blog-img2.jpg" alt="">
								</div><!--blog-img end-->
								<div class="blog-info">
									<h3 class="post-title"><a href="standard-post.html" title="">Let Emily Ratakowski Explain Single Payer Health </a></h3>
								</div><!--blog-info end-->
							</div><!--blog-items end-->
							<div class="blog-item">
								<div class="blog-img">
									<img src="@/assets/images/blog-img3.jpg" alt="">
								</div><!--blog-img end-->
								<div class="blog-info">
									<h3 class="post-title"><a href="standard-post.html" title="">Now You Know Zazie on Beetz Explains Net Neutrality</a></h3>
								</div><!--blog-info end-->
							</div><!--blog-items end-->
						</b-col>
					</b-row>
				</div>
			</b-container>
		</section><!--blog-section end-->
		<section class="blog-section feat-stors sec-padding">
			<div class="container">
				<div class="sec-title">
					<h3> Post terbaru </h3>
				</div><!--sec-title end-->
				<div class="blog-items">
					<b-row >
						<b-col v-for="n in 4" :key="n"  lg="3" >
							<div class="blog-item">
								<div class="blog-img">
									<img src="@/assets/images/blog-img3.jpg" alt="">
								</div><!--blog-img end-->
								<div class="blog-info">
									<h3 class="post-title"><a href="standard-post.html" title="">Don’t Risk a Red-Eye Without These Things</a></h3>
									<ul class="meta">
										<li>Dec 11, 2018 </li>
										<li><i class="la la-eye"></i>2478</li>
										<li><a href="#" title=""><i class="la la-comment-o"></i>3</a></li>
									</ul>
								</div><!--blog-info end-->
							</div><!--blog-item end-->
						</b-col>
					</b-row>
				</div><!--blog-items end-->
			</div>
		</section><!--blog-section end-->
		<section class="main-content pb-0">
			<b-container>
				<b-row>
					<b-col md="8" class="mgr-50">
						<div class="blog-section mb-20">
							<b-nav tabs>
								<b-nav-item active-class="active" active  >Trending</b-nav-item>
								<b-nav-item>Top View</b-nav-item>
								<b-nav-item>Popular</b-nav-item>
							</b-nav>
						</div>
						<div class="tab-pane">
							<div class="blog-items">
								<b-row>
									<b-col lg="6" md="6" sm="6" v-for="n in 4" :key="n" class="mb-2">
										<div class="blog-item">
											<div class="blog-img">
												<img src="@/assets/images/blog-img3.jpg" alt="">
											</div><!--blog-img end-->
											<div class="blog-info">
												<a href="#" title="" class="post-category">Photograph</a>
												<h3 class="post-title"><a href="standard-post.html" title="">Roland Mouret New Book About Life Work Brings His Past  </a></h3>
												<ul class="meta">
													<li>December 31, 2018 </li>
													<li><i class="la la-eye"></i>3258</li>
													<li><a href="#" title=""><i class="la la-comment-o"></i>4</a></li>
												</ul>
											</div><!--blog-info end-->
										</div><!--blog-item end-->
									</b-col>
								</b-row>
							</div>
						</div>
					</b-col>
					<b-col md="4">
						<div class="sidebar">
							<div class="widget widget-trending-posts">
								<h3 class="widget-title">Trending</h3>
								<div class="wd-posts">
									<div class="wd-post" v-for="n in 4" :key="n">
										<img src="@/assets/images/blog-img3.jpg"  alt="">
										<div class="wd-post-info">
											<h3 class="post-title"><a href="standard-post.html" title="">Living Room Makeover Reveal</a></h3>
											<span class="post-date">Dec 25, 2018</span>
										</div>
									</div><!--wd-post end-->
								</div><!--wd-posts end-->
							</div>
							<div class="widget widget-social-links">
								<ul>
									<li>
										<a href="#" title="" class="facebook"><i class="fab fa-facebook-f"></i></a>
										<h4>3,553 </h4>
										<span>Followers</span>
									</li>
									<li>
										<a href="#" title="" class="twitter"><i class="fab fa-twitter"></i></a>
										<h4>11,211 </h4>
										<span>Followers</span>
									</li>
									<li>
										<a href="#" title="" class="pinterest"><i class="fab fa-pinterest-p"></i></a>
										<h4>9,328 </h4>
										<span>Followers</span>
									</li>
								</ul>
							</div>
							<div class="widget widget-catgs">
								<h3 class="widget-title">Categories</h3>
								<ul class="catgs-links">
									<li><a href="#" title="">Fashion</a></li>
									<li><a href="#" title="">Lifestyle</a></li>
									<li><a href="#" title="">Beauty</a></li>
									<li><a href="#" title="">Travel</a></li>
									<li><a href="#" title="">Photograph</a></li>
								</ul><!--catgs-links end-->
							</div>
						</div>
					</b-col>
				</b-row>
			</b-container>
		</section><!--main-content end-->
    </div>
</template>