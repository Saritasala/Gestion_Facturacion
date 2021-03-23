var Chartv2 = Chart.noConflict();

var data1a = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      fillColor: "rgba(120,120,120,0.2)",
      strokeColor: "rgba(120,120,120,1)",
      pointColor: "rgba(120,120,120,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(120,120,120,1)",
      data: [65, 0, 80, 81, 56, 85, 40]
    },
    {
			  label               : 'Digital Goods',
			  fillColor           : 'rgba(38,198,218,0.7)',
			  strokeColor         : 'rgba(38,198,218,0)',
			  pointColor          : '#26c6da',
			  pointStrokeColor    : 'rgba(38,198,218,0.5)',
			  pointHighlightFill  : '#fff',
			  pointHighlightStroke: 'rgba(38,198,218,1)',
			  data                : [8, 3, 4, 14, 13, 5, 17, 24, 24, 45, 27, 20, 28, 13, 34, 48, 31, 50]
			}
  ]
};

var data1b = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      fillColor: "rgba(120,120,120,0.2)",
      strokeColor: "rgba(120,120,120,1)",
      pointColor: "rgba(120,120,120,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(120,120,120,1)",
      data: [65, 0, 80, 81, 56, 85, 40]
    },
    {
      label: "My First dataset",
      fillColor: "rgba(120,120,120,0.2)",
      strokeColor: "rgba(120,120,120,1)",
      pointColor: "rgba(120,120,120,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(120,120,120,1)",
      data: [65, 0, 80, 81, 56, 85, 40]
    }
  ]
};

var config2a = {
  type: 'line',
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [{
      label: "My First dataset",
      data: [65, 0, 80, 81, 56, 85, 40],
      fill: true
    }]
  }
};

var config2b = {
  type: 'bar',
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [{
      label: "My First dataset",
      data: [65, 0, 80, 81, 56, 85, 40],
      fill: false
    }]
  }
};


var ctx1a = document.getElementById("myChart1A").getContext("2d");
new Chart(ctx1a).Line(data1a);

var ctx1b = document.getElementById("myChart1B").getContext("2d");
new Chart(ctx1b).Bar(data1b);

var ctx2a = document.getElementById("myChart2A").getContext("2d");
new Chartv2(ctx2a, config2a);

var ctx2b = document.getElementById("myChart2B").getContext("2d");
new Chartv2(ctx2b, config2b);
