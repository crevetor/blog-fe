import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class TitleBarService {

  // Observable string sources
  private titleSource = new Subject<string>();
  private subTitleSource = new Subject<string>();

  // Observable string streams
  title$ = this.titleSource.asObservable();
  subTitle$ = this.subTitleSource.asObservable();

  // Service message commands
  publishTitle(title: string, subtitle: string) {
    this.titleSource.next(title);
    this.subTitleSource.next(subtitle);
  }
}