import { Component, OnInit } from '@angular/core';
import { Person } from './person';
import { PersonService } from './person.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  persons$!: Observable<Person[]>;

  constructor(private personService: PersonService) {}

  ngOnInit() {
    this.persons$ = this.personService.getPersons();
  }

  

  deletePerson(person: Person) {
    this.persons$ = this.persons$.pipe(
      map((persons: any[]) => persons.filter(p => p.name !== person.name))
    );
    alert('Card deleted');
  }
}