db.createCollection("posts", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ['title', 'text', 'creator', 'comments'],
            properties: {
                title: {
                    bsonType: 'string',
                    description: 'must be a string and it is required'
                },
                text: {
                    bsonType: 'string',
                    description: "must be a string and it is required"
                },
                creator: {
                    bsonType: 'objectId',
                    description: "Must be an object id and this is required"
                },
                comments: {
                    bsonType: 'array',
                    required: ['text', 'author'],
                    properties: {
                        text: {
                            bsonType: 'string',
                            description: "must be a string and required"
                        },
                        author: {
                            bsonType: 'objectId',
                            description: "must be an objectId and required"
                        }
                    }
                }
            }
        }
    }
})












