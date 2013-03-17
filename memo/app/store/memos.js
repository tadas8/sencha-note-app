Ext.define('Memo.store.Memos', {
    extend: 'Ext.data.Store',
    requires: [
        'Ext.data.proxy.LocalStorage'
    ],
    config: {
        model: 'Memo.model.Memo',      // 1
        proxy: {                       // 2
            type: 'localstorage',      // 3
            id: 'memo'                 // 4
        },
        autoLoad: true                 // 5
    }
});