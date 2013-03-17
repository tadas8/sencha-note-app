Ext.define('Memo.view.Form', {
    extend: 'Ext.form.Panel',
    xtype: 'memoform',
    config: {
        items: [
            {
                xtype: 'textareafield',
                name: 'memo',
                height: 800
            },
            {
                xtype: 'toolbar',               // 1
                docked: 'bottom',               // 2
                items: [
                    {
                        xtype: 'spacer'         // 3
                    },
                    {
                        xtype: 'button',        // 4
                        ui: 'flat',
                        iconCls: 'trash',       // 5
                        iconMask: true,
                        action: 'remove'        // 6
                    }
                ]
            }
        ]
    }
});