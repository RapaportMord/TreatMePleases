import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.css']
})
export class SingleCardComponent {

@Input() index!: number;
@Input() name!: string;



onInit(){
  
}


}
