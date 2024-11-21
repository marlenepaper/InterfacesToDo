import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {LayoutSinHeaderComponent} from "./layout-sin-header/layout-sin-header.component";
import {LayoutConHeaderComponent} from "./layout-con-header/layout-con-header.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
    {
        path: "",
        component: LayoutSinHeaderComponent,
        children: [
            {path: "", component: LoginComponent},
            {path: "register", component: LoginComponent},
        ]
    },

    {
        path: "",
        component: LayoutConHeaderComponent,
        children: [
            {path: "home", component: HomeComponent},
        ]
    },

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
