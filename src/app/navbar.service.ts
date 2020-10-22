import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class NavBarService {

  // Observable string sources
  private titleSource = new Subject<string>();
  private subTitleSource = new Subject<string>();
  private closeSideBarSource = new Subject<boolean>();

  // Observable string streams
  title$ = this.titleSource.asObservable();
  subTitle$ = this.subTitleSource.asObservable();
  closeSideBar$ = this.closeSideBarSource.asObservable();

  // Service message commands
  publishTitle(title: string, subtitle: string) {
    this.titleSource.next(title);
    this.subTitleSource.next(subtitle);
  }
  
  clearTitle() {
    this.titleSource.next("");
    this.subTitleSource.next("");
  }

  closeSideBar() {
    this.closeSideBarSource.next(true);
  }
}