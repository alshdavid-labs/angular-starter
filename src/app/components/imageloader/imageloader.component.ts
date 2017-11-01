import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-imageloader',
  templateUrl: './imageloader.component.html',
  styleUrls: ['./imageloader.component.scss']
})
export class ImageloaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() set src(value){
      this.loadImage(value)
        .then(x => this._src = value)
  }

  @Input() set thumb(value){
    this._thumb = value
    // this.loadImage(value)
    //   .then(x => this._thumb = value)
  }

  public _thumb = ""
  public _src = ""

  loadImage(url){
    return new Promise((res) => {
        let hero:any = document.createElement("IMG")
        hero.onload = () => {
            res(url)
            hero.remove()
        }
        hero.src = url
    })
}

}
