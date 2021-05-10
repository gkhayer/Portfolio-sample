//step 1
//createContext();
//step 2
//need a provider to provide(access)
//step 3
//need consumer to consume data 
//consumer only understands functions so pass functions only ; pass callback function

// its create callback hell so use useContext

import React, { createContext, useContext } from 'react'


const FirstName = createContext();

<FirstName.Provider>
    <WriteConsumeComponentname></WriteConsumeComponentname>
</FirstName.Provider>



const fname = useContext()