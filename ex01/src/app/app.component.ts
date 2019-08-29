import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <a href="ex01">ex01</a><br />

    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'ex01';
}
