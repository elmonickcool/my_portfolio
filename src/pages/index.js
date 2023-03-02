import Hero from "../components/sections/Hero"
import Stacks from "../components/sections/Stacks"
import Featured from "@/components/sections/FeaturedProject";

function HomePage() {
    return (
        <div>
            <Hero/>
            <Stacks/>
            <Featured/>
        </div>
    )
}

export default HomePage;