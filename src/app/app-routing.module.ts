import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {CreateTaskComponent} from "./create-task/create-task.component";
import {ModalDeleteConfirmationComponent} from "./modal-delete-confirmation/modal-delete-confirmation.component";

const routes: Routes = [
    {path: "", component: LoginComponent},
    {path: "home", component: HomeComponent},
    {path: "create-task", component: CreateTaskComponent},
    { path: "**", component: LoginComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
