import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'formatDayName', // Updated pipe name
    standalone: true
})
export class FormatDayNamePipe implements PipeTransform { // Rename class accordingly

    transform(value: number): string {
        if (!value) return '';
        let date = new Date(value * 1000); // Convert Unix timestamp from seconds to milliseconds

        // Specify the format to include the day of the week
        const options: Intl.DateTimeFormatOptions = {
            weekday: 'long', // "long" for full day name

        };

        // Format the date using the specified options
        return date.toLocaleDateString('en-US', options);
    }

}
