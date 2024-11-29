import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, Store } from ".";

// useDispatch => Dispara uma ação (setState)
// useSelector => Forma como o store/estado (state)

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<Store>();
