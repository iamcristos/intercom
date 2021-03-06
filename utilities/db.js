let arr = [ ];
module.exports ={
    newInstance () {return arr = []},
    addData (data) {
        arr.push(data);
    },
    getData() {
        return arr
    }, 
    sortById() {
        return arr.sort((a,b) => (a.user_id > b.user_id) ? 1 : ((b.user_id > a.user_id) ? -1 : 0))
    }
}