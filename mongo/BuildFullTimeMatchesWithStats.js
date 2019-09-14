db.FullTimeMatchesWithStats.remove

db.Stats74.aggregate([
    
     
    {
             $lookup:
             {
                           from: "FullTimeMatches",
                           localField: "matchId",
                           foreignField: "_id",
                           as: "stats"
             }
                    
       
    }, 
      { $unwind: "$stats"}
      
    ,{
          $project: 
                {
                         matchId : "$matchid",
                         HomeTeam_id:"$HomeTeam_id",
                         HomeShots:"$HomeShots",
                         HomeShotsOnGoal:"$HomeShotsOnGoal",
                         HomeShotsOffGoal:"$HomeShotsOffGoal",
                         HomeShotsBlocked:"$HomeShotsBlocked",
                         HomeShotsInsideBox:"$HomeShotsInsideBox",
                         HomeShotsOutsideBox:"$HomeShotsOutsideBox",
                         HomePassesTotal:"$HomePassesTotal",
                         HomePassesAccurate:"$HomePassesAccurate",
                         HomePassesPercentage:"$HomePassesPercentage",
                         HomeAttacks:"$HomeAttacks",
                         HomeDangerousAttacks:"$HomeDangerousAttacks",
                         HomeFouls:"$HomeFouls",
                         HomeCorners:"$HomeCorners",
                         HomeOffsides:"$HomeOffsides",
                         HomePossesionTime:"$HomePossesionTime",
                         HomeSaves:"$HomeSaves",
                         HomeGoalAttempts:"$HomeGoalAttempts",
                         HomeBallSafe:"$HomeBallSafe",
                         AwayTeam_id:"$AwayTeam_id",
                         AwayShots:"$AwayShots",
                         AwayShotsOnGoal:"$AwayShotsOnGoal",
                         AwayShotsOffGoal:"$AwayShotsOffGoal",
                         AwayShotsBlocked:"$AwayShotsBlocked",
                         AwayShotsInsideBox:"$AwayShotsInsideBox",
                         AwayShotsOutsideBox:"$AwayShotsOutsideBox",
                         AwayPassesTotal:"$AwayPassesTotal",
                         AwayPassesAccurate:"$AwayPassesAccurate",
                         AwayPassesPercentage:"$AwayPassesPercentage",
                         AwayAttacks:"$AwayAttacks",
                         AwayDangerousAttacks:"$AwayDangerousAttacks",
                         AwayFouls:"$AwayFouls",
                         AwayCorners:"$AwayCorners",
                         AwayOffsides:"$AwayOffsides",
                         AwayPossesionTime:"$AwayPossesionTime",
                         AwaySaves:"$AwaySaves",
                         AwayGoalAttempts:"$AwayGoalAttempts",
                         AwayBallSafe:"$AwayBallSafe",
                   
                   
                   
                   
                            startingat:"$stats.startingat",
                            startingatwithtime:"$stats.startingatwithtime",
                            hometeamname:"$stats.hometeamname",
                            awayteamname:"$stats.awayteamname",
                            league_name:"$stats.league_name",
                            localTeamId:"$stats.localTeamId",
                            visitorTeamId:"$stats.visitorTeamId",
                            localteamPosition:"$stats.localteamPosition",
                            visitorTeamPosition:"$stats.visitorTeamPosition",
                            homeTeamFormation:"$stats.homeTeamFormation",
                            awayTeamFormation:"$stats.awayTeamFormation",
                            leg:"$stats.leg",
                            homeGoalsUpTo15:"$stats.homeGoalsUpTo15",    
                            homeGoalsUpTo30:"$stats.homeGoalsUpTo30",
                            homeGoalsUpTo45:"$stats.homeGoalsUpTo45",
                            homeGoalsUpTo60:"$stats.homeGoalsUpTo60",
                            homeGoalsUpTo75:"$stats.homeGoalsUpTo75",
                            awayGoalsUpTo15: "$stats.awayGoalsUpTo15",    
                            awayGoalsUpTo30:"$stats.awayGoalsUpTo30",
                            awayGoalsUpTo45:"$stats.awayGoalsUpTo45",
                            awayGoalsUpTo60:"$stats.awayGoalsUpTo60",
                            awayGoalsUpTo75:"$stats.awayGoalsUpTo75",
                            homeyellowUpTo15:"$stats.homeyellowUpTo15",        
                            homeyellowUpTo30:"$stats.homeyellowUpTo30",      
                            homeyellowUpTo45:"$stats.homeyellowUpTo45",       
                            homeyellowUpTo60:"$stats.homeyellowUpTo60",    
                            homeyellowUpTo75:"$stats.homeyellowUpTo75",    
                            awayyellowUpTo15:"$stats.awayyellowUpTo15",        
                            awayyellowUpTo30:"$stats.awayyellowUpTo30",      
                            awayyellowUpTo45:"$stats.awayyellowUpTo45",       
                            awayyellowUpTo60:"$stats.awayyellowUpTo60",    
                            awayyellowUpTo75:"$stats.awayyellowUpTo75",
                            homeredUpTo75:"$stats.homeredUpTo75",
                            awayredUpTo75:"$stats.awayredUpTo75",
                            finalHomeGoals:"$stats.finalHomeGoals",
                            finalAwayGoals:"$stats.finalAwayGoals",
                            homeGoalsLast15:"$stats.finalAwayGoals"  ,
                            awayGoalsLast15:"$stats.awayGoalsLast15",
                            goalScoredLast15:"$stats.goalScoredLast15",
                            twoGoalsScoredLast45:"$stats.twoGoalsScoredLast45",
                            threeGoalsScoredLast45:"$stats.threeGoalsScoredLast45",
                            resultAt15:"$stats.resultAt15",
                            resultAt30:"$stats.resultAt30",
                            resultAt45:"$stats.resultAt45",
                            resultAt60:"$stats.resultAt45",
                            resultAt75:"$stats.resultAt75",
                            finalResult:"$stats.finalResult",
                            minuteOfLastGoal:"$stats.minuteOfLastGoal" ,
                            minuteOfLastRed:"$stats.minuteOfLastRed" ,
                            differenceAt75:"$stats.differenceAt75" ,
                            differenceAt60:"$stats.differenceAt60" ,
                            differenceAt45:"$stats.differenceAt45" ,
                            differenceAt30:"$stats.differenceAt30" ,
                            reddifferenceAt75:"$stats.reddifferenceAt75",
                            reddifferenceAt60:"$stats.reddifferenceAt60",
                            reddifferenceAt45:"$stats.reddifferenceAt45",
                            resultChangedAt45: "$stats.resultChangedAt45",
                            resultChangedAt75: "$stats.resultChangedAt75" ,
                            resultChangedAt60:"$stats.resultChangedAt60" ,
                            homeGoals45To75 :"$stats.homeGoals45To75",
                            awayGoals45To75 :"$stats.awayGoals45To75",
                            totalYellowsAt45 :"$stats.totalYellowsAt45",
                            totalYellowsAt60 :"$stats.totalYellowsAt60",
                            totalYellowsAt75 :"$stats.totalYellowsAt75",
                            
                                  AwayTeamRunningPointAverage :"$stats.AwayTeamRunningPointAverage",
                                  HomeTeamRunningPointAverage :"$stats.HomeTeamRunningPointAverage",
                                  HomeTeamWhileHomeAverageAttack :"$stats.HomeTeamWhileHomeAverageAttack",
                                  HomeTeamWhileAwayAverageDefence :"$stats.HomeTeamWhileAwayAverageDefence",
                                  AwayTeamWhileAwayAverageAttack  :"$stats.AwayTeamWhileAwayAverageAttack",
                                  AwayTeamWhileAwayAverageDefence   :"$stats.AwayTeamWhileAwayAverageDefence",
    
    
                }
    }
        ,
           
            {
                $out:"FullTimeMatchesWithStats" 
            }
 
])
