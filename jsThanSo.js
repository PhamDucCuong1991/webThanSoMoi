let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


function xuLyThongTin() {

    let ten = document.getElementById("name").value;
    let ngaySinh = document.getElementById("birthday").value;

    ten = ten.toUpperCase();
    let tenHienThi = ten.trim();
    ten = ten.trim();
    removeAccents(ten);

    ngaySinh = ngaySinh.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, " ");

    let arr = [];
    let arr2 = [];//so ngay sinh
    let arrTen = []; // so trong Ho va ten
    let arrSoCanBang = []; //là dãy số chứa chữ cái đầu tiên Ho Va tên
    document.getElementById("hienthiJs").innerHTML = "";
    document.getElementById("hienthiJs").innerHTML += " Xin chào: " + tenHienThi + "<br>" + "Ngày sinh: " + ngaySinh + "<br>"


    function removeAccents() {
        var dauTiengViet = [
            "AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ", "DĐ", "EÈẺẼÉẸÊỀỂỄẾỆ", "IÌỈĨÍỊ",
            "OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ", "UÙỦŨÚỤƯỪỬỮỨỰ", "YỲỶỸÝỴ"
        ];
        for (var i = 0; i < dauTiengViet.length; i++) {

            var re = new RegExp('[' + dauTiengViet[i].substr(1) + ']', 'g');
            var char = dauTiengViet[i][0];

            ten = ten.replace(re, char);
        }
        return ten;
    }


    function loaiBoSo0(a) {

        for (let i = 0; i < a.length; i++) {
            if (a[i] === 0) {
                a.splice(i, 1)
            }
        }
    }

    function daySoHoVaTen() {
        for (let i = 0; i < ten.length; i++) {
            if (ten[i] !== ' ') {
                arr.push(str.indexOf(ten[i]) % 9 + 1);
            }
        }
    }

    daySoHoVaTen()
    document.getElementById("hienthiJs").innerHTML += " Dãy số Họ và tên của bạn là: " + "<br>" + arr + "<br>";


    let soThieuTrongHoVaTen = [];

    function soThieu() {

        for (let i = 1; i < 10; i++) {
            let kiemtra = true;
            for (let j = 0; j < arr.length; j++) {
                if (i === arr[j]) {
                    kiemtra = false
                    break;
                }
            }
            if (kiemtra === true) {
                soThieuTrongHoVaTen.push(i);
            }
        }
    }

    soThieu()
    document.getElementById("hienthiJs").innerHTML += " Số còn thiếu là: " + soThieuTrongHoVaTen + "<br>"

    let arrChuCaiDau = [];

    function layChuCaiDau(a) {
        arrChuCaiDau.push(a[0])
        for (let i = 0; i < a.length; i++) {
            if (a[i] === ' ') {
                arrChuCaiDau.push(a[i + 1])
            }
        }
    }

    layChuCaiDau(ten)
    document.getElementById("hienthiJs").innerHTML += "Chữ cái đầu họ và tên: " + arrChuCaiDau;

    //mảng sau khi đã cắt chữ cái đầu rồi(sothu10)

    function daySoCanBang() {

        for (let i = 0; i < arrChuCaiDau.length; i++) {

            arrSoCanBang.push(str.indexOf(arrChuCaiDau[i]) % 9 + 1);

        }
    }

    daySoCanBang()
    document.getElementById("hienthiJs").innerHTML += "(" + arrSoCanBang + ")" + "<br>";

    function daySoTen() {
        for (let i = ten.length - 1; i > 0; i--) {
            arrTen.unshift(str.indexOf(ten[i]) % 9 + 1);
            if (ten[i] === ' ') {
                break
            }
        }
    }

    daySoTen()

    loaiBoSo0(arrTen)
    document.getElementById("hienthiJs").innerHTML += " Chữ số trong Tên là: " + arrTen + "<br>"


    function daySoNgaySinh() {
        let bienphu;
        for (let i = 0; i < ngaySinh.length; i++) {
            if (ngaySinh[i] !== ' ' && ngaySinh[i] !== "/" && ngaySinh[i] !== "-") {
                bienphu = Number(ngaySinh[i])
                arr2.push(bienphu);
            }
        }
    }

    daySoNgaySinh();

    let arrNa = [];
    let arrPa = [];

    function nguyenPhuAm() {
        for (let i = 0; i < ten.length; i++) {
            if (ten[i] === "A" || ten[i] === "E" || ten[i] === "I" || ten[i] === "O" || ten[i] === "U") {
                arrNa.push(str.indexOf(ten[i]) % 9 + 1);
            } else {
                arrPa.push(str.indexOf(ten[i]) % 9 + 1);
            }
        }
    }

    nguyenPhuAm()

    loaiBoSo0(arrPa);
    document.getElementById("hienthiJs").innerHTML += " Các nguyên âm là: " + arrNa + "<br>";
    document.getElementById("hienthiJs").innerHTML += " Các phụ âm  là: " + arrPa + "<br>";

    function duongDoi() {
        let tong = arr2[0];
        for (let i = 1; i < arr2.length; i++) {
            tong += arr2[i];
            if (tong > 9) {
                tong -= 9
            }
        }
        return (tong);
    }

    document.getElementById("hienthiJs").innerHTML += " 1. Số đường đời của bạn là: " + duongDoi(arr2) + "<br>";

    function soSuMenh() {
        let tong = arr[0];
        for (let i = 1; i < arr.length; i++) {
            tong += arr[i];
            if (tong > 9) {
                tong -= 9
            }
        }
        return (tong)
    }

    document.getElementById("hienthiJs").innerHTML += " 2. Số sứ mệnh của bạn là: " + soSuMenh(ten) + "<br>";


    function soLinhHon() {

        let tong = arrNa[0];
        for (let i = 1; i < arrNa.length; i++) {
            tong += arrNa[i];
            if (tong > 9) {
                tong -= 9
            }
        }
        return (tong)
    }

    document.getElementById("hienthiJs").innerHTML += " 3. Số linh hồn của bạn là : " + soLinhHon(arrNa) + "<br>";

    function soNhanCach() {

        let tong = arrPa[0];
        for (let i = 1; i < arrPa.length; i++) {
            tong += arrPa[i];
            if (tong > 9) {
                tong -= 9
            }
        }
        return (tong)
    }

    document.getElementById("hienthiJs").innerHTML += " 4. Số nhân cách của bạn là : " + soNhanCach(arrPa) + "<br>";

    function soCanBang() {
        let tong = arrSoCanBang[0];
        for (let i = 1; i < arrSoCanBang.length; i++) {
            tong += arrSoCanBang[i];
            if (tong > 9) {
                tong -= 9
            }
        }
        return (tong)
    }

    document.getElementById("hienthiJs").innerHTML += " 5. Số cân bằng của bạn là: " + soCanBang() + "<br>"

    function soTruongThanh(a, b) {
        let tong = a + b;
        if (tong > 9) {
            tong -= 9;
        }
        return (tong)
    }

    document.getElementById("hienthiJs").innerHTML += " 6. Số Trưởng thành của bạn là : " + soTruongThanh(duongDoi(arr2), soSuMenh(ten)) + "<br>";

    function soNgaySinh() {
        let tong = arr2[0] + arr2[1];
        if (tong > 9) {
            tong -= 9;
        }
        return (tong)
    }

    document.getElementById("hienthiJs").innerHTML += " 7. Số ngày sinh của bạn là: " + soNgaySinh() + "<br>"

    function soThaiDo() {
        let tong = arr2[0] + arr2[1] + arr2[2] + arr2[3];
        if (tong > 9) {
            tong -= 9;
        }
        return (tong)
    }

    document.getElementById("hienthiJs").innerHTML += " 8. Số Thái độ của bạn là: " + soThaiDo() + "<br>"

    function soTuDuyLyTri(a, b) {
        let tong = a + b;
        if (tong > 9) {
            tong -= 9
        }
        return (tong)
    }

    document.getElementById("hienthiJs").innerHTML += " 9. Số Tư duy lý trí của bạn là : " + soTuDuyLyTri(soNgaySinh(), soVanMenh()) + "<br>";


    function soVanMenh() {
        let tong = arrTen[0];
        for (let i = 1; i < arrTen.length; i++) {
            tong += arrTen[i];
            if (tong > 9) {
                tong -= 9
            }
        }
        return (tong)
    }

    document.getElementById("hienthiJs").innerHTML += "10. Số Vận mệnh của bạn là: " + soVanMenh() + "<br>"

}

function xoa() {
    document.getElementById("name").value = "";
    document.getElementById("birthday").value = "";
    document.getElementById("hienthiJs").innerHTML = "";
}
