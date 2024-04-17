import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  public title = 'Tip Calculator';
  public form: FormGroup;

  constructor(private router: Router) {
    this.form = new FormGroup({
      costOfService: new FormControl('', [Validators.required, Validators.min(0.01)]),
      serviceQuality: new FormControl('0.15', Validators.required),
      roundUpTip: new FormControl(false)
    });
  }

  ngOnInit(): void {}

  public calculateAndNavigate() {
    if (this.form.valid) {
      const costOfService = this.form.value.costOfService;
      const serviceQuality = parseFloat(this.form.value.serviceQuality);
      let tip = costOfService * serviceQuality;

      if (this.form.value.roundUpTip) {
        tip = Math.ceil(tip);
      } else {
        tip = Math.ceil(tip * 100) / 100; // rounding to the nearest cent
      }

      const totalBill = costOfService + tip;

      this.router.navigate(['output'], {
        state: {
          costOfService: costOfService,
          serviceQuality: serviceQuality * 100, // convert to percentage for display
          tip: tip,
          totalBill: totalBill
        }
      });
    }
  }
}
