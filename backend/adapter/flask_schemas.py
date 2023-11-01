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

CREATE_SALE_SCHEMA = {
    "type" : "object",
    "properties" : {
        "item_id" : {"type": "number"},
        "sale_price" : {"type": "number"},
        "sale_annotation" : {"type": "string"},
        "sale_user_id" : {"type": "number"}
        
    },
    "required": ["item_id", "sale_price", "sale_user_id"]
}

CREATE_PROPOSAL_SCHEMA = {
    "type" : "object",
    "properties" : {
        "name" : {"type": "string"},
        "icon" : {"type": "string"},
        "year" : {"type": "number"},
        "color" : {"type": "string"},
        "manufacturer" : {"type": "string"},
        "proposed_date" : {"type": "string"},
        "proposal_user_id" : {"type": "number"},
        "annotation" : {"type": "string"},
        "purchase_price" : {"type": "number"},
        "sale_price" : {"type": "number"},
        "sale_user_id" : {"type": "number"}  
    },
    "required": ["name", "purchase_price"]
}

CREATE_EXPENSE_SCHEMA = {
    "type" : "object",
    "properties" : {
        "expense_date" : {"type": "string"},
        "expense_annotation" : {"type": "string"},
        "item_id" : {"type": "number"},
        "expense_price" : {"type": "number"},
        "expense_register_user_id" : {"type": "number"}  
    },
    "required": ["expense_annotation", "item_id", "expense_price", "expense_register_user_id"]
}

REMOVE_USER_SCHEMA = {
    "type" : "object",
    "properties" : {
        "user_id" : {"type": "number"}
    },
    "required": ["user_id"]
}