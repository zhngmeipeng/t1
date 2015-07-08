/**
 * Created by hvit on 2015/7/6.
 */

    function OchangeOut(isStar,evenClassName,oddClassName) {  //当前行为基数时则className=evenClassName，当前行为偶数时className=oddClassName，主要用于鼠标移出
        //isStar = oOut;
        var oTr = document.getElementsByTagName('tr')[isStar];
        if (isStar % 2 != 0 && isStar != 0) {
            oTr.className = evenClassName;
        } else {
            oTr.className = oddClassName;
        }
    }

    function m2(evenClassName,oddClassName){//规定基数行和偶数行的颜色
        $('tr:odd').addClass(evenClassName);
        $('tr:even').addClass(oddClassName);
    }

function OchangeOver(isStar,className) {           //限定某行的颜色,当鼠标移入时颜色的改变
    var oTr = document.getElementsByTagName('tr')[isStar];
    oTr.className = className;
}

    function dopage(para,showNum,tableId){     //分页时要显示的行和要隐藏的行para为第几页
        var tableII=document.getElementById(tableId);
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

    function fenye(showNum,tableId,ulId){
         var tableI = document.getElementById(tableId);
         var rowNum = tableI.rows.length;                                          //获取table的行数
         var countNum;
         var ye = '';
         countNum = Math.ceil(rowNum / showNum) ;
         for (var i = 0; i < rowNum ; i++) {
             if (i > showNum) {
             tableI.rows[i].style.display = 'none';                    //大于100的行数隐藏掉
             }
         }
         for(var n=1;n<countNum+1;n++){
         ye=ye+'<li>'+n+'</li>';
         }

         document.getElementById(ulId).innerHTML=ye;
         // $('#count').html(ye);
         var Oul=document.getElementById(ulId);
         var Oli=Oul.getElementsByTagName('li');
             for(var j=0;j<countNum;j++){
             Oli[j].index=j+1;
             Oli[j].onclick=function(){
                dopage(this.index,showNum,tableId);
             }
         }

    }