import { Component, OnInit, OnDestroy } from '@angular/core';
import { StoreService } from '../../services/store.service'

//let storecontainer
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent  {

  constructor(
    public store: StoreService
  ) {}

  sub

  ngOnDestroy() {

   }
  ngOnInit(){ 
    console.log(this.store.getState())

    this.sub = this.store.subscribe(() => { console.log('updated') })
    //this.sub()
  }

  
}
