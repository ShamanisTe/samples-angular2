import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templatedriven',
  templateUrl: './templatedriven.component.html',
  styleUrls: ['./templatedriven.component.css']
})
export class TemplatedrivenComponent implements OnInit {

  user: any = {};

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    alert(JSON.stringify(this.user));
  }

}
