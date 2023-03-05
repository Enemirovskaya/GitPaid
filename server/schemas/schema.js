const graphql = require('graphql');
const { findById, findOne } = require('../models/User');



const{ GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

const ReceiptType = new GraphQLObjectType({
    name: 'Receipt',
    fields: ()=>({
        receiptNo: { type: GraphQLString },
        amount: { type: GraphQLString },
        date: { type: GraphQLString },
        from: { type: GraphQLString },
        to: { type: GraphQLString },
        email: { type: GraphQLString },
        userId: { type: GraphQLString },
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        receipt: {
            type: ReceiptType,
            arge: {receiptNo: {type: GraphQLString}},
            resolve(parent, args){
                // code to get data from db / other source
                return findOne(receipt, {id:args.receiptNo});
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});