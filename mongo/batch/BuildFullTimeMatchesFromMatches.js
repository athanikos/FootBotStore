
  // A batch job to run on a daily basis that aggregates the Matches a collection to one flat record per match .
  // A FullTimeMatches record keeps statistics per game. 
  db.FullTimeMatches.remove({})
  db.Matches.aggregate
    (
        [
             {$match: {"time.status":"FT"}}
            ,{"$addFields": {"time.starting_at.date": {"$toDate": "$time.starting_at.date"} }}
            ,{"$addFields": {"time.starting_at.date_time": {"$toDate": "$time.starting_at.date_time"} }}
            ,{$unwind:  "$events.data"}
            ,{"$addFields": {"localTeam.data.id" : {"$toString": "$localTeam.data.id"}}}
            ,{"$addFields": {"awayTeam.data.id" : {"$toString": "$visitorTeam.data.id"}}}
            ,
            {
              $lookup: 
              {
                     from: "Leagues",
                     localField: "league_id",
                     foreignField: "id",
                     as: "league_info"
              }    
            }
            , 
            { $unwind: "$league_info"}
            ,{
               $project: 
               {
                           
                           matchId:"$id", 
                           startingatwithtime:"$time.starting_at.date_time",
                           startingat:"$time.starting_at.date",
                           hometeamname:"$localTeam.data.name",
                           awayteamname:"$visitorTeam.data.name",
                           league_id:"$league_id",
                           league_name:"$league_info.name",
                           eventtype:"$events.data.type", 
                           eventMinute:"$events.data.minute",
                           eventTeamId:"$events.data.team_id",
                           localTeamId:"$localTeam.data.id", 
                           visitorTeamId:"$awayTeam.data.id",
                           pitch:"$pitch",
                           leg:"$leg",
                           localteamPosition:"$standings.localteam_position",
                           visitorTeamPosition:"$standings.visitorteam_position",
                           finalHomeGoals:"$scores.localteam_score",
                           finalAwayGoals:"$scores.visitorteam_score",
                           homeTeamFormation:"$formations.localteam_formation",
                           awayTeamFormation:"$formations.visitorteam_formation",
                         
                           homeGoalsUpTo15: { $cond: [ {$and: [{$lt:['$events.data.minute',16]},{$eq:["$events.data.type","goal"]},{$eq:["$events.data.team_id":"$localTeam.data.id"]}]},1,0]},      
                           homeGoalsUpTo30: { $cond: [ {$and: [{$lt:['$events.data.minute',31]},{$eq:["$events.data.type","goal"]},{$eq:["$events.data.team_id":"$localTeam.data.id"]}]},1,0]},      
                           homeGoalsUpTo45: { $cond: [ {$and: [{$lt:['$events.data.minute',46]},{$eq:["$events.data.type","goal"]},{$eq:["$events.data.team_id":"$localTeam.data.id"]}]},1,0]},      
                           homeGoalsUpTo60: { $cond: [ {$and: [{$lt:['$events.data.minute',61]},{$eq:["$events.data.type","goal"]},{$eq:["$events.data.team_id":"$localTeam.data.id"]}]},1,0]},      
                           homeGoalsUpTo75: { $cond: [ {$and: [{$lt:['$events.data.minute',76]},{$eq:["$events.data.type","goal"]},{$eq:["$events.data.team_id":"$localTeam.data.id"]}]},1,0]},      
                        
                           homeyellowUpTo15: { $cond: [ {$and: [{$lt:['$events.data.minute',16]},{$eq:["$events.data.type","yellowcard"]},{$eq:["$events.data.team_id":"$localTeam.data.id"]}]},1,0]},      
                           homeyellowUpTo30: { $cond: [ {$and: [{$lt:['$events.data.minute',31]},{$eq:["$events.data.type","yellowcard"]},{$eq:["$events.data.team_id":"$localTeam.data.id"]}]},1,0]},      
                           homeyellowUpTo45: { $cond: [ {$and: [{$lt:['$events.data.minute',46]},{$eq:["$events.data.type","yellowcard"]},{$eq:["$events.data.team_id":"$localTeam.data.id"]}]},1,0]},      
                           homeyellowUpTo60: { $cond: [ {$and: [{$lt:['$events.data.minute',61]},{$eq:["$events.data.type","yellowcard"]},{$eq:["$events.data.team_id":"$localTeam.data.id"]}]},1,0]},      
                           homeyellowUpTo75: { $cond: [ {$and: [{$lt:['$events.data.minute',76]},{$eq:["$events.data.type","yellowcard"]},{$eq:["$events.data.team_id":"$localTeam.data.id"]}]},1,0]},    
                           homeredUpTo75: { $cond: [ {$and: [{$lt:['$events.data.minute',76]},{$eq:["$events.data.type","redcard"]},{$eq:["$events.data.team_id":"$localTeam.data.id"]}]},1,0]},    
                        
                           awayGoalsUpTo15: { $cond: [ {$and: [{$lt:['$events.data.minute',16]},{$eq:["$events.data.type","goal"]},{$eq:["$events.data.team_id":"$awayTeam.data.id"]}]},1,0]},      
                           awayGoalsUpTo30: { $cond: [ {$and: [{$lt:['$events.data.minute',31]},{$eq:["$events.data.type","goal"]},{$eq:["$events.data.team_id":"$awayTeam.data.id"]}]},1,0]},      
                           awayGoalsUpTo45: { $cond: [ {$and: [{$lt:['$events.data.minute',46]},{$eq:["$events.data.type","goal"]},{$eq:["$events.data.team_id":"$awayTeam.data.id"]}]},1,0]},      
                           awayGoalsUpTo60: { $cond: [ {$and: [{$lt:['$events.data.minute',61]},{$eq:["$events.data.type","goal"]},{$eq:["$events.data.team_id":"$awayTeam.data.id"]}]},1,0]},      
                           awayGoalsUpTo75: { $cond: [ {$and: [{$lt:['$events.data.minute',76]},{$eq:["$events.data.type","goal"]},{$eq:["$events.data.team_id":"$awayTeam.data.id"]}]},1,0]},
                           awayyellowUpTo15: { $cond: [ {$and: [{$lt:['$events.data.minute',16]},{$eq:["$events.data.type","yellowcard"]},{$eq:["$events.data.team_id":"$awayTeam.data.id"]}]},1,0]},      
                           awayyellowUpTo30: { $cond: [ {$and: [{$lt:['$events.data.minute',31]},{$eq:["$events.data.type","yellowcard"]},{$eq:["$events.data.team_id":"$awayTeam.data.id"]}]},1,0]},      
                           awayyellowUpTo45: { $cond: [ {$and: [{$lt:['$events.data.minute',46]},{$eq:["$events.data.type","yellowcard"]},{$eq:["$events.data.team_id":"$awayTeam.data.id"]}]},1,0]},      
                           awayyellowUpTo60: { $cond: [ {$and: [{$lt:['$events.data.minute',61]},{$eq:["$events.data.type","yellowcard"]},{$eq:["$events.data.team_id":"$awayTeam.data.id"]}]},1,0]},      
                           awayyellowUpTo75: { $cond: [ {$and: [{$lt:['$events.data.minute',76]},{$eq:["$events.data.type","yellowcard"]},{$eq:["$events.data.team_id":"$awayTeam.data.id"]}]},1,0]},   
                           awayredUpTo75: { $cond: [ {$and: [{$lt:['$events.data.minute',76]},{$eq:["$events.data.type","redcard"]},{$eq:["$events.data.team_id":"$awayTeam.data.id"]}]},1,0]},    
                      
                           homeGoalsLast15: { $cond: [ {$and: [{$gt:['$events.data.minute',75]},{$eq:["$events.data.type","goal"]},{$eq:["$events.data.team_id":"$localTeam.data.id"]}]},1,0]},      
                           awayGoalsLast15: { $cond: [ {$and: [{$gt:['$events.data.minute',75]},{$eq:["$events.data.type","goal"]},{$eq:["$events.data.team_id":"$awayTeam.data.id"]}]},1,0]},
                           goalScoredLast15:{ $cond: [ {$and: [{$gt:['$events.data.minute',75]},{$eq:["$events.data.type","goal"]}]},1,0]},
                        
                           minuteOfLastGoal:{$max:{ $cond: [ {$and: [{$lt:['$events.data.minute',76]},{$eq:["$events.data.type","goal"]}]},'$events.data.minute',0]}},
                           minuteOfLastRed:{$max:{ $cond: [ {$and: [{$lt:['$events.data.minute',76]},{$eq:["$events.data.type","redcard"]}]},'$events.data.minute',0]}}
                   }
                
            }
           
           ,
           
            {
                $group : 
                {
                        
                        _id: "$matchId",
                        startingat:{$max:"$startingat"},
                        startingatwithtime:{$max:"$startingatwithtime"},
                        hometeamname:{$max:"$hometeamname"},
                        awayteamname:{$max:"$awayteamname"},
                        league_name:{$max:"$league_name"},
                        localTeamId:{$max: "$localTeamId"},
                        visitorTeamId:{$max:"$visitorTeamId"},
                        localteamPosition:{$max: "$localteamPosition"},
                        visitorTeamPosition:{$max:"$visitorTeamPosition"},
                        homeTeamFormation:{$max:"$homeTeamFormation"},
                        awayTeamFormation:{$max:"$awayTeamFormation"},
                        leg:{$max:"$leg"},
                        homeGoalsUpTo15: {$sum:"$homeGoalsUpTo15"},    
                        homeGoalsUpTo30: {$sum:"$homeGoalsUpTo30"},
                        homeGoalsUpTo45: {$sum:"$homeGoalsUpTo45"},
                        homeGoalsUpTo60: {$sum:"$homeGoalsUpTo60"},
                        homeGoalsUpTo75: {$sum:"$homeGoalsUpTo75"},
                        awayGoalsUpTo15: {$sum:"$awayGoalsUpTo15"},    
                        awayGoalsUpTo30: {$sum:"$awayGoalsUpTo30"},
                        awayGoalsUpTo45: {$sum:"$awayGoalsUpTo45"},
                        awayGoalsUpTo60: {$sum:"$awayGoalsUpTo60"},
                        awayGoalsUpTo75: {$sum:"$awayGoalsUpTo75"},
                        homeyellowUpTo15: {$sum:"$homeyellowUpTo15"},        
                        homeyellowUpTo30: {$sum:"$homeyellowUpTo30"},      
                        homeyellowUpTo45: {$sum:"$homeyellowUpTo45"},       
                        homeyellowUpTo60: {$sum:"$homeyellowUpTo60"},    
                        homeyellowUpTo75: {$sum:"$homeyellowUpTo75"},    
                        awayyellowUpTo15: {$sum:"$awayyellowUpTo15"},        
                        awayyellowUpTo30: {$sum:"$awayyellowUpTo30"},      
                        awayyellowUpTo45: {$sum:"$awayyellowUpTo45"},       
                        awayyellowUpTo60: {$sum:"$awayyellowUpTo60"},    
                        awayyellowUpTo75: {$sum:"$awayyellowUpTo75"},
                        homeredUpTo75 : {$sum:"$homeredUpTo75"},
                        awayredUpTo75 : {$sum:"$awayredUpTo75"},
                        finalHomeGoals:{$max:"$finalHomeGoals"},
                        finalAwayGoals:{$max:"$finalAwayGoals"},
                        
                        homeGoalsLast15:{$sum:"$homeGoalsLast15"},    
                        awayGoalsLast15:{$sum:"$awayGoalsLast15"},
                        goalScoredLast15:{$max:"$goalScoredLast15"},
                     
                        resultAt15:{$max:        { $cond: [ {$gt:["$homeGoalsUpTo15","$awayGoalsUpTo15"]},"WIN",  {$cond: [ {$lt:["$homeGoalsUpTo15","$awayGoalsUpTo15"]},"LOOSE",  "DRAW"   }   }},
                        resultAt30:{$max:        { $cond: [ {$gt:["$homeGoalsUpTo30","$awayGoalsUpTo30"]},"WIN",  {$cond: [ {$lt:["$homeGoalsUpTo30","$awayGoalsUpTo30"]},"LOOSE",  "DRAW"   }   }},
                        resultAt45:{$max:        { $cond: [ {$gt:["$homeGoalsUpTo45","$awayGoalsUpTo45"]},"WIN",  {$cond: [ {$lt:["$homeGoalsUpTo45","$awayGoalsUpTo45"]},"LOOSE",  "DRAW"   }   }},
                        resultAt60:{$max:        { $cond: [ {$gt:["$homeGoalsUpTo60","$awayGoalsUpTo60"]},"WIN",  {$cond: [ {$lt:["$homeGoalsUpTo60","$awayGoalsUpTo60"]},"LOOSE",  "DRAW"   }   }},
                        resultAt75:{$max:        { $cond: [ {$gt:["$homeGoalsUpTo75","$awayGoalsUpTo75"]},"WIN",  {$cond: [ {$lt:["$homeGoalsUpTo75","$awayGoalsUpTo75"]},"LOOSE",  "DRAW"   }   }},
                        finalResult:{$max:       { $cond: [ {$gt:["$finalHomeGoals","$finalAwayGoals"]},"WIN",  {$cond: [ {$lt:["$finalHomeGoals","$finalAwayGoals"]},"LOOSE",  "DRAW"   }   }},
                        minuteOfLastGoal:{ $max:"$minuteOfLastGoal" },
                        minuteOfLastRed:{ $max:"$minuteOfLastRed" },
                     
                        differenceAt75:{ $sum : {$subtract: [   "$homeGoalsUpTo75", "$awayGoalsUpTo75" ]   }},
                        differenceAt60:{ $sum : {$subtract: [   "$homeGoalsUpTo60", "$awayGoalsUpTo60" ]   }},
                        differenceAt45:{ $sum : {$subtract: [   "$homeGoalsUpTo45", "$awayGoalsUpTo45" ]   }},
                        differenceAt30:{ $sum : {$subtract: [   "$homeGoalsUpTo30", "$awayGoalsUpTo15" ]   }},
                        
                        reddifferenceAt75:{ $sum : {$subtract: [   "$homeredUpTo75", "$awayredUpTo75" ]   }},
                        reddifferenceAt60:{ $sum : {$subtract: [   "$homeredUpTo60", "$awayredUpTo60" ]   }},
                        reddifferenceAt45:{ $sum : {$subtract: [   "$homeredUpTo45", "$awayredUpTo45" ]   }},
                    
                }
            }
            
            ,{
               $project: 
               {
                           
                            _id: "$_id",
                        startingat:"$startingat",
                        startingatwithtime:"$startingatwithtime",
                        hometeamname:"$hometeamname",
                        awayteamname:"$awayteamname",
                        league_name:"$league_name",
                        localTeamId:"$localTeamId",
                        visitorTeamId:"$visitorTeamId",
                        localteamPosition:"$localteamPosition",
                        visitorTeamPosition:"$visitorTeamPosition",
                        homeTeamFormation:"$homeTeamFormation",
                        awayTeamFormation:"$awayTeamFormation",
                        leg:"$leg",
                        homeGoalsUpTo15:"$homeGoalsUpTo15",    
                        homeGoalsUpTo30:"$homeGoalsUpTo30",
                        homeGoalsUpTo45:"$homeGoalsUpTo45",
                        homeGoalsUpTo60:"$homeGoalsUpTo60",
                        homeGoalsUpTo75:"$homeGoalsUpTo75",
                        awayGoalsUpTo15: "$awayGoalsUpTo15",    
                        awayGoalsUpTo30:"$awayGoalsUpTo30",
                        awayGoalsUpTo45:"$awayGoalsUpTo45",
                        awayGoalsUpTo60:"$awayGoalsUpTo60",
                        awayGoalsUpTo75:"$awayGoalsUpTo75",
                        homeyellowUpTo15:"$homeyellowUpTo15",        
                        homeyellowUpTo30:"$homeyellowUpTo30",      
                        homeyellowUpTo45:"$homeyellowUpTo45",       
                        homeyellowUpTo60:"$homeyellowUpTo60",    
                        homeyellowUpTo75:"$homeyellowUpTo75",    
                        awayyellowUpTo15:"$awayyellowUpTo15",        
                        awayyellowUpTo30:"$awayyellowUpTo30",      
                        awayyellowUpTo45:"$awayyellowUpTo45",       
                        awayyellowUpTo60:"$awayyellowUpTo60",    
                        awayyellowUpTo75:"$awayyellowUpTo75",
                        homeredUpTo75:"$homeredUpTo75",
                        awayredUpTo75:"$awayredUpTo75",
                        finalHomeGoals:"$finalHomeGoals",
                        finalAwayGoals:"$finalAwayGoals",
                        homeGoalsLast15:"$finalAwayGoals"  ,
                        awayGoalsLast15:"$awayGoalsLast15",
                        goalScoredLast15:"$goalScoredLast15",
                        oneGoalsScoredLast45:{  
                             
                             
                                     $cond: [          {$gt: [{$subtract:[{$add:["$finalHomeGoals", "$finalAwayGoals" ] },{$add:["$homeGoalsUpTo45", "$awayGoalsUpTo45"]}]},0]},1,0]   
                                             
                             
                        },
                        twoGoalsScoredLast45:{  
                             
                             
                                     $cond: [          {$gt: [{$subtract:[{$add:["$finalHomeGoals", "$finalAwayGoals" ] },{$add:["$homeGoalsUpTo45", "$awayGoalsUpTo45"]}]},1]},1,0]   
                                             
                             
                        },
                        threeGoalsScoredLast45:{  
                             
                             
                                     $cond: [          {$gt: [{$subtract:[{$add:["$finalHomeGoals", "$finalAwayGoals" ] },{$add:["$homeGoalsUpTo45", "$awayGoalsUpTo45"]}]},2]},1,0]   
                                             
                             
                        },
                        
                        
                     
                        resultAt15:"$resultAt15",
                        resultAt30:"$resultAt30",
                        resultAt45:"$resultAt45",
                        resultAt60:"$resultAt45",
                        resultAt75:"$resultAt75",
                        finalResult:"$finalResult",
                        minuteOfLastGoalAt75:"$minuteOfLastGoal" ,
                        minuteOfLastRedAt75:"$minuteOfLastRed" ,
                     
                     
                     
                        differenceAt75:"$differenceAt75" ,
                        differenceAt60:"$differenceAt60" ,
                        differenceAt45:"$differenceAt45" ,
                        differenceAt30:"$differenceAt30" ,
                        
                        reddifferenceAt75:"$reddifferenceAt75",
                        reddifferenceAt60:"$reddifferenceAt60",
                        reddifferenceAt45:"$reddifferenceAt45",
                        
                        
                        resultChangedAt45:        { $cond: [ {$ne:["$resultAt30","$resultAt45"]} ,1,  0] }  ,
                        resultChangedAt75:        { $cond: [ {$ne:["$resultAt75","$resultAt60"]} ,1,  0] }  ,
                        resultChangedAt60:        { $cond: [ {$ne:["$resultAt45","$resultAt60"]} ,1,  0] }  ,
                        homeGoals45To75 :{ $subtract: [   "$homeGoalsUpTo75", "$homeGoalsUpTo45" ]   },
                        awayGoals45To75 :{ $subtract: [   "$awayGoalsUpTo75", "$awayGoalsUpTo45" ]   },
                        
                        
                        homeYellows45To75 :{ $subtract: [   "$homeyellowUpTo75", "$homeyellowUpTo45" ]   },
                        awayYellows45To75 :{ $subtract: [   "$awayyellowUpTo75", "$awayyellowUpTo45" ]   },
                        
                                
                        homeYellows59To75 :{ $subtract: [   "$homeyellowUpTo75", "$homeyellowUpTo60" ]   },
                        awayYellows59To75 :{ $subtract: [   "$awayyellowUpTo75", "$awayyellowUpTo60" ]   },
                        
                        
                        totalYellowsAt45 :{ $add: [   "$homeyellowUpTo45", "$awayyellowUpTo45" ]   },
                        totalYellowsAt60 :{ $add: [   "$homeyellowUpTo60", "$awayyellowUpTo60" ]   },
                        totalYellowsAt75 :{ $add: [   "$homeyellowUpTo75", "$awayyellowUpTo75" ]   },
                        
                        month : {$month: "$startingat" } ,

                    
                   }
                
            }
           
           ,
           
            {
                $out:"FullTimeMatches" 
            }
        ]
    ,     {allowDiskUse:true,cursor:{}}
