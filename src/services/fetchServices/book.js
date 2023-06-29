async function Get(id) {
    try {
        var defind_url = '';
        if(id === undefined)
            defind_url ='http://localhost:3001/book';
        else
            defind_url = `http://localhost:3001/book/${id}`;

        var rs = await fetch(defind_url, {cache: 'no-store'});
        var jsonRS = await rs.json()
        console.log('_________________ fetch successs');

        // Giá trị trả về là một mảng
        return jsonRS;
    }
    catch (err) {
        console.log('_________________ Failed to fetch!', err);
    }
}

module.exports = {Get}