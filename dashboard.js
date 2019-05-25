document.addEventListener('DOMContentLoaded', () => {


//LINE CHART
  var ctx1 = document.getElementById('myLineChart').getContext('2d');

  var chart1 = new Chart(ctx1, {
    type: 'line',

    data: {
        labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
        datasets: [{
            label: 'Weekly',
            backgroundColor: 'rgb(117, 119, 191, 0.5)',
            borderColor: 'rgb(76, 76, 114)',
            pointBackgroundColor: 'rgb(255, 255, 255)',
            pointBorderColor: 'rgb(76, 76, 114)',
            pointRadius: 5,
            borderWidth:1,
            lineTension:0,
            data: [750, 1250, 900, 1300, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2250],
        },
      ]
    },
    options:{
      legend: {
        display: false,
      },
      layout: {
        padding: {
          bottom: 15,
        }
      }

    }
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
            backgroundColor: 'rgb(117, 119, 191, 1)',
            borderColor: 'rgb(76, 76, 114)',
            pointBackgroundColor: 'rgb(255, 255, 255)',
            pointBorderColor: 'rgb(76, 76, 114)',
            pointRadius: 5,
            borderWidth:1,
            lineTension:0,
            data: [75, 100, 200, 175, 225, 200, 100],
        }]
    },
    options:{
      legend: {
        display: false,
      },
      layout: {
        padding: {
          top: 20,
          bottom: 20,
        }
      }
    }
});

//DONUT CHART
  var ctx3 = document.getElementById('myDonutChart').getContext('2d');

  var chart3 = new Chart(ctx3, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['Phones','Tablets', 'Desktop'],
        datasets: [
          {
            backgroundColor: ['#74b1bf','#81c98f','#7377bf'],
            borderColor: '#74b1bf',
            pointBackgroundColor: 'rgb(255, 255, 255)',
            pointBorderColor: 'rgb(76, 76, 114)',
            pointRadius: 5,
            borderWidth:1,
            lineTension:0,
            data: [15,15,70],
        }]
    },
    options: {
      legend: {
        display:true,
        position: 'right',
        labels: {
          fontColor: '#666666',
        }
      },
      layout: {
        padding: {
          top:20,
          bottom: 20,
        }
      }
    }
});




//ALERT MESSAGE ON LOAD

  const message = document.getElementById('message');


  function alertMessage() {
    message.style.display = "block";
  }


  window.onload = alertMessage()


























});
