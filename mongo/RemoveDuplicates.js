
db.Matches.find({}).forEach(
    function (doc) 
    {
        var count = db.matches.find({"time.status":"FT",id:doc.id}).count();
        if (count>1)
        {
             print ("count " + count +  " " + doc.id ) 
             db.Matches.find({"time.status":"FT",id:doc.id}).limit(count-1).forEach(
                 
                 function(doc2)
                 {
                     db.matches.remove({_id:doc2._id});
                 }
             )
        }
    }
);
