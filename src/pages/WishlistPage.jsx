import { useState, useRef, useEffect } from "react";
import { HeartIcon, ImageIcon } from "../components/Icons";
import {
  BUDGET_OPTIONS, DURATION_OPTIONS, INTEREST_OPTIONS, ALL_DESTINATIONS, PER_PAGE,
} from "../data/initialData";
import "../styles/wishlist.css";

const LABEL_OPTIONS = ["Favorite", "Maybe", "Too Expensive"];

const LABEL_COLORS = {
  Favorite:     { bg:"rgba(232,113,74,.12)", border:"#E8714A", text:"#C05030" },
  Maybe:        { bg:"rgba(180,150,40,.12)", border:"#B8960A", text:"#8A7000" },
  "Too Expensive": { bg:"rgba(44,95,138,.10)", border:"#4A8BB5", text:"#2C5F8A" },
};