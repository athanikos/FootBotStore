db.Stats74.remove({})
  
db.Matches.aggregate([
{ $match: {"time.minute": 74 }},
    {
        $project:
        {
     
          home:  { $arrayElemAt: [ "$stats.data", 0 ] },
          away :    { $arrayElemAt: [ "$stats.data", 1 ] },
        }
    },
     {
          $project: 
                {
                         matchId : "$home.fixture_id",
                         HomeTeam_id:"$home.team_id",
                         HomeShots:"$home.shots.total",
                         HomeShotsOnGoal:"$home.shots.ongoal",
                         HomeShotsOffGoal:"$home.shots.offgoal",
                         HomeShotsBlocked:"$home.shots.blocked",
                         HomeShotsInsideBox:"$home.shots.insidebox",
                         HomeShotsOutsideBox:"$home.shots.outsidebox",
                         HomePassesTotal:"$home.passes.total",
                         HomePassesAccurate:"$home.passes.accurate",
                         HomePassesPercentage:"$home.passes.percentage",
                         HomeAttacks:"$home.attacks.attacks",
                         HomeDangerousAttacks:"$home.attacks.dangerous_attacks",
                         HomeFouls:"$home.fouls",
                         HomeCorners:"$home.corners",
                         HomeOffsides:"$home.offsides",
                         HomePossesionTime:"$home.possessiontime",
                         HomeSaves:"$home.saves",
                         HomeGoalAttempts:"$home.goal_attempts",
                         HomeBallSafe:"$home.ball_safe",
                         AwayTeam_id:"$away.team_id",
                         AwayShots:"$away.shots.total",
                         AwayShotsOnGoal:"$away.shots.ongoal",
                         AwayShotsOffGoal:"$away.shots.offgoal",
                         AwayShotsBlocked:"$away.shots.blocked",
                         AwayShotsInsideBox:"$away.shots.insidebox",
                         AwayShotsOutsideBox:"$away.shots.outsidebox",
                         AwayPassesTotal:"$away.passes.total",
                         AwayPassesAccurate:"$away.passes.accurate",
                         AwayPassesPercentage:"$away.passes.percentage",
                         AwayAttacks:"$away.attacks.attacks",
                         AwayDangerousAttacks:"$away.attacks.dangerous_attacks",
                         AwayFouls:"$away.fouls",
                         AwayCorners:"$away.corners",
                         AwayOffsides:"$away.offsides",
                         AwayPossesionTime:"$away.possessiontime",
                         AwaySaves:"$away.saves",
                         AwayGoalAttempts:"$away.goal_attempts",
                         AwayBallSafe:"$away.ball_safe",
                }
    },
       
       
           
            {
                $out:"Stats74" 
            }
            
 
])
db.Stats74.createIndex({matchId:1})
