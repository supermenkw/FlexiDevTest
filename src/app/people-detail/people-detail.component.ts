import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SwapiService } from '../swapi.service';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.scss']
})
export class PeopleDetailComponent implements OnInit {
  isLoading: boolean = false;
  person: any;
  films: any[] = [];
  species: any[] = [];
  starships: any[] = [];
  vehicles: any[] = [];

  constructor(private route: ActivatedRoute, private swapiService: SwapiService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.swapiService.getPerson(Number(id)).subscribe(
      data => {
        this.person = data;
        this.loadRelatedData(data.films, 'films');
        this.loadRelatedData(data.species, 'species');
        this.loadRelatedData(data.starships, 'starships');
        this.loadRelatedData(data.vehicles, 'vehicles');
      },
      error => {
        console.error('Error fetching person details', error);
        alert('An error occurred while fetching the character details. Please try again later.');
      }
    );
  }


  loadRelatedData(urls: string[], type: string): void {
    urls.forEach(url => {
      this.swapiService.getDataByUrl(url).subscribe(data => {
        switch(type) {
          case 'films': this.films.push(data); break;
          case 'species': this.species.push(data); break;
          case 'starships': this.starships.push(data); break;
          case 'vehicles': this.vehicles.push(data); break;
        }
      });
    });
  }
}
