import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AuthorDetailComponent } from "./author-detail/author-detail.component";
import { Day8ComponentInteraction2Component } from "./day8-component-interaction-2.component";
import { Day8ComponentInteraction2RoutingModule } from "./day8-component-interaction-2.routing.module";

@NgModule({
  declarations: [
    AuthorDetailComponent,
    Day8ComponentInteraction2Component
  ],
  imports: [
    CommonModule,
    Day8ComponentInteraction2RoutingModule
  ],
  exports: []
})

export class Day8ComponentInteraction2Module {

}
