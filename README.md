# Auth Module

Auth module for node.js backend applications

## Installation

```
npm install @iterout/auth-module
```

## Configuration

By the default auth module is pre configured but it is possible to use custom configuration like this:

```
import {authModuleConfiguration} from "@iterout/auth-module";

authModuleConfiguration.setJwtSecret([JWT_SECRET]);
authModuleConfiguration.setJAccessTokenDuration([ACCESS_TOKEN_DURATION]);
authModuleConfiguration.setRefreshTokenDuration([REFRESH_TOKEN_DURATION]);
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

```
login(authData: AuthData): Promise<TokenData>
```

### Logout

Clear and return tokens

```
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
