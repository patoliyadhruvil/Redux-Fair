import { DELETESTU, SINGLESTU, STUDENT, UPDATEDATA } from "../const"
export const studentaction = (data) => {

    return {

        type: STUDENT,
        payload: data
    }

}


export const singleStu = (id) => {

    return {

        type: SINGLESTU,
        payload: id

    }

}

export const updateData = (data) => {

    return {

        type: UPDATEDATA,
        payload: data

    }

}

export const deletestu = (data) => {
    return {
        type: DELETESTU,
        payload: data
    }
}