import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
{path:"scategories/index", component:IndexComponent},
{ path: 'scategories/:scategorieId/view', component: ViewComponent },
{ path: 'scategories/create', component: CreateComponent },
  { path: 'scategories/:scategorieId/edit', component: EditComponent }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScategoriesRoutingModule { }
