import React from "react"

const StatsTile = (props) => {

  let totalProjects
  let openProjects = 0
  let closedProjects = 0
  let totalAssignments = 0
  let openAssignments = 0
  let openPastDueAssignments = 0
  let openOnTimeAssignments = 0
  let closedAssignments = 0
  let closedLateAssignments = 0
  let closedOnTimeAssignments = 0
  let totalWords = 0
  let totalPages = 0

  if(props.projectsPack.length > 0){
    totalProjects = props.projectsPack.length
    props.projectsPack.forEach((project) => {
      if(project.project.open == true){
        openProjects += 1
      } else {
        closedProjects += 1
      }
    })
    props.projectsPack.forEach((assignmentPack) => {
      totalAssignments += assignmentPack.assignments.length
      assignmentPack.assignments.forEach((assignment) => {
        if(assignment.open == true){
          openAssignments += 1
          if(assignment.past_due == true){
            openPastDueAssignments += 1
          } else {
            openOnTimeAssignments += 1
          }
        } else {
          closedAssignments += 1
          if(parseInt(assignment.page_count_req) > 0) {
            totalPages += parseInt(assignment.page_count_req)
          }
          if(parseInt(assignment.word_count_req) > 0) {
            totalWords += parseInt(assignment.word_count_req)
          }
          if(assignment.past_due == true){
            closedLateAssignments += 1
          } else {
            closedOnTimeAssignments += 1
          }
        }
      })
    })
  }  

  return (
    <div>
      <p>Total Projects: {totalProjects}</p>
      <p>Total Open Projects: {openProjects}</p>
      <p>Total Closed Projects: {closedProjects}</p>
      <p>Total Assignments: {totalAssignments}</p>
      <p>Total Open Assignments: {openAssignments}</p>
      <p>Total Open and Past Due Assignments: {openPastDueAssignments}</p>
      <p>Total Open and On Time Assignments: {openPastDueAssignments}</p>
      <p>Total Closed Assignments: {closedAssignments}</p>
      <p>Total Closed and Submitted Late Assignments: {closedLateAssignments}</p>
      <p>Total Closed and On Time Assignments: {closedOnTimeAssignments}</p>
      <p>Total Words Written: {totalWords}</p>
      <p>Total Pages Written: {totalPages}</p>
      <p></p>
    </div>
  )
}

export default StatsTile

// <html>
//   <head>
//     <!--Load the AJAX API-->
//     <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
//     <script type="text/javascript">

//       // Load the Visualization API and the corechart package.
//       google.charts.load('current', {'packages':['corechart']});

//       // Set a callback to run when the Google Visualization API is loaded.
//       google.charts.setOnLoadCallback(drawChart);

//       // Callback that creates and populates a data table,
//       // instantiates the pie chart, passes in the data and
//       // draws it.
//       function drawChart() {

//         // Create the data table.
//         var data = new google.visualization.DataTable();
//         data.addColumn('string', 'Topping');
//         data.addColumn('number', 'Slices');
//         data.addRows([
//           ['Mushrooms', 3],
//           ['Onions', 1],
//           ['Olives', 1],
//           ['Zucchini', 1],
//           ['Pepperoni', 2]
//         ]);

//         // Set chart options
//         var options = {'title':'How Much Pizza I Ate Last Night',
//                         'width':400,
//                         'height':300,          
//                         slices: {
//                           0: { color: 'darkred' },
//                           1: { color: 'tan' },
//                           2: { color: 'darkgreen' },
//                           3: { color: 'darkblue' },
//                           4: { color: 'brown' },
//                         }};

//         // Instantiate and draw our chart, passing in some options.
//         var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
//         chart.draw(data, options);
//       }
//     </script>

//     <script type="text/javascript">
//       google.charts.load('current', {'packages':['corechart']});
//       google.charts.setOnLoadCallback(drawChart);
//       function drawChart() {
//         var data = google.visualization.arrayToDataTable([
//           ['Age', 'Weight'],
//           [ 8,      12],
//           [ 4,      5.5],
//           [ 11,     14],
//           [ 4,      5],
//           [ 3,      3.5],
//           [ 6.5,    7]
//         ]);

//         var options = {
//           hAxis: {minValue: 0, maxValue: 15},
//           vAxis: {minValue: 0, maxValue: 15},
//           chartArea: {width:'50%'},
//           trendlines: {
//             0: {
//               type: 'linear',
//               showR2: true,
//               visibleInLegend: true
//             }
//           }
//         };

//         var chartLinear = new google.visualization.ScatterChart(document.getElementById('chartLinear'));
//         chartLinear.draw(data, options);

//         options.trendlines[0].type = 'exponential';
//         options.colors = ['#6F9654'];

//         var chartExponential = new google.visualization.ScatterChart(document.getElementById('chartExponential'));
//         chartExponential.draw(data, options);
//       }
//     </script>
//   </head>

//   <body>
//     <!--Div that will hold the pie chart-->
//     <div id="chart_div"></div>
//     <p>
//       Modify me in `app/views/homes/index.html.erb` or change the root directive in
//       `config/routes.rb`
//     </p>
//       <div id="chartLinear" style="height: 350px; width: 800px"></div>
//     <div id="chartExponential" style="height: 350px; width: 800px"></div>
//   </body>
// </html>