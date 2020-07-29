/**
 * This view is an example list of people.
 */
Ext.define('SenchaApp.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'SenchaApp.store.Personnel'
    ],

    title: 'Personnel',

    store: {
        type: 'personnel'
    },

    columns: [
        { text: 'Name',  dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});


Ext.define('SenchaApp.view.Student.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'studentlist',

    requires: [
        'SenchaApp.store.StudentList'
    ],

    title: 'StudentList',

    store: {
        type: 'studentlist'
    },

    columns: [
        { text: 'Id',  dataIndex: 'id' },
        { text: 'Name', dataIndex: 'name', flex: 1 },
        { text: 'Age', dataIndex: 'age', flex: 1 },
        { text: 'Gender', dataIndex: 'gender', flex: 1 }
    ],
    

        listeners: {
            select: 'onItemSelected',
            beforeRender: function () {
                var store = this.getView().store;
                store.read();
            }
        }    
});

