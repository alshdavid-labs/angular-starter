import { Component, OnInit } from '@angular/core';
import { Store, store } from '../../store'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent  {
  
  @Store(store) public store

  ngOnInit(){
    console.log("Create")
  }
}
