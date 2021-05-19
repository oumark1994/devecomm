import React from 'react'

function Footer() {
    return (
        <div>
         <div>
  <div className="footer_overlay" />
  <footer className="footer">
    <div className="footer_background" style={{backgroundImage: 'url(images/footer.jpg)'}} />
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="footer_content d-flex flex-lg-row flex-column align-items-center justify-content-lg-start justify-content-center">
            <div className="footer_logo"><a href="#">KollaTec.</a></div>
            <div className="copyright ml-auto mr-auto">{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              Copyright © All rights reserved | This website is made with <i className="fa fa-heart-o" aria-hidden="true" /> by <a href="https://kollaTec.com" target="_blank">KollaTec</a>
              {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</div>
            <div className="footer_social ml-lg-auto">
              <ul>
                <li><a href="#"><i className="fa fa-pinterest" aria-hidden="true" /></a></li>
                <li><a href="#"><i className="fa fa-instagram" aria-hidden="true" /></a></li>
                <li><a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                <li><a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</div>

            
        </div>
    )
}

export default Footer
