const { test, expect } = require('@playwright/test');
const { request } = require('http');

test('Get Request (GET)', async ({ request }) => {
    // Perform the GET request
    const response = await request.get('https://reqres.in/api/users?page=2');
    
    // Log the response data
    const responseData = await response.json();
    console.log(responseData);

    // Verify the response status
    expect(response.status()).toBe(200);
}); 



test('Create user (post)', async ({ request }) => {
    const response = await request.post('https://reqres.in/api/users', {
        data: { name: 'Kumar', job: 'Trainer' },
        headers: { 'Accept': 'application/json' },
    });

    // Log the response data
    const responseData = await response.json();
    console.log(responseData);
    

    // Verify the response status
    expect(response.status()).toBe(201);  // Assuming the API returns 201 for successful creation
});



test('Update user (PUT)', async ({ request }) => {
    const userid = 2; // Define the user ID you want to update

    const response = await request.put(`https://reqres.in/api/users/${userid}`, {
        data: { name: 'Kumar', job: 'Engineer' },
        headers: { 'Accept': 'application/json' },
    });

    // Log the response data
    const responseData = await response.json();
    console.log(responseData);

    // Verify the response status
    expect(response.status()).toBe(200);  // Assuming the API returns 200 for successful update
});



test('Delete user (DELETE)', async ({ request }) => {
    const response = await request.delete('https://reqres.in/api/users/563', {
        headers: { 'Accept': 'application/json' },
    });

    // Log the response data
    // const responseData = await response.json();
    // console.log(responseData);

    // Verify the response status
    expect(response.status()).toBe(204);  // Assuming the API returns 204 for successful deletion
});