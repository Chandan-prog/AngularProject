import { NgModule } from "@angular/core";
import { CardComponent } from "./card/card.component";
import { AppComponent } from "../app.component";


@NgModule({
    declarations: [CardComponent],
    exports: [CardComponent]
})

export class SharedModule{};