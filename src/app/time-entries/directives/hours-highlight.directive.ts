import { AfterViewInit, Directive, ElementRef, input, Input } from "@angular/core";

@Directive({
    selector: '[hoursHighlight]'
})
export class HoursHighlight implements AfterViewInit {
    hours = input.required<number>();
    constructor(private elementRef: ElementRef){}

    ngAfterViewInit(): void {
        if(this.hours() < 100){
            this.elementRef.nativeElement.style.background = 'red';
        }
    }

}