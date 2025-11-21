import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
export default function SkeletonLoading({ width, height, borderRadius }: { width: string; height: string, borderRadius: string }) {
    return (
        <Skeleton width={width} height={height} borderRadius={borderRadius} baseColor="#ccc" />
    )
}