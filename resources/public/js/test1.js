/**
 * Created by hvit on 2015/7/7.
 */
var myData=function(data){
    myGrid({
        data:data,
        columns: [
            {text: 'id',  dataIndex:'id'},
            {text: 'name',  dataIndex:'name'},
            {text: 'pop',  dataIndex:'pop'},
            {text: 'percentage',  dataIndex:'percentage'},
            {text: 'date',  dataIndex:'date'},
            {text: 'url',  dataIndex:'url'}
        ]
    });
}


