import { ElementRef, HostListener, Directive } from '@angular/core';
import { style, animate, keyframes, AnimationBuilder } from '@angular/animations';

@Directive({
  selector: '[bekahsRainbowHover]',
})
export class RainbowHoverDirective {
  factory;
  @HostListener('mouseenter') onMouseEnter() {
    this.rainbowGradient();
  } 
  constructor(
    private el: ElementRef,
    private animationBuilder: AnimationBuilder) {

    }

  private rainbowGradient() {
    const factory = this.animationBuilder.build(
      animate('1s', keyframes([
        style({ fill: '#d0d0d0' }),
        style({ fill: '#cd5c5ccc' }),
        style({ fill: '#ffd70080' }),
        style({ fill: '#90ee9080' }),
        style({ fill: '#7fffd480' }),
        style({ fill: '#19197080' }),
        style({ fill: '#483d8b80' }),
        style({ fill: '#4b008280' }),
        style({ fill: '#d0d0d0' }),
        style({ fill: '#fff '})
    ])));
    const elem = factory.create(this.el.nativeElement);
    elem.play();
  }

}
