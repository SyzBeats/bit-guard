# .envite - Simple, Secure Encryption for Sharing Sensitive Data

.envite.dev is a streamlined encryption tool developed to help users securely share sensitive information over untrusted
communication channels. Built on the Advanced Encryption Standard (AES), .envite transforms messages and other
text-based data into encrypted content that can be accessed solely by the intended recipient.

## Introduction

With the increasing prevalence of online communication, the risk of data exposure is a critical concern. Emails, chat
applications, and other common communication methods are often vulnerable to interception or unauthorized access.
.envite addresses this risk by providing a secure encryption solution, designed specifically to protect sensitive
information such as passwords, private messages, or confidential files when shared online.

.envite operates on a foundational principle of text-based AES encryption. All data—whether plain text or binary data
like images—is converted to text format, then encrypted before it is shared. This ensures that the message content
remains confidential throughout its lifecycle.

When a user inputs a message on the .envite frontend, the data is sent to the server over a TLS-encrypted connection.
The server then encrypts the message using AES, securely storing the encrypted content. A single-use link is generated,
which includes the encryption key and initialization vector (IV) required for decryption. This link is then returned to
the frontend, where it can be shared with the intended recipient.

The recipient can use the link to access the encrypted content, which is decrypted using the key and IV embedded in the
link itself. Importantly, each link is valid for a single use only, ensuring that once the recipient accesses the
message, it is permanently deleted from the server. This approach minimizes data persistence and ensures secure,
one-time access to sensitive information.

## Key Features

- **AES Encryption**: All data, including text and images (encoded as base64), is encrypted using AES, providing a high
  level of data security.
- **One-Time Access Links**: Each link is designed for single use, automatically expiring after it is accessed to
  prevent unauthorized viewing.
- **Ephemeral Storage**: Encrypted data is stored temporarily on the server and is automatically deleted after it is
  accessed, ensuring no residual data remains.
- **End-to-End TLS Protection**: Data transmission is secured using TLS encryption, preventing interception during the
  transfer between client and server.

## Use Cases

.envite is designed for situations where users need to share sensitive information securely but lack access to a
trusted, private channel. Common scenarios include:

- **Secure Password Sharing**: Sharing login credentials without storing them in plain text on email servers or chat
  platforms.
- **One-Time Secret Transfers**: Sending sensitive information that should only be accessed once, such as confidential
  documents or personal details.
- **Temporary Data Sharing**: Sharing information that does not need to persist, such as short-term project details or
  single-use access keys.

This document will continue with detailed sections on setup, usage, API structure, and integration strategies for
developers seeking to implement .envite’s encryption capabilities within their own applications.
