import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../models/quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quote: Quote;
  @Output() canDelete: EventEmitter<boolean> = new EventEmitter<boolean>()
  constructor() { }


  addLike(){
    this.quote.upvotes += 1
  }
  addDislike(){
    this.quote.downvotes += 1
  }

  deleteQuote(deletePar: boolean){
    this.canDelete.emit(deletePar)
  }
  ngOnInit(): void {
  }

}
