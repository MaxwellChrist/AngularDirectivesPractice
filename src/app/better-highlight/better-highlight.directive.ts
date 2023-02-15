import { Directive, OnInit, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  constructor(private renderer: Renderer2, private element: ElementRef) { }

  ngOnInit(): void {
    this.renderer.setStyle(this.element.nativeElement, 'background-color', 'yellow');
    this.renderer.setStyle(this.element.nativeElement, 'color', 'purple')
  }

}
