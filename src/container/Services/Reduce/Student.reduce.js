import { DELETESTU, SINGLESTU, STUDENT, UPDATEDATA } from "../const";

const alldata = JSON.parse(localStorage.getItem('students'));

let data = [];

if(alldata != null){
    data = alldata;
}


const initialState = {
    students : data,
    student: null
};

const studentReducer = (state = initialState, action) => {

    switch(action.type){
        case STUDENT : 
        localStorage.setItem("students" ,JSON.stringify([...state.students , action.payload]));
        return{
            ...state,
            students : [...state.students , action.payload]
        };


        case SINGLESTU :
            const singledata = state.students.filter((data)=>{
                return data.id == action.payload
           })

           return{
            ...state,
            student: singledata[0]
           }

        case DELETESTU :
           const deletedata = state.students.filter((data)=>{
                return data.id != action.payload
           })

           localStorage.setItem("students" , JSON.stringify(deletedata));
           return{
            ...state,
            students: deletedata
           }

        case UPDATEDATA : 
        const newdata = state.students.map((data) =>{
            if(data.id == action.payload.id){
                return data = action.payload;
            }else{
                return data;
            }
        })
        localStorage.setItem("students" , JSON.stringify(newdata));
        return{
            ...state,
            students : newdata
        }
        
           
        default : 
          return state;
    }
}
export default studentReducer;

