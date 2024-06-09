import { Nextdays } from "./nextdays";
import { Today } from "./today";

export interface WeatherData {
    today: Today;
    nextdays: Nextdays;
}