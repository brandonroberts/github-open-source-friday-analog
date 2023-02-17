import { Component, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-post',
  standalone: true,
  template: `
    <h2>ID</h2>

    {{ id }}
  `
})
export default class AboutComponent {
  id = inject(ActivatedRoute).snapshot.paramMap.get('slug');
}