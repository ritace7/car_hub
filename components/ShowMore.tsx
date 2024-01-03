"use client"

//components
import { Button } from ".";
import { useRouter } from "next/navigation";
import { updateSearchParams } from "@/utils";

//types
import { ShowMoreProps } from "@/types";

const ShowMore = ({pageNumber, isNext} : ShowMoreProps) => {
    const router = useRouter();

    const handleNavigation = () => {
        const newLimit = (pageNumber + 1) * 10;
        const newPathName = updateSearchParams("limit", newLimit.toString());
        router.push(newPathName);
    }

    return (
        <div className="w-full flex-center gap-5 mt-10">
            {!isNext && (
                <Button 
                    title="Show More"
                    btnType="button"
                    containerStyles="bg-primary-blue rounded-full text-white"
                    handleClick={handleNavigation}
                />
            )}
        </div>
    )
}

export default ShowMore