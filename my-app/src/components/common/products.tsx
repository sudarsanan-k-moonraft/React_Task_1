import { img } from "../../resources/images.js";
import { content } from "../../resources/string.js";

//Variable to generate unique id for product id

let c = 100;

//Products Object which stores all the product's details

const products: {
  productId: number;
  productName: String;
  brand: String;
  productImage: String;
  productPrice: number;
  featured: boolean;
  ratings: number;
}[] = [
  {
    productId: c++,
    productName: content.appleIwatch,
    brand: content.appleBrand,
    productImage: img.iwatch,
    productPrice: content.fiftyK,
    featured: true,
    ratings: content.five,
  },
  {
    productId: c++,
    productName: content.casioWatch,
    brand: content.casioBrand,
    productImage: img.casioWatch,
    productPrice: content.sixK,
    featured: true,
    ratings: content.four,
  },
  {
    productId: c++,
    productName: content.fasttractWatch,
    brand: content.fastrackBrand,
    productImage: img.fastrackWatch,
    productPrice: content.fiveK,
    featured: false,
    ratings: content.three,
  },
  {
    productId: c++,
    productName: content.iphone,
    brand: content.appleBrand,
    productImage: img.iphone,
    productPrice: content.eightyK,
    featured: true,
    ratings: content.five,
  },
  {
    productId: c++,
    productName: content.oneplusPhone,
    brand: content.oneplusBrand,
    productImage: img.onePlus,
    productPrice: content.thirtyK,
    featured: false,
    ratings: content.four,
  },
  {
    productId: c++,
    productName: content.vivoPhone,
    brand: content.vivoBrand,
    productImage: img.vivoPhone,
    productPrice: content.thirtyK,
    featured: false,
    ratings: content.three,
  },
  {
    productId: c++,
    productName: content.macbook,
    brand: content.appleBrand,
    productImage: img.macbook,
    productPrice: content.oneL,
    featured: true,
    ratings: content.five,
  },
  {
    productId: c++,
    productName: content.dellLap,
    brand: content.dellBrand,
    productImage: img.dellLap,
    productPrice: content.seventyK,
    featured: false,
    ratings: content.four,
  },
  {
    productId: c++,
    productName: content.lenovoLap,
    brand: content.lenovoBrand,
    productImage: img.lenovo,
    productPrice: content.sixtyK,
    featured: false,
    ratings: content.three,
  },
  {
    productId: c++,
    productName: content.airpods,
    brand: content.appleBrand,
    productImage: img.appleAirpods,
    productPrice: content.thirtyK,
    featured: true,
    ratings: content.five,
  },
  {
    productId: c++,
    productName: content.boatAirpods,
    brand: content.boatBrand,
    productImage: img.boatAirpods,
    productPrice: content.twoK,
    featured: false,
    ratings: content.three,
  },
  {
    productId: c++,
    productName: content.jblAirpods,
    brand: content.jblBrand,
    productImage: img.jbl,
    productPrice: content.oneK,
    featured: false,
    ratings: content.three,
  },
  {
    productId: c++,
    productName: content.sonyTv,
    brand: content.sonyBrand,
    productImage: img.sonyTv,
    productPrice: content.oneL,
    featured: true,
    ratings: content.five,
  },
  {
    productId: c++,
    productName: content.samsungTv,
    brand: content.samsungBrand,
    productImage: img.samsungTv,
    productPrice: content.eightyK,
    featured: false,
    ratings: content.four,
  },
  {
    productId: c++,
    productName: content.miTv,
    brand: content.miBrand,
    productImage: img.miTv,
    productPrice: content.thirtyK,
    featured: false,
    ratings: content.three,
  },
];
export default products;
