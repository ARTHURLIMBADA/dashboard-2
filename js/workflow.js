// CHART DOC

'use strict';

var ctx = document.getElementById("myChart").getContext("2d");

var data = {
    labels: ["M", "T", "W", "T", "F", "S", "S"],
    datasets: [
      {
        label: 'Hours without Sales',
        data: [
            0, 1, 4, 8, 6, 5, 15
        ],
        backgroundColor: 'rgba(255, 99, 132, 0.8)'
      },
      {
        label: 'Hours with Sales',
        data: [
            0, 4, 7, 8, 7, 9, 6
        ],
        backgroundColor: 'rgba(70, 78, 173, 0.8)'
      }
    ]
}

var myChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                },
              
            }]
        }
    }
});