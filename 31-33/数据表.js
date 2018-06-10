
    var regionBtn = document.getElementById('region-select');
    var productBtn = document.getElementById('product-select');
    
    var region = regionBtn.value;
    var product = productBtn.value; 

    var table = document.createElement('table');
    var tableCon = document.getElementById('table');

    regionBtn.addEventListener('change', function() {
        region = this.value;
        table.innerHTML = "";
        creatTh();
        creatTd();    
        tableCon.appendChild(table);
    });

    productBtn.addEventListener('change', function() {
        product = this.value;
        table.innerHTML = "";
        creatTh();
        creatTd();    
        tableCon.appendChild(table);
    });

//表头
function creatTh() {
    var tr = document.createElement('tr');
    var th = document.createElement('th');
    var node = document.createTextNode('商品');
    th.appendChild(node);
    tr.appendChild(th);
    var th = document.createElement('th');
    node = document.createTextNode('地区');
    th.appendChild(node);
    tr.appendChild(th);
    for( var i = 1;i<13;i++){
        var th = document.createElement('th');
        node = document.createTextNode(i + '月份');
        th.appendChild(node);
        tr.appendChild(th);
    }
    table.appendChild(tr);  
}


//表格内容
function creatTd (){
    for(var i = 0;i<sourceData.length;i++) {
        if(sourceData[i].product == product&&sourceData[i]
        .region == region) {
            var tr = document.createElement('tr');
            var td = document.createElement('td');
            var node = document.createTextNode(sourceData[i].product);
            td.appendChild(node);//添加商品
            tr.appendChild(td);
            var td = document.createElement('td');
            node = document.createTextNode(sourceData[i].region);
            td.appendChild(node);//添加地区
            tr.appendChild(td);
            for(var j = 0;j<sourceData[i].sale.length;j++) {
                var td = document.createElement('td');
                node = document.createTextNode(sourceData[i].sale[j]);
                td.appendChild(node);
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
    }
}
