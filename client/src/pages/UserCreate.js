import { Input, Button, Tooltip } from "@nextui-org/react";
import { useRef, useEffect, useState, useCallback } from "react";
import { UserCards } from "../components/UserCards";
import { RiUserAddFill } from "react-icons/ri"
import axios from "axios"
import { SERVER_BASE_URL } from "../Global";

export const UserCreate = () => {
    const [users, setUsers] = useState([])

    const emailRef = useRef();
    const passwordRef = useRef();


    const getUsers = useCallback(
        () => {
            axios.get(`${SERVER_BASE_URL}/users`)
                .then((response) => {
                    setUsers(response.data)
                    console.log(response.data);
                }).catch(e => {
                    console.log(e);
                })
        },
        []
    )


    const createUser = (e) => {
        axios.post(`${SERVER_BASE_URL}/users`, {
            email: emailRef.current.value,
            password: passwordRef.current.value
        }).then(() =>
            getUsers()
        ).catch(e => {
            alert(e.response.data)
        })
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <div className="h-screen">
            <p className="my-5 text-2xl text-bold text-center">CREATE USER</p>
            <form
                onSubmit={createUser}
                className="flex justify-center items-center gap-5 my-10"
            >
                <Input
                    ref={emailRef}
                    isClearable
                    isRequired
                    type="email"
                    label="Email"
                    variant="bordered"
                    className="max-w-[220px]"
                    size="sm"
                />
                <Input
                    ref={passwordRef}
                    isClearable
                    isRequired
                    type="password"
                    label="Password"
                    variant="bordered"
                    className="max-w-[220px]"
                    size="sm"
                />
                <Tooltip content="Create User">
                    <Button
                        isIconOnly
                        type="submit"
                        className='bg-black text-white'
                        size="lg"
                    >
                        <RiUserAddFill />
                    </Button>
                </Tooltip>
            </form>

            <UserCards users={users} />
        </div>
    )
}
