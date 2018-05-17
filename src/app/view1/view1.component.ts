import { element } from 'protractor';
import { Component, OnInit, Injectable } from "@angular/core";
import { ViewserviceService } from "../viewservice.service";
import {ActivatedRoute,Routes, Router} from '@angular/router'
import { async } from '@angular/core/testing';
import { SelectModule } from 'ng2-select';
import {View2Component} from '../view2/view2.component';
declare var $:any;
@Component({
  selector: "app-view1",
    templateUrl: "./view1.component.html",
    styleUrls: ["./view1.component.css"],
    
})
export class View1Component implements OnInit {
  public books;
  // public booksRes;
  // public houseRes;
  // public characterRes;
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
  public catergories = [{"name":"books"},{"name":"characters"},{"name":"houses"}];
  public searchDisable=true;
  public result = [];
  public store;
  constructor(private view2component:View2Component ,private viewService: ViewserviceService,private activatedRoute:ActivatedRoute,private router:Router) {
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
    element['type'] = "books"
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
          element['type'] = "characters"
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
    let info = await this.viewService.getAllData(type).subscribe(res => {
      this.houses = res;
      this.hideShow = false;
      this.hide=false;
     this.houses.forEach((element,i) => {
        element['id']=i;  
          element['type'] = "houses"
    })   

    });
  }
 getSingleData(index,type){
    this.router.navigate(['/view2',index],{queryParams:{type}})
}

changeHandler(slectordata?){
this.selectedItem = slectordata
}
searchData(search,hit?){
this.store = search
if(this.store!= undefined){
  if(this.store.length>2){
    (this.store && this.selectedItem)?this.searchDisable=false:this.searchDisable=true;
  }

}
if(search && hit == true){
  if(this.selectedItem == 'books'){
  this.books.forEach((element,i) => {
    if (this.store == element.name){
      this.selectedItem = JSON.stringify(this.selectedItem)
      console.log('herer is value',element)
      element = JSON.stringify(element)
      this.router.navigate(['/view2'],  {queryParams:{element})
}
})
} 
    if(this.selectedItem == 'houses'){
      this.houses.forEach((element,i) => {
      
        if (this.store == element.name){
          this.router.navigate(['/view2'],{queryParams:element})
     }
      }) 
    }
  
    if(this.selectedItem == 'characters'){
      this.characters.forEach((element,i) => {
        if (this.store == element.name){
          this.router.navigate(['/view2',element])
     }
      }) 
 }}
}
})
}
  
