const Data= require ('../mockupData/mockupData')

const resolvers = {
    //Agrs: Tham so 
    // parent: Ket qua tra ve cua query parent 
    Query: {
        classrooms: () =>Data.ClassData,
        teachers: () => Data.TeacherData,
        classroom: (parent, agrs) => Data.ClassData.find((item)=> item.id.toString() === agrs.id.toString()),
        teacher: (parent, agrs) => Data.TeacherData.find((item)=> item.id.toString() === agrs.id.toString())
        
    },
    Classroom: {
        teacher: (parent) => Data.TeacherData.find((item)=> item.id.toString() === parent.teacherID.toString())
    },
    Teacher: {
        classrooms: (parent) => Data.ClassData.filter((item)=> item.teacherID.toString() === parent.id.toString())
    },

    Mutation: {
        //createTeacher(id: ID!, name: String, age: Int ):
        createTeacher: (parent, args) => {
            console.log(args);
            /*
            
            This is place for add new Teacher to database
            
            */
            return args
        },
        createClassroom: (parent, args) => {
            console.log(args);
            /*
            
            This is place for add new Teacher to database
            
            */
            return args
        }
    }
}
module.exports = resolvers;