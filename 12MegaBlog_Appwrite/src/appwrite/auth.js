// //importing all the id from the conf file
// import conf from "../conf/conf";
// import { Client, Account, ID } from 'appwrite';

// //making new class authservice
// export class AuthService {
//     client = new Client();
//     account;

//     constructor() {
//         //creating client in constructor function
//         this.client
//             .setEndpoint(conf.appwriteUrl)
//             .setProject(conf.appwriteProjectId);

//         //after client is created then we are creating account
//         this.account = new Account(this.client);
//     }

//     //making CreateAccount method in this class and we are using async and await first account needed to create the account then user can login.
//     async createAccount({ email, password, name }) {
//         //createAccount method sometimes fail so to catch error we are using try & catch block.
//         try {
//             //creating accountCreate method
//             const userAccount = await this.account.create(ID.unique(), email, password, name);

//             //checking if userAccount is created or not
//             if (userAccount) {
//                 // console.log(userAccount);
//                 //call another method to login the user.
//                 return this.login({ email, password });

//             } else {
//                 return userAccount
//             }
//         } catch (error) {
//             throw error;
//         }
//     }

//     //making login method in this class
//     async login({ email, password }) {
//         try {
//             //creating login functionality using account.createEmailSession and returing it
//             const userLogin = await this.account.createEmailSession(email, password);
//             return userLogin;
//         } catch (error) {
//             throw error;
//         }
//     }

//     //making getCurrentUser method
//     async getCurrentUser() {
//         try {
//             //it will get the current user
//             return await this.account.get();
//         } catch (error) {
//             console.log("Appwrite service :: getCurrentUser :: error", error);
//         }
//         return null;
//     }

//     //making logout method in this class
//     async logout() {
//         try {
//             //logging out the current session  we are using deleteSessions to delete all the sessions
//             await this.account.deleteSessions();
//         } catch (error) {
//             console.log("Appwrite service :: logout :: error", error);
//         }
//     }
// }


// //making new authservice object with help of above class
// const authService = new AuthService();


// //exporting our authservice object
// export default authService;


import conf from '../conf/conf.js';
import { Client, Account, ID } from "appwrite";


export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);

    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // call another method
                return this.login({ email, password });
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }

        return null;
    }

    async logout() {

        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }
}

const authService = new AuthService();

export default authService