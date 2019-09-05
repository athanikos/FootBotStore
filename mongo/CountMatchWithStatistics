db.Matches.aggregate([
{ $match: {"league_id": 72 }},
{ $match: {"time.status": "FT" }},
{ $match: {"stats.data": { $elemMatch: { $exists: true } }} },

                    {
                                    $project: {_id: 1,
                                    count: {$size: '$stats.data'},
                                    data: '$stats.data' }
                    },
                    { $match: {count: 2 }},
                     { $group: { _id: null, count: { $sum: 1 } } }
])
