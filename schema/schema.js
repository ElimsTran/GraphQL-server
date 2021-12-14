const {gql} = require('apollo-server-express');

//Schema type example
const typeDef = gql`
    type Classroom {
        id: ID 
        name: String # Name of class
        number: Int # Number Student
        teacher: Teacher 
    }
    type Teacher {
        id: ID!
        name: String
        classrooms: [Classroom]
        age: Int
    }
    #Root Type
    
    #For query
    type Query {
        classrooms: [Classroom] # get classrooms data
        teachers: [Teacher] # get teachers data
        classroom (id: ID!): Classroom
        teacher (id: ID!): Teacher
    }

    type Mutation {
        createTeacher(id: ID!, name: String!, age: Int! ): Teacher
        createClassroom(id: ID!, name: String!, number: Int!, teacherID: ID! ): Classroom
   
    }
`

module.exports = typeDef;
