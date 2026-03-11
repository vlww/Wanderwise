import { useState, useRef, useEffect } from "react";
import { SearchIcon, HeartIcon, ImageIcon, TagIcon } from "../components/Icons";
import {
  ALL_DESTINATIONS, BUDGET_OPTIONS, DURATION_OPTIONS,
  INTEREST_OPTIONS, PER_PAGE,
} from "../data/initialData";
import "../styles/destination-finder.css";