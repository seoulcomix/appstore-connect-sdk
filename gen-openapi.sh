npx openapi-generator-cli generate \
  -i ./openapi.oas.json \
  -o src/openapi \
  -g typescript-fetch \
  --additional-properties=supportsES6=true \
  --skip-validate-spec
