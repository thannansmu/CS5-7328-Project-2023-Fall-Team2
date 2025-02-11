import {faker} from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();
function main()
{
 
}


require('dotenv').config();
import app from './app';

//decouple the app and the running server, so your tests can import the app without starting the server

const PORT = process.env.PORT || 9000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    main();
  });