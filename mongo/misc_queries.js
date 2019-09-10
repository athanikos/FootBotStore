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


// count matches with stats on 74 minute
db.Matches.aggregate([
{ $match: {"time.minute": 74 }},
{ $match: {"stats.data": { $elemMatch: { $exists: true } }} },

                    {
                                    $project: {_id: 1,
                                    count: {$size: '$stats.data'},
                                    data: '$stats.data' }
                    },
                    { $match: {count: 2 }},
                     { $group: { _id: null, count: { $sum: 1 } } }
