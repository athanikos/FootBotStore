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

