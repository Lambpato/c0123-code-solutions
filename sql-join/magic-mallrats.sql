select "customers"."firstName",
       "customers"."lastName"
       from "customers"
       join "rentals" using ("customerId")
       join "inventory" using ("inventoryId")
       join "films" using ("filmId")
       where "films"."title" = 'Magic Mallrats';
