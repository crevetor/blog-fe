import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { NavBarService } from '../navbar.service';

@Component({
  selector: 'app-my-nav',
  templateUrl: './my-nav.component.html',
  styleUrls: ['./my-nav.component.scss'],
  providers: [NavBarService]
})
export class MyNavComponent {
  titleBarTitle: string = '';
  titleBarSubTitle: string = '';

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private navBarService: NavBarService) {
      navBarService.title$.subscribe(
        title => {this.titleBarTitle = title}
      );
      navBarService.subTitle$.subscribe(
        subtitle => {this.titleBarSubTitle = subtitle}
      );
    }

}
