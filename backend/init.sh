#!/bin/bash
echo "📥 Importing JSON data..."

mongoimport --db realestate --collection estatetypes --file /data/estatetypes.json --jsonArray
mongoimport --db realestate --collection regions --file /data/regions.json --jsonArray

echo "✅ Import completed."
