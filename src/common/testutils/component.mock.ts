import { Component, Input, Output, EventEmitter, Directive, Pipe } from '@angular/core'
import { ReactiveFormsModule, NG_VALUE_ACCESSOR } from '@angular/forms'

export function mockComponent(options: Component): Component {
  const metadata: Component = {
    selector: options.selector,
    template: options.template || '',
    inputs: options.inputs,
    outputs: options.outputs,
    providers: options.providers,
  }
  return Component(metadata)(class _ {})
}

export function mockTranscludeComponent(options: Component): Component {
  const metadata: Component = {
    selector: options.selector,
    template: '<ng-content></ng-content>',
    inputs: options.inputs,
    outputs: options.outputs,
    providers: options.providers,
  }
  return Component(metadata)(class _ {})
}

Component.prototype.withMethod = (methodName: string) => {
  Component.prototype[methodName] = () => {}
}

export function mockFormControl(options: Component): Component {
  const metadata: Component = {
    selector: options.selector,
    template: options.template || '',
    inputs: options.inputs,
    outputs: options.outputs,
    providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useValue: {
          writeValue: () => {},
          registerOnChange: () => {},
          registerOnTouched: () => {},
        },
        multi: true,
      }
    ],
  }
  return Component(metadata)(class _ {})
}

export function mockPipe(options: Pipe): Pipe {
  const metadata: Pipe = {
    name: options.name,
    pure: options.pure,
  }
  return Pipe(metadata)(class _ { transform(value: string) { return value.toLowerCase() } })
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'confirmation',
  template: '<ng-content></ng-content>',
})
export class ConfirmationMockComponent {
  @Input() message
  @Output() onDismiss = new EventEmitter()
  @Output() onConfirm = new EventEmitter()

  show(message?: string, data?: any) {}
}

@Directive({
  selector: '[bsModal]',
  exportAs: 'bs-modal'
})
export class BsModalMockDirective {
  @Input() config
  @Output() onHidden = new EventEmitter()

  show() {}
  hide() {}
}
