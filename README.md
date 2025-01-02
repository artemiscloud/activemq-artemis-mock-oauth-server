#### :warning:This project is now part of the ArkMQ initiative. This repository has been archived as all activities are now happening in the [corresponding ArkMQ repository](https://github.com/arkmq-org/activemq-artemis-mock-oauth-server). See [here](https://artemiscloud.io/community/transition/) for the ArkMQ transition details.

---

# ActiveMQ Artemis Oauth Server

The ActiveMQ Artemis Oauth Server is a simple Oauth2 mocking server issuing
faked JWT tokens and can be used in the development workflow of the self
provisioning plugin to replace more complex setups.

It's using under the hood this project: https://www.npmjs.com/package/oauth2-mock-server

To execute the server:

```
yarn build
yarn start
```
