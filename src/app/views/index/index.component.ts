import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, store } from '../../store'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent  {
  
  @Store() public store

  ngOnDestroy() { }
  ngOnInit(){ }
  
}
