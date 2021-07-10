import { User } from './models/User'

const user = new User ({name:'Arvind2', age:21});

user.events.on('change', () => {
    console.log('change!');
});

user.events.trigger('change');