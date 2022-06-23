export default interface CountryList {
  negara_id: number;
  negara: string;
}

export interface dataPostCountryListSearch {
  q: string;
  countryId: number;
}
