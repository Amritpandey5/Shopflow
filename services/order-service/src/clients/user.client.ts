export async function getUserById(userId:string){

    const userServiceUrl = process.env.USER_SERVICE_URL || "http://localhost:3001";
    if(!userServiceUrl){
        throw new Error("USER_SERVICE_URL is not configured");
    }
    const response = await fetch(`${userServiceUrl}/users/${userId}`);

    if(response.status == 404){
        return null
    }

    if(!response.ok){
        throw new Error("User service request failed");
    }

    return await response.json();
}