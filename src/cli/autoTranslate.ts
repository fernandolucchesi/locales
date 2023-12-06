import dotenv from 'dotenv'
import {autoTranslate, pushChanges} from '../api/autoTranslate'
import {runScript} from '../util/runScript'

// Load environment variables from .env file, where API key for OpenAI is hopefully present.
// The auto-translation will throw an error if the API key is missing.
dotenv.config()

// ¡Vamos!
;(async () => {
  await runScript(autoTranslate)
  await runScript(pushChanges)
})()
