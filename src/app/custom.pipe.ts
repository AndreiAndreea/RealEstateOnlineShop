import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { ShoppingCart, ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(suma: number, shoppingCartItems: ShoppingCart[]): number {

    suma = 0;

    for (let i = 0; i < shoppingCartItems.length; i++) {
      suma = suma + parseInt(shoppingCartItems[i].price.replace(/[^0-9]/g, ''));
    }

    //console.log(Number(suma).toLocaleString());
    return suma;
  }

  //Example for 'how to use the pipe thing'
  //
  // transform(value: number,exponent: number): number {
  //   return Math.pow(value,exponent);
  // }

}
