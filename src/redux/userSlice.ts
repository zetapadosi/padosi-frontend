import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  isLoggedIn: boolean;
  userId: string;
  _id: string;
  name: string;
  bio: string;
  picture: string;
  joined: string;
  followers: number;
  following: number;
  location: { lat: number; lng: number };
  area: string;
}

const initialState: UserState = {
  isLoggedIn: false,
  name: null,
  userId: null,
  _id: null,
  bio: null,
  picture: null,
  joined: null,
  followers: null,
  following: null,
  location: { lat: null, lng: null },
  area: null,
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
        name,
        bio,
        picture,
        joined,
        userId,
        _id,
        followers,
        following,
        location,
        isLoggedIn,
        area,
      } = action.payload;
      state.isLoggedIn = isLoggedIn;
      state.userId = userId;
      state._id = _id;
      state.name = name;
      state.bio = bio;
      state.picture = picture;
      state.joined = joined;
      state.followers = followers;
      state.following = following;
      state.location = location;
      state.area = area;
    },
    clearUser: (state) => {
      state.isLoggedIn = false;
      state.userId = null;
      state._id = null;
      state.name = null;
      state.bio = null;
      state.picture = null;
      state.joined = null;
      state.followers = null;
      state.following = null;
      state.location = { lat: null, lng: null };
      state.area = null;
    },
  },
});

export const { changeBio, setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
