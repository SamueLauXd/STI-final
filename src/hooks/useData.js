import { useContext } from "react";
import { UserDataContext } from "../context/userData";

export function useData () {
    const {userData, setUserData} = useContext(UserDataContext)

    return {
        userData,
        setUserData
    }
}