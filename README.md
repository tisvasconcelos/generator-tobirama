# Generator-tobirama
[![Build Status](https://secure.travis-ci.org/tisvasconcelos/generator-tobirama.png?branch=master)](https://travis-ci.org/tisvasconcelos/generator-tobirama)

A generator for Yeoman, this generator create a codeigniter (php framework) structure.

## Getting started
- Make sure you have [yo](https://github.com/yeoman/yo) installed:
    `npm install -g yo`
- Install the generator: `npm install -g generator-tobirama`
- Run: `yo tobirama`

## Important

#### This generator will create a CodeIgniter (Version 2.1.4) structure, with some changes:

- Front-end files are in the folder templates/default/...
- The folder application/view doesn't exist

## Configuration

#### When you run the generator, you have to answer some questions:

- Project Name (default: Project Name)
- Prject URL (default: http://localhost/)
- Database hostname (default: 127.0.0.1:3306)
- Database username (default: root)
- Database password (default: root)
- Database name (default: database_name)
- Timezone (default: America/Sao_Paulo)

These settings are in the file CONFIG.ini, located in the project root, you can change it at any time.

#### Obs.: You will see that CONFIG.ini have the template path, you can changed if you need.

## License
[MIT License](http://en.wikipedia.org/wiki/MIT_License)
