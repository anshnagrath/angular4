import { ViewserviceService } from './../viewservice.service';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Routes, Router,Params} from '@angular/router';
@Component({
  selector: 'app-view2',
  templateUrl: './view2.component.html',
  styleUrls: ['./view2.component.css']
})
export class View2Component implements OnInit {
public id='';
public seachPageData:any;
public seachPageValues:any;
public type='';
public data:any;
public hack:any;
public hackVar:any;
public searchData:any;
  constructor(public activatedRoute:ActivatedRoute,private router:Router, private ViewserviceService:ViewserviceService) {
    this.getDataByIdAndType(this.hackVar,this.type) 
  }
    ngOnInit() {
      this.id = this.activatedRoute.snapshot.params.id;
       this.seachPageData= this.activatedRoute.snapshot.queryParamMap.get('element');
       this.seachPageData = JSON.parse(this.seachPageData);
       this.seachPageValues = this.activatedRoute.snapshot.queryParamMap.get('selectedItem')
       console.log(this.seachPageValues,'asdacscsdcasdcsadcsacdasc')
  
       this.hack = (''+this.id).split('')
       this.hackVar=this.hack[0]
      this.type=this.activatedRoute.snapshot.queryParamMap.get('type');   
      this.getDataByIdAndType(this.hackVar,this.type);
    if(this.seachPageData!= undefined){
      this.type = this.seachPageData.type
      this.data= this.seachPageData
    }
  }

getDataByIdAndType(id,type){

this.ViewserviceService.getSingleInfo(id,type).subscribe(res=>{
console.log(res,'Response in view2')
this.data=res;
})
}
}