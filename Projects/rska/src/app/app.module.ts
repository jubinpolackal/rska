import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AgmCoreModule } from '@agm/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { InstructorsComponent } from './components/instructors/instructors.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContactComponent } from './components/contact/contact.component';
import { ClassdetailsComponent } from './components/classdetails/classdetails.component';
import { FooterComponent } from './components/footer/footer.component';
import { DescriptionComponent } from './components/description/description.component';
import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { GallerymanagerComponent } from './components/gallerymanager/gallerymanager.component';
import { NewsflashmanagerComponent } from './components/newsflashmanager/newsflashmanager.component';
import { LocationmanagerComponent } from './components/locationmanager/locationmanager.component';
import { ClassmanagerComponent } from './components/classmanager/classmanager.component';
import { InstructorsmanagerComponent } from './components/instructorsmanager/instructorsmanager.component';
import { CopyrightmanagerComponent } from './components/copyrightmanager/copyrightmanager.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {path: 'gallerymanager', component: GallerymanagerComponent },
      {path: 'newsflashmanager', component: NewsflashmanagerComponent },
      {path: 'locationmanager', component: LocationmanagerComponent },
      {path: 'classmanager', component: ClassmanagerComponent },
      {path: 'instructorsmanager', component: InstructorsmanagerComponent },
      {path: 'copyrightmanager', component: CopyrightmanagerComponent }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    InstructorsComponent,
    GalleryComponent,
    ContactComponent,
    ClassdetailsComponent,
    FooterComponent,
    DescriptionComponent,
    AdminComponent,
    LoginComponent,
    GallerymanagerComponent,
    NewsflashmanagerComponent,
    LocationmanagerComponent,
    ClassmanagerComponent,
    InstructorsmanagerComponent,
    CopyrightmanagerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    AngularFontAwesomeModule,
    NgxTwitterTimelineModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBtrDbB-MSzw_x1RVpT074tdx228oYXTKI',
      libraries: ['places']
    })
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
