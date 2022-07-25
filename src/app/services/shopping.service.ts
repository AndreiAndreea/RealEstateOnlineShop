import { Injectable } from "@angular/core";
import { ShoppingCart } from "../shopping-cart/shopping-cart.component";

@Injectable({providedIn: "root"})

export class ShoppingService {
    items: ShoppingCart[] = [
        // {
        //     id:0,
        //     title:"67-69 Beverly Park Court",
        //     state:"Beverly Hills, California, 90210 United States",
        //     description:
        //     "Gated Stone entry to Villa Firenze which is one of the Great Estates of Los Angeles with Huge Massive Rooms and Acres of Private Grounds!\
        //      The Property is 9.85 acres mostly flat and includes 67, 68 and 69 Beverly Park lots. Large Motor Court with Central Fountain leads to Grand Stone Entry to Center Hall \
        //      and Massive Public rooms with 20' ceilings and stone floors.</div>",
        //     price: "120,000,000",
        //     imageSource: "assets/images/products/product1.jpg"
        // },
        // {
        //     id:1,
        //     title:"Southampton",
        //     state:"New York, 11968 United States",
        //     description: "Exquisite grace and grandeur hallmark this magnificent masterpiece - beautifully preserving its authentic original details - offering 18,000+ square feet\
        //      on three floors, including 8 principal bedrooms, 8 full and three half baths, and separate staff quarters. \
        //      Basking in 10 +/- acres of park-like privacy on exclusive OxPasture Road, Linden sits in the heart of the Estate Section.",
        //     price: "69,950,000",
        //     imageSource: "assets/images/products/product2.jpg"
        // },
        // {
        //     id:2,
        //     title:"9262 Raven Way",
        //     state:"Park City, Utah, 84098 United States",
        //     description: "Situated at the end of a picturesque street on 10.24 acres of sprawling meadows and aspen groves sits this breathtaking mountain estate.\
        //      Located in Park City's most coveted gated development, this is a 8,603 sqft. modern yet classic mountain retreat designed by renowned architect Michael Upwall.\
        //       This iconic private residence has multiple indoor-outdoor living spaces providing natural light from expansive walls of glass.",
        //     price: "7,900,000",
        //     imageSource: "assets/images/products/product3.jpg"
        // },
        // {
        //     id:3,
        //     title:"165 Forest Road",
        //     state:"Vail, Colorado, 81657 United States",
        //     description: "Mountain is the most exquisite, new modern contemporary estate that encompasses the finest in materials, technology and views.\
        //      75-foot long - suspended glass bottom pool with exceptional Gore Range views, rejuvenating spa with waterfall, freestanding elevator with glass ceiling,4-car garage,\
        //       4 covered parking spaces and car rinse are some of the special features of this amazing estate. Designed with glass view corridors and sliding walls \
        //       that seamlessly flow the living area into the exterior decks, patios and gardens. ",
        //     price: "39,990,000",
        //     imageSource: "assets/images/products/product4.jpg"
        // }
    ]
    getShoppingCart(){
        return this.items;
    }

    getSize(){
        return this.items.length;
    }

    setSize() {
        this.items.length--;
    }

    addNewItemToShoppingCart(newItem: ShoppingCart){
        this.items.push(newItem);
        console.log(this.items.length);
    }

    printItems() : void {
        for(let index = 0; index < this.items.length; index++)
            console.log(this.items[index].title + "\n");
    }
}