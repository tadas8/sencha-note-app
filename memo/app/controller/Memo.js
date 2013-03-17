Ext.define('Memo.controller.Memo', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            main: 'main',
            form: 'memoform'              // 1
        },
        control: {
            'button[action=add]': {
                tap: 'onAddButtonTap'
            },
            'memoform textareafield': {    // 2
                change: 'onFieldChange'    // 3
            },
            'memolist': {                    // 1
                itemtap: 'onItemTap'         // 2
            },
            'button[action=remove]': {         // 1
                tap: 'onRemoveButtonTap'       // 2
            }
        }
    },

    onAddButtonTap: function() {
        var record = Ext.create('Memo.model.Memo', {    // 4
            id: String(Ext.Date.now())                  // 5
        });

        this.getMain().push({
            xtype: 'memoform',
            record: record                              // 6
        });
    },

    onFieldChange: function(field, value) {                            // 7
        var form = this.getForm(),
            record = form.getRecord();                                 // 8

        record.set('title', Ext.String.ellipsis(value, 10));           // 9
        record.set('memo', value);                                     // 10

        var store = Ext.getStore('Memos');                             // 11
        if (Ext.isEmpty(store.findRecord('id', record.get('id')))) {
            store.add(record);                                         // 12
        }
        store.sync();                                                  // 13
    },
    
    
    onItemTap: function(list, index, target, record) {  // 3
        this.getMain().push({
            xtype: 'memoform',
            record: record,                             // 4
            title: record.get('title')                  // 5
        });
    },
    
    
    onRemoveButtonTap: function() {            // 3
        var form = this.getForm(),
            record = form.getRecord(),
            store = Ext.getStore('Memos');     // 4

        store.remove(record);                  // 5
        store.sync();                          // 6
        this.getMain().onBackButtonTap();      // 7
    }
    

});