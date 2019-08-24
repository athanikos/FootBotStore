db.leagues.find({}).forEach(
    function (doc) 
    {
        var count = db.leagues.find({id:doc.id}).count();
        if (count>1)
        {
             print ("count " + count +  " " + doc.id ) 
             db.leagues.find({id:doc.id}).limit(count-1).forEach(
                 
                 function(doc2)
                 {
                     db.leagues.remove({_id:doc2._id});
                 }
             )
        }
    }
);
