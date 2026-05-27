import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {

  private activeMenu = new BehaviorSubject<string>('home');

  activeMenu$ = this.activeMenu.asObservable();

  setActiveMenu(menu: string){
    this.activeMenu.next(menu);
  }

}
