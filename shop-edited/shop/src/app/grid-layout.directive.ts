import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appGridLayout]'
})
export class GridLayoutDirective {
  @Input("appGridLayout")
  itemsPerRow: number = 1

  constructor(private host: ElementRef) { }

  ngOnInit() {
    this.host.nativeElement.style.display = "grid"
  }

  ngOnChanges() {
    let cols = ""

    for (let i = 0; i < this.itemsPerRow; i++) {
      cols += "auto"
    }
    this.host.nativeElement.style.gridTemplateColumns = cols
  }

}
