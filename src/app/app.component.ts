import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { faDotCircle, faAward, faBalanceScale, faThumbsUp, faBookmark, faComment, faBullhorn, faBullseye, faChartPie, faFlask, faTag, faReply, faEllipsisH, faPaperclip, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle, faChartBar, faStopCircle, faSmile } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'xtrades-test';
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

  constructor(private modalService: NgbModal) { }

  open(content: any) {
    this.modalService.open(content, { size: 'xl' });
  }
}