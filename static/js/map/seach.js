/**
 * Created by danielsiker on 10/11/14.
 */
 $(document).ready(function() {
        $(window).resize(function () {
          var h = $(window).height(),
            offsetTop = 105; // Calculate the top offset

          $('#map_canvas').css('height', (h - offsetTop));
        }).resize();

        $(function() {
          MapsLib.initialize();
          $("#search_address").geocomplete();

          $(':checkbox').click(function(){
            MapsLib.doSearch();
          });

          $(':radio').click(function(){
            MapsLib.doSearch();
          });

          $('#search_radius').change(function(){
            MapsLib.doSearch();
          });

          $('#search').click(function(){
            MapsLib.doSearch();
          });

          $('#find_me').click(function(){
            MapsLib.findMe();
            return false;
          });

          $('#reset').click(function(){
            $.address.parameter('address','');
            MapsLib.initialize();
            return false;
          });

          $(":text").keydown(function(e){
              var key =  e.keyCode ? e.keyCode : e.which;
              if(key == 13) {
                  $('#search').click();
                  return false;
              }
          });
        });
      });

// function initialize() {
//
//    google.maps.visualRefresh = true;
//    var isMobile = (navigator.userAgent.toLowerCase().indexOf('android') > -1) ||
//      (navigator.userAgent.match(/(iPod|iPhone|iPad|BlackBerry|Windows Phone|iemobile)/));
//    if (isMobile) {
//      var viewport = document.querySelector("meta[name=viewport]");
//      viewport.setAttribute('content', 'initial-scale=1.0, user-scalable=no');
//    }
//    var mapDiv = document.getElementById('googft-mapCanvas');
//    mapDiv.style.width = isMobile ? '100%' : '1000px';
//    mapDiv.style.height = isMobile ? '100%' : '600px';
//    var map = new google.maps.Map(mapDiv, {
//      center: new google.maps.LatLng(37.75656330362406, -122.43476716137695),
//      zoom: 13,
//      mapTypeId: google.maps.MapTypeId.ROADMAP
//    });
//    map.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(document.getElementById('googft-legend-open'));
//    map.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(document.getElementById('googft-legend'));
//
//    layer = new google.maps.FusionTablesLayer({
//      map: map,
//      heatmap: { enabled: heatmap.checked },
//      query: {
//        select: "col13",
//        from: "1aQSsgRr0wHUcUQ7AYNWBtgoovZMs7qEF91VmzEfo",
//        where: ""
//      },
//      options: {
//        styleId: 2,
//        templateId: 2,
//        backgroundColor: 'black'
//      }
//    });
//
////    var image = 'static/bikeracks.png';
////    var beachMarker = new google.maps.Marker({
////        map: map,
////        icon: image
////    });
//
//    if (isMobile) {
//      var legend = document.getElementById('googft-legend');
//      var legendOpenButton = document.getElementById('googft-legend-open');
//      var legendCloseButton = document.getElementById('googft-legend-close');
//      legend.style.display = 'none';
//      legendOpenButton.style.display = 'block';
//      legendCloseButton.style.display = 'block';
//      legendOpenButton.onclick = function() {
//        legend.style.display = 'block';
//        legendOpenButton.style.display = 'none';
//      }
//      legendCloseButton.onclick = function() {
//        legend.style.display = 'none';
//        legendOpenButton.style.display = 'block';
//      }
//    }
//  }
//
//  google.maps.event.addDomListener(window, 'load', initialize);