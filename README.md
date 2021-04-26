# AutoFormValidation

## Introduction 
Validation of Form Fields in Web Applications from Entity Metadata in the Database

## Getting Started
How to get a copy of the project and have it running.

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
    > Add your connection config to the database in [config/db.js](https://github.com/vsseixaso/tcc/blob/main/metadata/src/config/db.js)
4. Run
    ```sh
    yarn start
    ```

### Usage
This project contains a suggested usage for the API in the [example](https://github.com/vsseixaso/tcc/tree/main/example) folder.

 - In [rules](https://github.com/vsseixaso/tcc/blob/main/example/crud/src/services/rules.js) the application calls the API
 - In [validateField](https://github.com/vsseixaso/tcc/blob/main/example/crud/src/utils/validateField.js) the form fields are validated. *In the future this will be in a js library for use and increment*
 - In the [form](https://github.com/vsseixaso/tcc/blob/main/example/crud/src/components/employee/Form.js) the fields make use of the validateField
