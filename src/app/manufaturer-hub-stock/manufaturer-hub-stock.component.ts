import { RestService } from './../rest.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manufaturer-hub-stock',
  templateUrl: './manufaturer-hub-stock.component.html',
  styleUrls: ['./manufaturer-hub-stock.component.css']
})
export class ManufaturerHubStockComponent implements OnInit {
  tableData = null;
  constructor(private restService: RestService) { }

  ngOnInit() {
    this.restService.isWorking();
    this.restService.getAllvehicles().subscribe(data=>{
      this.tableData = data;
      console.log(data);
    });
  }

}
