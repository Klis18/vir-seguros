import { Insurance } from '../../insurances/interfaces/insurance.interface';
import { Insured } from "../../insured/interfaces/insured.interface";

export interface InsurancesInsured extends Insurance, Insured{
    id: string;
    state: string;
}