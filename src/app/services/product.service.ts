import { Injectable } from "@angular/core";
import { Product } from "../product/product.component";

@Injectable({ providedIn: "root" })

export class ProductService {
    buyProducts: Product[] = [
        {
            id: 0,
            title: "12 Beverly Park Court",
            state: "Beverly Hills, California, 90210 United States",
            description: "Gated Stone entry to Villa Firenze which is one of the Great Estates of Los Angeles with Huge Massive Rooms and Acres of Private Grounds! The Property is 9.85 acres mostly flat and includes 67-69 Beverly Park lots. ",
            price: "7,900,000",
            imageSource: "assets/images/products/product1.jpg"
        },
        {
            id: 1,
            title: "TEST #1",
            state: "",
            description: "Gated Stone entry to Villa Firenze which is one of the Great Estates of Los Angeles with Huge Massive Rooms and Acres of Private Grounds! The Property is 9.85 acres mostly flat and includes 67-69 Beverly Park lots. ",
            price: "19",
            imageSource: "assets/images/products/product1.jpg"
        },
        {
            id: 1,
            title: "TEST #1",
            state: "",
            description: "Gated Stone entry to Villa Firenze which is one of the Great Estates of Los Angeles with Huge Massive Rooms and Acres of Private Grounds! The Property is 9.85 acres mostly flat and includes 67-69 Beverly Park lots. ",
            price: "19",
            imageSource: "assets/images/products/product1.jpg"
        },
        {
            id: 1,
            title: "TEST #1",
            state: "",
            description: "Gated Stone entry to Villa Firenze which is one of the Great Estates of Los Angeles with Huge Massive Rooms and Acres of Private Grounds! The Property is 9.85 acres mostly flat and includes 67-69 Beverly Park lots. ",
            price: "19",
            imageSource: "assets/images/products/product1.jpg"
        },
        {
            id: 1,
            title: "TEST #1",
            state: "",
            description: "Acesta este un test #1",
            price: "19",
            imageSource: "assets/images/products/product1.jpg"
        },
        {
            id: 1,
            title: "TEST #1",
            state: "",
            description: "Acesta este un test #1",
            price: "19",
            imageSource: "assets/images/products/product1.jpg"
        },
        {
            id: 1,
            title: "TEST #1",
            state: "",
            description: "Acesta este un test #1",
            price: "19",
            imageSource: "assets/images/products/product1.jpg"
        },
        {
            id: 1,
            title: "TEST #1",
            state: "",
            description: "Acesta este un test #1",
            price: "19",
            imageSource: "assets/images/products/product1.jpg"
        },
        {
            id: 1,
            title: "TEST #1",
            state: "",
            description: "Acesta este un test #1",
            price: "19",
            imageSource: "assets/images/products/product1.jpg"
        },
        {
            id: 1,
            title: "TEST #1",
            state: "",
            description: "Acesta este un test #1",
            price: "19",
            imageSource: "assets/images/products/product1.jpg"
        },
        {
            id: 1,
            title: "TEST #1",
            state: "",
            description: "Acesta este un test #1",
            price: "19",
            imageSource: "assets/images/products/product1.jpg"
        },
        {
            id: 1,
            title: "TEST #1",
            state: "",
            description: "Acesta este un test #1",
            price: "19",
            imageSource: "assets/images/products/product1.jpg"
        },
        {
            id: 1,
            title: "TEST #1",
            state: "",
            description: "Acesta este un test #1",
            price: "19",
            imageSource: "assets/images/products/product1.jpg"
        },
        {
            id: 1,
            title: "TEST #1",
            state: "",
            description: "Acesta este un test #1",
            price: "19",
            imageSource: "assets/images/products/product1.jpg"
        },
        {
            id: 1,
            title: "TEST #1",
            state: "",
            description: "Acesta este un test #1",
            price: "19",
            imageSource: "assets/images/products/product1.jpg"
        },
        {
            id: 1,
            title: "TEST #1",
            state: "",
            description: "Acesta este un test #1",
            price: "19",
            imageSource: "assets/images/products/product1.jpg"
        },
        {
            id: 1,
            title: "TEST #1",
            state: "",
            description: "Acesta este un test #1",
            price: "19",
            imageSource: "assets/images/products/product1.jpg"
        },
        {
            id: 1,
            title: "TEST #1",
            state: "",
            description: "Acesta este un test #1",
            price: "19",
            imageSource: "assets/images/products/product1.jpg"
        },
        {
            id: 1,
            title: "TEST #1",
            state: "",
            description: "Acesta este un test #1",
            price: "19",
            imageSource: "assets/images/products/product1.jpg"
        },
        {
            id: 1,
            title: "TEST #1",
            state: "",
            description: "Acesta este un test #1",
            price: "19",
            imageSource: "assets/images/products/product1.jpg"
        }
    ]

    rentProducts: Product[] = [
        {
            id: 0,
            title: "67-69 Beverly Park Court",
            state: "Beverly Hills, California, 90210 United States",
            description: "Gated Stone entry to Villa Firenze which is one of the Great Estates of Los Angeles with Huge Massive Rooms and Acres of Private Grounds! The Property is 9.85 acres mostly flat and includes 67-69 Beverly Park lots. ",
            price: "7,900,000",
            imageSource: "assets/images/products/product2.jpg"
        },
        {
            id: 1,
            title: "cosminn",
            state: "",
            description: "Gated Stone entry to Villa Firenze which is one of the Great Estates of Los Angeles with Huge Massive Rooms and Acres of Private Grounds! The Property is 9.85 acres mostly flat and includes 67-69 Beverly Park lots. ",
            price: "19",
            imageSource: "assets/images/products/product2.jpg"
        },
        {
            id: 1,
            title: "TEST #1",
            state: "",
            description: "Gated Stone entry to Villa Firenze which is one of the Great Estates of Los Angeles with Huge Massive Rooms and Acres of Private Grounds! The Property is 9.85 acres mostly flat and includes 67-69 Beverly Park lots. ",
            price: "19",
            imageSource: "assets/images/products/product2.jpg"
        },
        {
            id: 1,
            title: "TEST #1",
            state: "",
            description: "Gated Stone entry to Villa Firenze which is one of the Great Estates of Los Angeles with Huge Massive Rooms and Acres of Private Grounds! The Property is 9.85 acres mostly flat and includes 67-69 Beverly Park lots. ",
            price: "19",
            imageSource: "assets/images/products/product2.jpg"
        },
        {
            id: 1,
            title: "TEST #1",
            state: "",
            description: "Acesta este un test #1",
            price: "19",
            imageSource: "assets/images/products/product2.jpg"
        }
    ]

    getBuyProducts() {
        return this.buyProducts;
    }

    getRentProducts() {
        return this.rentProducts;
    }

    createBuyProduct(newTitle: string, newDescription: string, newPrice: string, newState: string, newImageSource: string) {
        const product = {
            id: 123,
            description: newDescription,
            title: newTitle,
            price: newPrice,
            state: newState,
            imageSource: newImageSource
        };

        return this.buyProducts.push(product);
    }

    createRentProduct(newTitle: string, newDescription: string, newPrice: string, newState: string, newImageSource: string) {
        const product = {
            id: 123,
            description: newDescription,
            title: newTitle,
            price: newPrice,
            state: newState,
            imageSource: newImageSource
        };

        return this.rentProducts.push(product);
    }

}