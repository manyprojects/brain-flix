export default function timeFunc(timestamp) {
    const commentDate = new Date(timestamp); 
    let month = commentDate.getMonth() + 1;
    let date = commentDate.getDate();
    if (month < 10) {
        month  = '0' + month;
    }
    if (date < 10) {
        date = '0' + date;
    }
    return  `${month}/${date}/${commentDate.getFullYear()}`;
}