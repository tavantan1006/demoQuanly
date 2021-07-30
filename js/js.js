// ===================CreateTable===========================
function showTable(){
    let textTable = "";
    let check = -1;
    //======== check bàn đang trống hay ko ??????? ==========
    for (let i = 0; i < arrayTable.length; i++) {
        for (let j = 0; j < arrayOrder.length; j++) {
            if (arrayOrder[j].status == false && arrayOrder[j].idTable == arrayTable[i].id){
                for (let k = 0; k < arrayOrderDetail.length; k++) {
                   if(arrayOrder[j].id == arrayOrderDetail[k].idOrder){
                       textTable+= "<button style='background: rgba(210,21,21,0.76) ; color: white' onclick='checkTable(this.value)' class='btn-table' value="+arrayTable[i].id+">"+"Bàn"+arrayTable[i].id+"</button>";
                       check = i;
                       break;
                   }
                }
            }
        }
        if(check != i){
            textTable+= "<button onclick='checkTable(this.value)' class='btn-table' value="+arrayTable[i].id+">"+"Bàn"+arrayTable[i].id+"</button>";
        }
    }
    document.getElementById("bodyBleft").innerHTML = textTable;
}
showTable();
// ===================Check Order in table===========================
function checkTable(idTable){
    let count = 0;
    for (let i = 0; i < arrayOrder.length; i++) {
        if (arrayOrder[i].idTable == idTable && arrayOrder[i].status == false){
            document.getElementById("addOrderDetail").value = arrayOrder[i].id;
             showOrderDetail(arrayOrder[i].id);
             count++;
        }
    }
    if(count == 0){
        arrayOrder.push(new Order(arrayOrder.length+1,1,idTable,0,Date.now(),false))
        checkTable(idTable)
    }
    showTable();
}
// ===================Hiển thị hóa đơn chi tiết từng sản phẩm mà khách hàng đặt ===========================
function showOrderDetail(idOrder){
    let textOrderDetail="";
    let total = 0;
    for (let i = 0; i < arrayOrderDetail.length; i++) {
        if(arrayOrderDetail[i].idOrder == idOrder){
            textOrderDetail += "<tr>";
            textOrderDetail += "<td colspan='4'>"+arrayOrderDetail[i].nameProduct+"</td>";
            textOrderDetail += "<td colspan='2'>"+arrayOrderDetail[i].quantity+"</td>";
            textOrderDetail += "<td colspan='2'>"+arrayOrderDetail[i].price+"</td>";
            textOrderDetail += "<td colspan='2'>"+arrayOrderDetail[i].total+"</td>";
            textOrderDetail += "<td>";
            textOrderDetail += "<button onclick='deleteOrderDetail(this.value,"+idOrder+")' value='"+i+"'>";
            textOrderDetail += "<img src='img/unnamed.jpg' height='10' width='10'/>";
            textOrderDetail += "</button>";
            textOrderDetail += "</td>";
            textOrderDetail +="</tr>";
            total += arrayOrderDetail[i].total;
        }
    }
    document.getElementById("totalMoney").value = total;
    document.getElementById("paymentOrder").value = idOrder;
    document.getElementById("bodymainbody").innerHTML = textOrderDetail;
}
// ===================CreateCategory===========================
function showCategory(){
    let textCategory ="";
    for (let i = 0; i < arrayCategory.length; i++) {
        textCategory += "<option value="+arrayCategory[i].id+">"+arrayCategory[i].name+"</option>";
    }
    document.getElementById("category").innerHTML = textCategory;
}
showCategory();
// ===================CreateProduct===========================
function showProductToCategory(id){
    let textProduct = "";
    for (let i = 0; i < arrayProduct.length; i++) {
        if (arrayProduct[i].idCategory == id){
            textProduct += "<option value="+arrayProduct[i].id+">"+arrayProduct[i].name+"</option>";
        }
    }
    document.getElementById("product").innerHTML = textProduct;
}
// ===================CreateOrderDetail===========================
function addOrderDetail (idOrder){
    let idProduct = document.getElementById("product").value;
    if (idProduct == ""){
        return alert("Bạn chưa chọn món ăn !!");
    }
    if (idOrder == 0){
        return alert("Bạn chưa chọn chỗ ngồi !!");
    }
    let quantity = parseFloat(document.getElementById("quantity").value);
    let check = true;
    //++++ Check Sản phẩm đặt có trùng nhau không nếu trùng chỉ tăng thêm số lượng sản phẩm
    for (let i = 0; i < arrayOrderDetail.length; i++) {
        if (arrayOrderDetail[i].idProduct == idProduct && arrayOrderDetail[i].idOrder==idOrder){
            arrayOrderDetail[i].setQuantity(quantity+arrayOrderDetail[i].getQuantity());
            arrayOrderDetail[i].setTotal(arrayOrderDetail[i].getQuantity()*arrayOrderDetail[i].price);
            showOrderDetail(idOrder);
            check = false;
            break;
        }
    }
    if (check){
        let nameProduct = "";
        let price = 0;
        for (let i = 0; i < arrayProduct.length; i++) {
            if (arrayProduct[i].id == idProduct){
                nameProduct = arrayProduct[i].name ;
                price = parseFloat(arrayProduct[i].price);
            }
        }
        let total = parseFloat(price*quantity);
        arrayOrderDetail.push(new OrderDetail(arrayOrderDetail.length,idOrder,idProduct,nameProduct,price,quantity,total,false));
        showOrderDetail(idOrder);
    }
}
// Xóa hóa đơn chi tiết khi khách hàng muốn đổi sản phẩm hoặc nhân viên đặt nhầm sản phẩm mà khác yêu cầu
function deleteOrderDetail (idOrderDetail,idOrder){
    arrayOrderDetail.splice(idOrderDetail,1);
    showOrderDetail(idOrder);
}
// ===================Thực hiện thanh toán hóa đơn khi khách hàng thanh toán===========================
function paymentOrder(idOrder){
    let check = false;
    for (let i = 0; i < arrayOrderDetail.length; i++) {
        if (arrayOrderDetail[i].idOrder == idOrder){
            check = true;
            break
        }
    }
    if (!check){
        return alert("Bạn chưa đặt món !!!")
    }
    let idTable = 0;
    for (let i = 0; i < arrayOrder.length; i++) {
        if (arrayOrder[i].id == idOrder){
            arrayOrder[i].setStatus(true);
            idTable = arrayOrder[i].idTable;
            for (let j = 0; j < arrayOrderDetail.length; j++) {
                if (arrayOrderDetail[j].idOrder==idOrder){
                    arrayOrderDetail[j].setStatus(true);
                }
            }
        }
    }
    alert("Thanh toán thành công !!!");
    checkTable(idTable);
}