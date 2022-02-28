import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';

// features
import movieReducer from '../features/MovieSlice';

export default configureStore({
    reducer: {movie: movieReducer},
    middleware: getDefaultMiddleware({serializableCheck: false})
});
