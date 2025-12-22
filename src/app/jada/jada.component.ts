import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type MonthSlide = {
  month: string;
  subtitle: string;
  imageUrl: string;
};

@Component({
  selector: 'app-jada',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jada.component.html',
  styleUrls: ['./jada.component.scss'],
})
export class JadaComponent {
  ribbonText = '2025: Our Year Together';

  slides: MonthSlide[] = [
    {
      month: 'January',
      subtitle: 'Beginning of Another Beautiful Year Together',
      imageUrl: 'assets/images/jada/jan.png',
    },
    {
      month: 'February',
      subtitle: 'Your Birthday',
      imageUrl: 'assets/images/jada/feb.png',
    },
    {
      month: 'March',
      subtitle: 'Painting Together',
      imageUrl: 'assets/images/jada/mar.png',
    },
    {
      month: 'April',
      subtitle: 'We Olive & Wine Bar',
      imageUrl: 'assets/images/jada/apr.png',
    },
    {
      month: 'May',
      subtitle: 'Gordon Ramsey Dinner',
      imageUrl: 'assets/images/jada/may.png',
    },
    {
      month: 'Jun',
      subtitle: 'Universal',
      imageUrl: 'assets/images/jada/jun.png',
    },
    {
      month: 'July',
      subtitle: 'Anniversary ❤️',
      imageUrl: 'assets/images/jada/july.png',
    },
    {
      month: 'July 2.0',
      subtitle: 'Boston - my fav pic 😛',
      imageUrl: 'assets/images/jada/july-boston.png',
    },
    {
      month: 'August',
      subtitle: 'Matching Date',
      imageUrl: 'assets/images/jada/aug.png',
    },
    {
      month: 'September',
      subtitle: 'Wedding Attendance',
      imageUrl: 'assets/images/jada/sep.png',
    },
    {
      month: 'October',
      subtitle: 'Broken Bow',
      imageUrl: 'assets/images/jada/oct.png',
    },
    {
      month: 'November',
      subtitle: 'MTB',
      imageUrl: 'assets/images/jada/nov.png',
    },
    {
      month: 'December',
      subtitle: 'Christmas Party',
      imageUrl: 'assets/images/jada/dec.png',
    },
  ];
}
