import { Component, Input, ViewChild, Output, EventEmitter } from '@angular/core'
import { ModalDirective } from 'ngx-bootstrap'

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})

export class ConfirmationComponent {

  @Input() message: string
  @Input() modalTitle: string
  @Input() size: string
  @Output() onConfirm = new EventEmitter()
  @Output() onDismiss = new EventEmitter()
  @ViewChild('confirmationModal') confirmationModal: ModalDirective

  private deletedData: any

  constructor() {}

  show(message?: string, data?: any) {
    this.message = message || this.message
    this.deletedData = data
    this.confirmationModal.show()
  }

  get onHide() {
    return this.confirmationModal.onHide
  }

  dismiss() {
    this.onDismiss.emit()
    this.confirmationModal.hide()
  }

  confirm() {
    this.onConfirm.emit(this.deletedData)
    this.confirmationModal.hide()
  }

}
