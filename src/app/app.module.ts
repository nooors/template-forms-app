import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ReactiveModule } from "./reactive/reactive.module";
import { SharedModule } from "./shared/shared.module";
import { TemplateModule } from "./template/template.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveModule,
    SharedModule,
    TemplateModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
