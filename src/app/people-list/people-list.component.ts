import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../swapi.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {
  isLoading: boolean = false;
  people: any[] = [];
  totalPeople: number = 0;
  pageSize: number = 10;
  currentPage: number = 1;

  constructor(private swapiService: SwapiService) { }

  ngOnInit(): void {
    this.fetchPeople();
  }

  fetchPeople(page: number = 1): void {
    this.isLoading = true;
    this.swapiService.getPeople(page).subscribe(
      data => {
        this.people = data.results;
        this.totalPeople = data.count;
        this.isLoading = false;
      },
      error => {
        console.error('Error fetching people data', error);
        alert('An error occurred while fetching the people list. Please try again later.');
        this.isLoading = false;
      }
    );
  }


  onPageChange(event: any): void {
    this.currentPage = event.pageIndex + 1;
    this.fetchPeople(this.currentPage);
  }
}
