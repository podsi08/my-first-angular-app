import { Component } from '@angular/core';

@Component({
  selector: '.app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})

export class ServerComponent {
  serverName = 'Apollo';
  serverPID = 11;
  serverStatus = 'offline';
  statusFlag = false;

  constructor() {
    setTimeout(() => {
      this.statusFlag = true;
      console.log('timeout');
    }, 2000);
  }

  toggleServerStatus = () => {
    this.statusFlag = !this.statusFlag;
    if (this.statusFlag) {
      this.serverStatus = 'online';
    } else {
      this.serverStatus = 'offline';
    }
  };

  resetServerName = () => {
    this.serverName = 'Apollo';
  }
}
