/**
 * interface for repeater data
 */
export interface RepeaterDataInterface {
  name: string;
}

/**
 * interface for sorting data
 */
export interface SortingDataInterface extends RepeaterDataInterface {
  price: number;
}
