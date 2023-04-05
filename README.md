# Secret Interview test

Interview test for a secret process application

## Instructions

In order to run the cli you'll need to install it's dependencies and build it first by running the following command in the root folder

```
npm i && npm run build
```

Once the project is built, a new folder `dist` will be generated.\
Inside that folder you can run:

```
node cli.js input.csv > output.csv
```

## Testing

I added a couple of tests to validate the critical parts of the cli, like the `matrix-rotation.ts` file and the `data-process.ts` file.\
To run the tests, run the following command:

```
npm run test
```

## Sample input data

As input data, the following csv file can be used:

```
id,json
1,"[1, 2, 3, 4, 5, 6, 7, 8, 9]"
2,"[40, 20, 90, 10]"
3,"[-5]"
9,"[2, -0]"
5,"[2, -5, -5]"
8,"[1, 1, 1, 1, 1]”
```

And the expected output should be as follows:

```
id,json,is_valid
1,"[2,3,6,1,5,9,4,7,8]",true
2,"[20,10,40,90]",true
3,[-5],true
9,[],false
5,[],false
8,[],false
```
