import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { GenericDialogComponent } from '../common/generic-dialog/generic-dialog.component';
import { Store, select } from '@ngrx/store';
import { getName } from '../app-nav/ngrx/user/user.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  @ViewChild('svgDialog') svgDialogRef: TemplateRef<any>;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );
  userName$ = this.store.pipe(select(getName));
  
  constructor(
    private breakpointObserver: BreakpointObserver,
    public dialog: MatDialog,
    public store: Store,
  ) { }

  openDialog(){
    const dialogRef = this.dialog.open(this.svgDialogRef, {
      width: '50%',
    });
  }

  ngOnInit(): void {
  }
}
