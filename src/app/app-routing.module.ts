import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/auth/signup/signup.component';
import { SinginComponent } from './components/auth/singin/singin.component';
import { PasswordresetComponent } from './components/auth/passwordreset/passwordreset.component';
import { PasswordRequestFormComponent } from './components/auth/password-request-form/password-request-form.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OverviewComponent } from './components/dashboard/overview/overview.component';
import { ClientsComponent } from './components/dashboard/clients/clients.component';
import { DocumentationComponent } from './components/dashboard/documentation/documentation.component';
import { ClientDetailComponent } from './components/dashboard/client-detail/client-detail.component';
import { TransactionComponent } from './components/dashboard/transaction/transaction.component';
import { ProfileComponent } from './components/dashboard/profile/profile.component';
import { ProfileHomeComponent } from './components/dashboard/profile-home/profile-home.component';
import { ProfileAuthComponent } from './components/dashboard/profile-auth/profile-auth.component';
import { ProfileHelpComponent } from './components/dashboard/profile-help/profile-help.component';
import { UserProfileComponent } from './components/dashboard/user-profile/user-profile.component';
import { AnalyticsComponent } from './components/dashboard/analytics/analytics.component';
import { SettingsComponent } from './components/dashboard/settings/settings.component';
import { SettingComponent } from './components/dashboard/setting/setting.component';
import { SettingHomeComponent } from './components/dashboard/setting-home/setting-home.component';
import { SettingAuthComponent } from './components/dashboard/setting-auth/setting-auth.component';
import { SettingHelpComponent } from './components/dashboard/setting-help/setting-help.component';
import { UsersProfileComponent } from './components/dashboard/users-profile/users-profile.component';

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: SinginComponent },
  { path: 'password-reset', component: PasswordresetComponent },
  { path: 'submit-password', component: PasswordRequestFormComponent },
  {
    path: 'dashboard', component: DashboardComponent, children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'overview', component: OverviewComponent },
      // { path: 'profile', component:  }, 
      { path: 'clients', component: ClientsComponent},
      { path: 'analytic', component: AnalyticsComponent},
      // { path: 'settings', component: SettingsComponent},
      { path: 'clients/:merchantId', component: ClientDetailComponent }, 
      { path: 'clients/:merchantId/:transaction', component: TransactionComponent }, 

      { path:'profile', component: ProfileComponent, children:[
        { path: '', component: ProfileHomeComponent, children:[
          { path:"", redirectTo: 'user', pathMatch: 'full'},
          { path:"user", component: UsersProfileComponent },
          // { path:"edit-user", component: EditUserFormComponent },
          { path:"auth", component: ProfileAuthComponent },
          { path:"help", component:ProfileHelpComponent },
        ]}
      ]},

      { path:'settings', component: SettingComponent, children:[
        { path: '', component: SettingHomeComponent, children:[
          { path:"", redirectTo: 'user', pathMatch: 'full'},
          { path:"user", component: UserProfileComponent },
          // { path:"edit-user", component: EditUserFormComponent },
          { path:"auth", component: SettingAuthComponent },
          { path:"help", component:SettingHelpComponent },
        ]}
      ]}

      // { path: 'api-documentation', component: DocumentationComponent }
    ],

  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
