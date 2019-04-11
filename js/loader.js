google.charts.load("current", { packages: ["gantt"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = new google.visualization.DataTable();
  data.addColumn("string", "Task ID");
  data.addColumn("string", "Task Name");
  data.addColumn("string", "Resource");
  data.addColumn("date", "Start Date");
  data.addColumn("date", "End Date");
  data.addColumn("number", "Duration");
  data.addColumn("number", "Percent Complete");
  data.addColumn("string", "Dependencies");

  data.addRows([
    [
      "reqdesign",
      "Requirements Design",
      "Capstone",
      new Date(2019, 2, 25),
      new Date(2019, 3, 2),
      null,
      100,
      null
    ],
    [
      "envsetup",
      "Environment Setup",
      "Capstone",
      new Date(2019, 2, 25),
      new Date(2019, 3, 2),
      null,
      100,
      null
    ],
    [
      "impmod1",
      "Implement Module 1",
      "Capstone",
      new Date(2019, 3, 3),
      new Date(2019, 3, 19),
      null,
      100,
      null
    ],
    [
      "impmod2",
      "Implement Module 2",
      "Capstone",
      new Date(2019, 3, 18),
      new Date(2019, 4, 2),
      null,
      100,
      null
    ],
    [
      "impmod3",
      "Implement Module 3",
      "Capstone",
      new Date(2019, 4, 1),
      new Date(2019, 4, 17),
      null,
      50,
      null
    ],
    [
      "testing",
      "Unit/Integration Testing",
      "Capstone",
      new Date(2019, 4, 16),
      new Date(2019, 4, 26),
      null,
      0,
      null
    ],
    [
      "testingfin",
      "Final Testing Procedures",
      "Capstone",
      new Date(2019, 4, 25),
      new Date(2019, 5, 7),
      null,
      0,
      null
    ],
    [
      "delivery",
      "Project Delivery",
      "Capstone",
      new Date(2019, 5, 8),
      new Date(2019, 5, 19),
      null,
      0,
      null
    ]
  ]);

  var options = {
    height: 400,
    gantt: {
      trackHeight: 30
    }
  };

  var chart = new google.visualization.Gantt(
    document.getElementById("chart_div")
  );

  chart.draw(data, options);
}
