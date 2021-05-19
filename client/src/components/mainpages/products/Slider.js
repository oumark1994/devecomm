import React from 'react'
import { Link } from 'react-router-dom'

function Slider() {
    return (
        <div className="col-md-12 hi " >
            <div className="home">
		<div className="home_slider_container">
  <div className="owl-carousel owl-theme home_slider slider">
  
    <div className="owl-item home_slider_item" style={{minHeight:'30vh'}}>
      <div className="home_slider_background" style={{backgroundImage: 'url(images/img4.jpg)'}} alt="true" />
      <div className="home_slider_content_container">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="home_slider_content" data-animation-in="fadeIn" data-animation-out="animate-out fadeOut">
                <div className="home_slider_title">A new Online Shop experience.</div>
                <div className="home_slider_subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie eros. Sed viverra velit venenatis fermentum luctus.</div>
                <div className="button button_light home_button"><a href="/shop">Shop Now</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 
   
     <div className="owl-item home_slider_item">
      <div className="home_slider_background" style={{backgroundImage: 'url(images/img1.jpg)'}} alt="true" />
      <div className="home_slider_content_container">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="home_slider_content" data-animation-in="fadeIn" data-animation-out="animate-out fadeOut">
                <div className="home_slider_title">A new Online Shop experience.</div>
                <div className="home_slider_subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie eros. Sed viverra velit venenatis fermentum luctus.</div>
                <div className="button button_light home_button"><a href="#">Shop Now</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 
 
    <div className="owl-item home_slider_item">
      <div className="home_slider_background" style={{backgroundImage: 'url(images/img2.jpg)' }} alt="true" />
      <div className="home_slider_content_container">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="home_slider_content" data-animation-in="fadeIn" data-animation-out="animate-out fadeOut">
                <div className="home_slider_title">A new Online Shop experience.</div>
                <div className="home_slider_subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie eros. Sed viverra velit venenatis fermentum luctus.</div>
                <div className="button button_light home_button"><a href="#">Shop Now</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

  
   <div className="home_slider_dots_container"> 
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="home_slider_dots">
            <ul id="home_slider_custom_dots" className="home_slider_custom_dots">
              <li className="home_slider_custom_dot active">01.</li>
              <li className="home_slider_custom_dot">02.</li>
              <li className="home_slider_custom_dot">03.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>	
  </div>
</div>
</div>
<div className="avds">
  <div className="avds_container d-flex flex-lg-row flex-column align-items-start justify-content-between">
    <div className="avds_small">
      <div className="avds_background" style={{backgroundImage: 'url(images/img10.jpg)'}} />
      <div className="avds_small_inner">
        <div className="avds_discount_container">
          <img src="images/discount.png" alt="true" />
          <div>
            <div className="avds_discount">
              <div>15<span>%</span></div>
              <div>Discount</div>
            </div>
          </div>
        </div>
        <div className="avds_small_content">
          <div className="avds_title">Clothes</div>
          <div className="avds_link"><Link to="/shop">See More</Link></div>
        </div>
      </div>
    </div>
    <div className="avds_large">
      <div className="avds_background" style={{backgroundImage: 'url(images/img7.jpg)'}} />
      <div className="avds_large_container">
        <div className="avds_large_content">
          <div className="avds_title">The best dressing center</div>
          <div className="avds_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie eros. Sed viver ra velit venenatis fermentum luctus.</div>
          <div className="avds_link avds_link_large"><Link to="/shop">See More</Link></div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>




  )
    }

export default Slider
