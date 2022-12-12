import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

type Customer = {
  id: string,
  name: string,
  address: string,
  contact: string
}

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit{

  readonly apiUrl = 'http://localhost:8080/app/api/customers';
  customerList: Array<Customer> = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get<Customer[]>(this.apiUrl).subscribe(customers => this.customerList = customers);
  }
}
