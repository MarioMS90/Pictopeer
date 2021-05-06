import { Component } from '@angular/core';

@Component({
  selector: `app-activity-page`,
  template: `
<app-layout>
  <mat-toolbar class="page-header" role="heading">
    <h1>Actividades</h1>
  </mat-toolbar>

  <router-outlet></router-outlet>

</app-layout>`,
  
})
export class ActivityPageComponent {
}
