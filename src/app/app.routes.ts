import { Routes } from '@angular/router';
import { DataBinding } from './data-binding/data-binding';
import { NforDirectiveFor } from './nfor-directive-for/nfor-directive-for';
import { StructurialDirectiveNgifIf } from './structurial-directive-ngif-if/structurial-directive-ngif-if';
import { App } from './app';
import { Hello } from './hello/hello';
import { Defaultpagecomp } from './defaultpagecomp/defaultpagecomp';
import { Welcome } from './welcome/welcome';
import { UserReg } from './user-reg/user-reg';
import { PipesConcepts } from './pipes-concepts/pipes-concepts';
import { TemplateDrivenForms } from './template-driven-forms/template-driven-forms';
import { ReactiveForms } from './reactive-forms/reactive-forms';
import { PracticeReactiveForms } from './practice-reactive-forms/practice-reactive-forms';
import { ProfileService } from './profile-service/profile-service';
import { ServicePractice } from './service-practice/service-practice';
import { CrudOperations } from './crud-operations/crud-operations';


export const routes: Routes = [
    // {path:'',redirectTo:'', pathMatch:'full'},
    {path:'',component:Hello},
    {path:'users',component:UserReg},
    {path:'pipes',component:PipesConcepts},
    {path:'Home',component:Welcome},
    {path:'tdf', component:TemplateDrivenForms},
    {path:'curd', component:CrudOperations},
    {path:'reactive-forms', component:ReactiveForms},
    {path:'service-practice', component:ServicePractice},
    {path:'Practice-forms', component:PracticeReactiveForms},
    {path:'profile-service',component:ProfileService},
    {path:'databinding', component:DataBinding,
        children:[
            {
                 path:'structure-div',
                 component:StructurialDirectiveNgifIf
            }
        ]
    },
    {path:'nfor-for', component:NforDirectiveFor},
    {path: 'structure-div', component: StructurialDirectiveNgifIf},
    {path:'**', component: Defaultpagecomp}
];
