## important links

- https://www.prisma.io/docs/concepts/components/prisma-migrate/legacy-migrate
- https://www.prisma.io/docs/reference/api-reference/command-reference#generate

## Initialization vectors

An IV or initialization vector is, in the widest sense, just the initial value used to start an iterated process. The term is used in various contexts and implies different security requirements in each of them. For example, cryptographic hash functions will typically have a fixed IV, which is just an arbitrary constant included in the hash function specification and used as the initial hash value before any data is entered:

Conversely, the majority of block cipher operating modes require an IV that is random and unpredictable, or at least unique for each message encrypted with a particular key. (Of course, if each key is only ever used to encrypt a single message, one can get away with a fixed IV). This random IV ensures that each message is encrypted differently, so viewing multiple messages encrypted with the same key won't work. ' Don't give the attacker more information than just seeing one long message. In particular, ensure that encrypting the same message twice gives two completely different ciphertexts, which is necessary for the encryption scheme to be semantically secure.

In any case, the IV need never be kept secret - if it were, it would be a key, not an IV. In fact, in most cases it would be impractical to keep the IV secret even if you wanted to, since the recipient needs to know this in order to decrypt the data (or check the hash, etc.).

## Libraries in use

- Charts: https://airbnb.io/visx/gallery or https://react-charts.tanstack.com/docs/getting-started

## Flow

### Generate a Message

When generating a message, all information will be asked in the frontend. This meaning the message content, a potential Passoword protection and all initial Link information.
The link information will contain the expiry date and some other options.

The message will be encrypted via AES in the backend. For that a secret Key is used. If the message is also protected with a password, this password will be hased in the backend and
in advance of displaying the message, the User has to enter this password. Only if the correct password is entered, the actual message is pulled from the DB and
decrypted.

### Generate a Link for a Message

Additionally to the initial Link any number of Links for one message can be generated. They can have different expiry dates and can be revoked / deleted as well

### Generate a one time Secret

This is a different workflow that the above. A one time secret will create a Message with an attached Link. The secret key will be generated on the fly.
and a new Link to this one time message will be generated in the same workflow. As the key is not known to anyone, the encryption key and message ID will be encoded in a JWT token
This token will be sent along to the client as one time link.

Once the user will hit the link, the token will be decoded and the key is used to decrypt the message behind the ID.
After hitting the link, the message is delivered in the frontend and the link and message will be destroyed.
