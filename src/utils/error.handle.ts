import { Response } from 'express';

/**
 * Handles HTTP errors by sending a JSON response with a status code of 500 (Internal Server Error).
 * @param res - The Express response object.
 * @param err - A string representing the error message.
 * @param errorRaw - (Optional) An object containing additional error details.
 */
const handleHttp = (res: Response, err: string, errorRaw?: { message?: string }): void => {
    const { message } = errorRaw || {};
    res.status(500).json({
        results: [],
        message: err,
        error: message || 'Internal Error',
    });
}

/**
 * Handles custom responses by sending a JSON response with the specified status code, message, and results.
 * @param res - The Express response object.
 * @param status - The HTTP status code to be included in the response.
 * @param message - A string representing the message to be included in the response.
 * @param results - (Optional) Data or results to be included in the response.
 */
const handleCustomResponse = (res: Response, status: number, message: string, results?: any[]): void => {
    let count: number | undefined = undefined;
    if (Array.isArray(results) && results.length > 0) {
        count = results.length;
    }
    res.status(status).json({
        count,
        message,
        results: results || [],
    });
}


export { handleHttp, handleCustomResponse }