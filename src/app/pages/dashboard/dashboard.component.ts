import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/service/dashboard.service';
import { Data,matchTable } from 'src/app/modules/matchStats';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  userData: matchTable[] = [];

  constructor(private dashboardData: DashboardService) {

  }

  ngOnInit(): void {
    this.dashboardData.getAllMatch().subscribe((result) => {
      console.log(result)
      this.userData = result.data.map((item)=>{
        let chosenData: matchTable = {
          homeTeam: item.home_team.name,
          awayTeam: item.away_team.name,
          homeScore: item.stats.home_score,
          awayScore: item.stats.away_score,
          logoAwayTeam:item.away_team.logo,
          logoHomeTeam:item.home_team.logo,
          matchStart: item.match_start,
        }
        return chosenData
      })
    })
  }





}
