# Build a Basic CRUD App with Laravel and Vue

This example shows how to use Laravel and Vue to create a basic CRUD app for hosting trivia games, using Okta to handle authentication.

Please read (Article Placeholder) to see how this application was built.

**Prerequisites:** PHP, Node, [Okta developer account](https://developer.okta.com/)

> [Okta](https://developer.okta.com) has Authentication and User Management APIs that reduce development time with instant-on, scalable user infrastructure. Okta's intuitive API and expert support make it easy for developers to authenticate, manage, and secure users and roles in any application.

## Getting Started

Sign up for an [Okta developer account](https://developer.okta.com) and create a new application. Make note of the Client ID and Issuer values for your application.

Clone this project using the following commands:

```
git clone git@github.com:oktadeveloper/okta-php-laravel-vue-crud-example.git
cd okta-php-laravel-vue-crud-example
```

### Set up the Backend

Create the database and user for the project:

```
mysql -uroot -p
CREATE DATABASE trivia CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
GRANT ALL on trivia.* to trivia@127.0.0.1 identified by 'trivia';
quit
```

Copy the example `.env` file:

```
cd trivia-web-service
cp .env.example .env
```

Put the database details in the `.env` file:

```
DB_DATABASE=trivia
DB_USERNAME=trivia
DB_PASSWORD=trivia
```

Edit `app/Http/Middleware/AuthenticateWithOkta.php` and replace the Okta credentials with your own.

Install the project dependencies, generate a project key, run the migrations and then start the server:

```
composer install
php artisan key:generate
php artisan migrate
php artisan serve
```

Loading [127.0.0.1:8000](127.0.0.1:8000) now should show the default Laravel page, and [127.0.0.1:8000/api/players](127.0.0.1:8000/api/players) should show you a 'Unauthorized' message. NOTE: if using a virtual machine and NAT, you might need to run the server as `php artisan serve --host 0.0.0.0` instead.

### Set up the Frontend

```
cd trivia-web-client-vue
yarn install
yarn serve
```

NOTE: if using a virtual machine and NAT, you might need to run the server as `yarn serve --host 0.0.0.0` instead.

Loading [127.0.0.1:8080](127.0.0.1:8080) now should show you the application.

## Help

Please post any questions as comments on the (Article Placeholder), or visit our [Okta Developer Forums](https://devforum.okta.com/). You can also email developers@okta.com if would like to create a support ticket.

## License

Apache 2.0, see [LICENSE](LICENSE).