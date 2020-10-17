document.getElementById("bottom").innerHTML = 
` <footer id="footer">

  <div class="footer-top">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-5 footer-contact" style="padding-top: 30px;">
          <div id='footerLogoBkg'>
            <span id='footerLogo'>ProbioHealthy</span>
          </div>
          <style>
            #footerLogoBkg {
              position: relative;
              height: 100%;
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
              overflow: visible;
            }

            #footerLogoBkg::before {
              content: "";
              background-image: url('/Team_Logo.jpg');
              background-repeat: no-repeat;
              background-size: 100% 100%;
              position: absolute;
              top: 0px;
              right: 0px;
              bottom: 0px;
              left: 0px;
              opacity: 0.5;
              overflow: visible;
            }

            #footerLogo {
              position: relative;
              font-size: 36px;
              font-weight: 900;
              color: black;
              text-align: center;
              padding-bottom: 20%;
            }
          </style>
          <div style="display: none;">
            <p>
              Level 5/287 Collins St, <br>
              Melbourne, VIC 3000<br>
              Australia <br><br>
              <strong>Phone:</strong> 1300-970-038<br>
              <strong>Email:</strong><a href="mailto:hzha0119@student.monash.edu">hello@ProbioHealthy.com<br></a>
            </p>
          </div>
        </div>

        <div class="col-lg-3 col-md-3 footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li><i class="bx bx-chevron-right"></i> <a href="index.html">Home</a></li>
            <li><i class="bx bx-chevron-right"></i> <a href="about.html">About us</a></li>
            <li><i class="bx bx-chevron-right"></i> <a href="disclaimer.html">Disclaimer</a></li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-3 footer-links">
          <h4>Our Services</h4>
          <ul>
            <li><i class="bx bx-chevron-right"></i> <a href="About HPV.html">HPV Overview</a></li>
            <li><i class="bx bx-chevron-right"></i> <a href="topics.html">HPV Topics</a></li>
            <li><i class="bx bx-chevron-right"></i> <a href="quiz frame.html">HPV Check</a></li>
            <li><i class="bx bx-chevron-right"></i> <a href="autocomplete.html">Google Map</a></li>
          </ul>
        </div>

        <div class="col-lg-2 col-md-6 footer-newsletter" style="display: none;">
          <h4>Subscribe to our newsletter</h4>
          <p>Free subscription. We are always looking for ways to improve our website.</p>
          <form onsubmit="return false">
            <input type="email" name="email">
            <input type="submit" value="Subscribe" onclick="window.alert('Thank you for subscribing with us.')">
          </form>
        </div>

      </div>
    </div>
  </div>

  <div class="container d-md-flex py-4">

    <div class="mr-md-auto text-center text-md-left">
      <div class="copyright">
        &copy; Copyright <strong><span>ProbioHealthy 2020</span></strong>. All Rights Reserved
      </div>
      <div class="credits">
        <!-- All the links in the footer should remain intact. -->
        <!-- You can delete the links only if you purchased the pro version. -->
        <!-- Licensing information: https://bootstrapmade.com/license/ -->
        <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/medilab-free-medical-bootstrap-theme/ -->
        Designed by <a href="index.html">ProbioHealthy Team</a>
      </div>
    </div>
    <div class="social-links text-center text-md-right pt-3 pt-md-0" style="display: none;">
      <a href="#footer" class="twitter"><i class="bx bxl-twitter"></i></a>
      <a href="#footer" class="facebook"><i class="bx bxl-facebook"></i></a>
      <a href="#footer" class="instagram"><i class="bx bxl-instagram"></i></a>
      <a href="#footer" class="google-plus"><i class="bx bxl-skype"></i></a>
      <a href="#footer" class="linkedin"><i class="bx bxl-linkedin"></i></a>
    </div>
  </div>
</footer><!-- End Footer -->

<div id="preloader"></div>
<a href="#" class="back-to-top"><i class="icofont-simple-up"></i></a>`