import { Component, OnInit } from '@angular/core';
import { Quote } from '../models/quote';

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.css']
})
export class AddQuoteComponent implements OnInit {

  newQuote: Quote;
  constructor() { 
    this.newQuote = new Quote(0, "", "", "", new Date)
  }

  // onSubmit(){

  // }
  ngOnInit(): void {
  }

}
