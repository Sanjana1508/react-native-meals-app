import Realm from "realm";

export const CATEGORIES_SCHEMA = "Categories";

export const CategoriesSchema = {
  name: CATEGORIES_SCHEMA,
  primaryKey: "id",
  properties: {
    id: "string",
    title: { type: "string", indexed: true },
    color: { type: "string", indexed: true },
  },
};

const databaseOptions = {
  path: "mealsApp.realm",
  schema: [CategoriesSchema],
  schemaVersion: 0,
};

export const insertNewCategory = (newCategory) =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then((realm) => {
        realm.write(() => {
          realm.create(CATEGORIES_SCHEMA, newCategory);
          resolve(newCategory);
        });
      })
      .catch((error) => reject(error));
  });

export const queryAllCategories = () =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then((realm) => {
        let allCategories = realm.objects(CATEGORIES_SCHEMA);
        resolve(allCategories);
      })
      .catch((error) => {
        reject(error);
      });
  });

export default new Realm(databaseOptions);
