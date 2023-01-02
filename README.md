# .envite - a simple, secure, and easy to use encryption tool

Ever felt the odd feeling, when you had to send a secret message to someone, and you had to use a channel that you don't trust? Well, .envite is here to help you with that.

## Motivation

Realizing the lack of sensibility that many internet users have regarding their vulnerable secrets, I decided to create a tool that would help them encrypt their messages, and send them securely.
It is conventient and easy to put a password or key into an email and send or receive it, but it is not secure. The password or key can be intercepted, and the message can be read.
Additionally to that, the message can be read by the server that is hosting the email, and the email provider can read it as well. It really is a disaster waiting to happen.

## How .envite works

Every process we have has a simple underlying principle. Text based encryption with AES.
Everything that we do with .envite is text based encryption. If you simply have to share a message, we take your text input, encrypt it with AES and store the encrypted value. If you want to share an image, we transform the buffer to base64
and encrypt this character based information, proceeding the same way as with the text based message.

When entering your secret in the frontend, we send it to the server via an TLS encrypted connection. The server then encrypts the message with AES, stores the decrypted value and attaches the key and IV to the link which is send back to the frontend. The frontend then displays the link to the user, who can then send it to the recipient. The recipient can then open the link, and the server will decrypt the message with the key and IV that is stored in the link. The message is then displayed to the user.
Opening the link is the only way to decrypt the message, and the link is only valid a single time. After that, the encrypted message is deleted from the database server.

## Initialization vectors

An IV or initialization vector is, in the widest sense, just the initial value used to start an iterated process. The term is used in various contexts and implies different security requirements in each of them. For example, cryptographic hash functions will typically have a fixed IV, which is just an arbitrary constant included in the hash function specification and used as the initial hash value before any data is entered:

Conversely, the majority of block cipher operating modes require an IV that is random and unpredictable, or at least unique for each message encrypted with a particular key. (Of course, if each key is only ever used to encrypt a single message, one can get away with a fixed IV). This random IV ensures that each message is encrypted differently, so viewing multiple messages encrypted with the same key won't work. ' Don't give the attacker more information than just seeing one long message. In particular, ensure that encrypting the same message twice gives two completely different ciphertexts, which is necessary for the encryption scheme to be semantically secure.

In any case, the IV need never be kept secret - if it were, it would be a key, not an IV. In fact, in most cases it would be impractical to keep the IV secret even if you wanted to, since the recipient needs to know this in order to decrypt the data (or check the hash, etc.).
