import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {

  accordionDatas =[
    {
      id:"1",
      title: "AVTO-KASKO polisi nə deməkdir?",
      content: "AVTO-KASKO - avtomobilin banının yol-nəqliyyat hadisəsi nəticəsində dəymiş zərərin, eyni zamanda hər hansı bir cisimlə toqquşmasından, təbiət hadisələrindən, yanğından, üçüncü şəxslərin qeyri-qanuni hərəkətlərindən və ya qaçırılmasından irəli gələn ziyanın sığortası deməkdir. Bu sığorta növü, üçüncü şəxslər qarşısında məsuliyyəti nəzərdə tutmur. Belə ki, məsuliyyətin risklərinə ayrıca bir sığorta növünə əsasən təminat verilir."
    },
    {
      id:"2",
      title: "Avtonəqliyyat vasitəsi sahiblərinin mülki məsuliyyətinin icbari sığortası hansı riskləri əhatə edir?",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      id:"3",
      title: "Kompensasiya ödənişləri hansı hallarda təqdim edilir?",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      id:"4",
      title: "Avtonəqliyyat vasitəsi sahiblərinin mülki məsuliyyətinin icbari sığortası üzrə sığorta haqqı nə qədərdir?",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
  ]
  


}
