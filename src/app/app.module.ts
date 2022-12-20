import { AppRoutingModule } from './app-routing/app-routing.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { DemoComponent } from './demo/demo.component';
import { ColorChangeDirective } from './color-change.directive';
import { BolorColorDirective } from './bolor-color.directive';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { CustomPipe } from './custom.pipe';
import { RemovespacePipe } from './removespace.pipe';
import { UsersComponent } from './users/users.component';
import { UserslistComponent } from './userslist/userslist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ParentComponent,
    DemoComponent,
    ColorChangeDirective,
    BolorColorDirective,
    Test1Component,
    Test2Component,
    CustomPipe,
    RemovespacePipe,
    UsersComponent,
    UserslistComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatMenuModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
