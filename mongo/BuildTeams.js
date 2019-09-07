db.Teams.remove({})
db.FullTimeMatches.aggregate(
[
{
$group:
{
_id: { hometeamname : "$hometeamname", league_name:"$league_name" }
}

     },
     {
         $project:  { teamName:"$_id.hometeamname", league_name: "$_id.league_name", _id:0 }
     },
     { $out:"Teams"  }
    
])
