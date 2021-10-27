import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appMultiplier]'
})
export class MultiplierDirective {

  constructor(
    private viewContainer: ViewContainerRef,
    private template: TemplateRef<any>
  ) { }

  @Input('appMultiplier') set render(times: number) {
    this.viewContainer.clear();

    for (let i = 0; i < times; i++) {
      this.viewContainer.createEmbeddedView(this.template, {});
    }
  }

}
