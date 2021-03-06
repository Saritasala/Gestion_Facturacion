//[widget morris charts Javascript]

//Project:	MinimalPro Admin - Responsive Admin Template
//Version:  1.1
//Last change:  15/11/2017
//Primary use:   Used only for the morris charts


$(function () {
    "use strict";

    // AREA CHART
    var area = new Morris.Area({
      element: 'revenue-chart',
      resize: true,
      data: [
        { y: '2017-01', a: 1, b: 2 },
		{ y: '2017-02', a: 2,  b: 3 },
		{ y: '2017-03', a: 2,  b: 2 },
		{ y: '2017-04', a: 1,  b: 4 },
		{ y: '2017-05', a: 2,  b: 5 },
		{ y: '2017-06', a: 3,  b: 3 },
		{ y: '2017-07', a: 1, b: 2 }
      ],
		xkey: 'y',
		ykeys: ['a', 'b'],
		labels: ['Individual Score', 'Team Score'],
		fillOpacity: 0.2,
		lineWidth:1,
		lineColors: ['rgba(38,198,218,1)', 'rgba(30,136,229,1)'],
		hideHover: 'auto'
    });

    // LINE CHART


    //DONUT CHART
    var donut = new Morris.Donut({
      element: 'sales-chart',
      resize: true,
      colors: ["#745af2", "#fc4b6c", "#06d79c"],
      data: [
        {label: "Download Sales", value: 30},
        {label: "In-Store Sales", value: 45},
        {label: "Mail-Order Sales", value: 25}
      ],
      hideHover: 'auto'
    });
    //BAR CHART
    var bar = new Morris.Bar({
      element: 'bar-chart',
      resize: true,
      data: [
        {y: 'Mon', a: 5, b: 3, c: 3},
        {y: 'Tue', a: 4, b: 2, c: 7},
        {y: 'Wed', a: 3, b: 9, c: 4},
        {y: 'Thu', a: 7, b: 5, c: 3},
        {y: 'Fri', a: 5, b: 4, c: 9},
        {y: 'Sat', a: 10, b: 6, c: 3},
		{y: 'Sun', a: 8, b: 9, c: 4}
      ],
		barColors: ['#745af2', '#fc4b6c', '#06d79c'],
		barSizeRatio: 0.5,
		barGap:5,
		xkey: 'y',
		ykeys: ['a', 'b', 'c'],
		labels: ['Morning', 'Evening', 'Night'],
		hideHover: 'auto'
    });
  });
