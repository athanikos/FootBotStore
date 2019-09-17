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
    
    
    // find all amatches with stats on time.minute 
    db.Matches.find( {$and: [{"time.minute":74}] } )
   .projection({})
   .sort({"time.starting_at.date":-1})


db.FullTimeMatchesWithStats.aggregate
(
[
 
    { $project: { 
        
        	"goalScoredLast15":1,
        	"twoGoalsScoredLast45":1,
        	"finalHomeGoals":1,
        	"finalAwayGoals":1, 
        	"homeGoalsUpTo45" : 1,
        	"homeGoalsUpTo75" : 1,       
        	"awayGoalsUpTo45" : 1,
        	"awayGoalsUpTo75" : 1,
    } }
]    
)


db.FullTimeMatchesWithStats.remove({ league_name: 'Champions League'}, {justOne: false})



