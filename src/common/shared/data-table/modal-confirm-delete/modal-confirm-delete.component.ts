import { Component, TemplateRef, ViewChild, Output, ViewContainerRef, EventEmitter } from '@angular/core'
import { ModalDirective } from 'ngx-bootstrap/modal'

export class ConfirmDeleteModalContext {
  $implicit: any
}

@Component({
  selector: 'modal-confirm-delete',
  templateUrl: './modal-confirm-delete.component.html',
  styleUrls: ['./modal-confirm-delete.component.scss']
})

export class ModalConfirmDeleteComponent {

  @Output() deleteConfirmed = new EventEmitter()
  @ViewChild('defaultModalBody') defaultModalBodyTpl: TemplateRef<ConfirmDeleteModalContext>
  @ViewChild('modalBody', { read: ViewContainerRef }) modalBodyVcr: ViewContainerRef
  @ViewChild('modalConfirmDelete') modalConfirmDelete: ModalDirective

  private item
  private modalBodyContext

  open(item: any) {
    this.item = item
    if (item.lastName) {
      this.item.name = item.firstName ? item.firstName + item.lastName : item.lastName
    }
    this.modalBodyContext.$implicit = item
    this.modalConfirmDelete.show()
  }

  confirmDelete() {
    this.deleteConfirmed.emit(this.item)
  }

  renderTemplate(deleteMessageTpl?: TemplateRef<ConfirmDeleteModalContext>) {
    const tpl = deleteMessageTpl || this.defaultModalBodyTpl
    const embeded = this.modalBodyVcr.createEmbeddedView(tpl, {})
    this.modalBodyContext = embeded.context
  }

}
