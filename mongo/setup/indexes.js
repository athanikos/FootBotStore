
    db.getCollection("Matches").createIndex({ "id": 1, "time.status": 1, "time.minute": 1 })
    db.getCollection("Stats").createIndex({ "id": 1, "time.status": 1, "time.minute": 1 })

    db.getCollection("flatmatches").createIndex({ "league_id": 1, "localteam_id": 1 })
db.getCollection("flatmatches").createIndex({ "league_id": 1, "visitorteam_id": 1 })

