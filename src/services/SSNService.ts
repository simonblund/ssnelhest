'use strict'

import { FinnishSSN } from "finnish-ssn";

export class SSNService {
    
    public static generateSSN(country, sex, birthdate){
        switch(country){
            case 'sweden':
                return "20001212-1234";
                break;
            case 'finland':
                return FinnishSSN.createWithAge(20);
                break;
            case 'estonia':
                return "20001212-1234";
                break;
            case 'latvia':
                return "20001212-1234";
                break;
                
        }
    }
}