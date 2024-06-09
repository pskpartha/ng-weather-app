import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatTime',
  standalone: true
})
export class FormatTimePipe implements PipeTransform {

  transform(value: number): string {
    if (!value) return '';
    const date = new Date(value);
    const options: Intl.DateTimeFormatOptions = {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false // Set to `true` for AM/PM format
    };
    return date.toLocaleTimeString('en-US', options); // Adjust locale as needed
  }
}