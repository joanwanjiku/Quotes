import { Component, OnInit } from '@angular/core';
import { Quote } from '../models/quote';

@Component({
  selector: 'app-list-quote',
  templateUrl: './list-quote.component.html',
  styleUrls: ['./list-quote.component.css']
})
export class ListQuoteComponent implements OnInit {

  quotes: Quote[];
  constructor() { 
    this.quotes = [
      new Quote(1, "Joan", "Today is the day you invent something new", "Some guy", new Date(2020, 4, 12)),
      new Quote(2, "James", "It’s hard to detect good luck – it looks so much like something you’ve earned.", "Frank A. Clark", new Date(2020, 1, 21)),
      new Quote(3, "carl", "If one is lucky, a solitary fantasy can totally transform one million realities.", "Maya Angelou", new Date(2019, 12, 12))
    ]
  }

  toggleFooter(index){
    this.quotes[index].showFooter = !this.quotes[index].showFooter
  }
  ngOnInit(): void {
  }

}
