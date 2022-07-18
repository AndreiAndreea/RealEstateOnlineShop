import { Injectable } from "@angular/core";
import { Product } from "../product/product.component";

@Injectable({providedIn: "root"})

export class ProductService {
    products: Product[] = [
        {
            id:0,
            title:"67-69 Beverly Park Court",
            state:"Beverly Hills, California, 90210 United States",
            description: "Gated Stone entry to Villa Firenze which is one of the Great Estates of Los Angeles with Huge Massive Rooms and Acres of Private Grounds! The Property is 9.85 acres mostly flat and includes 67, 68 and 69 Beverly Park lots. Large Motor Court with Central Fountain leads to Grand Stone Entry to Center Hall and Massive Public rooms with 20' ceilings and stone floors.",
            price: "7,900,000",
            imageSource: "assets/images/products1.jpg"
        },
        {
            id:1,
            title:"TEST #1",
            state:"",
            description: "Acesta este un test #1",
            price: "19",
            imageSource: "assets/images/products2.jpg"
        }
    ]
    getProducts(){
        return this.products;
    }
}