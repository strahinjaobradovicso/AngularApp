import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'roundHours'
})
export class RoundHours implements PipeTransform {
    transform(value: number, ...args: any[]) {
        return Math.floor(value);
    }
}