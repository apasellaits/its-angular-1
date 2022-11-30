import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-cart-item',
    templateUrl: './cartItem.component.html',
})
export class CartItemComponent {

    @Input() drinkItem: any;
    @Output() addCartEvent = new EventEmitter();

    removeItem(drink: any) {
        this.addCartEvent.emit(drink);
    }

}
