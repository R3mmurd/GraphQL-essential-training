import { Friends, Aliens } from './dbConnectors';

class Friend {
    constructor(id, {firstName, lastName, gender, age, email, contacts}) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.email = email;
        this.language = language;
        this.contacts = contacts;
    }
}

// resolver map
export const resolvers = { 
    Query: {
        getOneFriend: (root, { id }) => {
            return new Promise((resolve, err) => {
                Friends.findById(id, (err, friend) => {
                    if (err) reject(err)
                    else resolve(friend)
                });
            });
        },
        getAliens: ()  => {
            return Aliens.findAll();
        },
    },
    Mutation: {
        createFriend: (root, { input }) => {
            const newFriend = new Friends({
                firstName: input.firstName,
                lastName: input.lastName,
                gender: input.gender,
                age: input.age,
                email: input.email,
                language: input.language,
                contacts: input.contacs,
            });

            newFriend.id = newFriend._id;

            return new Promise((resolve, object) => {
                newFriend.save((err) => {
                    if (err) reject(err)
                    else resolve(newFriend)
                });
            });
        },
        updateFriend: (root, { input }) => {
            return new Promise((resolve, object) => {
                Friends.findOneAndUpdate({ _id: input.id }, input, { new: true }, (err, friend) => {
                    if (err) reject(err)
                    else resolve(friend)
                });
            });
        },
        deleteFriend: (root, { id }) => {
            return new Promise((resolve, err) => {
                Friends.remove({ _id: id }, (err) => {
                    if (err) reject(err)
                    else resolve('Successfully deleted friend')
                });
            });
        },
    },
};
