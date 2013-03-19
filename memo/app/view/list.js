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
        itemTpl: '<p>id:{id}</p>'+'<p>filename:{filename}</p>'+'<p>dir:{dir}</p>'+'<p>description:{description}</p>'+'<p>created:{created}</p>'
    }
});