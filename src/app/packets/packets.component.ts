import { Component } from '@angular/core';

@Component({
  selector: 'app-packets',
  templateUrl: './packets.component.html',
  styleUrls: ['./packets.component.css']
})
export class PacketsComponent {
  packetTabs = [
    {
      id:"1",
      src:"uniq1",
      packet_name:"OK 500",
      active: true,
      content: [
        {
          title: "Aqrəqat sığorta məbləği",
          description: "5,000 AZN"
        },
        {
          title: "Şərtsiz Azadolma məbleği",
          description: "100 AZN"
        },
        {
          title: "Tamir Servisi",
          description: "Qeyri-resmi / Rəsmi servis"
        },
        {
          title: "Sığorta haqqı",
          description: "500 AZN / 550 AZN"
        }
      ],
    },
    {
      id:"2",
      src:"uniq2",
      packet_name:"OK 900",
      active: false,
      content: [
        {
          title: "Aqrəqat sığorta məbləği",
          description: "5,000 AZN"
        },
        {
          title: "Şərtsiz Azadolma məbleği",
          description: "100 AZN"
        },
        {
          title: "Tamir Servisi",
          description: "Qeyri-resmi / Rəsmi servis"
        },
        {
          title: "Sığorta haqqı",
          description: "500 AZN / 550 AZN"
        }
      ],
    },
    {
      id:"3",
      src:"uniq3",
      packet_name:"OK 1900",
      active: false,
      content: [
        {
          title: "Aqrəqat sığorta məbləği",
          description: "3,000 AZN"
        },
        {
          title: "Şərtsiz Azadolma məbleği",
          description: "200 AZN"
        },
        {
          title: "Tamir Servisi",
          description: "Qeyri-resmi / Rəsmi servis"
        },
        {
          title: "Sığorta haqqı",
          description: "100 AZN / 550 AZN"
        }
      ],
    }
  ]
}
