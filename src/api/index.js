import { apiUrl } from "../util";

export async function getQueryData({ name, query }) {
  let data  =  await fetch(apiUrl, {
      params: {
        query
      },
    })
    .then((res) => res.json())
    switch (name) {
        case "Query-1":
          return data.filter((item) =>
            item?.productName?.toLowerCase()?.startsWith("ch")
          );
        case "Query-2":
          return data.filter((item) => item?.productID % 2 === 0);

        case "Query-3":
          return data.filter((item) => item?.unitPrice > 30);

        case "Query-4":
          return data.filter((item) => item?.unitsInStocks < 20);
        default:
          return data;
      }
}
