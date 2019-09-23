    
    db.getCollection("Matches").createIndex({ "id": 1, "time.status": 1, "time.minute": 1 })
    db.getCollection("Stat").createIndex({ "id": 1, "time.status": 1, "time.minute": 1 })

    
