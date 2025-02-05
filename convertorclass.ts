import { CountryList } from "./listofcountry";

export class GeneralClass {

    getPersianNameByCode({isoCode}:any): string | undefined {
       const country = CountryList.find((scountry:any) => scountry.iso_3166_1 ==isoCode);
       
       return country ? country['persian_name'] : isoCode;
     }
     getPersianNameByLang({isoCode}:any): string | undefined {
        const country:any = _TvPediaClass.CountryList.find((scountry:any) => scountry.iso_639_1 ==isoCode);
        
        return country ? country['iso_639_1_persian'] : isoCode;
      }
}
}
