export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
  
    // constructor(id, name, description = '', price = 0, imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR608TWmLRWFNYPlY5xgKkgZPYe7mwv0GDMDtAS9nRdlVo4aytG') {
    constructor(id : any, name : any, description = '', price = 0, imageUrl = 'https://www.merkadomor.ph/wp-content/uploads/2022/01/145833-800x600-trial_products.jpg') {  
      this.id = id
      this.name = name
      this.description = description
      this.price = price
      this.imageUrl = imageUrl
    }
  }