Ext.define('StudentController', {
    extend : 'Ext.app.ViewController',
    alias: 'controller.StudentController',

    ChangeTitle: function() {
        const appNameInput = this.getView().query('[itemId=appNameInput]')[0];
        this.getViewModel().set('name', appNameInput.getValue());
    }
});

