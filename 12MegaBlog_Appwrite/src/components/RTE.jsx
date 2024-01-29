// //we are making RTE >> Real time editor
// import React from 'react'
// //importing editor from tinymce
// import {Editor} from '@tinymce/tinymce-react'
// //importing controller from react hook form
// import {Controller} from 'react-hook-form';

// //here control is important when someone call this RTE component then the all the control will pass on to the component which called this component.
// export default function RTE({name, control, label, defaultValue = ""}) {



//   return (
//     <>
//         <div className='w-full'>
//             {/* if label is present then it will show label  */}
//             {label && <label className='inline-block mb-1 pl-1'>{label}</label>}
//         </div>

//         <Controller 
//         name = {name || "content"}
//         control={control}
//         render={({field : {onChange}}) => (
//             <Editor 
//             initialValue = {defaultValue}
//             init={{
//                 initialValue: defaultValue,
//                 height: 500,
//                 menubar: true,
//                 plugins :[
//                 "image",
//                 "advlist",
//                 "autolink",
//                 "lists",
//                 "link",
//                 "image",
//                 "charmap",
//                 "preview",
//                 "anchor",
//                 "searchreplace",
//                 "visualblocks",
//                 "code",
//                 "fullscreen",
//                 "insertdatetime",
//                 "media",
//                 "table",
//                 "code",
//                 "help",
//                 "wordcount",
//                 "anchor",
//                 ],
//                 toolbar: "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
//                 content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
//             }}
//             />
//         )}
//         />
//     </>
//   )
// }

import React from 'react'
import {Editor } from '@tinymce/tinymce-react';
import {Controller } from 'react-hook-form';


export default function RTE({name, control, label, defaultValue =""}) {
  return (
    <div className='w-full'> 
    {label && <label className='inline-block mb-1 pl-1'>{label}</label>}

    <Controller
    name={name || "content"}
    control={control}
    render={({field: {onChange}}) => (
        <Editor
        initialValue={defaultValue}
        init={{
            initialValue: defaultValue,
            height: 500,
            menubar: true,
            plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
            ],
            toolbar:
            "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
        }}
        onEditorChange={onChange}
        />
    )}
    />

     </div>
  )
}