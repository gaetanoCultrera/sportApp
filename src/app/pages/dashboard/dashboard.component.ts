import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/service/dashboard.service';
import { RootObject,Data } from 'src/app/modules/matchStats'; 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  match:Data[]=[];

  constructor(private dashboardData:DashboardService) {

  }

  ngOnInit(): void {
    this.dashboardData.getAllMatch().subscribe((result)=>{
      console.log(result)
      this.match=result.data
    })
  }

  

  

}
