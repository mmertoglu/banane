export default function (data) {
 
 if (data==null) {
     return null
 } else{
    return Object.keys(data).map(key => {
        return {
            id:key,
            ...data[key],
        }
    }).sort(function(a, b) {
        return (a.date > b.date) ? -1 : ((a.date > b.date) ? 1 : 0);
    });
 }
    
}