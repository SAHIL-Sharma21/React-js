//blog app configuration in this service
import conf from "../config/conf";

//importing from appwrite
import { Client, ID, Databases, Storage, Query } from 'appwrite';



//making service class
export class Service {

    //defining property.
    client = new Client();
    databses;
    bucket;

    //variables aa gye hai and hamara account tb banega jb constructor call hoga!!
    //making constructor
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        //making database using client as written in documentation
        this.databses = new Databases(this.client);
        //making bucket using client as written in documentation
        this.bucket = new Storage(this.client);
    }

    //making create post method
    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databses.createDocument(
                conf.appwriteDatabaseId, //databaseID
                conf.appwriteCollectionId, //CollectionID
                slug, //documentID
                { //content object/ post content
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            );
        } catch (error) {
            console.log("Appwrite service :: createPost :: error", error);
        }
    }

    //update post >>we will identify by slug which is unique.
    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.databses.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            );
        } catch (error) {
            console.log("Appwrite service :: updatePost :: error", error);
        }
    }

    //delete post method
    async deletePost(slug) {
        try {
            await this.databses.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            );
            return true;
        } catch (error) {
            console.log("Appwrite service :: deletePost :: error", error);
            return false;
        }
    }

    //getPost method - getting 1 document
    async getPost(slug) {
        try {
            return await this.databses.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            );
        } catch (error) {
            console.log("Appwrite service :: getPost :: error", error);
            //if no error is found then we just return false
            return false;
        }
    }


    //listing post method writing query in default parameter >>> where status is active >>> we have to use Query for this
    async getPost(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databses.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
                // 100, //pagination
                // 0, // kitne results chaiye
            );
        } catch (error) {
            console.log("Appwrite service :: getPost :: error", error);
            return false;
        }
    }

    //now we make file upload services
    //upload file method

    async uploadFile(file) { //actual file pass karenge ..hme file ka naam nhi dena hai.
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId, //bucketID
                ID.unique(), //uniqueID
                file //actual file
            );
        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error", error);
            return false;
        }
    }

    //delete file method
    async deleteFile(fileID) {
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileID
            );
            //delete ho gyi hai toh true return krdenge
            return true;
        } catch (error) {
            console.log("Appwrite service :: deleteFile :: error", error);
            return false;
        }
    }

    //file preview
    getFilePreview(fileID) {
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileID
        );
    }

}



//making service object with Service class
const service = new Service();
export default service;








