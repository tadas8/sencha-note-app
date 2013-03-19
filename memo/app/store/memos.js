Ext.define('Memo.store.Memos', {
    extend: 'Ext.data.Store',
    requires: [
        //'Ext.data.proxy.LocalStorage',
    ],
    config: {
        model: 'Memo.model.Memo',
        proxy: {
            //type: 'localstorage',
            type: 'jsonp',
            //id: 'memo',
            url:'http://katsuyatada.org/test/json_test.php',
            reader: {
            	type: 'json',
                rootProperty: 'data'
            },

        },
        
        autoLoad: true
    }
});