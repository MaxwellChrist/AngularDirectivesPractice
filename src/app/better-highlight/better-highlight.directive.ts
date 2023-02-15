import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';
  // @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;

  constructor(private renderer: Renderer2, private element: ElementRef) { }

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'yellow');
    this.renderer.setStyle(this.element.nativeElement, 'color', 'purple')
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'yellow');
    this.backgroundColor = this.highlightColor
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }

}
