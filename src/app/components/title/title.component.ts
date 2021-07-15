import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  constructor() {}
    
  @Input() title?: string;
  @Input() subtitle?: string;
  

  // title = "Title from the H1";
  // subtitle = "Subtitle from the P";


  ngOnInit(): void {
  }

}
