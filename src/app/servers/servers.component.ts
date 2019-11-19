import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  template: `./servers.component.html`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer="false"
  userName = "username"
  constructor() { }

  ngOnInit() {
  }

}
