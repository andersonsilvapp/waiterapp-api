interface ICreateOrderDTO {
  table: string;
  products: {
    product: string;
    quantity: number;
  }[]
}

export { ICreateOrderDTO };
