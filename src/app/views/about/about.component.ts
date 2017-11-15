import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, store } from '../../store'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent  {

  @Store(store) public store

  ngOnDestroy() { }
  ngOnInit(){ }

}
