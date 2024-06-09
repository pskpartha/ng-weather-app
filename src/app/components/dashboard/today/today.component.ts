import { Component, OnInit, input } from '@angular/core';
import { FormatDatePipe } from '../../../_pipes/format-date.pipe';
import { NgIf } from '@angular/common';
import { Today } from '../../../_models/today';
import { FormatTimePipe } from '../../../_pipes/format-time.pipe';
import { FormatDayNamePipe } from '../../../_pipes/format-dayname.pipe';

@Component({
  selector: 'app-today',
  standalone: true,
  imports: [FormatDatePipe, FormatTimePipe, FormatDayNamePipe],
  templateUrl: './today.component.html',
  styleUrl: './today.component.scss'
})
export class TodayComponent implements OnInit {
  todaysData = input<Today>();
  assetUrl = './assets/weather-icons/'
  ngOnInit(): void {
    console.log(this.todaysData());
  }

}
