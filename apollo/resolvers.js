import Hike from '../models/hikeModel'

export const resolvers = {
    Query: {
        hikes: async () => await Hike.find({})
    },
    Mutation: {
        createHike: async (_, args) => {
            const hike = new Hike(args)
            await hike.save();
            return hike;
        }
    }
};