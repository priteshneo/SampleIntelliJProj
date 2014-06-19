Ext.application({
    launch:function(){
        Ext.create('Ext.container.Viewport',{
            layout:'border',
            defaults: {
                collapsible: true,
                split: true,
                bodyStyle: 'padding:15px'
            },
            items: [{
                title: 'Footer',
                region: 'south',
                height: 150,
                minSize: 75,
                maxSize: 250,
                cmargins: '5 0 0 0'
            },{
                title: 'Navigation',
                region:'west',
                margins: '5 0 0 0',
                cmargins: '5 5 0 0',
                width: 175,
                minSize: 100,
                maxSize: 250
            },{
                title: 'Main Content',
                collapsible: false,
                region:'center',
                margins: '5 0 0 0',
                layout: {
                    type: 'vbox',
                    align : 'stretch',
                    pack  : 'start'
                },
                items:[
                    {html:'panel 1', flex:1,title:'Panel 1'},
                    {html:'panel 2', flex:1,title:'Panel 2'},
                    {
                        html:'panel 3',
                        flex:2,
                        bodyPadding:5, // Don't want content to crunch against the borders
                        width:300,
                        title:'Filters',
                        items:[
                            {
                                xtype:'field',
                                fieldLabel:'Email'
                            },
                            {
                                xtype:'field',
                                fieldLabel:'Password'
                            },
                            {
                                xtype:'datefield',
                                fieldLabel:'date'
                            }
                        ]

                    }
                ]
            }]
        })
    }
});