export const navigation = [
    {
        'id': 'applications',
        'title': 'Applications',
        'translate': 'NAV.APPLICATIONS',
        'type': 'group',
        'children': [
            {
                'id': 'people',
                'title': 'People',
                'translate': 'NAV.PEOPLE.TITLE',
                'type': 'item',
                'icon': 'people',
                'url': '/people',
                /*                 'badge': {
                                    'title': 25,
                                    'translate': 'NAV.SAMPLE.BADGE',
                                    'bg'   : '#F44336',
                                    'fg'   : '#FFFFFF'
                                } */
            }, {
                'id': 'audience',
                'title': 'Audience',
                'translate': 'NAV.AUDIENCE.TITLE',
                'type': 'item',
                'icon': 'people',
                'url': '/audience',
                /*                 'badge': {
                                    'title': 25,
                                    'translate': 'NAV.SAMPLE.BADGE',
                                    'bg'   : '#F44336',
                                    'fg'   : '#FFFFFF'
                                } */
            }
        ]
    }
];
