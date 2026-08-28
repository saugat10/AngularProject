import { Component } from '@angular/core';

@Component({
  selector: 'app-sip-calculator',
  imports: [],
  templateUrl: './sip-calculator.html',
  styleUrl: './sip-calculator.css',
})
export class SipCalculator {
  title: string = 'SIP Returns Calculator';
  monthlyAmount: number = 5000;
  investmentPeriod: number = 10;
  expectedReturnRate: number = 12;
  totalInvestment: number = this.monthlyAmount * this.investmentPeriod * 12;
  maturityAmount: number = 1162000;
  estimatedReturns: number = this.maturityAmount - this.totalInvestment;
}
