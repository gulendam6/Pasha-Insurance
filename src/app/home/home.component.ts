import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  homeTabs = [
    {
      id: "1",
      src: 'url1',
      title: "TAM KASKO",
      description: "Lorem ipsum dolor sit amet consectetur. Gravida pellentesque at lectus vel suscipit. Pulvinar est mi diam amet lectus in orci egestas vel.",
      Image: "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg",
      button_one_name: "Onlayn əldə et",
      button_one_url: "online-payment",
      button_two_name: "Onlayn hesabla",
      button_two_url: "#",
      active: true,
      is_packet: false
    },
    {
      id: "2",
      src: 'url2',
      title: "Optimal KASKO",
      description: "Lorem ipsum dolor sit amet consectetur. Gravida pellentesque at lectus vel suscipit. Pulvinar est mi diam amet lectus in orci egestas vel.",
      Image: "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg",
      button_one_name: "Onlayn əldə et",
      button_one_url: "#",
      button_two_name: "",
      button_two_url: "#",
      active: false,
      is_packet: true
    },
    {
      id: "3",
      src: 'url3',
      title: "Parkinq KASKO",
      description: "Lorem ipsum dolor sit amet consectetur. Gravida pellentesque at lectus vel suscipit. Pulvinar est mi diam amet lectus in orci egestas vel.",
      Image: "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg",
      button_one_name: "Onlayn əldə et",
      button_one_url: "#",
      button_two_name: "",
      button_two_url: "",
      active: false,
      is_packet: true
    },
    {
      id: "4",
      src: 'url4',
      title: "İcbari sığorta",
      description: "Lorem ipsum dolor sit amet consectetur. Gravida pellentesque at lectus vel suscipit. Pulvinar est mi diam amet lectus in orci egestas vel.",
      Image: "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg",
      button_one_name: "Onlayn əldə et",
      button_one_url: "#",
      button_two_name: "",
      button_two_url: "",
      active: false,
      is_packet: false
    }
  ];

  showPackets: boolean = false;

  slides = [
    {
      id: "1",
      src: 'url1',
      title: "KASKO bizdən, hədiyyə seçimi sizdən!",
      sliderImage: "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg",
      button_one_name: "Ətraflı",
      button_one_url: "#",
      button_two_name: "Bütün kampaniyalar",
      button_two_url: "#",
      description: 'Tam KASKO sığortası al, 100 və ya 200 AZN dəyərində endirim, müxtəlif hədiyyə kartları sizin olsun!',
      countdownTitle: "Kampaniyanın bitməsinə qalan son:"
    },
    {
      id: "2",
      src: 'url2',
      title: "Öz endirimini özün yarat!",
      sliderImage: "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg",
      button_one_name: "Ətraflı",
      button_one_url: "#",
      button_two_name: "Bütün kampaniyalar",
      button_two_url: "#",
      description: 'Nümunəvi sürücülər üçün 20%-dək endirim təklif edirik',
      countdownTitle: ""
    },
  ];

  days: number=0;
  hours: number=0;
  minutes: number=0;
  seconds: number=0;

  x = setInterval(() => {
    var futureDate = new Date("2024-05-30T00:00:00").getTime();
    var today = new Date().getTime();
    var distance = futureDate - today;
    this.days    = Math.floor( distance / (1000 * 60 * 60 * 24));
    this.hours   = Math.floor( (distance % (1000 * 60 * 60 * 24 )) / (1000 * 60 * 60));
    this.minutes = Math.floor( (distance % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor( (distance % (1000 * 60)) / (1000));
  })

  carouselOptions: OwlOptions = 
  {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false,
  }

  ngOnInit(): void {}

  logActiveTabSrc(isPacket: boolean) {
    this.showPackets = isPacket;
  }
  
}