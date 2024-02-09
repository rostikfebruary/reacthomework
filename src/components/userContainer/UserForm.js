import {useForm, useFormState} from "react-hook-form";
import {userService} from "../sseervices/userService";

const UserForm = ({setPosts}) => {


    const{reset, register, handleSubmit} = useForm()

   const save = (item) =>{
      userService.create(item).then(({data})=>setPosts(prev=>[...prev, data]))

   }
    return (
        <form onSubmit={handleSubmit(save)}>
            {/*<input type=" text" placeholder={'id'} {...register('id')}/>*/}
            <input type=" text" placeholder={'name'} {...register('name')}/>
            <input type=" text" placeholder={'username'} {...register('username')}/>
            <input type=" text" placeholder={'email'} {...register('email')}/>
            <button>save</button>
        </form>
    );
};

export {UserForm};