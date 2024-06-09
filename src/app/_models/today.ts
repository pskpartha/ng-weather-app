export interface Today {
    icon: string;
    temperature: Temperature;
    date: number;
    placeName: string;
    weatherBrief: string;
    wind: SummaryItem,
    humidity: SummaryItem,
    pressure: SummaryItem;
    visibility: SummaryItem;
    sun: {
        rise: number;
        set: number;
    }

}

export interface Temperature {
    unit: string;
    current: number;
    min: number;
    max: number;
}

export interface SummaryItem {
    title: string;
    value: number;
    unit: string;
    icon: string;
}

