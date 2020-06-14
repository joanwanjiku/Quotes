import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../models/quote';

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.css']
})
export class AddQuoteComponent implements OnInit {

  displayMsg: string;
  @Output() addQuote: EventEmitter<any> = new EventEmitter<any>()
  newQuote: Quote;
  constructor() { 
    this.newQuote = new Quote(0, "", "", "", new Date)
  }

  onSubmit(){
    this.addQuote.emit(this.newQuote);
  }
  success(){
    this.displayMsg = 'Quote Added Successfully!!'
  }
  
  ngOnInit(): void {
  }

}
