import React, { useState } from 'react';
import { Progress, Box, Flex, Button, Heading, Switch } from "@chakra-ui/react"
import FileUploadService from '../service/uploadFile.service'

const FileUpload = (props) => {
    let databaseName = {
        msSql: 'Mssql',
        sqlite: 'Sqlite'
    }
    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);
    const [defaultDb, setDefaultDb] = useState(databaseName.msSql);

    const handleFileUplad = (event) => {
        setSelectedFile(event.target.files[0]);
        console.log("*****", event.target.files[0]);
        setIsFilePicked(true);
    };

    const handleSubmit = (e) => {
        console.log("defaultDb", defaultDb);
        const formData = new FormData();
        formData.append('File', selectedFile);
        console.log(formData);
        //need to add selected db
        FileUploadService.upload(formData)
    }

    const handleDatabase = (e) => {
        e.target.checked == true ? setDefaultDb(databaseName.msSql) : setDefaultDb(databaseName.msSql)
    }
    const handleLogOut = () => {
        localStorage.clear();
        props.history.push("/login");
    }

    const SwitchButton = () => {
        return (
            <>
                MsSql <Switch size="md" onChange={handleDatabase} />SQlite
            </>
        )
    }

    return (
        <div>
            <Button colorScheme="blue" mt={15} mr={15} size="sm" float='right' onClick={handleLogOut}>Logout</Button>
            <Flex width="full" align="center" justifyContent="center">

                <Box p={30} mt={30} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
                    <input type="file" name="file" onChange={handleFileUplad} />
                    {isFilePicked ? (
                        <div>
                            <br /><br />
                            <h4>Filename: {selectedFile.name}</h4>

                            <Heading as="h6" size="xs">Size in bytes: {selectedFile.size} </Heading>
                            {/* <Progress value={80} /> */}
                        </div>
                    ) : (
                            <>
                                <br /><br />

                                <Heading as="h5" size="sm">
                                    Please select file to upload
                                </Heading>

                            </>
                        )}
                    <div>
                        <br />
                        {isFilePicked ? (<Button colorScheme="blue" mr={5} onClick={handleSubmit}>Submit</Button>) : ''}
                        {isFilePicked ? (<SwitchButton />) : ''}
                    </div>
                </Box>
            </Flex>
        </div>
    )

}

export default FileUpload;