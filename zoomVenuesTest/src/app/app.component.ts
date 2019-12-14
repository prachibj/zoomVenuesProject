import { ApiService } from './services/api.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  panelOpenState=false;

  randomObj: any
  usersArray = []
  // res={
  //   _body:[]
  // };
  constructor(private apiService: ApiService) { }
  ngOnInit() {
    this.apiService.get().subscribe((res) =>{
      console.log('api called ... res:', res)
      this.randomObj = res
      console.log(this.randomObj)
      if(Array.isArray(this.randomObj)){
        this.usersArray = this.randomObj
        this.dynamicFlagAssigning()
        console.log(this.usersArray)
      }
    })

  }

  dynamicFlagAssigning(){
    let count= this.usersArray.length;
    this.usersArray.forEach(obj=>{
      obj['showAddressFlag']=false;
    })
  }

  showAddress = false
  index
  toggleCard(i){
    console.log('index is..', i)
    this.index = i
    this.usersArray[i].showAddressFlag = !this.usersArray[i].showAddressFlag
    if(this.usersArray[i].showAddressFlag==false)
    this.showAddress = false
    else
    this.showAddress = true
  }

}
