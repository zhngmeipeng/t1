/**
 * Created by hvit on 2015/7/6.
 */

    function OchangeOut(isStar,evenClassName,oddClassName) {  //��ǰ��Ϊ����ʱ��className=evenClassName����ǰ��Ϊż��ʱclassName=oddClassName����Ҫ��������Ƴ�
        //isStar = oOut;
        var oTr = document.getElementsByTagName('tr')[isStar];
        if (isStar % 2 != 0 && isStar != 0) {
            oTr.className = evenClassName;
        } else {
            oTr.className = oddClassName;
        }
    }

    function m2(evenClassName,oddClassName){//�涨�����к�ż���е���ɫ
        $('tr:odd').addClass(evenClassName);
        $('tr:even').addClass(oddClassName);
    }

function OchangeOver(isStar,className) {           //�޶�ĳ�е���ɫ,���������ʱ��ɫ�ĸı�
    var oTr = document.getElementsByTagName('tr')[isStar];
    oTr.className = className;
}

    function dopage(para,showNum,tableId){     //��ҳʱҪ��ʾ���к�Ҫ���ص���paraΪ�ڼ�ҳ
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
         var rowNum = tableI.rows.length;                                          //��ȡtable������
         var countNum;
         var ye = '';
         countNum = Math.ceil(rowNum / showNum) ;
         for (var i = 0; i < rowNum ; i++) {
             if (i > showNum) {
             tableI.rows[i].style.display = 'none';                    //����100���������ص�
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