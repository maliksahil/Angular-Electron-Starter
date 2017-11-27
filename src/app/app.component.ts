import { Component } from '@angular/core';
import { AllElectron } from 'electron';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  version = '';
  chromium = '';
  electron = '';

  constructor() {
    const electron: AllElectron = (<any>window).electron;
    const currentProcess: NodeJS.Process = electron.remote.require('process');
    this.version = currentProcess.version;
    this.chromium = currentProcess.versions.chrome;
    this.electron = currentProcess.versions.electron;
  }
}
