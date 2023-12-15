import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  data: any[] = [];

  constructor(private dataService : BackendService) { }

  ngOnInit(): void {
    this.dataService.getUserData().subscribe((result) => {
      if (result && result.data && Array.isArray(result.data)) {
        this.data = result.data.map((item: any) => ({
          id: item.id,
          name: item.name,
          age: item.age,
          phone: item.phone,
          email: item.email,
          country: item.country,
          state: item.state
        }));
      }
      console.log("Api data received" + this.data);
    });
  }
}
