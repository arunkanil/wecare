/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Menu
4. Init Google Map


******************************/

$(document).ready(function () {
  "use strict";

  /* 

	1. Vars and Inits

	*/

  var header = $(".header");
  var menu = $(".menu");
  var menuActive = false;
  var map;

  setHeader();

  $(window).on("resize", function () {
    setHeader();

    setTimeout(function () {
      $(window).trigger("resize.px.parallax");
    }, 375);
  });

  $(document).on("scroll", function () {
    setHeader();
  });

  initMenu();
  initGoogleMap();

  /* 

	2. Set Header

	*/

  function setHeader() {
    if ($(window).scrollTop() > 91) {
      header.addClass("scrolled");
    } else {
      header.removeClass("scrolled");
    }
  }

  /* 

	3. Init Menu

	*/

  function initMenu() {
    if ($(".hamburger").length && $(".menu").length) {
      var hamb = $(".hamburger");
      var close = $(".menu_close_container");

      hamb.on("click", function () {
        if (!menuActive) {
          openMenu();
        } else {
          closeMenu();
        }
      });

      close.on("click", function () {
        if (!menuActive) {
          openMenu();
        } else {
          closeMenu();
        }
      });
    }
  }

  function openMenu() {
    menu.addClass("active");
    menuActive = true;
  }

  function closeMenu() {
    menu.removeClass("active");
    menuActive = false;
  }

  /* 

	4. Init Google Map

	*/

  function initGoogleMap() {
    var myLatlng = new google.maps.LatLng(25.2525776, 55.3082912);
    var mapOptions = {
      center: myLatlng,
      zoom: 14,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      draggable: true,
      scrollwheel: false,
      zoomControl: true,
      zoomControlOptions: {
        position: google.maps.ControlPosition.RIGHT_CENTER,
      },
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: false,
      rotateControl: false,
      fullscreenControl: true,
      styles: [
        {
          featureType: "road.highway",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#ffeba1",
            },
          ],
        },
      ],
    };

    // Initialize a map with options
    map = new google.maps.Map(document.getElementById("map"), mapOptions);

    // Re-center map after window resize
    google.maps.event.addDomListener(window, "resize", function () {
      setTimeout(function () {
        google.maps.event.trigger(map, "resize");
        map.setCenter(myLatlng);
      }, 1400);
    });
  }

  $("#contactform").submit(function () {
    var action = $(this).attr("action");
    var values = $(this).serialize();

    $("#submit").attr("disabled", "disabled");

    $("#message").slideUp(0, function () {
      $.post(action, values, function (data) {
        $("#message").html(data);
        $("#message").slideDown("slow");
        $("#submit").removeAttr("disabled");
        if (data.match("success") != null) $("#contactform")[0].reset();
      });
    });

    return false;
  });

  $(document).ready(function () {
    $("#phone_no").keyup(function (e) {
      if (!validatePhone("phone_no")) {
        $("#phone_no").val("");
        return false;
      } else {
        return true;
      }
    });

    $("#submit").click(function () {
      var name = $("#contact_name").val();
      var email = $("#contact_email").val();
      var phone_no = $("#contact_number").val();
      var cname = $("#contact_type").val();
      var website = $("#contact_subject").val();
      var comments = $("#contact_message").val();
      var requirement = $("#requirement").val();
      //var contact = $("#contact").val();
      $("#returnmessage").empty(); // To empty previous error/success message.
      // Checking for blank fields.
    //   if (name == "") {
    //     $("#errmsg").text("Please enter your 'Name'");
    //     $("#name").addClass("err");
    //   } else if (email == "") {
    //     $("#name").removeClass("err");
    //     $("#email").addClass("err");
    //     $("#errmsg").text("Please enter your 'Email Address'");
    //   } else if (email != "" && !validateEmail(email)) {
    //     $("#email").addClass("err");
    //     $("#errmsg").text("Please enter valid Email");
    //   } else if (phone_no == "") {
    //     $("#email").removeClass("err");
    //     $("#errmsg").text("Please enter your 'Phone Number'");
    //     $("#phone_no").addClass("err");
    //   } else if (phone_no != "" && !validatePhone("phone_no")) {
    //     $("#email").removeClass("err");
    //     $("#errmsg").text("Please enter a valid 'Phone Number'");
    //     $("#phone_no").addClass("err");
    //   } else if (requirement == null) {
    //     $("#phone_no").removeClass("err");
    //     $("#errmsg").text("Please select your 'Requirement'");
    //     $("#req-wrap .multiselect").addClass("err-dd");
    //   } else if (budget == "") {
    //     $("#req-wrap .multiselect").removeClass("err-dd");
    //     $("#errmsg").text("Please select your 'Budget'");
    //     $("#budg-wrap p.SelectBox").addClass("err-dd");
    //   } else {
    //     $("#name").removeClass("err");
    //     $("#email").removeClass("err");
    //     $("#comments").removeClass("err");
    //     $("#req-wrap .multiselect").removeClass("err-dd");
    //     $("#budg-wrap p.SelectBox").removeClass("err-dd");
    //     $("#errmsg").text("");

    //     $("#contactform")[0].reset(); // To reset form fields on success.
    //     $(".contactForm").hide();
    //     $("#msg").fadeIn(4000);

        // Returns successful data submission message when the entered information is stored in database.
        $.post("contact_submit.php", {
          name: name,
          email: email,
          phone_no: phone_no,
          cname: cname,
          website: website,
          requirement: requirement,
          comments: comments,
        });
    //   }
    });
  });
});
