
   
const mockFire = {
    auth: jest.fn(() => ({
        currentUser: {
            email: 'test@test.com',
            delete: jest.fn(async() => {
                console.log('user deleted');
            })
        }
    })),
    firestore: jest.fn(() => ({
        collection: jest.fn(async() => {
            console.log('users');
        }),
        users: {
            name: 'test@test.com',
        }
    })),
};

export default mockFire;