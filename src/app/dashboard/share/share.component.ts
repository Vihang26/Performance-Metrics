import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  formVisible = false

  generateLink(){
    this.formVisible = true
  }

  cancel(){
    this.formVisible = false
  }

}
