import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-trek',
  standalone: true,
  imports: [CommonModule,RouterModule ,HttpClientModule],
  templateUrl: './trek.component.html',
  styleUrl: './trek.component.css'
})
export class TrekComponent implements OnInit {
  tripList:any = [];


  constructor(private httpClient: HttpClient){

  }
  ngOnInit(): void {
    this.loadTripList();
  }

  loadTripList(){
    const url = "https://api.boldhimalaya.com/api/v1.0/popular-trip?page=1&pageSize=20&token=";
    this.httpClient.get(url, {}).subscribe((data : any)=>{
      console.log(data);
      if(data.status == 200 && data.error ==false){
        this.tripList= data.data;
        this.tripList =  this.tripList.map((eachData: any) => {
          eachData.image_1920 = eachData.image_1920 ? 'data:image/png;base64,' + atob(eachData.image_1920): '';
      });
    }
    });
  }

}
