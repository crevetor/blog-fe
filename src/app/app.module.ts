import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule }    from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';

import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { PostComponent } from './post/post.component';

const appRoutes: Routes = [
  { path: 'blog', component: BlogComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    BlogComponent,
    AboutComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    MarkdownModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    LayoutModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
