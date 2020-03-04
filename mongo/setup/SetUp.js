db.createUser(
    {
        user: "<enter user>",
        pwd: "<enterPassword>",
        customData: {},
        roles: [{ "role": "userAdminAnyDatabase", "db": "admin" }, { "role": "readWrite", "db": "book" }],
    }
)


db.grantRolesToUser(
    "<enter user>",
    [
      { role: "readWrite", db: "book" }
    ]
);
