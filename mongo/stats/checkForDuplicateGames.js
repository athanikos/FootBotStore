db.matches.count() //331922

db.matches.find({'time.status':'FT'}).count()

db.matches.aggregate( [
    {$match: {'time.status' : 'FT' }},
   { $group: { _id: { id: "$id", status: "$time.status" },
               count: { $sum: 1 } } },
   { $match: { count: { $gt: 1 } } },
   { $project: { _id: 0, 
                 id: "$_id.id", 
                 status: "$_id.status", 
                 count: 1}}
] )


db.matches.find({$and:[{'id':11914352}, {'time.status':'FT'}] })
