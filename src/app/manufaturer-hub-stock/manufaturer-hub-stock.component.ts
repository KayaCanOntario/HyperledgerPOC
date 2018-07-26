import { RestService } from './../rest.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manufaturer-hub-stock',
  templateUrl: './manufaturer-hub-stock.component.html',
  styleUrls: ['./manufaturer-hub-stock.component.css']
})
export class ManufaturerHubStockComponent implements OnInit {
  tableData = null;
  manuID: string;
  manuName: string;
  constructor(private restService: RestService) { }

  //on page load display all vehicles, fetched from the rest server
  ngOnInit() {
    this.restService.isWorking();

    this.restService.getAllFrom("manufacturer").subscribe(data=>{
      data.forEach(person1 =>{
        if(person1.email == window.localStorage[0])
        {
          this.manuID = person1.manId;
          this.manuName = person1.name;
        }
      })
    });

    this.restService.getAllFrom("vehicle").subscribe(data=>{
      this.tableData = data;
      //console.log(data);
    });
    
  }

}
