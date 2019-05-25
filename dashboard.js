document.addEventListener('DOMContentLoaded', () => {


//LINE CHART
  var ctx1 = document.getElementById('myLineChart').getContext('2d');

  var chart1 = new Chart(ctx1, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
        datasets: [{
            label: 'TRAFFIC',
            backgroundColor: 'rgb(117, 119, 191, 0.5)',
            borderColor: 'rgb(76, 76, 114)',
            pointBackgroundColor: 'rgb(255, 255, 255)',
            pointBorderColor: 'rgb(76, 76, 114)',
            pointRadius: 5,
            borderWidth:1,
            lineTension:0,
            data: [750, 1250, 900, 1300, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2250],
        }]
    },
});

//BAR CHART
  var ctx2 = document.getElementById('myBarChart').getContext('2d');

  var chart2 = new Chart(ctx2, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        datasets: [{
            label: 'DAILY TRAFFIC',
            backgroundColor: 'rgb(117, 119, 191, 0.5)',
            borderColor: 'rgb(76, 76, 114)',
            pointBackgroundColor: 'rgb(255, 255, 255)',
            pointBorderColor: 'rgb(76, 76, 114)',
            pointRadius: 5,
            borderWidth:1,
            lineTension:0,
            data: [75, 100, 200, 175, 225, 200, 100],
        }]
    },
});

//DONUT CHART
  var ctx3 = document.getElementById('myDonutChart').getContext('2d');

  var chart3 = new Chart(ctx3, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['Phones', 'Tablets', 'Desktop'],
        datasets: [{
            label: 'MOBILE USERS',
            backgroundColor: 'rgb(117, 119, 191, 0.5)',
            borderColor: 'rgb(76, 76, 114)',
            pointBackgroundColor: 'rgb(255, 255, 255)',
            pointBorderColor: 'rgb(76, 76, 114)',
            pointRadius: 5,
            borderWidth:1,
            lineTension:0,
            data: [15, 15, 70],
        }]
    },
});




//ALERT MESSAGE ON LOAD

  const message = document.getElementById('message');


  function alertMessage() {
    message.style.display = "block";
  }


  window.onload = alertMessage()


























});
