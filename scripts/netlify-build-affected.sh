#!/bin/bash

# Run nx affected to get the list of affected projects
AFFECTED_APPS=$(nx show projects --affected --verbose)

# Check if any apps are affected
if [ -z "$AFFECTED_APPS" ]; then
  echo "No affected apps. Skipping build."
  exit 0
fi

# Get the first affected app (you can modify this if needed)
AFFECTED_PROJECT=$(echo "$AFFECTED_APPS" | head -n 1)

echo "Affected project detected: $AFFECTED_PROJECT"

# Set the affected project as an environment variable for Netlify
export NETLIFY_AFFECTED_PROJECT=$AFFECTED_PROJECT

# Build the affected project
npx nx build $AFFECTED_PROJECT --prod
