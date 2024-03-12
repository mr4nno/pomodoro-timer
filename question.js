const questions = [
    {
        type: 'number',
        name: 'work',
        message : 'Work (minutes)'
    },
    {
        type: 'number',
        name: 'rest',
        message : 'Rest (minutes)'
    },
    {
        type: 'number',
        name: 'repeat',
        message : 'Repeat until'
    },
    {
        type : 'multiselect',
        name: 'music',
        message: 'Pick your music',
        choices : [
            {name : 'lofi', value : 'lofi-music'},
            {name : 'jazz', value : 'jazz-music'},
            {name : 'piano', value : 'lofi-music'},
            {name : 'rain', value : 'lofi-music'},
        ]
    }

]

module.exports = { questions }