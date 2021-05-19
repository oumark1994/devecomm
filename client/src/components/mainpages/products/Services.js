import React from 'react'

function Services() {
    return (
  <div>
  <div className="icon_boxes">
    <div className="container">
      <div className="row icon_box_row">
        {/* Icon Box */}
        <div className="col-lg-4 icon_box_col">
          <div className="icon_box">
            <div className="icon_box_image"><img src="images/icon_1.svg" alt="true" /></div>
            <div className="icon_box_title">Free Shipping Worldwide</div>
            <div className="icon_box_text">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie.</p>
            </div>
          </div>
        </div>
        {/* Icon Box */}
        <div className="col-lg-4 icon_box_col">
          <div className="icon_box">
            <div className="icon_box_image"><img src="images/icon_2.svg" alt="true" /></div>
            <div className="icon_box_title">Free Returns</div>
            <div className="icon_box_text">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie.</p>
            </div>
          </div>
        </div>
        {/* Icon Box */}
        <div className="col-lg-4 icon_box_col">
          <div className="icon_box">
            <div className="icon_box_image"><img src="images/icon_3.svg" alt="true" /></div>
            <div className="icon_box_title">24h Fast Support</div>
            <div className="icon_box_text">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Newsletter */}
  <div className="newsletter">
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="newsletter_border" />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <div className="newsletter_content text-center">
            <div className="newsletter_title">Subscribe to our newsletter</div>
            <div className="newsletter_text"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie eros</p></div>
            <div className="newsletter_form_container">
              <form action="#" id="newsletter_form" className="newsletter_form">
                <input type="email" className="newsletter_input" required="required" />
                <button className="newsletter_button trans_200"><span>Subscribe</span></button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

            
    )
}

export default Services
