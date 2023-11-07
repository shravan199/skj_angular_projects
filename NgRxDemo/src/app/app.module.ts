import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/layout/dashboard/dashboard.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { YoutubeLayoutComponent } from './components/layout/youtube-layout/youtube-layout.component';
import { MaterialModule } from './material.module';
import { UserCardComponent } from './components/user/user-card.component';
import { PostComponent } from './components/post/post.component';
import { ApiService } from './services/APICalls/api.service';
import { UserRepositoryService } from './repository/user-repository/user-repository.service';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './components/user-list/user-list.component';
import { StoreModule } from '@ngrx/store';
import { RootReducer } from './reducers';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    YoutubeLayoutComponent,
    UserCardComponent,
    PostComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    StoreModule.forRoot(RootReducer)
  ],
  providers: [UserRepositoryService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
