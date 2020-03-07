db.updateUser(
    "superuser",
    {
        customData: {},

        roles: [{ "role": "root", "db": "admin" }, {"role":"readWrite",db:"testbook"}],
    }
)
