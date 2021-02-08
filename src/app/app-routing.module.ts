import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './authentication/auth.guard';
import { LoginComponent } from './authentication/login/login.component';
import { ListMemberComponent } from './list-member/list-member.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterMemberComponent } from './register-member/register-member.component';
import { UpdateMemberComponent } from './update-member/update-member.component';

const routes: Routes = [
  { path: '', component: ListMemberComponent },
  { path: 'list', component: ListMemberComponent },
  {
    path: 'register',
    component: RegisterMemberComponent,
  },
  {
    path: 'detail/:id',
    component: MemberDetailComponent,
  },
  {
    path: 'update/:id',
    component: UpdateMemberComponent,
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
