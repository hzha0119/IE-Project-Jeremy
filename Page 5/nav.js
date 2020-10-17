function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
  }
  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
  }
  var bttn = document.getElementById("bttn");
  var textNav = document.getElementById("textNav")
  bttn.addEventListener("mouseover", function (e) {
    textNav.style.backgroundColor = "lavender"
  })
  bttn.addEventListener("mouseout", function (e) {
    textNav.style.backgroundColor = "white";
    bttn.style.outline = "none"
  })

  textNav.addEventListener("mouseover", function (e) {
    bttn.style.backgroundColor = "lavender"
  })
  textNav.addEventListener("mouseout", function (e) {
    bttn.style.backgroundColor = "#1977cc";
  })
  $(document).ready(function () {
    $('a[href^="#"]').click(function () {
      console.log(this.hash)
      var target = $(this.hash);
      if (target.length == 0) target = $('a[name="' + this.hash.substr(1) + '"]');
      if (target.length == 0) target = $('html');
      $('html, body').animate({ scrollTop: target.offset().top - 150 }, 0);
      return false;
    });
  });