#!/bin/bash

echo 'Fixing PropTypes issue related to react-native-table-component...'
for file in ./node_modules/react-native-table-component/components/*.js; do
    sed -i '' -e '/ViewPropTypes\.style/g' $file
    sed -i '' -e '/Text\.propTypes/g' $file
done
echo 'PropTypes issue fixed!'
