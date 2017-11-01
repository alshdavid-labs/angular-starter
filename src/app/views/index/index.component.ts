import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service'
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(
    public ngSanitizer: DomSanitizer,
    public app: AppService
  ) { }

  ngOnInit() {
    //this.ngSanitizer.bypassSecurityTrustHtml
  }

  scrollDown(){
    let elm:any = document.querySelector('.skills')
    document.querySelector('main').scroll({
      top: elm.offsetTop,
      left: 0,
      behavior: "smooth"
  })
  }

  technology(technology){
      if (technology === "angular") {
        return "devicons devicons-angular"
      }
      if (technology === "javascript") {
        return "devicons devicons-javascript"
      }
      if (technology === "nodejs") {
        return "devicons devicons-nodejs_small"
      }
      if (technology === "html") {
        return "devicons devicons-html5"
      }
      if (technology === "css") {
        return "devicons devicons-css3"
      }
      if (technology === "scss") {
        return "devicons devicons-sass"
      }
      if (technology === "php") {
        return "devicons devicons-php"
      }
      if (technology === "mysql") {
        return "devicons devicons-mysql"
      }
      if (technology === "mongo") {
        return "devicons devicons-mongodb"
      }
  }
}
