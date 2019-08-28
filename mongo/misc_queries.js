//get dsitinct team legaues  
db.FullTimeMatches.aggregate(
    [
         {
            $group: {
              _id: "$_id",
              name: {$max : "$hometeamname"  },
              league_name { $max: "$league_name" }
            }
          }
   ]
)


db.FullTimeMatches.find( {$and: [{"hometeamname":"NEC", "league_name":"Eredivisie"} ] })
   .projection({})
   .sort({starting_at:-1})
   .limit(100)
