import axios from 'axios';

const registerCustomer = 'http://localhost:12000/register/customer';
const registerAdmin = 'http://localhost:12000/register/admin';
const login = 'http://localhost:12000/login';
const logout = 'http://localhost:12000/login/logout';
class AccountService {
    static async createAccount(form) {
        var object = {};
        form.forEach((value, key) => object[key] = value);
        var data = JSON.stringify(object);
        var json = JSON.parse(data);
        console.log("json", json.type);
        if (json.type === "Customer") {
            return await axios.post(registerCustomer, json).then(response => {
                console.log(response);
                return response;
            }).catch(error => {
                console.log(error.response);
                return error.response;
            })
        } else if (json.type === "Admin") {
            return await axios.post(registerAdmin, json).then(response => {
                console.log(response);
                return response;
            }).catch(error => {
                console.log()
                console.log(error.response);
                return error.response;
            })
        }
    }
    static async Login(form) {
        var object = {};
        form.forEach((value, key) => object[key] = value);
        var data = JSON.stringify(object);
        var json = JSON.parse(data);
        console.log(json)
        return await axios.post(login,
            json
        )
    }

    static async getSession() {
        return await axios.get(login).then(response => {
            console.log(response)
            return response;
        })
    }

    static async Logout(){
        return await axios.get(logout).then(() => {
            console.log("logged out");
        })
    }
}
export default AccountService
