import {Directive, ElementRef, Input, Renderer2} from '@angular/core';

export enum Colors {
  red = 'red',
  blue = 'blue',
  yellow = 'yellow',
  green = 'green'
}

@Directive({
  selector: '[appBottomBorderColor]'
})

export class BottomColorDirective {

  @Input('appBottomBorderColor')

  public date!: string;

  constructor (private renderer: Renderer2, private element: ElementRef) {
    let el = this.element.nativeElement;
    renderer.setStyle(el, 'background-color', this.getColorByDate(this.date));
    el.style.borderBottomColor = this.getColorByDate(this.date)
    console.log(el.style.borderBottomColor)
  }

  public getColorByDate(date: string): string {

    const publishedDate: Date = new Date (date);

    switch (true) {
      case publishedDate > this.getOneWeekBeforeNow():
        return Colors.blue;
      case publishedDate > this.getOneMonthBeforeNow():
        return Colors.green;
      case publishedDate > this.getSixMonthBeforeNow():
        return Colors.red;
      default:
        return Colors.yellow;
    }
  }

  public getOneMonthBeforeNow(): Date {
    let dateNow: Date = new Date;
    return new Date(dateNow.setMonth(dateNow.getMonth() - 1));
  }

  public getOneWeekBeforeNow(): Date {
    let dateNow: Date = new Date;
    return new Date(dateNow.getTime() - 7 * 28 * 60 * 60 * 1000);
  }

  public getSixMonthBeforeNow(): Date {
    let dateNow: Date = new Date;
    return new Date(dateNow.setMonth(dateNow.getMonth() - 6));
  }

}
