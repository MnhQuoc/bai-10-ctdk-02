function tinhsodien() {
    let sodien = +document.getElementById("sodien").value
    var bacdien = Math.floor(((sodien-1)/50)+1) ;
    var tiendien;

    if (bacdien === 1) {
        tiendien = sodien*1806
    }
    if (bacdien === 2) {
        tiendien = sodien*1866
    }
    if (bacdien === 3) {
        tiendien = sodien*2167
    }
    if (bacdien === 4) {
        tiendien = sodien*2729
    }
    if (bacdien === 5) {
        tiendien = sodien*3050
    }
    if (bacdien >= 6) {
        bacdien = 6;
        tiendien = sodien*3151
    }
    document.getElementById("result").innerHTML =  "Tiền điện: " + tiendien + "đ" ;
    document.getElementById("bacdien").innerHTML =  "Bậc điện: Bậc " + bacdien ;
}