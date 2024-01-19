//making Post form where we add 
import React, {useCallback, useEffect} from 'react'
import {useForm} from 'react-hook-form';
import {Button, Input, Select, RTE } from '../index';
import appwriteService from '../../appwrite/config';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authService from '../../appwrite/auth';


function PostForm({post}) {

    //now functionality
    const {register, handleSubmit, control, watch, setValue, getValues} = useForm({
        defaultValues:{
            title: post?. title || " ", //post hai agr toh uska title use krlo wrna title empty rakh do.
            slug: post?.slug || " ",
            content: post?.content || " ",
            status: post?.status || "active",
        }
    }); //here control is important get control from the RTE //// setValues use to set the values in form its useFOrm method.


    //navigate banayenge
    const navigate = useNavigate();
    // we want userData from the state
    const userData = useSelector(state => state.user.userData);

    //if user nei form submit kr dia toh data pass kiya hoga >> we will make submit method
    const submit = async (data) => {
       //age post hai toh usko edit krenge wrna new entry create krenge!
        if(post) {
            //store kr liya file mei.
          const file = data.image[0] ? appwriteService.uploadFile(data.image[0]) : null;

          //agr file hai toh purani image delete krna hai
          if(file) {
            appwriteService.deleteFile(post.featuredImage);
          }

          //updatePost
          const dbPost = await appwriteService.updatePost(post.$id, {
                ...data,
                featuredImage : file ? file.$id : undefined,
            });

          if(dbPost) {
            navigate(`/post/${dbPost.$id}`);
         }

        } else {
            //creating/updating new file
            const file = await appwriteService.uploadFile(data.image[0]);

            if(file) {
                const fileId = file.$id;
                data.featuredImage = fileId;
                //sending data as it is
                const dbPost = await appwriteService.createPost({
                    ...data,
                    userId: userData.$id,
                });
                if(dbPost) {
                    navigate(`/post/${dbPost.$id}`);
                }
            }
        }
    }

//slug transform  >> interview  prepration important
const slugTransform = useCallback((value) => {
    //if value is present and typeOf value === string
    if(value && typeof value === "string") 
        return value
        .trim() //value ko trim kr denge 
        .toLowerCase() //trimmed value ko lowercase mei convert kr denge
        .replace(/^[a-zA-Z\d\s]+/g, '-') //replace space with (-) using regex
        .replace(/\s/g, '-'); //convert space globally with (-).
    
    return ''

}, []);

useEffect(() =>{
    const subscription = watch((value, {name}) => {
        if( name === "title") {
            setValue('slug', slugTransform(value.title), {
                shouldValidate: true,
            });
        }
    });


    //for memory management and optimization
    return () => {
        subscription.unsubscribe();
    }
}, [watch, slugTransform, setValue]);


  return (
    <>
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    </>
  )
}

export default PostForm