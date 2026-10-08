import { readFileSync } from "node:fs";
import { join } from "node:path";
import  db  from "./db";

const schema = readFileSync(join(__dirname, "schemas", "setup.sql"), "utf8");
console.log("🔍 Setup Schema found successfully.");

const queryList = schema.split(";").map((query)=> query.trim()).filter((query)=> query.length > 0);
console.log(`📜 Found ${queryList.length} queries in the setup schema.`);

async function seedDatabase() {
    try {
        for (const [index, query] of queryList.entries()) {
            await db.query(query);
            console.log(`✅ Executed query ${index + 1}/${queryList.length}`);
        }
        console.log("🎉 All queries executed successfully.");
    } catch (err) {
        console.error("❌ Error occurred while processing the setup schema:", err);
    }
}

if(queryList.length > 0){
    void seedDatabase();
} else{
    console.log("⚠️ No queries found in the setup schema. Database seeding skipped.");
}

