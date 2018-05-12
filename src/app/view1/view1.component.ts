import { element } from 'protractor';
import { Component, OnInit, Injectable } from "@angular/core";
import { ViewserviceService } from "../viewservice.service";
import {ActivatedRoute,Routes, Router} from '@angular/router'
import { async } from '@angular/core/testing';

@Component({
  selector: "app-view1",
  templateUrl: "./view1.component.html",
  styleUrls: ["./view1.component.css"]
})
export class View1Component implements OnInit {
  public books;
  public data;
  public authors: any;
  public auth: any;
  public characters;
  public hideShow;
  public showHide;
  public hide;
  public houses;
  public result = [];
  public store;
  constructor(private viewService: ViewserviceService,private activatedRoute:ActivatedRoute,private router:Router) {
      this.showHide=false;
      this.hide=false;
      this.getBooksData("books");
     this.getHousesData("houses");
     this.getCharacterData("characters");
  }

   ngOnInit() {
  
  }
  async getBooksData(type) {
    console.log("inside view data");
    let info = await this.viewService.getAllData(type).subscribe(res => {

      this.books = res;
      this.authors = res;
      this.authors.forEach(element => {
      this.auth = element.authors
      }); 
      this.hideShow=true;
      this.showHide = false;
      this.hide=false;

this.books.forEach((element,i) => {

    element['id']=i;  
})
console.log(this.books,'sf')
  });
  }
  async getCharacterData(type) {
    console.log("inside view data");
    let info = await this.viewService.getAllData(type).subscribe(res => {
      this.characters = res;
      this.showHide = false;
      this.hideShow=false;
<<<<<<< HEAD

      this.characters.forEach((element,i) => {
        element['id']=i;  
      });    
=======
       
      console.log(this.hide)
      console.log(res,'char')
 
  
>>>>>>> 8083019... kjnfnk
    });
  }
  async getHousesData(type) {
    console.log("inside view data");
    let info = await this.viewService.getAllData(type).subscribe(res => {
      this.houses = res;
      this.hideShow = false;
      this.hide=false;
<<<<<<< HEAD

      this.houses.forEach((element,i) => {
        element['id']=i;  
    })   

=======
>>>>>>> 8083019... kjnfnk
    });
  }
async getSingleData(index,type){
  
    this.router.navigate(['/view2',index],{queryParams:{type}})
    
}

}
