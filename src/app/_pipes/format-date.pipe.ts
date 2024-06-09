import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate',
  standalone: true
})
export class FormatDatePipe implements PipeTransform {

  transform(value: number): string {
    if (!value) return '';
    let date = new Date(value * 1000); // Convert Unix timestamp from seconds to milliseconds

    // Specify the format
    const options: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: 'long', // "long" for full month name.
      year: 'numeric'
    };

    // Format the date using the specified options
    return date.toLocaleDateString('en-US', options);
  }

}