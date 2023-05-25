
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";
const pause = (duration) => {
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    })
}
const photosApi = createApi({
    reducerPath: "photos",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3005",
        fetchFn:async(...args) => {
            await pause(1000);
            return fetch(...args);

        }
    }),

    endpoints(builder) {
        return {
            
            fetchPhotos: builder.query({
                providesTags:(result,error,arg) => {
                    debugger;
                    const tags = result.map(photo => {
                        return {type:"Photos",id:photo.id}
                    })
                    tags.push({type:"AlbumPhotos",id:arg.id});
                    return tags;
                },
                query: (album) => {
                    return {
                        url: "/photos",
                        params: {
                            albumId: album.id
                        },
                        method: "GET"
                    }
                }
            }),
            addPhoto: builder.mutation({
                invalidatesTags : (result,error,arg) => {
                    return [{type:"AlbumPhotos",id:arg.id}]
                },
                query: (album) => {
                    return {
                        url: "/photos",
                        body: {
                            
                            albumId: album.id,
                            url: faker.image.url({height:100,width:100})

                        },
                        method: "POST"
                    }
                }
            }),
            removePhoto: builder.mutation({
                invalidatesTags : (result,error,arg) => {
                    return [{type:"Photos",id:arg.id}]
                },
                query: (photo) => {
                    return {
                        url: `/photos/${photo.id}`,
                        method: "DELETE"

                    }
                }
            }),
        }
    }

})

export { photosApi }
export const { 
    useFetchPhotosQuery,
    useAddPhotoMutation,
    useRemovePhotoMutation
} = photosApi