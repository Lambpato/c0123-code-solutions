select "payments"."amount" as "payment",
       "customers"."lastName" as "lastName",
       "customers"."firstName" as "firstName"
  from "payments"
  join "customers" using ("customerId")
order by "amount" desc
limit 10;
