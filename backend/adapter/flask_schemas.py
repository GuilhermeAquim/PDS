LOGIN_SCHEMA = {
    "type" : "object",
    "properties" : {
        "login" : {"type": "string"},
        "password" : {"type": "string"},
    },
    "required": ["login", "password"]
}

CREATE_USER_SCHEMA = {
    "type" : "object",
    "properties" : {
        "token" : {"type": "string"},
        "new_user" : {
            "type": "object",
            "properties": {
                "login" : {"type": "string"},
                "password" : {"type": "string"},
                "admin" : {"type" : "boolean"}
            }
            },
    },
    "required": ["token", "new_user"]
}