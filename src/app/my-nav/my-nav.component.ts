import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { TitleBarService } from '../titlebar.service';

@Component({
  selector: 'app-my-nav',
  templateUrl: './my-nav.component.html',
  styleUrls: ['./my-nav.component.scss'],
  providers: [TitleBarService]
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
    private titleBarService: TitleBarService) {
      titleBarService.title$.subscribe(
        title => {this.titleBarTitle = title}
      );
      titleBarService.subTitle$.subscribe(
        subtitle => {this.titleBarSubTitle = subtitle}
      );
    }

}
