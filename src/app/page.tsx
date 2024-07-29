'use client'
import { Provider } from "react-redux";
import store from "@/lib/store";
import HomePage from "@/components/CustomComponents/HomePage";

export default function Home() {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  )
}
