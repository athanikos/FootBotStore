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
    ,
    {
             $lookup:
             {
                           from: "Stats59",
                           localField: "matchId",
                           foreignField: "matchId",
                           as: "stats59"
             }
        
    }
    
    , 
      { $unwind: "$stats59"}
    ,
    
    {
             $lookup:
             {
                           from: "Stats44",
                           localField: "matchId",
                           foreignField: "matchId",
                           as: "stats44"
             }
        
    }
    , 
      { $unwind: "$stats44"}
    
    , 
    
     
    
    {
             $lookup:
             {
                           from: "Stats29",
                           localField: "matchId",
                           foreignField: "matchId",
                           as: "stats29"
             }
        
    }
    , 
      { $unwind: "$stats29"}
    
    , 
    
    
      {
          $project: 
                {
                         matchId : "$matchid",
                         HomeTeam_id:"$HomeTeam_id",
                         AwayTeam_id:"$AwayTeam_id",
                         
                         HomeShots74:"$HomeShots",
                         HomeShotsOnGoal74:"$HomeShotsOnGoal",
                         HomeShotsOffGoal74:"$HomeShotsOffGoal",
                         HomeShotsBlocked74:"$HomeShotsBlocked",
                         HomeShotsInsideBox74:"$HomeShotsInsideBox",
                         HomeShotsOutsideBox74:"$HomeShotsOutsideBox",
                         HomePassesTotal74:"$HomePassesTotal",
                         HomePassesAccurate74:"$HomePassesAccurate",
                         HomePassesPercentage74:"$HomePassesPercentage",
                         HomeAttacks74:"$HomeAttacks",
                         HomeDangerousAttacks74:"$HomeDangerousAttacks",
                         HomeFouls74:"$HomeFouls",
                         HomeCorners74:"$HomeCorners",
                         HomeOffsides74:"$HomeOffsides",
                         HomePossesionTime74:"$HomePossesionTime",
                         HomeSaves74:"$HomeSaves",
                         HomeGoalAttempts74:"$HomeGoalAttempts",
                         HomeBallSafe74:"$HomeBallSafe",
                         AwayShots74:"$AwayShots",
                         AwayShotsOnGoal74:"$AwayShotsOnGoal",
                         AwayShotsOffGoal74:"$AwayShotsOffGoal",
                         AwayShotsBlocked74:"$AwayShotsBlocked",
                         AwayShotsInsideBox74:"$AwayShotsInsideBox",
                         AwayShotsOutsideBox74:"$AwayShotsOutsideBox",
                         AwayPassesTotal74:"$AwayPassesTotal",
                         AwayPassesAccurate74:"$AwayPassesAccurate",
                         AwayPassesPercentage74:"$AwayPassesPercentage",
                         AwayAttacks74:"$AwayAttacks",
                         AwayDangerousAttacks74:"$AwayDangerousAttacks",
                         AwayFouls74:"$AwayFouls",
                         AwayCorners74:"$AwayCorners",
                         AwayOffsides74:"$AwayOffsides",
                         AwayPossesionTime74:"$AwayPossesionTime",
                         AwaySaves74:"$AwaySaves",
                         AwayGoalAttempts74:"$AwayGoalAttempts",
                         AwayBallSafe74:"$AwayBallSafe",
                   
                   
                         HomeShots59:"$stats59.HomeShots",
                         HomeShotsOnGoal59:"$stats59.HomeShotsOnGoal",
                         HomeShotsOffGoal59:"$stats59.HomeShotsOffGoal",
                         HomeShotsBlocked59:"$stats59.HomeShotsBlocked",
                         HomeShotsInsideBox59:"$stats59.HomeShotsInsideBox",
                         HomeShotsOutsideBox59:"$stats59.HomeShotsOutsideBox",
                         HomePassesTotal59:"$stats59.HomePassesTotal",
                         HomePassesAccurate59:"$stats59.HomePassesAccurate",
                         HomePassesPercentage59:"$stats59.HomePassesPercentage",
                         HomeAttacks59:"$stats59.HomeAttacks",
                         HomeDangerousAttacks59:"$stats59.HomeDangerousAttacks",
                         HomeFouls59:"$stats59.HomeFouls",
                         HomeCorners59:"$stats59.HomeCorners",
                         HomeOffsides59:"$stats59.HomeOffsides",
                         HomePossesionTime59:"$stats59.HomePossesionTime",
                         HomeSaves59:"$stats59.HomeSaves",
                         HomeGoalAttempts59:"$stats59.HomeGoalAttempts",
                         HomeBallSafe59:"$stats59.HomeBallSafe",
                         AwayShots59:"$stats59.AwayShots",
                         AwayShotsOnGoal59:"$stats59.AwayShotsOnGoal",
                         AwayShotsOffGoal59:"$stats59.AwayShotsOffGoal",
                         AwayShotsBlocked59:"$stats59.AwayShotsBlocked",
                         AwayShotsInsideBox59:"$stats59.AwayShotsInsideBox",
                         AwayShotsOutsideBox59:"$stats59.AwayShotsOutsideBox",
                         AwayPassesTotal59:"$stats59.AwayPassesTotal",
                         AwayPassesAccurate59:"$stats59.AwayPassesAccurate",
                         AwayPassesPercentage59:"$stats59.AwayPassesPercentage",
                         AwayAttacks59:"$stats59.AwayAttacks",
                         AwayDangerousAttacks59:"$stats59.AwayDangerousAttacks",
                         AwayFouls59:"$stats59.AwayFouls",
                         AwayCorners59:"$stats59.AwayCorners",
                         AwayOffsides59:"$stats59.AwayOffsides",
                         AwayPossesionTime59:"$stats59.AwayPossesionTime",
                         AwaySaves59:"$stats59.AwaySaves",
                         AwayGoalAttempts59:"$stats59.AwayGoalAttempts",
                         AwayBallSafe59:"$stats59.AwayBallSafe",
                         
                                
                         HomeShots44:"$stats44.HomeShots",
                         HomeShotsOnGoal44:"$stats44.HomeShotsOnGoal",
                         HomeShotsOffGoal44:"$stats44.HomeShotsOffGoal",
                         HomeShotsBlocked44:"$stats44.HomeShotsBlocked",
                         HomeShotsInsideBox44:"$stats44.HomeShotsInsideBox",
                         HomeShotsOutsideBox44:"$stats44.HomeShotsOutsideBox",
                         HomePassesTotal44:"$stats44.HomePassesTotal",
                         HomePassesAccurate44:"$stats44.HomePassesAccurate",
                         HomePassesPercentage44:"$stats44.HomePassesPercentage",
                         HomeAttacks44:"$stats44.HomeAttacks",
                         HomeDangerousAttacks44:"$stats44.HomeDangerousAttacks",
                         HomeFouls44:"$stats44.HomeFouls",
                         HomeCorners44:"$stats44.HomeCorners",
                         HomeOffsides44:"$stats44.HomeOffsides",
                         HomePossesionTime44:"$stats44.HomePossesionTime",
                         HomeSaves44:"$stats44.HomeSaves",
                         HomeGoalAttempts44:"$stats44.HomeGoalAttempts",
                         HomeBallSafe44:"$stats44.HomeBallSafe",
                         AwayShots44:"$stats44.AwayShots",
                         AwayShotsOnGoal44:"$stats44.AwayShotsOnGoal",
                         AwayShotsOffGoal44:"$stats44.AwayShotsOffGoal",
                         AwayShotsBlocked44:"$stats44.AwayShotsBlocked",
                         AwayShotsInsideBox44:"$stats44.AwayShotsInsideBox",
                         AwayShotsOutsideBox44:"$stats44.AwayShotsOutsideBox",
                         AwayPassesTotal44:"$stats44.AwayPassesTotal",
                         AwayPassesAccurate44:"$stats44.AwayPassesAccurate",
                         AwayPassesPercentage44:"$stats44.AwayPassesPercentage",
                         AwayAttacks44:"$stats44.AwayAttacks",
                         AwayDangerousAttacks44:"$stats44.AwayDangerousAttacks",
                         AwayFouls44:"$stats44.AwayFouls",
                         AwayCorners44:"$stats44.AwayCorners",
                         AwayOffsides44:"$stats44.AwayOffsides",
                         AwayPossesionTime44:"$stats44.AwayPossesionTime",
                         AwaySaves44:"$stats44.AwaySaves",
                         AwayGoalAttempts44:"$stats44.AwayGoalAttempts",
                         AwayBallSafe44:"$stats44.AwayBallSafe",
                         
                         
                         HomeShots29:"$stats29.HomeShots",
                         HomeShotsOnGoal29:"$stats29.HomeShotsOnGoal",
                         HomeShotsOffGoal29:"$stats29.HomeShotsOffGoal",
                         HomeShotsBlocked29:"$stats29.HomeShotsBlocked",
                         HomeShotsInsideBox29:"$stats29.HomeShotsInsideBox",
                         HomeShotsOutsideBox29:"$stats29.HomeShotsOutsideBox",
                         HomePassesTotal29:"$stats29.HomePassesTotal",
                         HomePassesAccurate29:"$stats29.HomePassesAccurate",
                         HomePassesPercentage29:"$stats29.HomePassesPercentage",
                         HomeAttacks29:"$stats29.HomeAttacks",
                         HomeDangerousAttacks29:"$stats29.HomeDangerousAttacks",
                         HomeFouls29:"$stats29.HomeFouls",
                         HomeCorners29:"$stats29.HomeCorners",
                         HomeOffsides29:"$stats29.HomeOffsides",
                         HomePossesionTime29:"$stats29.HomePossesionTime",
                         HomeSaves29:"$stats29.HomeSaves",
                         HomeGoalAttempts29:"$stats29.HomeGoalAttempts",
                         HomeBallSafe29:"$stats29.HomeBallSafe",
                         AwayShots29:"$stats29.AwayShots",
                         AwayShotsOnGoal29:"$stats29.AwayShotsOnGoal",
                         AwayShotsOffGoal29:"$stats29.AwayShotsOffGoal",
                         AwayShotsBlocked29:"$stats29.AwayShotsBlocked",
                         AwayShotsInsideBox29:"$stats29.AwayShotsInsideBox",
                         AwayShotsOutsideBox29:"$stats29.AwayShotsOutsideBox",
                         AwayPassesTotal29:"$stats29.AwayPassesTotal",
                         AwayPassesAccurate29:"$stats29.AwayPassesAccurate",
                         AwayPassesPercentage29:"$stats29.AwayPassesPercentage",
                         AwayAttacks29:"$stats29.AwayAttacks",
                         AwayDangerousAttacks29:"$stats29.AwayDangerousAttacks",
                         AwayFouls29:"$stats29.AwayFouls",
                         AwayCorners29:"$stats29.AwayCorners",
                         AwayOffsides29:"$stats29.AwayOffsides",
                         AwayPossesionTime29:"$stats29.AwayPossesionTime",
                         AwaySaves29:"$stats29.AwaySaves",
                         AwayGoalAttempts29:"$stats29.AwayGoalAttempts",
                         AwayBallSafe29:"$stats29.AwayBallSafe",
                         
                   
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
