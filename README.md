# Auth Module

Auth module for node.js backend applications

## Installation

```
npm install @iterout/auth-module
```

## Configuration

To use correctly the auth-module you must configure:

- Email service
- Jwt service (optional)

```typescript
import { configureAuth } from "@iterout/auth-module";
import { createEmailConfig } from "@iterout/email-sender-module";
import { join } from "path";

// create auth email configuration
const authEmailConfig: EmailConfig = createEmailConfig(
  emailTemplatesDirectories: [
    join(process.cwd(), [MAIL_TEMPLATE_DIR],
    join(process.cwd(), "node_modules", "@iterout", "auth-module", "mail_templates")
  ],
  [EMAIL_SENDER],
  [EMAIL_SENDER_PASSWORD],
  [EMAIL_SERVICE]
)

// configure auth module
configureAuth(
  authEmailConfig,
  [FRONTEND_URL],
  [DEV_FRONTEND_URL], //optional
  [JWT_SECRET], //optional
  [JWT_ACCESS_TOKEN_DURATION], //optional
  [JWT_REFRESH_TOKEN_DURATION] //optional
)
```

## User attributes (User type)

- id: user id
- isActive: active flag
- email: email
- password: password
- firstName: first name
- lastName: last name
- type: types of user (es. customer, admin...)
- roles: roles
- isOauth: oath flag

## Functions

### Login

Verify user credential to mongodb and retrun authorizations tokens

```typescript
login(authData: AuthData): Promise<TokenData>
```

### Logout

Clear and return tokens

```typescript
logout(): Promise<TokenData>
```

### Registration

Check and save user to mongodb

```
registration(user: User)
```

### ConfirmSignIn

Confirm user registration. Set isActive = true

```
confirmSignIn(userId: string)
```

### RefreshToken

Check refreshToken and return new accessToken

```
refreshToken(refreshToken: string): Promise<TokenData>
```

## authorizeUser

Check accessToken, and user roles

```
authorizeUser(accessToken: string, ...roles: string[]): Promise<User>
```

## getUserById

Getting user info (password will be blank)

```
getUserById(userId: string)
```

## deleteUser

Delete user

```
deleteUser(userId: string)
```

## updateUser

Update user

```
updateUser(userUpdated: User)
```

## Utils

### createEmptyUser

Create empty user

```
createEmptyUser(): User
```
