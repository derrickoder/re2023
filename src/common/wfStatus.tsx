
const getStatusDescription = (statusId:number):string => {
    let statusDescription = "";
    switch(statusId){
        case 0:
            statusDescription = "Not Active";
            break;
        case 1:
            statusDescription = "New";
            break;
        case 2:
            statusDescription = "Active";
            break;
        case 3:
            statusDescription = "Done";
            break;
    }
    return statusDescription;
};

export default getStatusDescription;