import { CountryList } from "./listofcountry";

export class GeneralClass {

    getPersianNameByCode({isoCode}:any): string | undefined {
       const country = CountryList.find((scountry:any) => scountry.iso_3166_1 ==isoCode);
       
       return country ? country['persian_name'] : isoCode;
     }
}