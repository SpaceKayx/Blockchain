var giohang;
if (localStorage.getItem('gioHang') == undefined)
{
    giohang =[];
}
else
{
    giohang = localStorage.getItem("gioHang");
    giohang = JSON.parse(giohang);
}
function muaHang(hihi)
{
    var ten = document.getElementById('tensp').innerHTML;
    var gia = Number(localStorage.getItem('giaMua'));
    var sl = Number(document.getElementById('hihi').value);
    var anh = document.getElementById('article').children[0].src;
    var soLw = Number(hihi.parentElement.parentElement.children[1].children[6].children[1].children[0].value);
    localStorage.setItem('SoLw',soLw);
    var sp = {
        ten: ten,
        gia: gia,
        anh: anh,
        sl: sl,
    };
    var chuaMua = true ;
    for ( var item of giohang)
    {
        if(item.ten == sp.ten)
        {
            item.sl += sl;
            chuaMua = false;
            break;
        }
    }
    if (chuaMua == true)
    {
        giohang.push(sp);
    }
    console.log(ten);
    console.log(gia);
    console.log(sl);
    console.log(soLw);
    console.log(anh);
    console.log(giohang);
// biến cục bộ
// chỉ lưu được text
// JSON.stringify(giohang) : biến giỏ hàng thành chữ
    localStorage.setItem("gioHang", JSON.stringify(giohang) );
    alert("Đã thêm vào giỏ hàng");
}