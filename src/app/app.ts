import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Hello } from "./hello/hello";
import { Welcome } from './welcome/welcome';
import { DataBinding } from './data-binding/data-binding';
import { DirectiveComponent } from './directive-component/directive-component';
import { StructurialDirectiveNgifIf } from './structurial-directive-ngif-if/structurial-directive-ngif-if';
import { NforDirectiveFor } from './nfor-directive-for/nfor-directive-for';
import { NgswitchVsSwitch } from './ngswitch-vs-switch/ngswitch-vs-switch';
import { AttributeDirectives } from './attribute-directives/attribute-directives';
import { Defaultpagecomp } from './defaultpagecomp/defaultpagecomp';
import { UserReg } from './user-reg/user-reg';
import { ProfileService } from './profile-service/profile-service';
import { CrudOperations } from './crud-operations/crud-operations';
// import { ServicePracticeComponent } from './service-practice-component';
import { ServicePractice } from './service-practice/service-practice';
// import { CrudComponent } from './crud-component/crud-component';
// import { Signal } from '@angular/core';
// import { Signals } from './signals/signals';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    // Signals,
    UserReg,
    ServicePractice,
    AttributeDirectives,
    RouterLink,
    Defaultpagecomp,
     Hello, 
     Welcome,
      DataBinding,
      CrudOperations,
      // CrudComponent,
       DirectiveComponent,
       StructurialDirectiveNgifIf,
    NgswitchVsSwitch,
    NforDirectiveFor,
    ProfileService,

  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-first-angular-app');
}
