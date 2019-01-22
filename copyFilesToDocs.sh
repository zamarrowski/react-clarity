npm run prepublish
rm -rf ../react-clarity-test/node_modules/react-clarity
cp ./src/MetropolisRegular.otf ./lib/
cp -r ./lib ../react-clarity-test/node_modules/react-clarity
rm -rf ../react-clarity-test/node_modules/react-clarity/node_modules
mkdir -p ../react-clarity-test/node_modules/react-clarity/node_modules/react-ionicons
cp -r ./node_modules ../react-clarity-test/node_modules/react-clarity
