import { Product } from "../product/product.component";

export class ProductService {
    products: Product[] = [
        {
            id:0,
            title:"TEST #0",
            description: "Acesta este un test #0",
            price: 15
        },
        {
            id:1,
            title:"TEST #1",
            description: "Acesta este un test #1",
            price: 19
        }
    ]
}