import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Services/Api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;
  showText = false;
  hideLearnMore = false;

  constructor(private apiService: ApiService) { }

  ngOnInit() {

  }
  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  cancelRegisterMode(registerMode: boolean) {
    this.registerMode = registerMode;
  }

  textStatus() {
    this.showText = !this.showText;
    this.hideLearnMore = !this.hideLearnMore;
  }

  showLearnMore() {
    this.hideLearnMore = !this.hideLearnMore;
    this.showText = !this.showText;
  }

}
