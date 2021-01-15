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

  // });
  $("#submit").click(function () {
	  window.alert("clicked");
    var contact_name = $("#contact_name").val();
    var contact_email = $("#contact_email").val();
    var contact_number = $("#contact_number").val();
    var contact_type = $("#contact_type").val();
    var contact_subject = $("#contact_subject").val();
    var contact_message = $("#contact_message").val();
    $.post("contact_submit.php", {
      contact_name: contact_name,
      contact_email: contact_email,
      contact_number: contact_number,
      contact_type: contact_type,
      contact_subject: contact_subject,
      contact_message: contact_message,
    });
  });
});
