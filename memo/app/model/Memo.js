Ext.define('Memo.model.Memo', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [
            {name: 'id', type: 'auto'},
            {name: 'filename', type: 'string'},
            {name: 'dir', type: 'auto'},
            {name: 'description', type: 'auto'},
            {name: 'created', type: 'auto'}
        ]
    }
});