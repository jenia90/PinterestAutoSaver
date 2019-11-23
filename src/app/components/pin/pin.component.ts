import { Component, OnInit, Input } from '@angular/core';
import { Pin } from 'src/app/models/pin';

@Component({
  selector: 'app-pin',
  templateUrl: './pin.component.html',
  styleUrls: ['./pin.component.sass']
})
export class PinComponent implements OnInit {

  @Input() public pin: Pin;

  constructor() { }

  ngOnInit() {
  }

}
