// var stu = Ext.Ajax.request({
//     //url:"https://localhost:44380/student/getStuList",
//     url: "/app/store/test.json",
//     method: 'POST',
//     useDefaultXhrHeader : false,
//     success: function(result, request) {
//         var respText =  Ext.JSON.decode(result.responseText); 
//         var respText1 =  result.responseText; 
//         console.log(respText);  
//         console.log(respText1);        
       
//     },
// });


var store1 = Ext.define('SenchaApp.store.StudentList', {
    extend: 'Ext.data.Store',
    alias: 'store.studentlist',
    model: 'SenchaApp.model.StudentList',

    proxy: {
        type: 'ajax',
        url: 'https://localhost:44380/student/getStuList',
        useDefaultXhrHeader : false,
        actionMethods: {
            read: 'post'
        }
    }
});





Ext.create({
    xtype: 'container',
    layout: {
        type: 'hbox',
        align: 'middle'
    },
    items: [{
        xtype: 'panel',
        flex: 1,
        bodyStyle: {
            background: "#000",
            color:"#fff"
        }
    }, {
       xtype: 'panel',
       flex: 2,
       bodyStyle: {
           background: "#f00",
           color:"#fff"
       }
    }]
});


