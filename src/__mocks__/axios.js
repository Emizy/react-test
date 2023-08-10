const mockResponse = {
    data: {
        results: [
            {
                name: {
                    first: 'John',
                    last: 'Doe'
                },
                picture: {
                    large: 'https://randomuser.me/api/portraits/women/58.jpg'
                },
                login: {
                    username: 'John doe'
                }
            }
        ]
    }
}
export default {
    get: jest.fn().mockResolvedValue(mockResponse)
}