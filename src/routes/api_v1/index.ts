import { Router } from "express";
import { readdirSync } from 'fs';

// Create a new Express router for API version 1.
const routerApiV1 = Router();

// Define the path to the router modules.
const PATH_ROUTER = `${__dirname}`;

// Function to remove the file extension from a filename.
const clearFileName = (fileName: string) => fileName.split('.').shift();

// Read and import all router modules in the current directory.
readdirSync(PATH_ROUTER).forEach((filename) => {
    const cleanName = clearFileName(filename);
    if (cleanName !== 'index') {
        import(`./${cleanName}`).then((moduleRouter) => {
            // Mount the imported router under the /v1/cleanName route.
            routerApiV1.use(`/v1/${cleanName}`, moduleRouter.router);
        });
    }
});

export { routerApiV1 };
