import 'dotenv/config'
import mongoose, { connect } from 'mongoose'
import { downConnection, readyConnection } from '../utils/dbConsoleStart';

/**
 * Configures Mongoose to disable strict mode for queries.
 * This allows querying fields that are not defined in the schema.
 */
mongoose.set('strictQuery', false);

/**
 * Asynchronously establishes a connection to the MongoDB database using the provided URI.
 * Logs the "readyConnection" message if the connection is successful.
 * Logs the "downConnection" message if an error occurs during the connection process.
 */
(async (): Promise<void> => {
    try {
        const DB_URI = <string>process.env.DB_URI;
        await connect(DB_URI);
        console.log(readyConnection);
    } catch (err) {
        console.log(downConnection);
    }
})();
