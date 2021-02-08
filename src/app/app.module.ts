import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RegisterMemberComponent } from './register-member/register-member.component';
import { ListMemberComponent } from './list-member/list-member.component';
import { UpdateMemberComponent } from './update-member/update-member.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NamePipe } from './pipe/name.pipe';
import { SearchFilterPipe } from './pipe/search-filter.pipe';
import { LoginComponent } from './authentication/login/login.component';
import { AuthGuard } from './authentication/auth.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    RegisterMemberComponent,
    ListMemberComponent,
    UpdateMemberComponent,
    MemberDetailComponent,
    PageNotFoundComponent,
    NamePipe,
    SearchFilterPipe,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
