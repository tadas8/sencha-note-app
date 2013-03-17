Ext.define('Memo.view.Main', {
    extend: 'Ext.navigation.View',
    xtype: 'main',
    requires: [
    ],
    config: {
    	useTitleForBackButtonText: true,     // 1

    	navigationBar: {
            items: {
                xtype: 'button',
                ui: 'flat',
                iconCls: 'add',
                iconMask: true,
                align: 'right',
                action: 'add'
            }
        },
        items: [
            {
                title: 'メモ',          
                xtype: 'memolist'  
            }
        ]
    }
});