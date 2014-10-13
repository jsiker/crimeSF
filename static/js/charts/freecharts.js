/**
 * Created by danielsiker on 10/11/14.
 */
//var myDoughnutChart = new Chart(ctx[1]).Doughnut(data,options);
$(document).ready(function() {
    var data = [
        {
            value: 4531,
            color:"#F7464A",
            highlight: "#FF5A5E",
            label: "Monday"
        },
        {
            value: 4830,
            color: "#46BFBD",
            highlight: "#5AD3D1",
            label: "Tuesday"
        },
        {
            value: 4493,
            color: "#FDB45C",
            highlight: "#FFC870",
            label: "Wednesday"
        },
         {
            value: 4542,
            color: "#00B3B3",
            highlight: "#1AE6E6",
            label: "Thursday"
        },
         {
            value: 4987,
            color: "#671BB3",
            highlight: "#B269FB",
            label: "Friday"
        },
         {
            value: 4945,
            color: "#DB811A",
            highlight: "#C98A42",
            label: "Saturday"
        },
        {
            value: 4426,
            color: "#F20CEE",
            highlight: "#F56EF3",
            label: "Sunday"
        },

        ];
      var options = {
            animation: false

    };

     console.log(data);
    //Get the context of the canvas element we want to select
    var c = $('#myNewChart');
    var ct = c.get(0).getContext('2d');
    var ctx = document.getElementById("myNewChart").getContext("2d");
    /*************************************************************************/

});

myNewChart = new Chart(ct).Doughnut(data, options);
