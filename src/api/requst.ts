import { GraphQLClient } from "graphql-request";

const TOKEN = process.env.HYGRAPH_TOKEN!;
const hygraph = new GraphQLClient(
    "https://api-eu-central-1.hygraph.com/v2/cl2ovcdar3yza01z41up1g3ep/master",
    {
        headers: {
            Authorization: TOKEN,
        },
    },
);
import { gql } from "graphql-request";

const request = async <T>(query: string): Promise<T> =>
    await hygraph.request(gql`
        ${query}
    `);

export default request;
