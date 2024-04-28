import { Component } from '@angular/core';

@Component({
  selector: 'app-onlinepayment',
  templateUrl: './onlinepayment.component.html',
  styleUrls: ['./onlinepayment.component.css']
})
export class OnlinepaymentComponent {
  
  firstSectionVisible: boolean = true;
  secondSectionVisible: boolean = false;
  firstSectionActive: boolean = true;
  secondSectionActive: boolean = false;
  firstSectionDone: boolean = false;
  secondSectionDone: boolean = false;
  licensePlate: string = '';
  certificateNumber: string = '';

  nextSection() {
    this.firstSectionDone = true;
    this.firstSectionActive = false;
    this.secondSectionVisible = true;
    this.secondSectionActive = true;
    this.firstSectionVisible = false;
    this.firstSectionDone = false;
    
  }

  backToFirstSection() {
    this.firstSectionActive = true;
    this.firstSectionVisible = true;
    this.secondSectionVisible = false;
    this.secondSectionActive = false;
    this.secondSectionDone = true;
  }

}
