import { Injectable } from '@angular/core';

import * as constValues  from '../common-data/const-values';
import {minAcceptableValue, maxAcceptableValue}  from '../common-data/values';

@Injectable({ providedIn: 'root' })
export class UserInputValidationService {


  // changeValues() {
  //   this.minAcceptableValue = this.getBoundaryValue(constValues.inputMinValueMessage);
  //   this.maxAcceptableValue = this.getBoundaryValue(constValues.inputMaxValueMessage);
  
  //   while (minAcceptableValue > maxAcceptableValue) {
  //     alert(constValues.exceededValueMessage);
  //     this.minAcceptableValue = this.getBoundaryValue(constValues.inputMinValueMessage);
  //     this.maxAcceptableValue = this.getBoundaryValue(constValues.inputMaxValueMessage);
  //   }
  //   this.currentAcceptableValue = [this.minAcceptableValue, this.maxAcceptableValue];
  // };
  
  validateInput(input:any):string {
    if (isNaN(input) || input === "") {
      return constValues.inputValidationResult.NaN;
    }
    let boundaryValue = parseInt(input);
    if (boundaryValue < constValues.minPossibleValue || boundaryValue > constValues.maxPossibleValue) {
      return constValues.inputValidationResult.Invalid;
    }
    return constValues.inputValidationResult.OK;
  };
  
    showValidationError(validationResult:string):void  {
    switch (validationResult) {
      case constValues.inputValidationResult.NaN:
        alert("Введите число");
        break;
      case constValues.inputValidationResult.Invalid:
        alert(
          `Значение должно быть ≧ ${constValues.minPossibleValue} и ≦ ${constValues.maxPossibleValue}`
        );
        break;
    }
  };
  
  
}