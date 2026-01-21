import { HttpClient } from '@angular/common/http';
import { computed, Injectable, signal } from '@angular/core';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RequestsService {
  API = 'https://localhost:7036/api/Requests/';
  private allRequests = signal<Request[]>([]);
  filterByUrgent = signal(false);
  sortOrder = signal<'new' | 'old'>('old');
  filteredRequests = computed(() => {
    const sortOrder = this.sortOrder();
    const filterUrgent = this.filterByUrgent();

    let result = [...this.allRequests()];

    if (filterUrgent) {
      result = result.filter((r) => r.isUrgent);
    }

    return result.sort((a, b) => {
      if (a.isUrgent !== b.isUrgent) {
        return a.isUrgent ? -1 : 1;
      }

      const timeA = new Date(a.createdAt).getTime();
      const timeB = new Date(b.createdAt).getTime();

      return sortOrder === 'new' ? timeB - timeA : timeA - timeB;
    });
  });

  constructor(private http: HttpClient) {}

  getRequests(maxItems: number) {
    this.http
      .get<Request[]>(this.API, { params: { maxItems: maxItems } })
      .pipe(take(1))
      .subscribe({
        next: (requests) => {
          this.allRequests.set(requests);
        },
      });
  }
}

type Request = {
  id: number;
  title: string;
  isUrgent: boolean;
  createdAt: Date;
};
