
    db.getCollection("Matches").createIndex({ "id": 1, "time.status": 1, "time.minute": 1 })
    db.getCollection("Stats").createIndex({ "id": 1, "time.status": 1, "time.minute": 1 })
