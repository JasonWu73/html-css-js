namespace Product {

  export enum Merchandise {
    HAIR_CLAY = 'hairClay',
    UNIQLO_JEANS = 'uniqloJeans',
    J_CRW_HENLEY_SHIRT = 'jCrewHenleyShirt'
  }

  export interface Commodity {
    name: string,
    price: number
  }
}
