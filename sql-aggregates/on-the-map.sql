select
    "countries"."name" as "country",
    count("cities".*) as "totalCities"
    from "countries"
    join "cities" using ("countryId")
    group by "countries"."countryId";
