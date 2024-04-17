import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent {
  title = 'Tip Calculation Results';
  private _costOfService?: number; // made optional
  private _serviceQuality?: number; // made optional
  tip?: number; // made optional
  totalBill?: number; // made optional

  constructor(private router: Router) {
    // Access the navigation state passed from the input component
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as any;

    if (state) {
      this._costOfService = state.costOfService;
      this._serviceQuality = state.serviceQuality;
      this.tip = state.tip;
      this.totalBill = state.totalBill;
    } else {
      // Redirect back to the input form if there's no state
      this.router.navigate(['/input']);
    }
  }

  // Use getters to safely access the private properties
  get costOfService(): number | undefined {
    return this._costOfService;
  }

  get serviceQuality(): number | undefined {
    return this._serviceQuality;
  }

  // Since the setters aren't used or shown to be necessary, they were removed.
  // If you need to update these values after initialization, you can reintroduce setters.
}
