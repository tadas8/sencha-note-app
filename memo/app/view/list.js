Ext.define('Memo.view.List', {
    extend: 'Ext.dataview.List',
    xtype: 'memolist',
    config: {
        store: 'Memos',                // 1
        itemTpl: '{title}'
    }
});