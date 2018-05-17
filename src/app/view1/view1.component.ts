import { element } from 'protractor';
import { Component, OnInit, Injectable } from "@angular/core";
import { ViewserviceService } from "../viewservice.service";
import {ActivatedRoute,Routes, Router} from '@angular/router'
import { async } from '@angular/core/testing';
import { SelectModule } from 'ng2-select';
declare var $:any;
@Component({
  selector: "app-view1",
    templateUrl: "./view1.component.html",
    styleUrls: ["./view1.component.css"],
    
})
export class View1Component implements OnInit {
  public books;
  public items:Array<string>=["books","houses","characters"];
  public save;
  public selectedItem;
  public data;
  public authors: any;
  public auth: any;
  public characters;
  public hideShow;
  public search; 
  public showHide;
  public hide;
  public houses;
  public searchDisable=true;
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
    $(".dropdown-menu li a").click(function(){
      var selText = $(this).text();
      $(this).parents('.input-group ').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
    });
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


      this.characters.forEach((element,i) => {
        element['id']=i;  
      });    

       
      console.log(this.hide)
      console.log(res,'char')
 
  

    });
  }
  async details(search?,type?){
   console.log(this.search,search,  '====<><><>')
    this.save= type;
    (this.search&&this.save)?this.searchDisable = false:this.searchDisable = true; 
  }
  async getHousesData(type) {
    console.log("inside view data");
    let info = await this.viewService.getAllData(type).subscribe(res => {
      this.houses = res;
      this.hideShow = false;
      this.hide=false;
      

      this.houses.forEach((element,i) => {
        element['id']=i;  
    })   

    });
  }
 getSingleData(index,type){
  
    this.router.navigate(['/view2',index],{queryParams:{type}})
    
}

changeHandler(event:any){
  console.log(event,'event')
this.selectedItem=event.target.value;
console.log(this.selectedItem,'selected item')

}
searchData(search){

}
}
