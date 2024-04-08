import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IgxButtonModule, IgxIconModule, IgxInputGroupModule, IgxRippleModule } from 'igniteui-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateDeckComponent } from './pages/create-deck/create-deck.component';
import { CardDeckComponent } from './shared/components/card-deck/card-deck.component';
import { LoadingComponent } from './shared/components/loading/loading.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import { ModalCardVisualizeComponent } from './shared/components/modal-card-visualize/modal-card-visualize.component';
import { ListDeckComponent } from './pages/list-deck/list-deck.component';
import { DeckComponent } from './shared/components/deck/deck.component';
import { ModalDeckComponent } from './shared/components/modal-deck/modal-deck.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateDeckComponent,
    CardDeckComponent,
    LoadingComponent,
    ModalCardVisualizeComponent,
    ListDeckComponent,
    DeckComponent,
    ModalDeckComponent
  ],
  exports:[
    HomeComponent,
    CreateDeckComponent,
    CardDeckComponent,
    LoadingComponent,
    ModalCardVisualizeComponent,
    ListDeckComponent,
    DeckComponent,
    ModalDeckComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    FormsModule,
    IgxButtonModule,
    IgxIconModule,
    IgxRippleModule,
    HttpClientModule,
    AppRoutingModule,
    InfiniteScrollModule,
    IgxIconModule,
	  IgxInputGroupModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatCardModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
