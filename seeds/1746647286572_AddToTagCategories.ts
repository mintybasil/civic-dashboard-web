import type { Kysely } from 'kysely';
import fs from 'fs';
export async function seed(db: Kysely<never>): Promise<void> {
  const rawData = fs.readFileSync('seeds/categories_tags.json', 'utf-8');
  const jsonData = JSON.parse(rawData);

  await db.deleteFrom('TagCategories').execute();
  await db.insertInto('TagCategories').values(jsonData).execute();
  console.log('Seeded TagCategories table successfully');
}
