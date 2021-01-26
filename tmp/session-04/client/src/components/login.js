import React, { useState, useRef } from "react";
import {
    Flex,
    Box,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Button,
    Alert,
    createStandaloneToast
} from '@chakra-ui/react';
import LoginService from '../service/auth.service';


const Login = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const form = useRef();

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };
    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    // const Toster = () => {
    //     return (
    //         toast({
    //             title: "Invalid Username or Password",
    //             status: "error",
    //             duration: 3000,
    //             isClosable: true,
    //             position: "top"
    //         })
    //     )
    // }

    const handleLogin = (e) => {
        e.preventDefault();
        const toast = createStandaloneToast();
        LoginService.Login(username, password).then(
            () => {
                if (localStorage.getItem('login-user')) {
                    props.history.push("/uploadFile");
                }
            },
            () => {
                return (
                    toast({
                        title: "Invalid Username or Password",
                        status: "error",
                        duration: 3000,
                        isClosable: true,
                        position: "top"
                    })
                )

            }
        )
    }

    return (
        <Flex width="full" align="center" justifyContent="center">
            <Box p={30} mt={100} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
                <Box textAlign="center">
                    <Heading>Login</Heading>
                </Box>
                <Box my={4} textAlign="left">
                    <form onSubmit={handleLogin} ref={form}>
                        <FormControl>
                            <FormLabel>Email</FormLabel>
                            <Input type="email"
                                placeholder="test@test.com"
                                name="username"
                                value={username}
                                onChange={onChangeUsername} />
                        </FormControl>
                        <FormControl mt={6}>
                            <FormLabel>Password</FormLabel>
                            <Input
                                type="password"
                                placeholder="*******"
                                name="password"
                                value={password}
                                onChange={onChangePassword}
                            />
                        </FormControl>
                        <Button width="full" mt={4} type="submit">
                            Login
                        </Button>
                    </form>
                </Box>
            </Box>
        </Flex>
    )
}

export default Login;