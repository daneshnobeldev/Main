import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

/// DEV only  - artificial throttling 
const pause = (duration) => {
    return new Promise(resolve => {
        setTimeout(resolve, duration)
    })
}
const albumsApi = createApi({
    reducerPath: 'albums',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3005",
        fetchFn: async (...args) => {
            /// Artificial throttling to test animations
            ///Not for Production
            await pause(1000);
            return fetch(...args)
        }
    }),
    endpoints(builder) {
        return {
            fetchAlbums: builder.query({
                providesTags: (result, error, arg) => {
                    const tags = result.map(album => {
                        return {type:'Album',id:album.id}
                    })
                    tags.push({type:'UsersAlbum',id:arg.id});
                    return tags;
                },
                query: (user) => {
                    return {
                        url: "/albums",
                        params: {
                            userId: user.id
                        },
                        method: 'GET'
                    }
                }
            }),
            addAlbum: builder.mutation({    
                invalidatesTags: (result, error, arg) => {
                    console.log(result);
                    return [{ type: 'UsersAlbum', id: arg.userId }]
                },
                query: (album) => {
                    return {
                        url: "/albums",
                        method: "POST",
                        body: {
                            title: album.title,
                            userId: album.userId
                        }
                    }
                }
            }),
            deleteAlbum: builder.mutation({
                invalidatesTags: (result,error,args) => {
                   
                    return [{ type: 'Album', id: args.id }]
                },
                query: (album) => {
                    return {
                        url: `/albums/${album.id}`,
                        method:'DELETE',
                        fetchFn: async (args) => {
                            await pause(2000);
                            return fetch(...args)
                        }
                    }
                }
            }),
        }
    }


})

console.log(albumsApi);

export default albumsApi;
export const {
    useFetchAlbumsQuery,
    useAddAlbumMutation,
    useDeleteAlbumMutation
} = albumsApi;
