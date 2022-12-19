import { Component, Input, OnInit } from '@angular/core';
import { matchTable } from 'src/app/modules/matchStats';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  
  @Input() dataMatch:matchTable[]=[]

  constructor(){
    
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
