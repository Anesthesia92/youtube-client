import { CommonModule } from '@angular/common';
import { SearchResultsComponent } from "./pages/search-results/search-results.component";
import { SearchItemComponent} from "./components/search-item/search-item.component";
import { SearchInfoComponent} from "./components/search-info/search-info.component";
import { MatIconModule} from "@angular/material/icon";
import { MatToolbarModule} from "@angular/material/toolbar";
import { MatFormFieldModule} from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatTreeModule } from "@angular/material/tree";
import { MatCardModule } from "@angular/material/card";
import { FormsModule } from "@angular/forms";
import { YoutubeRoutingModule } from "./youtube-routing.module";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { BottomColorDirective } from "../shared/directives/bottom-color.directive";
import { SortingPipe } from "./pipes/sorting.pipe";
import { MatButtonModule } from "@angular/material/button";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { YoutubeInterceptor } from "./interceptors/youtube.interceptor";

@NgModule({
  declarations: [SearchItemComponent, SearchInfoComponent, SearchResultsComponent, BottomColorDirective,
    SortingPipe],
  imports: [CommonModule, YoutubeRoutingModule, MatIconModule, MatToolbarModule, MatFormFieldModule, MatInputModule,
    MatExpansionModule, MatTreeModule, MatCardModule, FormsModule, YoutubeRoutingModule, MatButtonModule],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: YoutubeInterceptor, multi: true}],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [SearchResultsComponent]
})

export class YoutubeModule { }
