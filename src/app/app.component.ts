import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { faDotCircle, faAward, faBalanceScale, faThumbsUp, faBookmark, faComment, faBullhorn, faBullseye, faChartPie, faFlask, faTag, faReply, faEllipsisH, faPaperclip, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle, faChartBar, faStopCircle, faSmile } from '@fortawesome/free-regular-svg-icons';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'xtrades-test';
  options: any;

  faDotCircle = faDotCircle;
  faAward = faAward;
  faBalanceScale = faBalanceScale;
  faTimesCircle = faTimesCircle;
  faThumbsUp = faThumbsUp;
  faBookmark = faBookmark;
  faComment = faComment;
  faBullhorn = faBullhorn;
  faChartBar = faChartBar;
  faBullseye = faBullseye;
  faStopCircle = faStopCircle;
  faChartPie = faChartPie;
  faFlask = faFlask;
  faTag = faTag;
  faReply = faReply;
  faEllipsisH = faEllipsisH;
  faSmile = faSmile;
  faPaperclip = faPaperclip;
  faMicrophone = faMicrophone;

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'spline'
    },
    credits: {
      enabled: false
    },
    legend: {
      title: {
        text: undefined
      }
    },
    title: {
      text: undefined
    },
    xAxis: {
      type: 'datetime',
      title: {
        text: undefined
      },
    },
    yAxis: {
      type: 'linear',
      title: {
        text: undefined
      },
      opposite: true
    },
    plotOptions: {
      spline: {
        lineWidth: 4,
        states: {
          hover: {
            lineWidth: 5
          }
        },
        marker: {
          enabled: false
        },
        pointInterval: 1200000, // twenty minutes
        pointStart: Date.UTC(2021, 12, 19, 0, 0, 0),
      }
    },
    series: [{
      name: undefined,
      showInLegend: false,
      type: 'spline',
      data: [
        83.7, 83.3, 83.9, 85.1, 83.5, 83.8, 84.0, 85.0, 86.1, 83.7, 83.3, 86.4,
        86.9, 86.0, 86.8, 84.4, 84.0, 83.8, 85.0, 84.9, 89.2, 89.6, 89.5, 86.3,
        89.5, 88.8, 87.0, 87.5, 88.0, 87.2, 88.3, 89.4, 88.9, 90.6, 90.5, 91.1,
        90.4, 90.7, 91.3, 90.2, 89.6, 90.2, 91.1, 90.8, 93.0, 92.5, 92.5, 91.3,
        90.1
      ]
    }]
  };

  constructor(private modalService: NgbModal) { }

  open(content: any) {
    this.modalService.open(content, { size: 'xl' });
  }

  ngOnInit(): void {

  }
}