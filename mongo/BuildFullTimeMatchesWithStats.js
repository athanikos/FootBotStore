
db.Stats74.aggregate([
    
     
    {
             $lookup:
             {
                           from: "FullTimeMatches",
                           localField: "matchId",
                           foreignField: "_id",
                           as: "joinedInfo"
             }
                    
       
    }, 
      { $unwind: "$joinedInfo"}
      
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
                   
                        startingat:"$joinedInfo.startingat",
                        startingatwithtime:"$joinedInfo.startingatwithtime",
                        hometeamname:"$joinedInfo.hometeamname",
                        awayteamname:"$joinedInfo.awayteamname",
                        league_name:"$joinedInfo.league_name",
                        localTeamId:"$joinedInfo.localTeamId",
                        visitorTeamId:"$joinedInfo.visitorTeamId",
                        localteamPosition:"$joinedInfo.localteamPosition",
                        visitorTeamPosition:"$joinedInfo.visitorTeamPosition",
                        homeTeamFormation:"$joinedInfo.homeTeamFormation",
                        awayTeamFormation:"$joinedInfo.awayTeamFormation",
                        leg:"$joinedInfo.leg",
                        homeGoalsUpTo15:"$joinedInfo.homeGoalsUpTo15",    
                        homeGoalsUpTo30:"$joinedInfo.homeGoalsUpTo30",
                        homeGoalsUpTo45:"$joinedInfo.homeGoalsUpTo45",
                        homeGoalsUpTo60:"$joinedInfo.homeGoalsUpTo60",
                        homeGoalsUpTo75:"$joinedInfo.homeGoalsUpTo75",
                        awayGoalsUpTo15: "$joinedInfo.awayGoalsUpTo15",    
                        awayGoalsUpTo30:"$joinedInfo.awayGoalsUpTo30",
                        awayGoalsUpTo45:"$joinedInfo.awayGoalsUpTo45",
                        awayGoalsUpTo60:"$joinedInfo.awayGoalsUpTo60",
                        awayGoalsUpTo75:"$joinedInfo.awayGoalsUpTo75",
                        homeyellowUpTo15:"$joinedInfo.homeyellowUpTo15",        
                        homeyellowUpTo30:"$joinedInfo.homeyellowUpTo30",      
                        homeyellowUpTo45:"$joinedInfo.homeyellowUpTo45",       
                        homeyellowUpTo60:"$joinedInfo.homeyellowUpTo60",    
                        homeyellowUpTo75:"$joinedInfo.homeyellowUpTo75",    
                        awayyellowUpTo15:"$joinedInfo.awayyellowUpTo15",        
                        awayyellowUpTo30:"$joinedInfo.awayyellowUpTo30",      
                        awayyellowUpTo45:"$joinedInfo.awayyellowUpTo45",       
                        awayyellowUpTo60:"$joinedInfo.awayyellowUpTo60",    
                        awayyellowUpTo75:"$joinedInfo.awayyellowUpTo75",
                        homeredUpTo75:"$joinedInfo.homeredUpTo75",
                        awayredUpTo75:"$joinedInfo.awayredUpTo75",
                        finalHomeGoals:"$joinedInfo.finalHomeGoals",
                        finalAwayGoals:"$joinedInfo.finalAwayGoals",
                        homeGoalsLast15:"$joinedInfo.finalAwayGoals"  ,
                        awayGoalsLast15:"$joinedInfo.awayGoalsLast15",
                        goalScoredLast15:"$joinedInfo.goalScoredLast15",
                        twoGoalsScoredLast45:"$joinedInfo.twoGoalsScoredLast45",
                        threeGoalsScoredLast45:"$joinedInfo.threeGoalsScoredLast45",
                        resultAt15:"$joinedInfo.resultAt15",
                        resultAt30:"$joinedInfo.resultAt30",
                        resultAt45:"$joinedInfo.resultAt45",
                        resultAt60:"$joinedInfo.resultAt45",
                        resultAt75:"$joinedInfo.resultAt75",
                        finalResult:"$joinedInfo.finalResult",
                        minuteOfLastGoal:"$joinedInfo.minuteOfLastGoal" ,
                        minuteOfLastRed:"$joinedInfo.minuteOfLastRed" ,
                        differenceAt75:"$joinedInfo.differenceAt75" ,
                        differenceAt60:"$joinedInfo.differenceAt60" ,
                        differenceAt45:"$joinedInfo.differenceAt45" ,
                        differenceAt30:"$joinedInfo.differenceAt30" ,
                        reddifferenceAt75:"$joinedInfo.reddifferenceAt75",
                        reddifferenceAt60:"$joinedInfo.reddifferenceAt60",
                        reddifferenceAt45:"$joinedInfo.reddifferenceAt45",
                        resultChangedAt45: "$joinedInfo.resultChangedAt45",
                        resultChangedAt75: "$joinedInfo.resultChangedAt75" ,
                        resultChangedAt60:"$joinedInfo.resultChangedAt60" ,
                        homeGoals45To75 :"$joinedInfo.homeGoals45To75",
                        awayGoals45To75 :"$joinedInfo.awayGoals45To75",
                        totalYellowsAt45 :"$joinedInfo.totalYellowsAt45",
                        totalYellowsAt60 :"$joinedInfo.totalYellowsAt60",
                        totalYellowsAt75 :"$joinedInfo.totalYellowsAt75",
    
                }
    }
        ,
           
            {
                $out:"FullTimeMatchesWithStats" 
            }
 
])
