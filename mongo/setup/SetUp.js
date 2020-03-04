db.createUser(
    {
        user: "foot_clone",
        pwd: "<enterPassword>",
        customData: {},
        roles: [{ "role": "userAdminAnyDatabase", "db": "admin" }, { "role": "readWrite", "db": "book" }],
    }
)


db.grantRolesToUser(
    "foot",
    [
      { role: "readWrite", db: "book" }
    ]
);
