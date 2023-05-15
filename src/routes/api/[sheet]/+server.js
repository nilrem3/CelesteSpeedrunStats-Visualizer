// @ts-nocheck
import {config} from 'dotenv';

config();

import GSheetReader from 'g-sheets-api';

export async function GET(event){

    const options = {
        apiKey: process.env.GOOGLE_SHEETS_API_KEY,
        sheetId: event.params.sheet,
        sheetName: "Raw Data"
    }

    let sheet_data = {};
    let status = 200

    await GSheetReader(
        options,
        results => {
            status = 200
            sheet_data = results;
        },
        error => {
            status = 500
        }
    )

    return new Response(JSON.stringify({data: sheet_data}), {status: status});
}