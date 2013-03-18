Ext.define('Memo.view.List', {
    extend: 'Ext.dataview.List',
    xtype: 'memolist',
    config: {
    	//data: [
        //    { title: 'ham' },
        //    { title: 'egg' },
        //    { title: 'spam' }
        //],
        store: 'Memos',
        itemTpl: '{title}'
    }
});