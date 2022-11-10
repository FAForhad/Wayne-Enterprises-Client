import { useEffect } from "react"

//  hook for the title
const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - WAYNE`;
    }, [title])
}

export default useTitle;