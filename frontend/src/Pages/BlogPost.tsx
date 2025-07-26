import { useParams } from "react-router-dom";
import Secretary from "../posts/secretary.mdx"
import Nash from "../posts/nash.mdx"
import NotFound from "./NotFound";
import Toggle from "../Components/toggle";
import Button from "../Components/button";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import StarBackground from "../Components/StarBackground";


function BlogPost() {
    
    const blogMap = {
        
        'nash-equilibrium': {
        title: 'Nash Equilibrium',
        content: Nash
        },
        'secretary': {
        title: 'The Secretary Problem',
        content: Secretary
        },
        'vector-search': {
        title: 'The Secretary Problem',
        content: Secretary
        },
        'graphs': {
        title: 'The Secretary Problem',
        content: Secretary
        },
        'MLPipelines': {
        title: 'The Secretary Problem',
        content: Secretary
        }
  
    };

    const { slug } = useParams();
    
    if (!slug || !(slug in blogMap)) {
        return <NotFound />;
    }
    const typedSlug = slug as keyof typeof blogMap;
    const { title, content: PostComponent } = blogMap[typedSlug];

  return (
    <div className="h-full text-foreground overflow-x-hidden bg-background">
        <Toggle />

        <StarBackground />

        <Navbar />

        <section className="py-24 px-4 min-h-screen items-center justify-center flex flex-col gap-8 z-30 container ">

            <div className="text-5xl text-foreground font-bold tracking-tight">{title}</div>
            
            <div className="text-xl max-w-7xl gradient-border rounded-2xl m-5 p-5 text-left prose prose-invert prose dark:prose-invert">
                <PostComponent />
            </div>  

        
            <Button href={"/BlogPage"} type={true} text={"Back to Blog page"}/>


        </section>

        <Footer />

    </div>
  )
}

export default BlogPost
