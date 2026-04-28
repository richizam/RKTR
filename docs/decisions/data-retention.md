# Decision — data retention (30 years)

The MES spec requires **30-year retention** of traceability records (rail-wheel safety part).

**Impact on the visualization:** the prototype itself does not store history — it renders live
state and a per-wheel route. But the data model it consumes must assume each wheel's full route
(stations, timestamps, OK/NotOK, heat/stamp codes) is persisted MES-side for 30 years.

**Implication:** the wheel `route[]` shown in the drawer is the *visible slice* of a record
that the MES retains long-term. Serial + heat code + stamp month/year are the retention keys.
