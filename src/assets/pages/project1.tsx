import { Component, State, h, Prop } from '@stencil/core';

@Component({
    tag: 'app-project1',
    
})
export class AppProject1 {

    @State() obj: any = {
        name:"",
        vision:"",
    };
    @Prop() value: number;

    async componentWillLoad(){
        const response = await fetch("../../assets/thozhan.json");
        this.obj = await response.json();
        console.log(this.obj);
    }
    render() {
        return ( <span>
            <ion-content overflow-scroll="true">
            <app-header></app-header>

            { /** Start Navbar Area  */ }
        <div class="navbar-area navbar-default navbar-fixed-top">
            <div class="huruma-responsive-nav">
                <div class="container">
                    <div class="huruma-responsive-menu">
                        <div class="logo">
                            <a href="src/index.html">
                            <img src={this.obj.logo.url} class="white-logo" alt="logo" height="165" width="186"/>
                            <img src={this.obj.logo.url} class="black-logo" height="68" width="202" alt="image"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            

            <div class="huruma-nav">
                <div class="container">
                    <nav class="navbar navbar-expand-md navbar-light navbar-fixed-top">
                        <a class="navbar-brand" href="index.html">
                            <img src={this.obj.logo.url} class="white-logo" alt="logo" height="165" width="186"/>
                            <img src={this.obj.logo.url} class="black-logo" height="68" width="202" alt="image"/>
                        </a>

                        <div class="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a href="home.html" class="nav-link active">
                                        <span>o1</span>
                                        Home 
                                        {/* <i class='bx bx-chevron-down'></i> */}
                                    </a>
                                    {/* <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <a href="index.html" class="nav-link">
                                                Home One
                                            </a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="index-2.html" class="nav-link">
                                                Home Two
                                            </a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="index-3.html" class="nav-link">
                                                Home Three
                                            </a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="index-4.html" class="nav-link active">
                                                Home Four
                                            </a>
                                        </li>
                                    </ul> */}
                                </li>

                                <li class="nav-item">
                                    <a href="about.html" class="nav-link">
                                        <span>o2</span>
                                        About
                                    </a>
                                </li>

                                {/* <li class="nav-item">
                                    <a href="#" class="nav-link">
                                        <span>o3</span>
                                        Causes 
                                        <i class='bx bx-chevron-down'></i>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <a href="causes.html" class="nav-link">
                                                Causes
                                            </a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="single-causes.html" class="nav-link">
                                                Single Causes
                                            </a>
                                        </li>
                                    </ul>
                                </li> */}

                                <li class="nav-item">
                                    <a href="#" class="nav-link">
                                        <span>o4</span>
                                        Pages 
                                        <i class='bx bx-chevron-down'></i>
                                    </a>

                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <a href="about.html" class="nav-link">
                                                About
                                            </a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="team.html" class="nav-link">
                                                Team
                                            </a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="gallery.html" class="nav-link">
                                                Gallery
                                            </a>
                                        </li>

                                        {/* <li class="nav-item">
                                            <a href="#" class="nav-link">
                                                Events 
                                            </a>
                                            <ul class="dropdown-menu">
                                                <li class="nav-item">
                                                    <a href="events.html" class="nav-link">
                                                        Events
                                                    </a>
                                                </li>

                                                <li class="nav-item">
                                                    <a href="single-events.html" class="nav-link">
                                                        Events Details
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>

                                        <li class="nav-item">
                                            <a href="faq.html" class="nav-link">
                                                Faq
                                            </a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="feedback.html" class="nav-link">
                                                Feedback
                                            </a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="#" class="nav-link">
                                                User 
                                            </a>
                                            <ul class="dropdown-menu">
                                                <li class="nav-item">
                                                    <a href="log-in.html" class="nav-link">
                                                        Log In
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="sign-up.html" class="nav-link">
                                                        Sign Up
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="recover-password.html" class="nav-link">
                                                        Recover Password
                                                    </a>
                                                </li>
                                            </ul>
                                        </li> */}
                                    
                                        <li class="nav-item">
                                            <a href="projects.html" class="nav-link">
                                                Projects
                                            </a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="media.html" class="nav-link">
                                                Media
                                            </a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="contact.html" class="nav-link">
                                                Contact
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                

                                <li class="nav-item">
                                    <a href="contact.html" class="nav-link">
                                        <span>o6</span>
                                        Contact
                                    </a>
                                </li>
                            </ul>

                            <div class="others-options">

                                <div class="option-item"><i class="search-btn bx bx-search"></i>
                                    <i class="close-btn bx bx-x"></i>
                                    <div class="search-overlay search-popup">
                                        <div class='search-box'>
                                            <form class="search-form">
                                                <input class="search-input" name="search" placeholder="Search" type="text"/>

                                                <button class="search-button" type="submit">
                                                    <i class="bx bx-search"></i>
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                                <div class="burger-menu">
                                    <i class="flaticon-menu"></i>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        { /** End Navbar Area  */ }

{ /** Sidebar Modal  */ }
<div class="sidebar-modal">
    <div class="sidebar-modal-inner">
        <div class="sidebar-about-area">
            <div class="title">
                <h2>About Us</h2>
                <p>{this.obj.description}</p>
            </div>
        </div>

        {/* <div class="sidebar-instagram-feed">
            <h2>Instagram</h2>
            <ul>
                <li>
                    <a href="#">
                        <img src="assets/img/sidebar/1.jpg" alt="image"/>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="assets/img/sidebar/2.jpg" alt="image"/>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="assets/img/sidebar/3.jpg" alt="image"/>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="assets/img/sidebar/4.jpg" alt="image"/>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="assets/img/sidebar/5.jpg" alt="image"/>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="assets/img/sidebar/6.jpg" alt="image"/>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="assets/img/sidebar/7.jpg" alt="image"/>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="assets/img/sidebar/8.jpg" alt="image"/>
                    </a>
                </li>
            </ul>
        </div> */}

        <div class="sidebar-contact-area">
            <div class="contact-info">
                <div class="contact-info-content">
                    <h2>
                        <a href={this.obj.reachOut.phone1}>
                            {this.obj.reachOut.phone1}
                        </a>
                        <span>OR</span>
                        <a href={this.obj.reachOut.email}>
                            {this.obj.reachOut.email}
                        </a>
                    </h2>

                    <ul class="social">
                        <li>
                            <a href={this.obj.reachOut.facebook} target="_blank">
                                <i class="flaticon-facebook"></i>
                            </a>
                        </li>
                        <li>
                            <a href={this.obj.reachOut.twitter} target="_blank">
                                <i class="flaticon-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href={this.obj.reachOut.instagram} target="_blank">
                                <i class="flaticon-instagram"></i>
                            </a>
                        </li>
                        <li>
                            <a href={this.obj.reachOut.linkedin} target="_blank">
                                <i class="flaticon-linkedin"></i>
                            </a>
                        </li>
                        <li>
                            <a href={this.obj.reachOut.pinterest} target="_blank">
                                <i class="flaticon-pinterest"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <span class="close-btn sidebar-modal-close-btn">
            <i class="flaticon-close"></i>
        </span>
    </div>
</div>
{ /** End Sidebar Modal  */ }




     
{/* <!-- Start Events Details Area --> */}
        <section class="events-details-area ptb-100">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-12">
                        <div class="events-details-desc">
                            <div class="causes-details-image">
                                <img src={this.obj.projects[this.value].photo.url} alt="image"/>
                            </div>

                            <div class="events-details-content">
								<div class="entry-meta">
									<ul>
										<li>
                                            <span>Posted On:</span> 
                                            <a href="#">{this.obj.projects[this.value].date._seconds}</a>
                                        </li>
									</ul>
								</div>

								<h3>{this.obj.projects[this.value].name}</h3>

								<p>{this.obj.projects[this.value].description}</p>

								{/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in  sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p> */}

								{/* <h3>Event Mission</h3> */}

								{/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in  sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p> */}
							</div>

							<div class="events-details-footer">
								<div class="article-tags">
									<span>
                                        <i class="bx bx-share"></i>
                                    </span>

									<a href="#">Share</a>
								</div>

								<div class="article-share">
									<ul class="social">
										<li>
											<a href="#" target="_blank">
												<i class="flaticon-facebook"></i>
											</a>
										</li>
										<li>
											<a href="#" target="_blank">
												<i class="flaticon-twitter"></i>
											</a>
										</li>
										<li>
											<a href="#" target="_blank">
												<i class="flaticon-instagram"></i>
											</a>
										</li>
										<li>
											<a href="#" target="_blank">
												<i class="flaticon-linkedin"></i>
											</a>
										</li>
									</ul>
								</div>
							</div>

							{/* <p  class="event-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in  sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p> */}

							{/* <h3>Event Location</h3> */}

                            {/* <p class="event-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor non numquam.</p> */}
                            
							
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-12">
						<aside class="widget-area" id="secondary">
							{/* <div class="widget widget_search">
								<form class="search-form">
									<label>
										<span class="screen-reader-text">Search for:</span>
										<input type="search" class="search-field" placeholder="Search..."/>
                                    </label>
                                    
									<button type="submit">
                                        <i class="flaticon-search"></i>
                                    </button>
								</form>
							</div>

							<section class="widget widget_huruma_posts_thumb">
								<h3 class="widget-title">Popular Posts</h3>

								<article class="item">
									<a href="#" class="thumb">
										<span class="fullimage cover bg1" role="img"></span>
									</a>
									<div class="info">
										<time >June 30, 2020</time>
										<h4 class="title usmall">
											<a href="#">Delicate contempt received two yet advanced</a>
										</h4>
									</div>

									<div class="clear"></div>
								</article>

								<article class="item">
									<a href="#" class="thumb">
										<span class="fullimage cover bg2" role="img"></span>
									</a>
									<div class="info">
										<time >June 30, 2020</time>
										<h4 class="title usmall">
											<a href="#">Future Plan & Strategy for Consutruction</a>
										</h4>
									</div>

									<div class="clear"></div>
								</article>

								<article class="item">
									<a href="#" class="thumb">
										<span class="fullimage cover bg3" role="img"></span>
									</a>
									<div class="info">
										<time >June 30, 2020</time>
										<h4 class="title usmall">
											<a href="#">Melancholy devonshire alteration</a>
										</h4>
									</div>

									<div class="clear"></div>
								</article>
								
								<article class="item">
									<a href="#" class="thumb">
										<span class="fullimage cover bg4" role="img"></span>
									</a>
									<div class="info">
										<time >June 30, 2020</time>
										<h4 class="title usmall">
											<a href="#">Delicate contempt received two yet advanced</a>
										</h4>
									</div>

									<div class="clear"></div>
								</article>
							</section> */}

							{/* <section class="widget widget_categories">
								<h3 class="widget-title">Archives</h3>

								<ul>
									<li><a href="#">May 2020</a></li>
									<li><a href="#">April 2020</a></li>
									<li><a href="#">June 2020</a></li>
									<li><a href="#">julay 2020</a></li>
									
								</ul>
							</section>
							
							<section class="widget widget_categories">
								<h3 class="widget-title">Categories</h3>

								<ul>
									<li><a href="#">Educataon (10)</a></li>
									<li><a href="#">National (20)</a></li>
									<li><a href="#">Sports (10)</a></li>
									<li><a href="#">Megazine (12)</a></li>
									<li><a href="#">Health (16)</a></li>
								</ul>
							</section>

							<section class="widget widget_tag_cloud">
								<h3 class="widget-title">Tags</h3>

								<div class="tagcloud">
									<a href="#">Fashion</a>
									<a href="#">Education</a>
									<a href="#">Nation</a>
									<a href="#">Study</a>
									<a href="#">Health</a>
									<a href="#">Food</a>
									<a href="#">Travel</a>
									<a href="#">Science</a>
								</div>
							</section> */}
						</aside>
					</div>
                </div>
            </div>
        </section>
        {/* <!-- End Events Details Area --> */}

       


<app-footer></app-footer>

{ /** Start Go Top Section  */ }
<div class="go-top">
    <i class="bx bx-chevron-up"></i>
    <i class="bx bx-chevron-up"></i>
</div>
{ /** End Go Top Section  */ }

            </ion-content>
        
        </span> );
    }
}
