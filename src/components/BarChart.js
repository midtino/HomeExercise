import React from "react";
import { Bar, Chart, defaults } from "react-chartjs-2"
import ChartAnnotationsPlugin from 'chartjs-plugin-annotation'

function chartData() {
  return { 
    labels: ["01/07", "02/07", "03/07", "04/07"],
    datasets: [
      {
        label: "CO",
        fillColor: "rgba(220,220,220,0.2)",
        strokeColor: "rgba(220,220,220,1)",
        pointColor: "rgba(220,220,220,1)",
        backgroundColor: 'rgba(31, 58, 147, 1)',
        pointHighlightStroke: "rgba(220,220,220,1)",
        data: [0.1, 0.3, 0.2, 0.4],
      },
      {
        label: "CO-2",
        fillColor: "r,187,205,0.2)",
        strokeColor: "rgba(151,187,205,1)",
        pointColor: "rgba(151,187,205,1)",
        backgroundColor: 'rgba(255, 0, 0, 1)',
        pointHighlightStroke: "rgba(151,187,205,1)",
        data: [0.25, 0.35, 0.1, 0.35],
      },
    ],
  };
}
const options = {
  scaleShowGridLines: true,
  scaleGridLineColor: "rgba(0,0,0,.05)",
  scaleGridLineWidth: 1,
  scaleShowHorizontalLines: true,
  scaleShowVerticalLines: true,
  bezierCurve: true,
  bezierCurveTension: 0.4,
  pointDot: true,
  pointDotRadius: 4,
  pointDotStrokeWidth: 1,
  pointHitDetectionRadius: 20,
  datasetStroke: true,
  datasetStrokeWidth: 2,
  datasetFill: true,
  title: {
    display: true,
    text: 'Gas Emissions'
  },
  legendTemplate:
    '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>',
  
    //Labeling the axis
    scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Amount'
          }
        }],
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Date'
          }
        }],
    },
    //For the threshold line, not fully funcional but this was the attempt
    annotation: {
      annotations: [{
        type: 'line',
        mode: 'horizontal',
        scaleID: 'y-axis-0',
        value: 0.25,
        borderColor: 'rgb(75, 192, 192)',
        borderWidth: 4,
        label: {
          enabled: false,
          content: 'Threshold'
        }
      }]
    },
  };

const styles = {
  graphContainer: {
    border: "1px solid black",
    padding: "15px",
  },
};

class BarChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: chartData(),
    };
  }

  render() {
    return (
      <div style={styles.graphContainer}>
        <Bar
          data={this.state.data}
          options={options}
          width="600"
          height="250"
        />
      </div>
    );
  }
}

export default BarChart;
