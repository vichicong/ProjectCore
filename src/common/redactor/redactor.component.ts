import { Component, forwardRef, ElementRef, ViewChild, ViewEncapsulation, Input, Optional, OnInit, AfterViewInit } from '@angular/core'
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms'
import * as $ from 'jquery'
import { RedactorConfig } from './config'
import { RedactorGlobalConfig } from './redactor-global-config.class'

const RedactorValueAccessor = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => Redactor),
  multi: true,
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[redactor]',
  providers: [RedactorValueAccessor],
  templateUrl: './redactor.component.html',
  encapsulation: ViewEncapsulation.None,
})

// tslint:disable-next-line:component-class-suffix
export class Redactor implements ControlValueAccessor, OnInit, AfterViewInit {

  @Input() enableSource = true
  @Input() minHeight: number
  @Input() redactorOptions: RedactorConfig
  @ViewChild('content') private content: ElementRef

  private _onChange: Function
  private _onTouched: Function

  constructor(
    @Optional() private globalConfig: RedactorGlobalConfig,
  ) {}

  ngOnInit() {
    if (!this.content) {
      throw new Error('Redactor: No content child')
    }

    const elem = this.content.nativeElement as HTMLTextAreaElement

    const plugins = [
      this.enableSource ? 'source' : undefined,
    ].filter(it => !!it)

    let config = {
      plugins,
    } as any

    if (this.minHeight) {
      config.minHeight = +this.minHeight
    }

    config = Object.assign({},
      this.globalConfig,
      config,
      this.redactorOptions,
    )

    $(elem).redactor(config)
  }

  ngAfterViewInit() {
    const elem = this.content.nativeElement
    if (typeof this._onChange === 'function') {
      const cb = this._onChange
      $(elem).on({
        'change.callback.redactor': function () {
          cb(this.code.get())
        }
      })
    }
  }

  writeValue(value) {
    const elem = this.content.nativeElement
    $(elem).redactor('code.set', value)
  }

  registerOnChange(fn) {
    this._onChange = fn
  }

  registerOnTouched(fn) {
    this._onTouched = fn
  }

}
