export default interface FoundationList {
  id: number;
  level: number;
  parent: number;
  name: string;
}

export interface dataPostFoundationListSearch {
  q: string;
  foundationId: number;
}
