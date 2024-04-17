import { Injectable } from '@angular/core';
import { CalculatorData } from './calculator'; // Ensure the file path is correct based on your project structure

@Injectable({
  providedIn: 'root'
})
export class CalculatorDataService {
  data: CalculatorData = new CalculatorData(); // This will hold the current state of the calculator data

  constructor() { }
}
