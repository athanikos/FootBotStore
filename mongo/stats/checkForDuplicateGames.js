db.matches.count() //331922

db.matches.find({'time.status':'FT'}).count()

db.matches.aggregate( [
    {$match: {'time.status' : 'FT' }},
   { $group: { _id: { id: "$id", status: "$time.status" },
               count: { $sum: 1 } } },
   { $match: { count: { $eq: 1 } } },

] ).count()


db.matches.find({$and:[{'id':11914352}, {'time.status':'FT'}] })


db.flatmatches.count() //331922
db.flatmatches.find({'time_status':'FT'}).count()

db.flatmatches.aggregate( [
    {$match: {'time_status' : 'FT' }},
   { $group: { _id: { id: "$id", status: "$time_status" },
               count: { $sum: 1 } } },
   { $match: { count: { $eq: 1 } } },

] ).count()

