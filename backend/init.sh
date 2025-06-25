#!/bin/bash
echo "📥 Importing JSON data..."

mongoimport --db realestate --collection estatetypes --file /data/data_default/estatetypes.json --jsonArray
mongoimport --db realestate --collection regions --file /data/data_default/regions.json --jsonArray

echo "✅ Import completed."