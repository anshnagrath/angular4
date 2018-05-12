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

  async ngOnInit() {
    //     await this.viewService.getAllData('books').subscribe((response) => {
    //       console.log(response,'hehjrbejrjhebrhgbe')
    //       this.result['books'] = response;
    //       console.log(this.result,'resuts hercas')
    //     });
    //    await this.viewService.getAllData('characters').subscribe((response) => {
    //       this.result['characters'] = response;
    //     });
    //     this.viewService.getAllData('houses').subscribe((response) => {
    //       this.result['houses'] = response;
    //     })
    // console.log(this.result)
  }
  async getBooksData(type) {
    console.log("inside view data");
    let info = await this.viewService.getAllData(type).subscribe(res => {
      //this.result[type] = res;

      this.books = res;
      this.hideShow=true;
      this.showHide = false;
      this.hide=false;
console.log(this.showHide,'show hide'
              ,this.hide ,'hide')


    });
  }
  async getCharacterData(type) {
    console.log("inside view data");
    let info = await this.viewService.getAllData(type).subscribe(res => {
      this.characters = res;
      this.hideShow = false;
      this.hide=false;
      console.log(this.hideShow,'hideShow',this.hide,'hide')
    });
  }
  async getHousesData(type) {
    console.log("inside view data");
    let info = await this.viewService.getAllData(type).subscribe(res => {
      this.hideShow=false;
      this.houses = res;
      this.showHide = false;
      this.hideShow=false;
      console.log(this.hideShow,'hideshow',this.showHide,'showHIde')
    });
  }
}
