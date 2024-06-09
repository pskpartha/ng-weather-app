import { SummaryItem, Temperature } from "./today";

export interface Nextdays {
    date: string;
    weatherBrief: string;
    icon: string;
    temperature: Temperature,
    wind: SummaryItem
}


