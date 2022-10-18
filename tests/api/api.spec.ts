import{test,expect} from '@playwright/test'

test.describe.parallel('API Testing',()=>{
    const baseUrl= 'https://reqres.in/api'

    test('Simple API Testing',async({request})=>{
       const response = await request.get(`${(baseUrl)}/users/2`)
       expect(response.status()).toBe(200)
    })
    test('Simple API Test Assert Invalid Endpoint',async({request})=>{
        const response = await request.get(`${(baseUrl)}/users/non-existing-endpoint`)
        expect(response.status()).toBe(404)
     })
     test('Get Request - Get User Details',async({request})=>{
        const response = await request.get(`${(baseUrl)}/users/1`)
        const responseBody = JSON.parse(await response.text())

        expect(response.status()).toBe(200)
        expect(responseBody.data.id).toBe(1)
        expect(responseBody.data.first_name).toBe('George')
        expect(responseBody.data.last_name).toBe('Bluth')
        expect(responseBody.data.email).toBeTruthy()
    
    })
})