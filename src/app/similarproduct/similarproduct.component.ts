import { Component } from '@angular/core';

@Component({
  selector: 'app-similarproduct',
  templateUrl: './similarproduct.component.html',
  styleUrls: ['./similarproduct.component.css']
})
export class SimilarproductComponent {
  oxsarData = [
    {
      id:"1",
      Image: "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg",
      title: "Tam KASKO",
      button_name:"Təklif əldə et",
      button_url:"#"
    },
    {
      id:"2",
      Image: "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg",
      title: "Parkinq KASKO",
      button_name:"Təklif əldə et",
      button_url:"#"
    },
    {
      id:"3",
      Image: "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg",
      title: "İcbari sığorta",
      button_name:"Təklif əldə et",
      button_url:"#"
    },
  ];
}
