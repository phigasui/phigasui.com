#! /usr/bin/env bash

aws s3 sync . s3://phigasui.com/ --exclude '*' --include '*.html' --include '*.jpg' --include '*.png' --include '*.svg' --include '*.css' --include '*.js' --include '*.ico' --include '*.json'
aws cloudfront create-invalidation --distribution-id E1G18L83B2NRRD --paths "/*"
