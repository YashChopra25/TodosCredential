'use client'
import { Provider } from "react-redux";
import store from "@/lib/store";
import HomePage from "@/components/CustomComponents/HomePage";
import { Toaster } from "sonner";

export default function Home() {
  return (
    <Provider store={store}>
      <HomePage />
      <Toaster richColors/>
    </Provider>
  )
}
