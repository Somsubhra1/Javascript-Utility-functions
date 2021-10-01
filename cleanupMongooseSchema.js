const cleanupMongooseSchema = (schema) => {
  let cleanSchema = {};
  for (const field in schema.paths) {
    const { path, instance, options } = schema.paths[field];

    cleanSchema[path] = { type: instance };

    if (schema.paths[field].hasOwnProperty("schema")) {
      console.log(schema.paths[field].schema);
      const nestedSchema = schema.paths[field].schema;
      const nestedCleanup = cleanupMongooseSchema(nestedSchema);
      cleanSchema[path].schema = nestedCleanup;
    }

    const toDestrcture = ["ref", "enum", "default"];
    toDestrcture.forEach((des) => {
      if (options.hasOwnProperty(des)) {
        cleanSchema[path][des] = options[des];
      }
    });
  }

  return cleanSchema;
};