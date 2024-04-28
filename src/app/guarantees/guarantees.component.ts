import { Component } from '@angular/core';

@Component({
  selector: 'app-guarantees',
  templateUrl: './guarantees.component.html',
  styleUrls: ['./guarantees.component.css']
})
export class GuaranteesComponent {

  guaranteesData = [
    {
      id:"1",
      img:"https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg",
      title: "Avtonəqliyyat hadisəsi"
    },
    {
      id:"2",
      img:"https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg",
      title: "Atılmış və ya düşmüş əşya"
    },
    {
      id:"3",
      img:"https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg",
      title: "Oğurluq, quldurluq, qaçırma və soyğunçuluq"
    },
    {
      id:"4",
      img:"https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg",
      title: "Yanğın və partlayış"
    },
    {
      id:"5",
      img:"https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg",
      title: "Heyvanların hərəkəti"
    },
    {
      id:"6",
      img:"https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg",
      title: "Təbii fəlakət"
    },
    {
      id:"7",
      img:"https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg",
      title: "Üçüncü şəxsin qanunazidd hərəkəti"
    }
  ];
}
