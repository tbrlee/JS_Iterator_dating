const data = [
    {
        name: 'John Doe',
        age: 32,
        gender: 'male',
        lookingfor: 'female',
        location: 'Boston MA',
        image: 'https://randomuser.me/api/portraits/men/68.jpg'
                
    },
    {
        name: 'JoJane Smith',
        age: 30,
        gender: 'female',
        lookingfor: 'male',
        location: 'Seattle WA',
        image: 'https://randomuser.me/api/portraits/women/20.jpg'
    },
    {
        name: 'Denise Jacobs',
        age: 32,
        gender: 'female',
        lookingfor: 'male',
        location: 'Miami FL',
        image: 'https://randomuser.me/api/portraits/women/87.jpg'
    },
    {
        name: 'Roy Atkins',
        age: 34,
        gender: 'male',
        lookingfor: 'female',
        location: 'Dallas TX',
        image: 'https://randomuser.me/api/portraits/men/32.jpg'
    }
];

const profiles = profileIterator(data);

//Next Event
document.getElementById('next').addEventListener('click', nextProfile);

//Next Profile Display
function nextProfile() {
    const currentProfile = profiles.next().value;

    if (currentProfile !== undefined){ 
        document.getElementById('profileDisplay').innerHTML = `
            <ul class="list-group">
                <li class="list-group-item">Name: ${currentProfile.name}</li>
                <li class="list-group-item">Age: ${currentProfile.age}</li>
                <li class="list-group-item">Location: ${currentProfile.location}</li>
                <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>       
            </ul>`;  
        
            document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`
    }
    else

    window.location.reload();
}


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

