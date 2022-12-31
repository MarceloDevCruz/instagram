import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import photoService from '../services/photoServices'

const initialState = {
  photos: [],
  photo: {},
  error: false,
  success: false,
  loading: false,
  message: null
}

// Publicar foto
export const publishPhoto = createAsyncThunk(
  'photo/publish', async (photo, thunkAPI) => {

    const token = thunkAPI.getState().auth.user.token

    const data = await photoService.publishPhoto(photo, token)

    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0])
    }

    return data
  }
)

// Pegar post do usuário 
export const getUserPhotos = createAsyncThunk(
  'photo/userphotos', async (id, thunkAPI) => {

    const token = thunkAPI.getState().auth.user.token

    const data = await photoService.getUserPhotos(id, token)

    return data
  }
)

// Deletar post de um usuário 
export const deletePhoto = createAsyncThunk(
  'photo/delete', async (id, thunkAPI) => {

    const token = thunkAPI.getState().auth.user.token

    const data = await photoService.deletePhoto(id, token)

    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0])
    }

    return data
  }
)

// Pegar foto pelo ID
export const getPhotoById = createAsyncThunk('photo/getphoto', async (id) => {
  const data = await photoService.getPhotoById(id);

  return data;
});

// Função de like
export const likePhoto = createAsyncThunk(
  'photo/like', async (id, thunkAPI) => {

    const token = thunkAPI.getState().auth.user.token

    const data = await photoService.likePhoto(id, token)

    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0])
    }

    return data
  })

// Função de comentário
export const commentPhoto = createAsyncThunk(
  "photo/comment",
  async (photoData, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token

    const data = await photoService.commentPhoto(
      { comment: photoData.comment },
      photoData.id,
      token
    )

    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0])
    }

    return data
  }
)

// Resgata todas os posts
export const getAllPosts = createAsyncThunk(
  'photo/getall', async () => {

    const data = await photoService.getAllPosts()
    console.log(data)
    return data
  }
)


export const photoSlice = createSlice({
  name: 'photo',
  initialState,
  reducers: {
    resetMessage: (state) => {
      state.message = null
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(publishPhoto.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(publishPhoto.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.photo = action.payload;
        state.photos.unshift(state.photo)
        state.message = "Foto publicada com sucesso";
      })
      .addCase(publishPhoto.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.photo = {};
      })
      .addCase(getUserPhotos.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getUserPhotos.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.photos = action.payload;
      })
      .addCase(deletePhoto.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(deletePhoto.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.photos = state.photos.filter((photo) => {
          return photo._id !== action.payload.id
        })
        state.message = action.payload.message
      })
      .addCase(deletePhoto.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.photo = {};
      })
      .addCase(getPhotoById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPhotoById.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.photo = action.payload;
      })
      .addCase(likePhoto.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        if (state.photo.likes) {
          state.photo.likes.push(action.payload.userId);
        }
        state.photos.map((photo) => {
          if (photo._id === action.payload.photoId) {
            return photo.likes.push(action.payload.userId);
          }
          return photo
        });
        state.message = "Like";
      })
      .addCase(likePhoto.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(commentPhoto.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.photo.comments.push(action.payload.comment);
        state.message = action.payload.message;
      })
      .addCase(commentPhoto.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getAllPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllPosts.fulfilled, (state, action) => {
        console.log(action.payload);
        state.loading = false;
        state.success = true;
        state.error = null;
        state.photos = action.payload;
      })
  }
})

export const { resetMessage } = photoSlice.actions
export default photoSlice.reducer