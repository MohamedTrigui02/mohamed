import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScategoriesRoutingModule } from './scategories-routing.module';
import { IndexComponent } from './index/index.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    IndexComponent,
    EditComponent,
    ViewComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    ScategoriesRoutingModule,
    FormsModule,
    ReactiveFormsModule


  ]
})
export class ScategoriesModule { }
