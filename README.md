## important links

- https://www.prisma.io/docs/concepts/components/prisma-migrate/legacy-migrate
- https://www.prisma.io/docs/reference/api-reference/command-reference#generate

## Initialization vectors

An IV or initialization vector is, in the widest sense, just the initial value used to start an iterated process. The term is used in various contexts and implies different security requirements in each of them. For example, cryptographic hash functions will typically have a fixed IV, which is just an arbitrary constant included in the hash function specification and used as the initial hash value before any data is entered:

Conversely, the majority of block cipher operating modes require an IV that is random and unpredictable, or at least unique for each message encrypted with a particular key. (Of course, if each key is only ever used to encrypt a single message, one can get away with a fixed IV). This random IV ensures that each message is encrypted differently, so viewing multiple messages encrypted with the same key won't work. ' Don't give the attacker more information than just seeing one long message. In particular, ensure that encrypting the same message twice gives two completely different ciphertexts, which is necessary for the encryption scheme to be semantically secure.

In any case, the IV need never be kept secret - if it were, it would be a key, not an IV. In fact, in most cases it would be impractical to keep the IV secret even if you wanted to, since the recipient needs to know this in order to decrypt the data (or check the hash, etc.).

## Library

- Charts: https://airbnb.io/visx/gallery or https://react-charts.tanstack.com/docs/getting-started


