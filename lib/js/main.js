$(document).ready(function(){
    $('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items:1,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true
    });
    $("[data-fancybox]").fancybox({
		// Options will go here
	});

        var callScreenResizer = (function callScreenResizer(){
            var height = $('.commonLeft').height() - 53;
            $('.commonBorder.second').css('height',height);
            return callScreenResizer;
        })();
        var callScreenResizeRight = (function callScreenResizeRight(){
            var height = $('.commonRight.PlaceSecond').height() - 115;
            $('.commonBorder.tri').height(height);
            return callScreenResizeRight;
        })();
        $(window).on('resize', function(){
            callScreenResizer();
            callScreenResizeRight();
        })
        var geocoder;
  var map;
  function initialize() {
    geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(-34.397, 150.644);
    var mapOptions = {
      zoom: 8,
      center: latlng
    }
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
  }

var geocoder;
var map;
var address = "No 15/18, 1st main road, Industrial town, Rajajinagar, Bangalore 560044";

function initialize() {
  geocoder = new google.maps.Geocoder();
  var latlng = new google.maps.LatLng(-34.397, 150.644);
  var myOptions = {
    zoom: 14,
    center: latlng,
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
    },
    navigationControl: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
  if (geocoder) {
    geocoder.geocode({
      'address': address
    }, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        if (status != google.maps.GeocoderStatus.ZERO_RESULTS) {
          map.setCenter(results[0].geometry.location);

          var infowindow = new google.maps.InfoWindow({
            content: '<b>' + address + '</b>',
            size: new google.maps.Size(150, 50)
          });

          var marker = new google.maps.Marker({
            position: results[0].geometry.location,
            map: map,
            title: address
          });
          google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map, marker);
          });

        } else {
          alert("No results found");
        }
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
  }
}
google.maps.event.addDomListener(window, 'load', initialize);
initialize();

//create Time Line
    var countDown = new Date("May 6, 2017 15:37:25").getTime();

    var x = setInterval(function(){
        var now = new Date().getTime();

        var distance = countDown - now;

        var days = Math.floor(distance/(1000*60*60*24));
        var hours = Math.floor((distance % (1000*60*60*24))/ (1000*60*60)) ;
        var minutes = Math.floor((distance % (1000*60*60))/(1000*60));

        $('#countDown').html(days + "Days "+ hours +"Hours " + minutes + "Minutes");
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
    })
})
