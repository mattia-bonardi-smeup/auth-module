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
  [
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
  [JWT_SECRET], //optional
  [JWT_ACCESS_TOKEN_DURATION], //optional
  [JWT_REFRESH_TOKEN_DURATION] //optional
)
```

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

```typescript
registration(user: User)
```

### ConfirmSignIn

Confirm user registration. Set isActive = true

```typescript
confirmSignIn(userId: string)
```

### RefreshToken

Check refreshToken and return new accessToken

```typescript
refreshToken(refreshToken: string): Promise<TokenData>
```

## authorizeUser

Check accessToken, and user roles

```typescript
authorizeUser(accessToken: string, ...roles: string[]): Promise<User>
```

## getUserById

Getting user info (password will be blank)

```typescript
getUserById(userId: string)
```

## deleteUser

Delete user

```typescript
deleteUser(userId: string)
```

## updateUser

Update user

```typescript
updateUser(userUpdated: User)
```

## Utils

### createEmptyUser

Create empty user

```typescript
createEmptyUser(): User
```
