import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

// Gives visitors a clear recovery path when a URL does not exist.
@Component({
  selector: 'app-not-found-section',
  imports: [RouterLink],
  templateUrl: './not-found-section-component.html',
})
export class NotFoundSectionComponent {}
