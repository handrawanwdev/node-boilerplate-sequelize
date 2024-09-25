const path = require("path");
const fs = require("fs");

const args = process.argv.slice(2);
let [make_module, modul_name] = args;
let rosource_dir = path.join(__dirname,"resource", modul_name);

try {


  let {
    CONTROLLER,
    REPOSITORY,
    ROUTER,
    SCHEMA,
    SERVICE
  } = require("./template");
  // node boilerplate.js make:module users

  // create module resources
  if (make_module.toLowerCase() === "make:module") {
    CONTROLLER = CONTROLLER.replace(/\[MODUL_NAME]/g, modul_name);
    REPOSITORY = REPOSITORY.replace(/\[MODUL_NAME]/g, modul_name);
    ROUTER = ROUTER.replace(/\[MODUL_NAME]/g, modul_name);
    SCHEMA = SCHEMA.replace(/\[MODUL_NAME]/g, modul_name);
    SERVICE = SERVICE.replace(/\[MODUL_NAME]/g, modul_name);
    
    fs.mkdirSync(path.join(rosource_dir), { recursive: true });


    // create controller
    fs.writeFile(
      path.join(rosource_dir, `${modul_name}.controller.js`),
      CONTROLLER,
      function (err) {
        if (err) throw err;
        console.log(
          "Created ",
          path.join(rosource_dir, `${modul_name}.controller.js`)
        );
      }
    );

    // create model
    fs.writeFile(
      path.join(rosource_dir, `${modul_name}.repository.js`),
      REPOSITORY,
      function (err) {
        if (err) throw err;
        console.log("Created ", path.join(rosource_dir, "repository.js"));
      }
    );

    // create router
    fs.writeFile(
      path.join(rosource_dir, `${modul_name.toLowerCase()}.route.js`),
      ROUTER,
      function (err) {
        if (err) throw err;
        console.log(
          "Created ",
          path.join(rosource_dir, `${modul_name.toLowerCase()}_route.js`)
        );
      }
    );

     // create service
     fs.writeFile(
      path.join(rosource_dir, `${modul_name}.service.js`),
      SCHEMA,
      function (err) {
        if (err) throw err;
        console.log("Created ", path.join(rosource_dir, "service.js"));
      }
    );

    // create schema
    fs.writeFile(
      path.join(rosource_dir, `${modul_name}.validate.js`),
      SCHEMA,
      function (err) {
        if (err) throw err;
        console.log("Created ", path.join(rosource_dir, "validate.js"));
      }
    );
  
  } else if (make_module.toLowerCase() === "remove:module") {
    fs.rmdirSync(path.join(rosource_dir), { recursive: true });
    console.log("Module removed successfully");
  }
} catch (error) {
  console.log("error ", error);
}
