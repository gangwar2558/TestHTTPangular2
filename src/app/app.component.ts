import { Component, OnInit } from '@angular/core';
import { HTTPCallService } from './app.service';
import { UserData, Objectdata } from './app.data';


@Component({
  selector: 'my-app',
  template: `<h1>Hello Data is <br>
  FeedbackForm Name :- {{question?.feedback_Name}}
  <br>
  Date :- {{question?.Date}}
  <br>
  Questions :-
  <div *ngFor = "let item of question?.questiondata">
   {{item}}
  </div>

  </h1>`,
  providers:[HTTPCallService],
  inputs:['value', 'question']
})

export class AppComponent implements OnInit {

  questionData: Array<Objectdata>;
  question: any;
  value: number;
  arrayData: any;

  constructor(private _appservice: HTTPCallService) {
    console.clear();
  }

  ngOnInit() {
    console.log("before reading");
    this._appservice.getQuestions()
                    .subscribe(
                      response => this.question = response
                    );
     console.log("after reading");
  }

}