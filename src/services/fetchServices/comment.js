async function GetCmt(id) {
    try {
        var rs = await fetch(`http://localhost:3001/getCmt/${id}`, {cache: 'no-store'});
        var jsonRS = await rs.json()

        // Giá trị trả về là một mảng
        return jsonRS;
    }
    catch (err) {
        console.log('_________________ Failed to fetch!', err);
    }
}

module.exports = {GetCmt}