import { Component, OnInit }                         from '@angular/core';
import { trigger, state, style, transition, animate} from '@angular/animations'
import { Tools }                                     from "app/shared/tools";
import { NotificationService }                       from "app/shared/messages/notification.service";
import { Observable }                                from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';

@Component({
  selector   : 'mt-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls  : ['./snackbar.component.css'],
  animations : [
    trigger('snack-visibility',[
      state('hiddem' , style({opacity:0, bottom:'0px'})),
      state('visible', style({opacity:1, bottom:'30px'})),
      transition('hiddem => visible', animate('500ms 0s ease-in')),
      transition('visible => hiddem', animate('500ms 0s ease-out'))
    ])
  ]
})

export class SnackbarComponent implements OnInit {

  message        : string = "Snackbar";
  snackVisibility: string = "hiddem";

  tools : Tools = new Tools();

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
    this.tools.logMe("SnackbarComponent.ngOnInit()");
    /*
    this.notificationService.notifier.subscribe(message=> {
      this.tools.logMe(`SnackbarComponent.notifier(${message})`);
      this.message = message;
      this.snackVisibility ="visible";
      Observable.timer(3000).subscribe(timer => this.snackVisibility = "hiddem");
    })
    */
    this.notificationService.notifier
      .do       (message => {this.message = message; this.snackVisibility ="visible";})
      .switchMap(message => Observable.timer(3000))
      .subscribe(timer   => this.snackVisibility ="hiddem")
  }

}
