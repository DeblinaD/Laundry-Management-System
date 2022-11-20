import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import {Router} from '@angular/router'
import { Loader } from '@googlemaps/js-api-loader';
//import { styles } from './mapstyles';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})

export class HomeComponent implements OnInit {

   title = 'ca3';
   input1 = 0;
   result1= 0;

   amount() {
    this.result1=0;
    this.input1=0;
   }
   fun1() {
    this.result1=this.input1*30;
   }

   fun2() {
    this.result1=this.input1*50;
   }

   fun3() {
    this.result1=this.input1*60;
   }

   logout() {
    this.router.navigateByUrl('/login');
   }

   order(){
    this.router.navigateByUrl('/order');
  
   }

  constructor(private router: Router) { }

  ngOnInit(): void {
    let loader = new Loader({
      apiKey: 'AIzaSyDTBWE1Z3WE9s8gIRK4JmIhJkt3LEB-xiQ'
    })

    loader.load().then(()=>{
     new google.maps.Map(document.getElementById('map') as HTMLInputElement, {
        center: { lat: 27.2046, lng: 77.4977},
        zoom: 6,
      }
      )

  })
  }
}
