import Hike from "../models/hikeModel";

const createEntryHike = async(parent, args) => {
    const hike = new Hike(args)
    await hike.save();
    return hike;
}

export default {
    createEntryHike
}
