import axios from 'axios';

const registerCustomer = 'http://localhost:12000/register/customer';
const registerAdmin = 'http://localhost:12000/register/admin';
const login = 'http://localhost:12000/login';
const logout = 'http://localhost:12000/login/logout';
const getuser = 'http://localhost:12000/login/user';
const addimage = "http://localhost:12000/login/image";
const changePassword = "http://localhost:12000/login/password";

class AccountService {
    static async createAccount(form) {
        var object = {};
        form.forEach((value, key) => object[key] = value);
        var data = JSON.stringify(object);
        var json = JSON.parse(data);
        console.log("json", json.type);
        if (json.type === "Audience") {
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
        return await axios.post(login,
            json
        )
    }

    static async getSession() {
        return await axios.get(login).then(response => {
            return response;
        }).catch(() => {
            return false
        })
    }

    static async Logout(){
        return await axios.get(logout).then(() => {
            console.log("logged out");
        })
    }

    static async getUsserInfo(){
        return await axios.get(getuser)
    }

    static async addimage(form){

        // let object ={}
        // form.forEach((value, key) => object[key] = value);
        // console.log("Asd",object)
        return await axios.put(addimage, form)
    }

    static async changePassword(form){
        var object = {};
        form.forEach((value, key) => object[key] = value);
        var data = JSON.stringify(object);
        var json = JSON.parse(data);
        return await axios.put(changePassword, json)
    }
}
export default AccountService
