import { mocks } from "./mock";
import camelize from "camelize";

export const shopDetailsRequest = (location = "37.7749295,-122.4194155") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};

export const shopDetailsEdit = ({ shops = [] }) => {
  const mappedResults = shops.map((shop) => {
    shop.photos = [
<<<<<<< HEAD
      "https://lh3.googleusercontent.com/p/AF1QipO5Np3DMuKW_VCZx7k_9I6JoPNLRlxq7sg3nN56=w1080-h608-p-no-v0",
=======
      "https://lh5.googleusercontent.com/p/AF1QipPsn5Uv08zNvcYmeQ8vftVI-n-cROmmqHXC_62f",
>>>>>>> b34d43d4dde2edbff096dc47305a735532ff1f7c
    ];

    return {
      ...shop,
      isOpenNow: shop.opening_hours && shop.opening_hours.open_now,
      isClosedTemporarily: shop.business_status === "CLOSED_TEMPORARILY",
    };
  });

  return camelize(mappedResults);
};
