import { Component, inject, OnInit } from '@angular/core';
import { RequestsService } from './requests.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'frontend';
  private requestsService = inject(RequestsService);
  requests = this.requestsService.filteredRequests;
  sortOrder = this.requestsService.sortOrder;
  filterByUrgent = this.requestsService.filterByUrgent;

  ngOnInit(): void {
    this.requestsService.getRequests(13);
  }

  onFilterByUrgents() {
    this.requestsService.filterByUrgent.update((v) => !v);
  }

  onSortByDate(event: Event) {
    const element = event.target as HTMLSelectElement;
    const value = element.value as 'new' | 'old';
    this.requestsService.sortOrder.set(value);
  }
}
