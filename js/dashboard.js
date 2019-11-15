document.addEventListener('DOMContentLoaded', () => {


//LINE CHART


//default

var ctx1_1 = document.getElementById('myLineChart').getContext('2d');
var chart1_1 = new Chart(ctx1_1, {
  type: 'line',

  data: {
      labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
      datasets: [{
          label: 'Hourly',
          backgroundColor: 'rgb(117, 119, 191, 0.5)',
          borderColor: 'rgb(76, 76, 114)',
          pointBackgroundColor: 'rgb(255, 255, 255)',
          pointBorderColor: 'rgb(76, 76, 114)',
          pointRadius: 5,
          borderWidth:1,
          lineTension:0,
          data: [3, 6, 9, 15, 8, 5, 21, 32, 5, 20, 50, 10],
      },
    ]
  },
  options:{
    scales: {
            yAxes: [{
                gridlines: {
                    offsetGridLines:true,
                }
            }]
   },
    legend: {
      display: false,
    },
    layout: {
      padding: {
        bottom: 15,
      }
    },
  }
});


document.getElementById("hourly").addEventListener("click", function(){
  var ctx1_1 = document.getElementById('myLineChart').getContext('2d');
  var chart1_1 = new Chart(ctx1_1, {
    type: 'line',

    data: {
        labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
        datasets: [{
            label: 'Hourly',
            backgroundColor: 'rgb(117, 119, 191, 0.5)',
            borderColor: 'rgb(76, 76, 114)',
            pointBackgroundColor: 'rgb(255, 255, 255)',
            pointBorderColor: 'rgb(76, 76, 114)',
            pointRadius: 5,
            borderWidth:1,
            lineTension:0,
            data: [3, 6, 9, 15, 8, 5, 21, 32, 5, 20, 50, 10],
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
});


document.getElementById("daily").addEventListener("click", function(){
  var ctx1_2 = document.getElementById('myLineChart').getContext('2d');
  var chart1_2 = new Chart(ctx1_2, {
    type: 'line',

    data: {
        labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
        datasets: [{
            label: 'Daily',
            backgroundColor: 'rgb(117, 119, 191, 0.5)',
            borderColor: 'rgb(76, 76, 114)',
            pointBackgroundColor: 'rgb(255, 255, 255)',
            pointBorderColor: 'rgb(76, 76, 114)',
            pointRadius: 5,
            borderWidth:1,
            lineTension:0,
            data: [10, 15, 31, 22, 8, 90, 54, 23, 16, 9, 40, 20],
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
});





document.getElementById("weekly").addEventListener("click", function(){
  var ctx1_3 = document.getElementById('myLineChart').getContext('2d');

  var chart1_3 = new Chart(ctx1_3, {
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
});




document.getElementById("monthly").addEventListener("click", function(){
  var ctx1_4 = document.getElementById('myLineChart').getContext('2d');
  var chart1_4 = new Chart(ctx1_4, {
    type: 'line',

    data: {
        labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
        datasets: [{
            label: 'Monthly',
            backgroundColor: 'rgb(117, 119, 191, 0.5)',
            borderColor: 'rgb(76, 76, 114)',
            pointBackgroundColor: 'rgb(255, 255, 255)',
            pointBorderColor: 'rgb(76, 76, 114)',
            pointRadius: 5,
            borderWidth:1,
            lineTension:0,
            data: [3000, 5000, 3600, 5200, 8000, 6000, 8000, 3000, 3500, 7000, 8000, 9000],
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
        },
      }
    }
});




//ALERT MESSAGE ON LOAD

  const message$ = $('#message');


  function alertMessage() {
    message$.slideDown(1000);
  }


  window.onload = alertMessage()



document.getElementById("search_btn").addEventListener("click", function(){
  console.log("button clicked");
});



var member_names = {

  data:             ['ana george',
                    'rodrigo carlos',
                    'susan simpson',
                    'john blake'
                    ]
};



$("#user_search").easyAutocomplete(member_names);


document.getElementById("send_btn").addEventListener("click", function(){
  if (member_names.data.indexOf($("#user_search").val()) !== -1 &&  $("#user_message").val() !== '') {
  window.alert("Thank you! Your message has been sent");
  } else {
  window.alert("Sorry, please check if a user has been selected and if the message field is not empty");
  }
});


document.getElementById("notifications_badge").addEventListener("click", function(){
  console.log('button clicked');
  $('#myDropdown').slideDown(1500);
  notifications_badge.classList.remove("content_maker");
});


//SAVING EMAIL SETTINGS
var currentState = localStorage.getItem('on');
console.log(currentState);

document.getElementById("save_btn").addEventListener("click", function(){
  var on = document.getElementById('email_notifications').checked;
  var state = localStorage.setItem('on',JSON.stringify(on));
  currentState = localStorage.getItem('on');
  console.log(currentState);
});


if (currentState == "true") {
  console.log('currentState is true');
  document.getElementById('email_notifications').checked = true;
} else {
  console.log('currentState is false');
  document.getElementById('email_notifications').checked = false;
}


//SAVING PROFILE SETTINGS

var currentState1 = localStorage.getItem('on1');

document.getElementById("save_btn").addEventListener("click", function(){
  var on1 = document.getElementById('profile_display').checked;
  var state1 = localStorage.setItem('on1',JSON.stringify(on1));
  currentState1 = localStorage.getItem('on1');
  console.log(currentState1);
});


if (currentState1 == "true") {
  document.getElementById('profile_display').checked = true;
} else if (currentState1 == "false") {
  document.getElementById('profile_display').checked = false;
}

//SAVING TIMEZONE SETTINGS
var currentOption = localStorage.getItem('option');

document.getElementById("save_btn").addEventListener("click", function(){
  var option = document.getElementById('timezone').selectedIndex;
  var storedOption = localStorage.setItem('option',JSON.stringify(option));
  currentOption = localStorage.getItem('option');
});



if (currentOption == "1") {
  document.getElementById('timezone').selectedIndex = 1;
} if (currentOption == "2") {
  document.getElementById('timezone').selectedIndex = 2;
} if (currentOption == "3") {
  document.getElementById('timezone').selectedIndex = 3;
}


//RESET OPTIONS

  document.getElementById("cancel_btn").addEventListener("click", function(){
    document.getElementById('timezone').selectedIndex = 0;
    document.getElementById('profile_display').checked = false;
    document.getElementById('email_notifications').checked = false;
  });


/*

document.getElementById("save_btn").addEventListener("click", function(){
  var switchedOn = localStorage.getItem('on');
  console.log(switchedOn);

  document.getElementById('email_notifications').checked = false;

  if (swicthedOn = true) {
    console.log('should be ON')
    document.getElementById('email_notifications').checked = true;
  }
});

document.getElementById("cancel_btn").addEventListener("click", function(){
  var on = false;
});

*/



/*
var characters = [];

function splitNames(arr) {
  for (var i=0; i<= arr.length-1; i+=1) {
    const memberCharacters = arr[i].split("");
    characters.push(memberCharacters);
  }
}

console.log(characters);

  var splitCharacters = splitNames(member_names);

console.log(splitCharacters);

$( "#user_search" ).keyup(function() {
  search = $('#user_search').val().toLowerCase();
  console.log(search);
  for (var i = 0; i <= member_names.length-1; i += 1 ){
    if (search === (member_names[i][0])) {
      $( "#user_search" ).val((member_names[i]));
      console.log(member_names[i] + ' is a match');
      document.getElementById("send_btn").addEventListener("click", function(){
        window.alert("Thank you! Your message has been sent");
      });
    } else {
      console.log('no matches found');
    }
  };
});


*/




/*
var member = {
  avatar:"",
  name:"",
  email:"",
  signUp:"",
  activity:"",
};


avatar_paths =['<img src="images/member-1.jpg" alt="member avatar"></img>',
               '<img src="images/member-2.jpg" alt="member avatar"></img>',
               '<img src="images/member-3.jpg" alt="member avatar"></img>',
               '<img src="images/member-4.jpg" alt="member avatar"></img>'
]

member_names =['Ana George',
               'Rodrigo Carlos',
               'Susan Simpson',
               'John Blake'
]

member_emails =['<a href="">ana.george@example.com</a>',
               '<a href="">rodrigo.carlos@example.com</a>',
               '<a href="">susansimpson@example.com</a>',
               '<a href="">johnblake@example.com</a>'
]

signUp_dates =['11/05/2019',
               '10/04/2019',
               '5/03/2019',
               '4/03/2019'
]

recent_activities = [' commented on YourApps cooking TIPS',
                     ' liked the post about global warming being super real',
                     ' comented on global warming being super real',
                     ' posted YourApps selfhelp TIPS',


]


allMembers =[];

for (var i = 0; i <= member_names.length-1; i += 1 ) {
  member = {avatar:avatar_paths[i],name:member_names[i],email:member_emails[i], signUp:signUp_dates[i], activity:recent_activities[i]};
  allMembers.push(member);
}

console.log(allMembers);

for (var i = 0; i <= member_names.length-1; i += 1 ) {
document.getElementById('list_new_members').innerHTML += '<li>' + (allMembers[i].avatar) + ' ' + (allMembers[i].name)+ '<br></br>' + (allMembers[i].email)+ ' ' + (allMembers[i].signUp) + '<li></li>';
document.getElementById('list_recent_activity').innerHTML += '<li>' + (allMembers[i].name) + ' ' + (allMembers[i].activity) + '<li></li>' + '<br></br>';
}
*/





});
