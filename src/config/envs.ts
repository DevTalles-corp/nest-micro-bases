import 'dotenv/config';

import * as joi from 'joi';


interface EnvVars {
  port: number;
}


const envsSchema = joi.object({
  PORT: joi.number().required()
})
.unknown(true);

const { error, value: envVars } = envsSchema.validate( process.env );


if ( error ) {
  throw new Error(`Config validation error: ${ error.message }`);
}


export const envs = {
  port: envVars.PORt as number,
}