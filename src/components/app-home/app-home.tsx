import { Component, h } from '@stencil/core';

@Component({
    tag: 'app-home',
    styleUrl: 'app-home.css',
})
export class AppHome {

    componentWillLoad() {
        console.log('AppHome :: componentWillLoad');
    }

    componentDidLoad() {
        console.log('AppHome :: componentDidLoad');
    }

    render() {
        return ( <span>

        { /** Start Header Area  */ }
        <div class="preloader">
            <div class="preloader">
                <span></span>
                <span></span>
            </div>
        </div>
        { /** End Header Area  */ }

        { /** Start Header Area  */ }
        <div class="header-section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="header-content">
                            <p>
                                <a href="#">The fund will go to the poor... <span>Donate Now</span></a>
                            </p>
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <div class="top-header-social">
                            <span>Follow us:</span>
                            <a href="#" target="_blank">
                                <i class='flaticon-facebook'></i>
                            </a>

                            <a href="#" target="_blank">
                                <i class='flaticon-twitter'></i>
                            </a>

                            <a href="#" target="_blank">
                                <i class='flaticon-instagram'></i>
                            </a>

                            <a href="#" target="_blank">
                                <i class='flaticon-linkedin'></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        { /** End Header Area  */ }

        { /** Start Navbar Area  */ }
        <div class="navbar-area">
            <div class="huruma-responsive-nav">
                <div class="container">
                    <div class="huruma-responsive-menu">
                        <div class="logo">
                            <a href="index.html"> <img src="/assets/huruma/img/logo.png" class="white-logo" alt="logo" />
                                <img src="/assets/huruma/img/logo-2.png" class="black-logo" alt="image" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="huruma-nav">
                <div class="container">
                    <nav class="navbar navbar-expand-md navbar-light">
                        <a class="navbar-brand" href="index.html">
                            <img src="/assets/huruma/img/logo.png" class="white-logo" alt="logo" />
                            <img src="/assets/huruma/img/logo-2.png" class="black-logo" alt="image" />
                        </a>

                        <div class="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a href="#" class="nav-link active">
                                        <span>o1</span>
                                        Home 
                                        <i class='bx bx-chevron-down'></i>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <a href="index.html" class="nav-link active">
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
                                            <a href="index-4.html" class="nav-link">
                                                Home Four
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                <li class="nav-item">
                                    <a href="about.html" class="nav-link">
                                        <span>o2</span>
                                        About
                                    </a>
                                </li>

                                <li class="nav-item">
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
                                </li>

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

                                        <li class="nav-item">
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
                                        </li>
                                    
                                        <li class="nav-item">
                                            <a href="error-404.html" class="nav-link">
                                                404 Error
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
                                    <a href="#" class="nav-link">
                                        <span>o5</span>
                                        Blog 
                                        <i class='bx bx-chevron-down'></i>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <a href="blog-1.html" class="nav-link">
                                                Blog Grid
                                            </a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="blog-2.html" class="nav-link">
                                                Blog Right Sidebar
                                            </a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="single-blog.html" class="nav-link">
                                                Blog Details
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
                                <div class="dropdown language-switcher d-inline-block">
                                    <button class="dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <img src="/assets/huruma/img/flag/france-flag.jpg" class="shadow" alt="image" />
                                        <span>Eng <i class='bx bx-chevron-down'></i></span>
                                    </button>

                                    <div class="dropdown-menu">
                                        <a href="#" class="dropdown-item d-flex align-items-center">
                                            <img src="/assets/huruma/img/flag/germany-flag.jpg" class="shadow-sm" alt="flag" />
                                            <span>Ger</span>
                                        </a>
                                        <a href="#" class="dropdown-item d-flex align-items-center">
                                            <img src="/assets/huruma/img/flag/italy-flag.jpg" class="shadow-sm" alt="flag" />
                                            <span>Fre</span>
                                        </a>
                                        <a href="#" class="dropdown-item d-flex align-items-center">
                                            <img src="/assets/huruma/img/flag/spain-flag.jpg" class="shadow-sm" alt="flag" />
                                            <span>Spa</span>
                                        </a>
                                        <a href="#" class="dropdown-item d-flex align-items-center">
                                            <img src="/assets/huruma/img/flag/russia-flag.jpg" class="shadow-sm" alt="flag" />
                                            <span>Rus</span>
                                        </a>
                                        <a href="#" class="dropdown-item d-flex align-items-center">
                                            <img src="/assets/huruma/img/flag/us-flag.jpg" class="shadow-sm" alt="flag" />
                                            <span>Ita</span>
                                        </a>
                                    </div>
                                </div>

                                <div class="option-item"><i class="search-btn bx bx-search"></i>
                                    <i class="close-btn bx bx-x"></i>
                                    <div class="search-overlay search-popup">
                                        <div class='search-box'>
                                            <form class="search-form">
                                                <input class="search-input" name="search" placeholder="Search" type="text" /> 
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
                        <p>We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. No fake products and services. The customer is king, their lives and needs are the inspiration.</p>
                    </div>
                </div>

                <div class="sidebar-instagram-feed">
                    <h2>Instagram</h2>
                    <ul>
                        <li>
							<a href="#">
                                <img src="/assets/huruma/img/sidebar/1.jpg" alt="image" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="/assets/huruma/img/sidebar/2.jpg" alt="image" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="/assets/huruma/img/sidebar/3.jpg" alt="image" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="/assets/huruma/img/sidebar/4.jpg" alt="image" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="/assets/huruma/img/sidebar/5.jpg" alt="image" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="/assets/huruma/img/sidebar/6.jpg" alt="image" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="/assets/huruma/img/sidebar/7.jpg" alt="image" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="/assets/huruma/img/sidebar/8.jpg" alt="image" />
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="sidebar-contact-area">
                    <div class="contact-info">
                        <div class="contact-info-content">
                            <h2>
                                <a href="tel:+0881306298615">
                                    +088 130 629 8615
                                </a>
                                <span>OR</span>
                                <a href="mailto:huruma@gmail.com">
                                    huruma@gmail.com
                                </a>
                            </h2>
    
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
                                <li>
                                    <a href="#" target="_blank">
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

        { /** Start Slider Area  */ }
        <div class="slider_area">
            <div id="rev_slider_1078_1_wrapper" class="rev_slider_wrapper fullwidthbanner-container" data-alias="classic4export" data-source="gallery" style={{ 'margin': '0px auto', 'background-color': 'transparent', 'padding': '0px', 'margin-top': '0px', 'margin-bottom': '0px' }} >
                { /** START REVOLUTION SLIDER 5.4.1 fullwidth mode  */ }
                <div id="rev_slider_1078_1" class="rev_slider fullwidthabanner" style={{ 'display': 'none' }} data-version="5.4.1">
                    <ul>
                        { /** SLIDE   */ }
                        <li data-index="rs-3049" data-transition="zoomin" data-slotamount="7" data-hideafterloop="0" data-hideslideonmobile="off"  data-easein="Power4.easeInOut" data-easeout="Power4.easeInOut" data-masterspeed="2000"  data-thumb="/assets/huruma/img/main-banner1.jpg"  data-rotate="0"  data-saveperformance="off"  data-title="First Slide" data-param1="" data-param2="" data-param3="" data-param4="" data-param5="" data-param6="" data-param7="" data-param8="" data-param9="" data-param10="" data-description="" >
                            { /** MAIN IMAGE  */ }
                            <img src="/assets/huruma/img/main-banner1.jpg" alt="" data-bgposition="center center" data-kenburns="on" data-duration="7000" data-ease="Linear.easeNone" data-scalestart="100" data-scaleend="120" data-rotatestart="0" data-rotateend="0" data-offsetstart="0 -500" data-offsetend="0 500" data-bgparallax="10" class="rev-slidebg" data-no-retina />
                            
                            <div class="tp-caption NotGeneric-Icon tp-resizeme" id="slide-3049-layer-8" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['-70','-70','-70','-70']" data-width="none" data-height="none" data-type="text" data-responsive_offset="on" data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":2000,"ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'>
                                Huruma
                            </div>

                            <div class="tp-caption NotGeneric-Title tp-resizeme" id="slide-3049-layer-1" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['-15','-15','-15','-15']" data-fontsize="['70','70','70','45']" data-lineheight="['70','70','70','50']" data-width="none" data-height="none" data-type="text" data-responsive_offset="on" data-frames='[{"from":"x:[-105%];z:0;rX:0deg;rY:0deg;rZ:-90deg;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":2000,"to":"o:1;","delay":1000,"split":"chars","splitdelay":0.1,"ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'>
                                Bringing Smiles To Millions!
                            </div>

                            <div class="tp-caption NotGeneric-SubTitle tp-resizeme" id="slide-3049-layer-4" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['45','45','45','45']" data-width="none" data-height="none" data-type="text" data-responsive_offset="on" data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","speed":2000,"to":"o:1;","delay":1500,"ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </div>

                            <div class="tp-caption NotGeneric-btn tp-resizeme" id="slide-3045-layer-8" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['115','115','115','115']" data-width="none" data-height="none" data-type="text" data-responsive_offset="on" data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":2000,"ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'>
                                <a href="#" class="default-btn">
                                    Donate Now
                                    <span></span>
                                </a>
                            </div>
                        </li>

                        { /** SLIDE   */ }
                        <li data-index="rs-3045" data-transition="zoomout" data-slotamount="default" data-hideafterloop="0" data-hideslideonmobile="off"  data-easein="Power4.easeInOut" data-easeout="Power4.easeInOut" data-masterspeed="2000"  data-thumb="/assets/huruma/img/main-banner2.jpg"  data-rotate="0"  data-fstransition="fade" data-fsmasterspeed="1500" data-fsslotamount="7" data-saveperformance="off"  data-title="Second Slide" data-param1="" data-param2="" data-param3="" data-param4="" data-param5="" data-param6="" data-param7="" data-param8="" data-param9="" data-param10="" data-description="" >
                            { /** MAIN IMAGE  */ }
                            <img src="/assets/huruma/img/main-banner2.jpg" alt="" data-bgposition="center center" data-kenburns="on" data-duration="7000" data-ease="Linear.easeNone" data-scalestart="100" data-scaleend="120" data-rotatestart="0" data-rotateend="0" data-offsetstart="0 500" data-offsetend="0 -500" data-bgparallax="10" class="rev-slidebg" data-no-retina />

                            <div class="tp-caption NotGeneric-Icon tp-resizeme" id="slide-3049-layer-8" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['-70','-70','-70','-70']" data-width="none" data-height="none" data-type="text" data-responsive_offset="on" data-frames='[{"from":"x:[-105%];z:0;rX:0deg;rY:0deg;rZ:-90deg;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":2000,"to":"o:1;","delay":1000,"split":"chars","splitdelay":0.1,"ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'>
                                Huruma
                            </div>
                            
                            <div class="tp-caption NotGeneric-Title tp-resizeme" id="slide-3045-layer-1" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['-15','-15','-15','-15']" data-fontsize="['70','70','70','45']" data-lineheight="['70','70','70','50']" data-width="none" data-height="none" data-type="text" data-responsive_offset="on" data-frames='[{"from":"x:[105%];z:0;rX:45deg;rY:0deg;rZ:90deg;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":2000,"to":"o:1;","delay":1000,"split":"chars","splitdelay":0.05,"ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'>
                                Bringing Smiles To Millions!
                            </div>

                            <div class="tp-caption NotGeneric-SubTitle tp-resizeme" id="slide-3045-layer-4" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['45','45','45','45']" data-width="none" data-height="none" data-type="text" data-responsive_offset="on" data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","speed":2000,"to":"o:1;","delay":1500,"ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </div>

                            <div class="tp-caption NotGeneric-btn tp-resizeme" id="slide-3045-layer-8" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['115','115','115','115']" data-width="none" data-height="none" data-type="text" data-responsive_offset="on" data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":2000,"ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'>
                                <a href="#" class="default-btn">
                                    Donate Now
                                    <span></span>
                                </a>
                            </div>
                        </li>

                        { /** SLIDE   */ }
                        <li data-index="rs-3046" data-transition="fadetotopfadefrombottom" data-slotamount="default" data-hideafterloop="0" data-hideslideonmobile="off"  data-easein="Power3.easeInOut" data-easeout="Power3.easeInOut" data-masterspeed="1500"  data-thumb="/assets/huruma/img/main-banner3.jpg"  data-rotate="0"  data-saveperformance="off"  data-title="Third Slide" data-param1="" data-param2="" data-param3="" data-param4="" data-param5="" data-param6="" data-param7="" data-param8="" data-param9="" data-param10="" data-description="" >
                            { /** MAIN IMAGE  */ }
                            <img src="/assets/huruma/img/main-banner3.jpg"  alt=""  data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="10" class="rev-slidebg" data-no-retina />

                            <div class="tp-caption NotGeneric-Icon tp-resizeme rs-parallaxlevel-1" id="slide-3046-layer-8" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['-70','-70','-70','-70']" data-width="none" data-height="none" data-type="text" data-responsive_offset="on" data-frames='[{"from":"x:[105%];z:0;rX:45deg;rY:0deg;rZ:90deg;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":2000,"to":"o:1;","delay":1000,"split":"chars","splitdelay":0.05,"ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'>
                                Huruma
                            </div>
                            
                            <div class="tp-caption NotGeneric-Title tp-resizeme rs-parallaxlevel-3" id="slide-3046-layer-1" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['-15','-15','-15','-15']" data-fontsize="['70','70','70','45']" data-lineheight="['70','70','70','50']" data-width="none" data-height="none" data-type="text" data-responsive_offset="on" data-frames='[{"from":"y:[100%];z:0;rZ:-35deg;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;","speed":2000,"to":"o:1;","delay":1000,"split":"chars","splitdelay":0.05,"ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[100%];","mask":"x:inherit;y:inherit;","ease":"Power2.easeInOut"}]'>
                                Bringing Smiles To Millions!
                            </div>

                            <div class="tp-caption NotGeneric-SubTitle tp-resizeme rs-parallaxlevel-2" id="slide-3046-layer-4" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['45','45','45','45']" data-width="none" data-height="none" data-type="text" data-responsive_offset="on" data-frames='[{"from":"x:[-105%];z:0;rX:0deg;rY:0deg;rZ:-90deg;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":2000,"to":"o:1;","delay":1000,"split":"chars","splitdelay":0.1,"ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </div>

                            <div class="tp-caption NotGeneric-btn tp-resizeme" id="slide-3045-layer-8" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['115','115','115','115']" data-width="none" data-height="none" data-type="text" data-responsive_offset="on" data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":2000,"ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'>
                                <a href="#" class="default-btn">
                                    Donate Now
                                    <span></span>
                                </a>
                            </div>
                        </li>
                    </ul>
                    <div class="tp-bannertimer" style={{ 'height': '7px', 'background-color': 'rgba(255, 255, 255, 0.25)' }}></div>
                </div>
            </div>{ /** END REVOLUTION SLIDER  */ }
        </div>
        { /** End Slider Area  */ }

        { /** Start About Area  */ }
        <section class="about-section pt-100 pb-100">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="about-item">
                            <span>
                                <i class="flaticon-care-about-plants"></i>
                                About us
                            </span>
                            <h3>An international independent Charity organization</h3>
                            <p class="main-color">
                                Your support will help us to make life better living for poor vulnerable children consectetur adipisicing elit.
                            </p>
                            <p>Konin wansis dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>

                            <div class="about-btn">
                                <a href="#" class="default-btn">
                                    Donate Now
                                    <i class="flaticon-right"></i>
                                    <span></span>
                                </a>
                                <a class="optional-btn" href="#">
                                    More about us
                                    <i class="flaticon-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <div class="about-image about-one-img" >
                        <img src="/assets/huruma/img/about/1.jpg" class="shadow" alt="image" />
                        <img src="/assets/huruma/img/about/2.jpg" class="shadow" alt="image" />
                        </div>

                        <div class="about-video">
                            <a href="https://www.youtube.com/watch?v=uemObN8_dcw" class="video-btn popup-youtube">
                                <i class="bx bx-play"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        { /** End About Area  */ }

        { /** Start Country Area  */ }
        <section class="country-section pb-100">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="country-area-content">
                            <span>
                                <i class="flaticon-selection"></i>
                                Our Area
                            </span>
                            <h3>People generous is your state</h3>
                            <p>We are working wansis dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. incididunt ut labore et dolore labore et dolore.</p>
                        </div>

                        <div class="skill-bar" data-percentage="68%">
                            <p class="progress-title-holder">
                                <span class="progress-title">Australia</span>
                                <span class="progress-number-wrapper">
                                    <span class="progress-number-mark">
                                        <span class="percent"></span>
                                        <span class="down-arrow"></span>
                                    </span>
                                </span>
                            </p>
                            <div class="progress-content-outter">
                                <div class="progress-content"></div>
                            </div>
                        </div>

                        <div class="skill-bar" data-percentage="90%">
                            <p class="progress-title-holder">
                                <span class="progress-title">Argentina</span>
                                <span class="progress-number-wrapper">
                                    <span class="progress-number-mark">
                                        <span class="percent"></span>
                                        <span class="down-arrow"></span>
                                    </span>
                                </span>
                            </p>
                            <div class="progress-content-outter">
                                <div class="progress-content-two"></div>
                            </div>
                        </div>

                        <div class="skill-bar" data-percentage="95%">
                            <p class="progress-title-holder">
                                <span class="progress-title">Netherland</span>
                                <span class="progress-number-wrapper">
                                    <span class="progress-number-mark">
                                        <span class="percent"></span>
                                        <span class="down-arrow"></span>
                                    </span>
                                </span>
                            </p>
                            <div class="progress-content-outter">
                                <div class="progress-content-three"></div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <div class="map-img" >
                        <img src="/assets/huruma/img/map.png" alt='map' />
                            
                            <div class="location">
                                <a href="#">
                                    <div class='location-info'>
                                        <h5>Australia</h5>
                                    </div>
                                </a>
                            </div>
    
                            <div class="location location2">
                                <a href="#">
                                    <div class='location-info'>
                                        <h5>Russia</h5>
                                    </div>
                                </a>
                            </div>
    
                            <div class="location location3">
                                <a href="#">
                                    <div class='location-info'>
                                        <h5>Argentina </h5>
                                    </div>
                                </a>
                            </div>
    
                            <div class="location location4">
                                <a href="#">
                                    <div class='location-info'>
                                        <h5>USA</h5>
                                    </div>
                                </a>
                            </div>
    
                            <div class="location location5">
                                <a href="#">
                                    <div class='location-info'>
                                        <h5>Netherland</h5>
                                    </div>
                                </a>
                            </div>
    
                            <div class="location location6">
                                <a href="#">
                                    <div class='location-info'>
                                        <h5>Mexico</h5>
                                    </div>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
        { /** End Country Area  */ }

        { /** Start Fun Facts Area  */ }
        <section class="fun-facts-area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="single-fun-fact">
                            <p>Beneficiaries</p>
                            <h3>
                                <span class="sign-icon dolor">$</span>
                                <span class="odometer" data-count="500">00</span>
                                <span class="sign-icon">M</span>
                            </h3>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="single-fun-fact">
                            <p>Happy Donators</p>
                            <h3>
                                <span class="odometer" data-count="458">00</span>
                                <span class="sign-icon">+</span>
                            </h3>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="single-fun-fact">
                            <p>Volunteer</p>
                            <h3>
                                <span class="odometer" data-count="45">00</span>
                                <span class="sign-icon">+</span>
                            </h3>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="single-fun-fact">
                            <p>Donated Poor</p>
                            <h3>
                                <span class="odometer" data-count="20">00</span>
                                <span class="sign-icon">K</span>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        { /** End Fun Facts Area  */ }

        { /** Start Causes Area  */ }
        <section class="causes-section pt-100 pb-70">
            <div class="container">
                <div class="section-title">
                    <span>
                        <i class="flaticon-ribbon"></i>
                        Our Causes
                    </span>
                    <h2>The causes we care about</h2>
                    <p>Quis ipsum suspendice consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendices gravida.</p>
                </div>

                <div class="row">
                    <div class="col-lg-4 col-md-6">
                        <div class="single-causes">
                            <img src="/assets/huruma/img/causes/1.jpg" alt="image" />
                            <div class="icon">
                                <i class="flaticon-book-1"></i>
                            </div>

                            <div class="causes-content">
                                <span>#Education</span>
                                <h3>Education for poor child</h3>
                                <p>Lorem ipsum dolor sit amet, consecteturad eiustempor incididunlabore</p>

                                <div class="causes-progress-bar">
                                    <div class="causes-progress-content">
                                        <span>Raised: $5,000.00</span>
                                        
                                        <div class="text-right">
                                            <span>Goal: $8,000.00</span>
                                        </div>
                                    </div>
                                    <p>Raised by 60 people within 10 days</p>
                                </div>
                                
                                <a href="single-causes.html" class="causes-btn-one">
                                    Donate Now
                                    <i class="flaticon-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="single-causes">
                            <img src="/assets/huruma/img/causes/2.jpg" alt="image" />
                            <div class="icon">
                                <i class="flaticon-laptop"></i>
                            </div>

                            <div class="causes-content">
                                <span>#Donation</span>
                                <h3>Massive donation to poor</h3>
                                <p>Lorem ipsum dolor sit amet, consecteturad eiustempor incididunlabore</p>

                                <div class="causes-progress-bar">
                                    <div class="causes-progress-content">
                                        <span>Raised: $4,000.00</span>
                                        
                                        <div class="text-right">
                                            <span>Goal: $8,000.00</span>
                                        </div>
                                    </div>
                                    <p>Raised by 40 people within 12 days</p>
                                </div>
                                
                                <a href="single-causes.html" class="causes-btn-one">
                                    Donate Now
                                    <i class="flaticon-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
                        <div class="single-causes">
                            <img src="/assets/huruma/img/causes/3.jpg" alt="image" />
                            <div class="icon">
                                <i class="flaticon-blood-bag"></i>
                            </div>

                            <div class="causes-content">
                                <span>#Helpless</span>
                                <h3>Huge help to homeless pupil</h3>
                                <p>Lorem ipsum dolor sit amet, consecteturad eiustempor incididunlabore</p>

                                <div class="causes-progress-bar">
                                    <div class="causes-progress-content">
                                        <span>Raised: $1,000.00</span>
                                        
                                        <div class="text-right">
                                            <span>Goal: $5,000.00</span>
                                        </div>
                                    </div>
                                    <p>Raised by 50people within 20days</p>
                                </div>
                                
                                <a href="single-causes.html" class="causes-btn-one">
                                    Donate Now
                                    <i class="flaticon-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        { /** End Causes Area  */ }

        { /** Start Donor Area  */ }
        <section class="donor-section pt-100 pb-70">
            <div class="container">
                <div class="section-title">
                    <h2>To have become a volunteer or donor</h2>
                </div>

                <div class="row">
                    <div class="col-lg-4 col-md-6">
                        <div class="donor-item">
                            <div class="icon">
                                <i class="flaticon-support"></i>
                            </div>
                            <h3>Select Position</h3>
                            <p>Lorem ipsum dolor siamet ectetur adipisicing</p>
                            <a href="#" class="donor-btn">Give Requist +</a>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="donor-item">
                            <div class="icon">
                                <i class="flaticon-confirmation"></i>
                            </div>
                            <h3>Get Confirmation</h3>
                            <p>Dolor Lorem ipsumsiamet ectetur adipisicin</p>
                            <a href="#" class="donor-btn">Get Reaction +</a>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
                        <div class="donor-item">
                            <div class="icon">
                                <i class="flaticon-enjoy"></i>
                            </div>
                            <h3>Get Enjoyed</h3>
                            <p>Lorem ipsum dolor siamet ectetur adipisicing</p>
                            <a href="#" class="donor-btn">Enjoy Now +</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="lines">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>
        </section>
        { /** End Donor Area  */ }

        { /** Start Solve Area  */ }
        <section class="solve-section pt-100 pb-70">
            <div class="container">
                <div class="section-title">
                    <span>
                        <i class="flaticon-to-do-list"></i>
                        What We Do
                    </span>
                    <h2>A mission to solve a problem</h2>
                    <p>Quis ipsum suspendice consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendices gravida.</p>
                </div>

                <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="solve-item">
                            <div class="icon">
                                <img src="/assets/huruma/img/solve/1.png" alt="image" />
                            </div>
                            <h3>Education Facilities</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. amet Rem in dolor</p>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="solve-item">
                            <div class="icon">
                                <img src="/assets/huruma/img/solve/2.png" alt="image" />
                            </div>
                            <h3>Medical Facilities</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. amet Rem in dolor</p>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="solve-item">
                            <div class="icon">
                                <img src="/assets/huruma/img/solve/3.png" alt="image" />
                            </div>
                            <h3>Healthy Food</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. amet Rem in dolor</p>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="solve-item">
                            <div class="icon">
                                <img src="/assets/huruma/img/solve/4.png" alt="image" />
                            </div>
                            <h3>Pure Water</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. amet Rem in dolor</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        { /** End Solve Area  */ }

        { /** Start Mission Area  */ }
        <section class="mission-section">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-6 p-0">
                        <div class="mission-image">
                            <img src="/assets/huruma/img/mission.png" alt="image" />
                        </div>
                    </div>

                    <div class="col-lg-6">
						<div class="mission-tab">
                            <span>
                                <i class="flaticon-target"></i>
                                Our Mission
                            </span>
							<h2>Concern about Our Mission</h2>
							<div class="tab mission-list-tab">
								<ul class="tabs">
									<li>
										<a href="#">
											Our Mission
										</a>
									</li>
									<li>
										<a href="#">
											Our Vision
										</a>
									</li>
									<li>
										<a href="#">
											Our Goal
										</a>
									</li>
                                </ul>
                                
								<div class="tab_content">
									<div class="tabs_item">
										<p>Magna  hpsum rolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ad minim veniam, quis nostrud exercitation ullamco laboris nisi ex ea  quis nostrud exercitation</p>

										<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, soluta, aspernatur dolorum sequi quisquam ullam in pariatur nihil dolorem cumque excepturi totam. Qui excepturi quasi cumque placeat fuga. Ea, eius?</p>
										<a class="default-btn" href="#">
                                            Our Mission
                                            <span></span>
                                            <i class="flaticon-right"></i>
										</a>
                                    </div>

                                    <div class="tabs_item">
										<p>Magna  hpsum rolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ad minim veniam, quis nostrud exercitation ullamco laboris nisi ex ea  quis nostrud exercitation</p>

										<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, soluta, aspernatur dolorum sequi quisquam ullam in pariatur nihil dolorem cumque excepturi totam. Qui excepturi quasi cumque placeat fuga. Ea, eius?</p>
										<a class="default-btn" href="#">
                                            Our Mission
                                            <span></span>
                                            <i class="flaticon-right"></i>
										</a>
                                    </div>

                                    <div class="tabs_item">
										<p>Magna  hpsum rolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ad minim veniam, quis nostrud exercitation ullamco laboris nisi ex ea  quis nostrud exercitation</p>

										<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, soluta, aspernatur dolorum sequi quisquam ullam in pariatur nihil dolorem cumque excepturi totam. Qui excepturi quasi cumque placeat fuga. Ea, eius?</p>
										<a class="default-btn" href="#">
                                            Our Mission
                                            <span></span>
                                            <i class="flaticon-right"></i>
										</a>
                                    </div>
								</div>
							</div>
						</div>
					</div>
                </div>
            </div>
        </section>
        { /** End Mission Area  */ }

        { /** Start Team Area  */ }
        <section class="team-section pt-100 pb-70">
            <div class="container">
                <div class="team-title-area">
                    <div class="row align-items-center">
                        <div class="col-lg-7">
                            <div class="section-title text-left">
                                <span>
                                    <i class="flaticon-support"></i>
                                    Meet Our Team
                                </span>
                                <h2>Talented Team behind Huruma</h2>
                                <p>Quis ipsum suspendice consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendices gravida.</p>
                            </div>
                        </div>

                        <div class="col-lg-5">
                            <div class="team-btn text-right">
                                <a href="#" class="optional-btn">
                                    Meet Our Team
                                    <i class="flaticon-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="team-item">
                            <div class="image">
                                <img src="/assets/huruma/img/team/1.png" alt="image" />
    
                                <ul class="social">
                                    <li>
                                        <a href="#" target="_blank">
                                            <i class="bx bxl-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i class="bx bxl-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i class="bx bxl-linkedin"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i class="bx bxl-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
    
                            <div class="content">
                                <h3>Alex Maxwel</h3>
                                <span>Founder</span>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="team-item">
                            <div class="image">
                                <img src="/assets/huruma/img/team/2.png" alt="image" />
    
                                <ul class="social">
                                    <li>
                                        <a href="#" target="_blank">
                                            <i class="bx bxl-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i class="bx bxl-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i class="bx bxl-linkedin"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i class="bx bxl-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
    
                            <div class="content">
                                <h3>Williams Halimton</h3>
                                <span>Manager</span>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-6 offset-sm-3 offset-lg-0">
                        <div class="team-item">
                            <div class="image">
                                <img src="/assets/huruma/img/team/3.png" alt="image" />
    
                                <ul class="social">
                                    <li>
                                        <a href="#" target="_blank">
                                            <i class="bx bxl-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i class="bx bxl-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i class="bx bxl-linkedin"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i class="bx bxl-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
    
                            <div class="content">
                                <h3>Juhon Dew</h3>
                                <span>CEO</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        { /** End Team Area  */ }

        { /** Start Events Area  */ }
        <section class="event-section pt-100">
            <div class="container">
                <div class="section-title">
                    <span>
                        <i class="flaticon-clipboard"></i>
                        Upcoming Events
                    </span>
                    <h2>Be ready for Our Events</h2>
                    <p>Event makes suspendice  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendices gravida.</p>
                </div>

                <div class="event-slider owl-carousel owl-theme">
                    <div class="event-item">
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="event-time">
                                    <h3>0-130</h3>
                                    <span>5 December 2020</span>

                                    <div class="icon">
                                        <i class="flaticon-clock"></i>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-8">
                                <div class="event-content">
                                    <h4>Huruma  Con Donation 2020</h4>

                                    <ul class="event-meta">
                                        <li>
                                            <i class="flaticon-clock"></i>
                                            8:00 - 10:00
                                        </li>

                                        <li>
                                            <i class="flaticon-pin"></i>
                                            Newyork City
                                        </li>
                                    </ul>
                                    <p>Dona ques suspendice consectetucaquuis ipsums gravida.</p>
                                    <a href="single-events.html" class="event-btn-one">Join Now +</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="event-item">
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="event-time">
                                    <h3>0-140</h3>
                                    <span>10 January 2021</span>

                                    <div class="icon">
                                        <i class="flaticon-clock"></i>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-8">
                                <div class="event-content">
                                    <h4>Poor funding for helpless</h4>

                                    <ul class="event-meta">
                                        <li>
                                            <i class="flaticon-clock"></i>
                                            9:00 - 12:00
                                        </li>

                                        <li>
                                            <i class="flaticon-pin"></i>
                                            Calfornia City
                                        </li>
                                    </ul>
                                    <p>Suspendice quis ipsum  consectetucaquuis ipsums gravida.</p>
                                    <a href="single-events.html" class="event-btn-one">Join Now +</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="event-item">
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="event-time">
                                    <h3>0-130</h3>
                                    <span>5 December 2020</span>

                                    <div class="icon">
                                        <i class="flaticon-clock"></i>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-8">
                                <div class="event-content">
                                    <h4>Huruma  Con Donation 2020</h4>

                                    <ul class="event-meta">
                                        <li>
                                            <i class="flaticon-clock"></i>
                                            8:00 - 10:00
                                        </li>

                                        <li>
                                            <i class="flaticon-pin"></i>
                                            Newyork City
                                        </li>
                                    </ul>
                                    <p>Dona ques suspendice consectetucaquuis ipsums gravida.</p>
                                    <a href="single-events.html" class="event-btn-one">Join Now +</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="event-item">
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="event-time">
                                    <h3>0-140</h3>
                                    <span>10 January 2021</span>

                                    <div class="icon">
                                        <i class="flaticon-clock"></i>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-8">
                                <div class="event-content">
                                    <h4>Poor funding for helpless</h4>

                                    <ul class="event-meta">
                                        <li>
                                            <i class="flaticon-clock"></i>
                                            9:00 - 12:00
                                        </li>

                                        <li>
                                            <i class="flaticon-pin"></i>
                                            Calfornia City
                                        </li>
                                    </ul>
                                    <p>Suspendice quis ipsum  consectetucaquuis ipsums gravida.</p>
                                    <a href="single-events.html" class="event-btn-one">Join Now +</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        { /** End Events Area  */ }

        { /** Start Testimonials Area  */ }
        <section class="testimonials-section pt-140 pb-100">
            <div class="container">
                <div class="section-title">
                    <span>
                        <i class="flaticon-testimonial"></i>
                        Testimonials
                    </span>
                    <h2>Don’t Believe Us? See review</h2>
                </div>
                <div class="testimonials-slider owl-carousel owl-theme">
                    <div class="testimonials-item">
                        <div class="row">
                            <div class="col-lg-3">
                                <div class="testimonials-info">
                                    <img src="/assets/huruma/img/testimonials/1.jpg" alt="image" />
                                    <h3>Juhan Luis</h3>
                                    <span>Charity Bingo <b>Uk</b></span>
                                    <ul class="social-info">
                                        <li>
                                            <i class='bx bxs-star'></i>
                                        </li>
                                        <li>
                                            <i class='bx bxs-star'></i>
                                        </li>
                                        <li>
                                            <i class='bx bxs-star'></i>
                                        </li>
                                        <li>
                                            <i class='bx bxs-star'></i>
                                        </li>
                                        <li>
                                            <i class='bx bxs-star'></i>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-9">
                                <h3>Precious Journey With You”</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, autem totam. Et ipsam similique consequatur! Numquam, inventore delectus sequi, ullam, placeat molestias velit dolore praesentium ea distinctio cum vitae aperiam Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, veniam reprehenderit. Id sed itaque quam voluptates deleniti autem facilis sequi! Voluptatibus voluptas dolorum nisi tenetur laboriosam modi quis.</p>
                            </div>
                        </div>
                    </div>
                    <div class="testimonials-item">
                        <div class="row">
                            <div class="col-lg-3">
                                <div class="testimonials-info">
                                    <img src="/assets/huruma/img/testimonials/2.jpg" alt="image" />
                                    <h3>juhon Dew</h3>
                                    <span>Charity Bingo <b>Canada</b></span>
                                    <ul class="social-info">
                                        <li>
                                            <i class='bx bxs-star'></i>
                                        </li>
                                        <li>
                                            <i class='bx bxs-star'></i>
                                        </li>
                                        <li>
                                            <i class='bx bxs-star'></i>
                                        </li>
                                        <li>
                                            <i class='bx bxs-star'></i>
                                        </li>
                                        <li>
                                            <i class='bx bxs-star'></i>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-9">
                                <h3>Precious Journey With You”</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, autem totam. Et ipsam similique consequatur! Numquam, inventore delectus sequi, ullam, placeat molestias velit dolore praesentium ea distinctio cum vitae aperiam Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, veniam reprehenderit. Id sed itaque quam voluptates deleniti autem facilis sequi! Voluptatibus voluptas dolorum nisi tenetur laboriosam modi quis.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="testimonials-shape">
                <img src="/assets/huruma/img/testimonials/shape.png" alt="image" />
            </div>
        </section>
        { /** End Testimonials Area  */ }

        { /** Start Donate Area  */ }
        <section class="donate-section ptb-100">
            <div class="container">
                <div class="section-title">
                    <h2>Want you know How Can  Help?</h2>
                    <p>Toiken ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididuntlabore et dolore magna aliqua. Ut enim ad minim.</p>
                    <a href="#" class="donate-btn">
                        Donate Now
                        <i class="flaticon-right"></i>
                    </a>
                </div>
            </div>

            <div class="default-shape">
                <img src="/assets/huruma/img/donate/1.png" alt="image" />
                <img src="/assets/huruma/img/donate/2.png" alt="image" />
            </div>
        </section>
        { /** End Donate Area  */ }

        { /** Start Blog Area  */ }
        <section class="blog-section pt-100 pb-70">
            <div class="container">
                <div class="section-title">
                    <span>
                        <i class="flaticon-book"></i>
                        Our Blog
                    </span>
                    <h2>Check Out Our Latest News</h2>
                </div>

                <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-blog">
                            <img src="/assets/huruma/img/blog/1.jpg" alt="image" />

                            <div class="content">
                                <a href="#">
                                    <i class='bx bx-user'></i>
                                </a>
                                <span>Poor, 22 January</span>
                                <h3>
                                    <a href="#">
                                        Poverty not only money it can be food sometimes
                                    </a>
                                </h3>
                                <a href="single-blog.html" class="blog-btn">Read more +</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-blog">
                            <img src="/assets/huruma/img/blog/2.jpg" alt="image" />

                            <div class="content">
                                <a href="#">
                                    <i class='bx bx-user'></i>
                                </a>
                                <span>Food, 21 December</span>
                                <h3>
                                    <a href="#">
                                        Strawberry-Banana Quinoa Muffins Recipe for poor
                                    </a>
                                </h3>
                                <a href="single-blog.html" class="blog-btn">Read more +</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-6 offset-sm-3 offset-lg-0">
                        <div class="single-blog">
                            <img src="/assets/huruma/img/blog/3.jpg" alt="image" />

                            <div class="content">
                                <a href="#">
                                    <i class='bx bx-user'></i>
                                </a>
                                <span>Healthy, 23 June</span>
                                <h3>
                                    <a href="#">
                                        The Plant-Powered Dietitian To Consume Habit
                                    </a>
                                </h3>
                                <a href="single-blog.html" class="blog-btn">Read more +</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        { /** End Blog Area  */ }

        { /** Start Footer Area  */ }
        <footer class="footer-section pt-100">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="single-footer-widget">
                            <h3>Contact info</h3>

                            <div class="footer-info-contact">
                                <i class="flaticon-pin"></i>
                                <h3>Location</h3>
                                <span>205 Fida Walinton, Tongo<br /> New York, Canada</span>
                            </div>

                            <div class="footer-info-contact">
                                <i class="flaticon-call"></i>
                                <h3>Call Us</h3>
                                <span><a href="tel:+882-569-756">987-0986-0987</a></span>
                            </div>

                            <div class="footer-info-contact">
                                <i class="flaticon-email"></i>
                                <h3>Email Us</h3>
                                <span>
                                    <a href="mailto:hello@huruma.com">
                                        support@huruma.com
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="single-footer-widget">
                            <h3>Our Support</h3>

                            <ul class="footer-quick-links">
                                <li>
                                    <a href="#">
                                        Private Policies
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Donate Now
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Become a Volunteer
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Careers
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Contact Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Paid programs
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Partnership
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-lg-2 col-md-6 col-sm-6">
                        <div class="single-footer-widget">
                            <h3>Our Services</h3>

                            <ul class="footer-quick-links">
                                <li>
                                    <a href="#">
                                        Donate
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Sponsor
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Fundraise
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Volunteer
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Partner
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Jobs
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Form 
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-footer-widget">
                            <h3>Recent News</h3>

                            <div class="footer-news">
                               <a href="single-blog.html">
                                   <img src="/assets/huruma/img/footer-news/1.jpg" alt="image" />
                                    <h4>Support about poverty to poor family</h4>
                                    <span>Poor, 22 January</span>
                               </a>
                            </div>

                            <div class="footer-news">
                               <a href="single-blog.html">
                                   <img src="/assets/huruma/img/footer-news/2.jpg" alt="image" />
                                    <h4>Mostly suffered school Boys care</h4>
                                    <span>Health, 24 February</span>
                               </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="copyright-area">
                <div class="container">
                    <div class="copyright-area-content">
                        <div class="row align-items-center">
                            <div class="col-lg-4">
                                <div class="copyright-logo">
                                    <img src="/assets/huruma/img/white-logo.png" alt="image" />
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6">
                                <p>
                                    <i class="far fa-copyright"></i> 
                                    2020 Huruma. All Rights Reserved by
                                    <a href="https://envytheme.com/" target="_blank">
                                        EnvyTheme
                                    </a>
                                </p>
                            </div>

                            <div class="col-lg-4 col-md-6">
                                <ul>
                                    <li>
                                        <a href="terms-condition.html">Terms & Conditions</a>
                                    </li>
                                    <li>
                                        <a href="privacy-policy.html">Privacy Policy</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        { /** End Footer Area  */ }

        { /** Start Go Top Section  */ }
        <div class="go-top">
            <i class="bx bx-chevron-up"></i>
            <i class="bx bx-chevron-up"></i>
        </div>
        { /** End Go Top Section  */ }

        </span> );
    }
}
