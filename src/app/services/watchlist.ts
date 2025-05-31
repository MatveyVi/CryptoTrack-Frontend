import { useSelector } from "react-redux"
import { selectFavoriteCoins } from "../../features/user/userSlice"
import { useAddToWatchlistMutation, useDeleteFromWatchlistMutation } from "./userApi"

export const useWatchlist = () => {
    const favoriteCoins = useSelector(selectFavoriteCoins)
    const [triggerAddToWatchlist] = useAddToWatchlistMutation()
    const [triggerDeleteFromWatchlist] = useDeleteFromWatchlistMutation()

    const toggleWatchlist = async (id: string) => {
        if (favoriteCoins?.includes(id)) {
            await triggerDeleteFromWatchlist(id)
        } else {
            await triggerAddToWatchlist(id)
        }
    }
    return {
        toggleWatchlist
    }
}