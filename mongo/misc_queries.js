 //removes average stats 
 db.FullTimeMatches.update(   {}, { $unset: { AverageAwayGoalsUpTo75:"", AverageHomeGoalsUpTo75: "" } } , {multi: true})

//get dsitinct teams 
db.FullTimeMatches.aggregate(
    [
         {$match : { "league_name":"Eredivisie"}},  
          {
            $group: {
              _id: "$hometeamname"
            }
          }
   ]
)
