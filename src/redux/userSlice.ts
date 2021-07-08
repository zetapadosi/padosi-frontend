import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  isLoggedIn: boolean;
  userId: string;
  name: string;
  bio: string;
  picture: string;
  joined: string;
  followers: number;
  following: number;
  location: { lat: number; lng: number };
}

const initialState: UserState = {
  isLoggedIn: false,
  userId: null,
  name: null,
  bio: null,
  picture: null,
  joined: null,
  followers: null,
  following: null,
  location: { lat: null, lng: null },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeBio: (state, action) => {
      state.bio = action.payload;
    },
    setUser: (state, action: PayloadAction<UserState>) => {
      const {
        userId,
        name,
        bio,
        picture,
        joined,
        followers,
        following,
        location,
        isLoggedIn,
      } = action.payload;
      state.isLoggedIn = isLoggedIn;
      state.userId = userId;
      state.name = name;
      state.bio = bio;
      state.picture = picture;
      state.joined = joined;
      state.followers = followers;
      state.following = following;
      state.location = location;
    },
    clearUser: (state) => {
      state.isLoggedIn = false;
      state.userId = null;
      state.name = null;
      state.bio = null;
      state.picture = null;
      state.joined = null;
      state.followers = null;
      state.following = null;
      state.location = { lat: null, lng: null };
    },
  },
});

export const { changeBio, setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
