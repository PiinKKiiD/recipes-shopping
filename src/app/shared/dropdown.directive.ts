import {Directive, ElementRef, HostBinding, HostListener} from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective{
  @HostBinding('class.open') isOpened = false;
  /*@HostListener('click') toggleOpen(){
    this.isOpened = ! this.isOpened;
  }*/

  @HostListener('document:click',['$event']) toggleOpen(event: Event){
    this.isOpened = this.elRef.nativeElement.contains(event.target);
  }
  constructor(private elRef: ElementRef) {
  }

}
