import * as express from 'express';

import link from './link';
import signal from './signal';
import slack from './slack';

const router = express.Router({ caseSensitive: false });

/**
 * @GET /public/link/:token
 * @description access for non logged in users to links that
 * they have obtained
 */
router.get('/link/:cipher', link.decipher);

/**
 * @GET /public/signal/:id
 * @description one time signals will be decrypted and destroyed
 */
router.get('/signal/:id', signal.decryptAndDestroy);

/**
 * @GET /public/publicSignal/:id
 * @description This route is used for signals which have been created via the
 * public feature on the home page. This route is used to decrypt the signal and
 * destroy it afterwards.
 */
router.get('/publicSignal/:id', signal.decryptAndDestroyPublic);

/**
 * @POST /slack
 * @description This route is used for the slack API
 */
router.post('/slack', slack.createLink);

export default router;
