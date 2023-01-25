import { Injectable } from '@angular/core';

import * as val  from '../common-data/values';

@Injectable({ providedIn: 'root' })
export class Borderservice {
    private currentAcceptableValue: number[] = [];

    private minPossibleValue:number = val.minPossibleValue;
    private maxPossibleValue:number = val.maxPossibleValue;
    private minAcceptableValue:number = val.minAcceptableValue;
    private maxAcceptableValue:number = val.maxAcceptableValue;

    private inputMinValueMessage:string = val.inputMinValueMessage;
    private inputMaxValueMessage:string = val.inputMaxValueMessage;
    private exceededValueMessage:string = val.exceededValueMessage;

    private inputValidationResult = val.inputValidationResult;

  constructor() {
    this.currentAcceptableValue = [val.minAcceptableValue, val.maxAcceptableValue];
  }

  changeValues() {
    this.minAcceptableValue = this.getBoundaryValue(val.inputMinValueMessage);
    this.maxAcceptableValue = this.getBoundaryValue(val.inputMaxValueMessage);
  
    while (this.minAcceptableValue > this.maxAcceptableValue) {
      alert(this.exceededValueMessage);
      this.minAcceptableValue = this.getBoundaryValue(this.inputMinValueMessage);
      this.maxAcceptableValue = this.getBoundaryValue(this.inputMaxValueMessage);
    }
  
  };
  
  validateInput(input:any){
    if (isNaN(input) || input === "") {
      return this.inputValidationResult.NaN;
    }
    let boundaryValue = parseInt(input);
    if (boundaryValue < this.minPossibleValue || boundaryValue > this.maxPossibleValue) {
      return this.inputValidationResult.Invalid;
    }
    return this.inputValidationResult.OK;
  };
  
    showValidationError(validationResult:string)  {
    switch (validationResult) {
      case this.inputValidationResult.NaN:
        alert("Введите число");
        break;
      case this.inputValidationResult.Invalid:
        alert(
          `Значение должно быть ≧ ${this.minPossibleValue} и ≦ ${this.maxPossibleValue}`
        );
        break;
    }
  };
  
  getBoundaryValue(inputValueMessage: string) {
    let boundaryValueInput = prompt(inputValueMessage) ;
    let validationResult = this.validateInput(boundaryValueInput);
  
    while (validationResult !== this.inputValidationResult.OK) {
        this.showValidationError(validationResult);
      boundaryValueInput = prompt(inputValueMessage);
      validationResult = this.validateInput(boundaryValueInput);
    }
  
    return parseInt(boundaryValueInput === null ? "" : boundaryValueInput);
  };

    
}