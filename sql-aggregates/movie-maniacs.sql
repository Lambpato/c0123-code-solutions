select "customers"."firstName",
       "customers"."lastName",
       sum("payments"."amount") as "totalSpent"
       from "customers"
       join "payments" using ("customerId")
       group by "customers"."customerId"
       order by "totalSpent" desc;
