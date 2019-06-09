import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DocumentsComponent } from './documents/documents.component';
import { NavComponent } from './common/nav/nav.component';
import { UniversityComponent } from './university/university.component';
import { MaterialModule } from './material/material.module';
import { UniversityListComponent } from './university/university-list/university-list.component';
import { UniversityFilterComponent } from './university/university-filter/university-filter.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { LinksComponent } from './common/links/links.component';
import { RatingComponent } from './rating/rating.component';
import { GeneralComponent } from './general/general.component';
import { LoginComponent } from './login/login.component';
import { CommisionComponent } from './commision/commision.component';
import { DataService } from './service/data.service';
import { ProfileComponent } from './profile/profile.component';
import { CookieService } from 'ngx-cookie-service';
import { UniversityDetailsComponent } from './university/university-details/university-details.component';
import { PointsBySubjectComponent } from './points-by-subject/points-by-subject.component';


const appRoutes: Routes = [
  { path: '', component: GeneralComponent },
  { path: 'general', component: GeneralComponent },
  {
    path: 'university', component: UniversityComponent,
    // children: [
    //   {
    //     path: ':id', component: UniversityDetailsComponent
    //   }
    // ]
  },
  { path: 'university/:id', component: UniversityDetailsComponent },
  { path: 'mydocs', component: DocumentsComponent },
  { path: 'rating', component: RatingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'commision', component: CommisionComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'points-by-subject', component: PointsBySubjectComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    DocumentsComponent,
    NavComponent,
    UniversityComponent,
    UniversityListComponent,
    UniversityFilterComponent,
    HeaderComponent,
    FooterComponent,
    LinksComponent,
    RatingComponent,
    GeneralComponent,
    LoginComponent,
    CommisionComponent,
    ProfileComponent,
    UniversityDetailsComponent,
    PointsBySubjectComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    DataService,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
