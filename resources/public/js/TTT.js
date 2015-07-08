/**
 * Created by hvit on 2015/7/7.
 */

var myData=[
    {
        "name": "Afghanistan",
        "url": "http://en.wikipedia.org/wiki/Afghanistan",
        "pop": 25500100,
        "date": "2013-01-01",
        "percentage": 0.36,
        "id": 1
    },
    {
        "name": "Albania",
        "url": "http://en.wikipedia.org/wiki/Albania",
        "pop": 2831741,
        "date": "2011-10-01",
        "percentage": 0.04,
        "id": 2
    },
    {
        "name": "Afghanistan",
        "url": "http://en.wikipedia.org/wiki/Afghanistan",
        "pop": 25500100,
        "date": "2013-01-01",
        "percentage": 0.36,
        "id": 3
    },
    {
        "name": "Albania",
        "url": "http://en.wikipedia.org/wiki/Albania",
        "pop": 2831741,
        "date": "2011-10-01",
        "percentage": 0.04,
        "id": 4
    },
    {
        "name": "Afghanistan",
        "url": "http://en.wikipedia.org/wiki/Afghanistan",
        "pop": 25500100,
        "date": "2013-01-01",
        "percentage": 0.36,
        "id":5
    },
    {
        "name": "Albania",
        "url": "http://en.wikipedia.org/wiki/Albania",
        "pop": 2831741,
        "date": "2011-10-01",
        "percentage": 0.04,
        "id": 6
    },
    {
        "name": "Afghanistan",
        "url": "http://en.wikipedia.org/wiki/Afghanistan",
        "pop": 25500100,
        "date": "2013-01-01",
        "percentage": 0.36,
        "id": 7
    },
    {
        "name": "Albania",
        "url": "http://en.wikipedia.org/wiki/Albania",
        "pop": 2831741,
        "date": "2011-10-01",
        "percentage": 0.04,
        "id": 8
    },
    {
        "name": "Albania",
        "url": "http://en.wikipedia.org/wiki/Albania",
        "pop": 2831741,
        "date": "2011-10-01",
        "percentage": 0.04,
        "id": 9
    },
    {
        "name": "Afghanistan",
        "url": "http://en.wikipedia.org/wiki/Afghanistan",
        "pop": 25500100,
        "date": "2013-01-01",
        "percentage": 0.36,
        "id": 10
    },
    {
        "name": "Albania",
        "url": "http://en.wikipedia.org/wiki/Albania",
        "pop": 2831741,
        "date": "2011-10-01",
        "percentage": 0.04,
        "id": 11
    }
]

/*var o={
     data:myData,
    columns: [
        {text: 'id',  dataIndex:'id'},
        {text: 'name',  dataIndex:'name'},
        {text: 'pop',  dataIndex:'pop'},
        {text: 'percentage',  dataIndex:'percentage'},
        {text: 'date',  dataIndex:'date'},
        {text: 'url',  dataIndex:'url'}
    ]
};*/
//myGrid
/*function ooo (arr1,arr2){
    var s='';
        for(var i=0;i<arr1.length;i++) {
           s= s+'{text: ' + '\''+arr1[i]+'\'' + ', dataIndex: ' +'\''+ arr2[i]+'\'' + '}';
            if(i!=arr1.length-1){
                s=s+',';
            }
        }
    columns: eval('('+s+')');

};*/
function myGrid(url,o) {
    window.onload = function () {
        var arr = new Array();
        var str = '<table  width="1000px" cellspacing="0" id="tableId"><tr>';
        var str1 = '';
        $.each(o.columns, function (idex, item) {//用ajax取出t1.json
            arr.push(item.dataIndex);
            str = str + '<td>' + item.text + '</td>';
        });
        str = str + '</tr><tr>';
         $.ajaxSettings.async = false;
        if(typeof url=='string'){
         $.getJSON(url, function (data) {                                                      //采用同步
        $.each(data, function (idex, item) {//用ajax取出t1.json
            for (var i = 0; i < arr.length; i++) {
                var sss = arr[i];
                str1 = str1 + '<td>' + item[sss] + '</td>';
            }
            str1 = str1 + '</tr>';
        });
        str1 = str1 + '</table>';

        $('#tableTest').html(str + str1);
        });
        }
        var changeCssEven = 'changeCssEven';                                                      //className,限定颜色
        var changeCssOdd = 'changeCssOdd';                                                        //className,限定颜色
        var changeCssOne = 'changeCssOne';                                                        //className,限定颜色
        var tableId = 'tableId';                                                                  //table的id
        var ulId = 'count';                                                                       //ul的id
        var showNum = 10;
        $('tr:odd').addClass(changeCssEven);
        $('tr:even').addClass(changeCssOdd);                                                           //限定奇偶数行的颜色

        var firstOne = document.getElementsByTagName('tr');
        for (var i = 0; i < firstOne.length; i++) {
            firstOne[i].index = i;
            firstOne[i].onmouseout = function () {
                OchangeOut(this.index, changeCssEven, changeCssOdd);                              //鼠标移出时颜色改变
            };
            firstOne[i].onmouseover = function () {
                OchangeOver(this.index, changeCssOne);                                           //鼠标移入时颜色改变
            };

            function OchangeOver(isStar, className) {           //限定某行的颜色,当鼠标移入时颜色的改变
                var oTr = document.getElementsByTagName('tr')[isStar];
                oTr.className = className;
            }

            function OchangeOut(isStar, evenClassName, oddClassName) {  //当前行为基数时则className=evenClassName，当前行为偶数时className=oddClassName，主要用于鼠标移出
                //isStar = oOut;
                var oTr = document.getElementsByTagName('tr')[isStar];
                if (isStar % 2 != 0 && isStar != 0) {
                    oTr.className = evenClassName;
                } else {
                    oTr.className = oddClassName;
                }
            }
        }


        var tableI = document.getElementById(tableId);
        var rowNum = tableI.rows.length;                                          //获取table的行数
        var countNum;
        var ye = '';
        countNum = Math.ceil(rowNum / showNum);
        for (var i = 0; i < rowNum; i++) {
            if (i > showNum) {
                tableI.rows[i].style.display = 'none';                    //大于100的行数隐藏掉
            }
        }
        for (var n = 1; n < countNum + 1; n++) {
            ye = ye + '<li>' + n + '</li>';
        }

        document.getElementById(ulId).innerHTML = ye;
        // $('#count').html(ye);
        var Oul = document.getElementById(ulId);
        var Oli = Oul.getElementsByTagName('li');
        for (var j = 0; j < countNum; j++) {
            Oli[j].index = j + 1;
            Oli[j].onclick = function () {
                dopage(this.index, showNum, tableId);
            }
        }
    }
}
function dopage(para,showNum){
    var tableII=document.getElementById('tableId');
    var rowNum=tableII.rows.length;
    var start=(para-1)*showNum+1;
    for(var i=0;i<rowNum;i++){
        if((i>=(start))&&(i<(start+showNum))||i==0){
            tableII.rows[i].style.display='';
        }else{
            tableII .rows[i].style.display='none';
        }
    }
}

function fnPoint1(param){
    alert('oldid:'+param);//点击第一行时弹出内容
}