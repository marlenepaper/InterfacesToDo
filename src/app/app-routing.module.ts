import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {CreateTaskComponent} from "./create-task/create-task.component";

const routes: Routes = [
    {path: "", component: LoginComponent},
    {path: "register", component: LoginComponent},
    {path: "home", component: HomeComponent},
    {path: "createTask", component: CreateTaskComponent},
    {
        path: "**",
        component: LoginComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
