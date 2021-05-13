# AutoFormValidation

## Introduction 
AutoFormValidation makes form validation dynamic and generic by consuming the metadata of the columns of a table in the MySQL Database.
The solution development report can be found [here](https://drive.google.com/file/d/1NJhtrXK_rb5fmPLpwK2G_mrJ0_zs7jFc/view?usp=sharing).
## Getting Started
How to get a copy of the project and have it running.

### Requirement Dependencies
- Node.js - v12.x.x
- MySQL - v8.x.x
- [Package.json](metadata/package.json) \[metadata\]
- [Package.json](example/crud/package.json) \[example/crud\]
### Installation
1.  Clone the repo
    ```sh
    git clone git@github.com:vsseixaso/tcc.git
    ```
2. Install packages
    ```sh
    cd metadata
    yarn
    ```
3. Add database settings
    > Add your connection config to the MySQL database in [config/db.js](https://github.com/vsseixaso/AutoFormValidation/blob/main/metadata/src/config/dbCredentials.js)
4. Run
    ```sh
    yarn start
    ```

### Usage
This project contains a suggested usage for the API in the [example](https://github.com/vsseixaso/AutoFormValidation/tree/main/example) folder.

 - In [metadata](https://github.com/vsseixaso/AutoFormValidation/blob/main/example/crud/src/services/metadata.js) the application calls the API
 - In [validateField](https://github.com/vsseixaso/AutoFormValidation/blob/main/validateField/validateField.js) the form fields are validated. *In the future this will be in a js library for use and increment*
 - In the [form](https://github.com/vsseixaso/AutoFormValidation/blob/main/example/crud/src/components/employee/Form.js) the fields make use of the validateField
