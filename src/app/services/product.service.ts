import { Injectable } from "@angular/core";
import { Product } from "../product/product.component";
import { ShoppingCart } from "../shopping-cart/shopping-cart.component";

@Injectable({ providedIn: "root" })

export class ProductService {
    buyProducts: Product[] = [
        {
            id: 0,
            title: "Berkshire Cottage",
            state: "Lenox, Massachusetts, 01240 United States",
            description: "Built in 1903, this very private Berkshire Cottage epitomizes\
             the area- past and present. Built in the Arts and Crafts style, surrounded by hundreds of acres of land, with magnificent southern views,\
              one can enjoy nature, sports, and a relaxed lifestyle. Unspoiled, original detailing in place. Settle right in and be transported back to an earlier age.\
               Paneled public rooms overlook the unspoiled views. \
               Press info button for more.",
            price: "13,500,000",
            imageSource: "assets/images/products/buy1.jpg",
            availability: "Buying",
            readmore:""
        },
        {
            id: 1,
            title: "Unique Finca With Sea Views ",
            state: "Palma De Mallorca, Balearic Islands, 07170 Spain",
            description: "This property, absolutely unique for its location and impressive\
             environment that surrounds it, is located just 5 minutes drive from the beautiful village of Valldemossa, with its boutiques, cafes and restaurants;\
              and only 25 minutes from Palma. Deia is also a few minutes drive.Enjoying stunning views of the sea and the landscape from the entire estate, the main house \
              etc. Press info button for more.",
            price: "14,234,694",
            imageSource: "assets/images/products/buy2.jpg",
            availability: "Buying",
            readmore:""
        },
        {
            id: 2,
            title: "Naples Waterfront Residence",
            state: "Naples, Florida, 34103 United States",
            description: "This incredible new waterfront residence will be ready for you to enjoy this summer! Stunning bay and sunset views await,\
             with construction being led by renowned Borelli Construction of Naples and interior designs by prestigious Calusa Bay Design, no detail\
              has been overlooked throughout this home's beautiful living areas and its 5 en-suite bedrooms .\
              Press info button for more.",
            price: "14,350,000",
            imageSource: "assets/images/products/buy3.jpg",
            availability: "Buying",
            readmore:""
        },
        {
            id: 3,
            title: "Lakefront Mansion",
            state: "Coral Gables, Florida, 33156 United States",
            description: "Enchanting lakefront Mansion located in sought after Hammock Lakes, surrounded by over an acre of pristine and manicured landscaping\
             while enjoying breathtaking waterfront views. Welcomed by an awe-inspiring foyer, soaring ceilings, and elegant formal living room. This impressive\
              estate features a spectacular entertainment floorplan with ground floor offering a spacious family room.\
              Press info button for more.",
            price: "10,995,000",
            imageSource: "assets/images/products/buy4.jpg",
            availability: "Buying",
            readmore:""
        },
        {
            id: 4,
            title: "Waterfront Residence ",
            state: "Drive Boca Raton, Florida, 33431 United States",
            description: "This meticulously maintained two story Transitional contemporary waterfront residence features ocean access and 24/7 \
            security and private roads. Offered completely furnished and accessorized, it is move-in ready. The entry foyer opens to a two-story \
            great room which overlooks the open pool, covered patio, expansive water views with the natural 'Sanctuary Island' wildlife refuge off in the distance.\
            Press info button for more.",
            price: "14,000,000",
            imageSource: "assets/images/products/buy5.jpg",
            availability: "Buying",
            readmore:""
        },
        {
            id: 5,
            title: "Spring Mountain Modern",
            state: "St. Helena, California, 94574 United States",
            description: "A modern statement in luxury and design. Architect Regan Bice sited this masterpiece to take advantage of 360° views which\
             include Spring Mountain's vineyards, the Napa Valley floor, Mt. Diablo, and Mt. St. Helena. The main residence enjoys 3 en suite bedrooms,\
              a media room with hidden bunk beds, 4 full baths, and 2 half baths. The great room, elevates indoor-outdoor \
              living to the extraordinary.\
              Press info button for more.",
            price: "14,500,000",
            imageSource: "assets/images/products/buy6.jpg",
            availability: "Buying",
            readmore:""
        },
        {
            id: 6,
            title: "1901 Exceptional Villa",
            state: "Provence-Alpes-Cote D'Azur, 06160 France",
            description: "Built in 1901, this exceptional villa in Cap D Antibes is for sale. The property has idyllic sea views.\
             The expansive living space in the villa encompasses 410 sq. m. Four terraces provide the perfect setting both for hosting guests\
              and enjoying peaceful moments by yourself. After crossing a beautiful entrance hall, you arrive in a dining room. The villa has five ensuite bedrooms.\
              Press info button for more.",
            price: "13,775,510",
            imageSource: "assets/images/products/buy7.jpg",
            availability: "Buying",
            readmore:""
        }
    ]

    rentProducts: Product[] = [
        {
            id: 0,
            title: "La Moraleja",
            state: "Alcobendas, Madrid, Spain",
            description: "The entrance hall of this wonderful family house has a glass lift to each floor.\
            From this entrance, there is the large living room with high ceilings that overlooks the magnificent grounds and communicates with a cozy family room.\
            This welcoming house offers an abundance of entertaining and living space such as a large home cinema, a cozy library, billiard with bar\
              yoga or pilates, etc.\
              Press info button for more.",
            price: "17,244,898",
            imageSource: "assets/images/products/rent1.jpg",
            availability: "Renting",
            readmore:""
        },
        {
            id: 1,
            title: "Belle Epoque Mansion",
            state: "Cap D'Ail, Provence-Alpes-Cote D'Azur, 06320 France",
            description: "This remarkable mansion, located in the wonderful town of Cap D Ail and built in 1900, is now for sale. Could this be your new home?\
             The property enjoys stunning scenery with sea views. You and your loved ones could make great use of the mansion's expansive 540 sq. m of living space.\
              Another beautiful feature: a 2500 sq. m garden and four balconies. \
              Press info button for more. ",
            price: "18,265,306",
            imageSource: "assets/images/products/rent2.jpg",
            availability: "Renting",
            readmore:"This remarkable mansion, located in the wonderful town of Cap D Ail and built in 1900, is now for sale. Could this be your new home?\
             The property enjoys stunning scenery with sea views. You and your loved ones could make great use of the mansion's expansive 540 sq. m of living space.\
              Another beautiful feature: a 2500 sq. m garden and four balconies. With eight bedrooms, this mansion provides plenty of room for everyone to enjoy their own space.\
               The mansion comes with fantastic amenities, for example a steam room, a one bedroomed guest or personnel apartment and two more glorious guest suites each finished\
                to the very highest quality. Its beautiful natural light make this property hard to turn down."
        },
        {
            id: 2,
            title: "Farmhouse",
            state: "Pitigliano, Grosseto, Italy",
            description: "Beautiful and renovated farmhouse in the heart of the Tuscany region.\
            The property is compesd by several units: the Manor house, composed by a large living room with a kitchen, four bedrooms, two bathrooms and a patio.\
             The farmhouse with six bedrooms, en suite, each with its theme and three of them can comfortably accommodate a family.The restaurant is equipped to organize and host events.\
             Press info button for more.",
            price: "2,551,020",
            imageSource: "assets/images/products/rent3.jpg",
            availability: "Renting",
            readmore:""
        },
        {
            id: 3,
            title: "Residential-Business Property",
            state: "Bruchkobel, Hessen, 63486 Germany",
            description: "This exclusive property is a wonderfully successful symbiosis of many amenities: luxuriously comfortable living, generously dimensioned \
            business and office space, rambling grounds with a high level of leisure and recreational value as well as considerable potential for expansion.\
            This is a perfect place that is ideal for combining living and working, thus making it perfect for a family and a business.\
            Press info button for more. ",
            price: "10,714,286",
            imageSource: "assets/images/products/rent4.jpg",
            availability: "Renting",
            readmore:""
        },
        {
            id: 4,
            title: "Exclusive Mediterranean Finca",
            state: "Palma De Mallorca, Balearic Islands, 000000 Spain",
            description: "Exclusive Mediterranean style finca located only a few minutes away from Puerto de Andratx close to a variety of shops as well as the \
            restaurants within the area. The golf courses of Camp de Mar and Palma are only 25 minutes away.The property comprises six bedrooms and six bathrooms, \
            fully equipped kitchen boasting of top-quality fixtures and fittings which opens onto the dining/living room.\
            Press info button for more. ",
            price: "16,224,490",
            imageSource: "assets/images/products/rent5.jpg",
            availability: "Renting",
            readmore:""
        },
        {
            id: 5,
            title: "Manor Villa",
            state: "Santa Ursula, Tenerife Canary Islands, 38390 Spain",
            description: "We lack the right adjectives to describe this extraordinary property that was developed right on the cliffs of the Tenerife municipality\
             of Santa Úrsula, with fascinating views over the sea, the Orotava Valley, Puerto de la Cruz and the Teide crowning the whole landscape.\
             Only 25 minutes from the island's capital and about 15 minutes from the international airport in the north of the island.\
             Press info button for more.",
            price: "6,122,449",
            imageSource: "assets/images/products/rent6.jpg",
            availability: "Renting",
            readmore:""
        },
        {
            id: 6,
            title: "Holiday Cabin",
            state: "Utterson, Ontario, P0B 1M0 Canada",
            description: " This four bedroom, three bathroom home is situated on a private three acre lot, well treed,\
             with a feature pond and perennial gardens. Large kitchen and dinning, is a ready for entertaining family and guests. \
             After dinner, mosey on down to a very large rec room area, with enough space for all of your favourite table top games. \
             Play and enjoy the fire from the hand crafted stone fireplace. \
             Press info button for more.",
            price: "1,158,915",
            imageSource: "assets/images/products/rent7.jpg",
            availability: "Renting",
            readmore:""
        }
    ]

    getBuyProducts() {
        return this.buyProducts;
    }

    getRentProducts() {
        return this.rentProducts;
    }

    createBuyProduct(newTitle: string, newDescription: string, newPrice: string, newState: string, newImageSource: string, avl: string,more:string) {
        const product = {
            id: 123,
            description: newDescription,
            title: newTitle,
            price: newPrice,
            state: newState,
            imageSource: newImageSource,
            availability: avl,
            readmore:more
        };

        return this.buyProducts.push(product);
    }

    createRentProduct(newTitle: string, newDescription: string, newPrice: string, newState: string, newImageSource: string, avl: string,more:string) {
        const product = {
            id: 123,
            description: newDescription,
            title: newTitle,
            price: newPrice,
            state: newState,
            imageSource: newImageSource,
            availability: avl,
            readmore:more
        };

        return this.rentProducts.push(product);
    }

    getProductDetails(item: ShoppingCart) {
        
    }

}