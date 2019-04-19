const data = [
    {
        name: 'John Doe',
        age: 32,
        gender: 'male',
        lookingfor: 'female',
        location: 'Boston MA',
        image: 'https://randomuser.me/potraits/men/60.jpg'
    },
    {
        name: 'JoJane Smith',
        age: 30,
        gender: 'female',
        lookingfor: 'male',
        location: 'Seaale WA',
        image: 'https://randomuser.me/potraits/women/62.jpg'
    },
    {
        name: 'Roy Atkins',
        age: 34,
        gender: 'male',
        lookingfor: 'female',
        location: 'Dallas TX',
        image: 'https://randomuser.me/potraits/men/64.jpg'
    },
];

//Profile iterator
function profileIterator(profiles) {
    let nextIndex = 0;

    return {
        next: function() {
            return nextIndex < profiles.length ?
            { value: profiles[nextIndex++], done: false} :
            { done: true}
        }
    };
}

