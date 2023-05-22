import {createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const albumsApi = createApi({
    reducerPath:'albums',
    baseQuery : fetchBaseQuery({
        baseUrl:"http://localhost:3005"
    }),
    endpoints(builder){
        return{
            fetchAlbums : builder.query({
               providesTags:(result,error,arg) => {
                return [{type:'Album',id:arg.id}];
               },
                query:(user) => {
                    return{
                        url:"/albums",
                        params:{
                            userId:user.id
                        },
                        method:'GET'
                    }
                }
            }),
            addAlbum : builder.mutation({
                invalidatesTags:(result,error,arg) =>{
                    return [{type:'Album',id:arg.userId}]
                },
                query:(album) => {
                    return {
                        url:"/albums",
                        method:"POST",
                        body:{
                            title : album.title,
                            userId : album.userId
                        }
                    }
                }
            })
        }
    }

    
})   

console.log(albumsApi);

export default albumsApi;
export const {useFetchAlbumsQuery,useAddAlbumMutation} = albumsApi;
