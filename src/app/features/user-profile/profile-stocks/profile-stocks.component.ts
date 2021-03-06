import { Component, OnInit } from '@angular/core';
import { userProfileServices } from "../../../services/userProfile.services";
import { IStocksowned } from '../../../models/IStocksowned'

@Component({
  selector: 'app-profile-stocks',
  templateUrl: './profile-stocks.component.html',
  styleUrls: ['./profile-stocks.component.css']
})
export class ProfileStocksComponent implements OnInit {

  constructor(private routing:userProfileServices) { }
  stks:Array<{stock:string,shares:number}>[]=[];
  
  ngOnInit() {
    this.routing.getStkOwnedDetails().subscribe(res=> this.stks=res.stocks)
  }
}