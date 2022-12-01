import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// export const client = sanityClient({
//     projectId: process.env.REACT_APP__SANITY_PROJECT_ID,
//     dataset: 'production',
//     apiVersion: '2022-02-01',
//     useCdn: true,
//     token: process.env.REACT_APP__SANITY_TOKEN
// }); 

export const client = sanityClient({
    projectId: '9w20b1up',
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: 'sk6VN6lfjQGp4mBVZryN8pUW5DjOsLuowq8KQd1azJP5yHrgHfpxWe8SkV30M3kObrxX8lE24EPBJPhsQAhJuwwHdQCHaE2jVxXEc104hptH982ylPu2yWWTJbIou2UHSpNBwDQFzyKKYOCIZDQCMXmm4kxzhXjZ8mlTet9dvMBeUHGrKUyA'
}); 

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);