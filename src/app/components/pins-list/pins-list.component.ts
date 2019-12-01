import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { PinApiService, PinData } from 'src/app/services/pin-api.service';
import { Pin } from 'src/app/models/pin';
import { HttpClient } from '@angular/common/http';

declare const PDK: any;

@Component({
  selector: 'app-pins-list',
  templateUrl: './pins-list.component.html',
  styleUrls: ['./pins-list.component.sass']
})
export class PinsListComponent implements OnInit {

  public pins: Pin[];

  constructor(private pinService: PinApiService,
              private http: HttpClient) { }

  ngOnInit() {
    // this.pinService.getAllPins().subscribe(p => {
    //   const {data} = p as {data: Pin[]};
    //   this.pins = data;
    // });
    // this.getMockData().subscribe(p => {
    //   console.log(p);
    //   const { data } = p as { data: Pin[] };
    //   this.pins = data;
    // });

    // this.pinService.getAllPins().subscribe(res => this.pins = res.data);
    this.getMockData().subscribe(p => this.pins = p.data);
  }

  private getMockData() {
    return this.http.get<PinData>('./assets/mockPins.json');
  }

}
