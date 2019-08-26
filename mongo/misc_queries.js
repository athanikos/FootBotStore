 
 db.FullTimeMatches.update(   {}, { $unset: { AverageAwayGoalsUpTo75:"", AverageHomeGoalsUpTo75: "" } } , {multi: true})
