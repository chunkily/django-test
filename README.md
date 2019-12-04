# Django Test

App to test using Django

## Getting Started

### Installation

You will first need the following dependencies installed for your development environment.

1. [Python >= 3.6](https://www.python.org/)
1. [Node.js >= 10](https://nodejs.org/en/) and npm
1. [Docker](https://docs.docker.com/install/) and docker-compose
1. [GNU Make](https://www.gnu.org/software/make/) (Optional - for quick commands)

Next create a Python virtual env and install the dependencies listed in `mysite/requirements-dev.txt` into it.

```shell
python -m venv ./venv/
source venv/bin/activate
python -m pip install mysite/requirements-dev.txt
```

Next install the npm dev-dependencies

```shell
npm install
```

### Environment Variables & ".env"

Create a file named `.env` in the same directory as the `docker-compose.dev.yml` file and populate it with the required variables.

### Run Dev Server

To create and run the dev server with docker-compose.

```shell
docker-compose --file docker-compose.dev.yml up --build --detach
```

This should start up 2 containers, one with a dev database and another running the Django application listening on port 8000.

Check that it is working by visiting <http://localhost:8000> in any browser.

Note that this environment mounts the `mysite` directory inside the Django container using a bind mount, so any changes you make locally should also be reflected in this dev environment.

### Creating Superuser

Create a superuser using Django's createsuperuser command.

```shell
python mysite/manage.py createsuperuser
```

## Code Style

This project uses the following tools to autoformat the files to follow a common convention.

- `js-beautify` for formatting HTML and CSS files. (We don't use prettier because it breaks Django HTML templates)
- `isort` for automatically sorting Python imports.
- `black` for formatting Python source code.

This project uses the following tools to lint code to detect problems early.

- `flake8` for linting Python source code.

## Make Commands

The Makefile contains some commands to easily perform simple things like automatic formatting, linting and testing.

```shell
make lint
make test
```

Run _make_ without any targets to get a list of the available commands.

```shell
$> make
Available rules:

dev                 Start the development server with docker-compose
environment         Create the development environment
...
```
