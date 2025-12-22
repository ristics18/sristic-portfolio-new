import { Component } from '@angular/core';
import { NavComponent } from '../../nav/nav.component';
import { FooterComponent } from '../../footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-default-layout',
  imports: [NavComponent, FooterComponent, RouterModule],
  templateUrl: './default-layout.component.html',
  styleUrl: './default-layout.component.scss'
})
export class DefaultLayoutComponent {

}
