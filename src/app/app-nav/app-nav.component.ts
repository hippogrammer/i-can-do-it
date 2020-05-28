import { Component, Input } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.scss']
})
export class AppNavComponent {

  @Input() isHandset: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver) {}

}
