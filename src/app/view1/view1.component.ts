import { Component, OnInit, Injectable } from "@angular/core";
import { ViewserviceService } from "../viewservice.service";

@Component({
  selector: "app-view1",
  templateUrl: "./view1.component.html",
  styleUrls: ["./view1.component.css"]
})
export class View1Component implements OnInit {
  public books;
  public authors: any;
  public auth: any;
  public characters;
  public hideShow;
  public showHide;
  public hide;
  public houses;
  public result = [];
  constructor(private viewService: ViewserviceService) {
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
      //this.result[type] = res;

      this.books = res;
      this.authors = res;
      this.authors.forEach(element => {
      this.auth = element.authors
      }); 
      this.hideShow=true;
      this.showHide = false;
      this.hide=false;
     });
  }
  async getCharacterData(type) {
    console.log("inside view data");
    let info = await this.viewService.getAllData(type).subscribe(res => {
      this.characters = res;
      this.showHide = false;
      this.hideShow=false;
       
      console.log(this.hide)
      console.log(res,'char')
 
  
    });
  }
  async getHousesData(type) {
    console.log("inside view data");
    let info = await this.viewService.getAllData(type).subscribe(res => {
      this.houses = res;
      this.hideShow = false;
      this.hide=false;
    });
  }
}
