import { mongooseConnect } from "@/lib/mongoose";
import { Profile } from "@/models/Profile.model";
import NodeCache from "node-cache";

const cache = new NodeCache({ stdTTL: 300, checkperiod: 320 }); // Cache TTL set to 5 minutes

export default async function handle(req, res) {
  const { method } = req;

  await mongooseConnect();

  if (method === 'POST') {
    const { linkedin, github, leetcode, stackoverflow, twitter } = req.body;

    const profileDoc = await Profile.create({
      linkedin,
      github,
      leetcode,
      stackoverflow,
      twitter,
    });

    // Invalidate cache for the profile list
    cache.del("allProfiles");

    res.json(profileDoc);
  }

  if (method === 'PUT') {
    const { _id, linkedin, github, leetcode, stackoverflow, twitter } = req.body;
    await Profile.updateOne({ _id }, {
      linkedin,
      github,
      leetcode,
      stackoverflow,
      twitter,
    });

    // Invalidate cache for the updated profile and the profile list
    cache.del("allProfiles");
    cache.del(`profile_${_id}`);

    res.json(true);
  }

  if (method === 'GET') {
    if (req.query?.id) {
      const cacheKey = `profile_${req.query.id}`;
      let profile = cache.get(cacheKey);

      if (!profile) {
        profile = await Profile.findOne({ _id: req.query.id });
        cache.set(cacheKey, profile);
      }

      res.json(profile);
    } else {
      const cacheKey = "allProfiles";
      let profiles = cache.get(cacheKey);

      if (!profiles) {
        profiles = await Profile.find();
        cache.set(cacheKey, profiles);
      }

      res.json(profiles);
    }
  }

  if (method === 'DELETE') {
    if (req.query?.id) {
      await Profile.deleteOne({ _id: req.query.id });

      // Invalidate cache for the deleted profile and the profile list
      cache.del("allProfiles");
      cache.del(`profile_${req.query.id}`);

      res.json(true);
    }
  }
}