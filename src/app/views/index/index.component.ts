import { Component, OnInit, OnDestroy } from '@angular/core';
import { StoreService } from '../../services/store.service'
import { Store } from '../../store'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent  {
  
  constructor(
    public state: StoreService
  ) {}

  //@Store(this.state) public store

  ngOnDestroy() { }
  ngOnInit(){ }
  
}
