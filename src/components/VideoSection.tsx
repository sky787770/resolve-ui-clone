import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const VideoSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Label */}
        <div className="mb-4">
          <span className="inline-block text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
            How it works
          </span>
        </div>

        {/* Section Header */}
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
          Take a peek with a video overview
        </h2>
        
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Get your first chatbot ready to go in just 5 minutes!
        </p>

        {/* Video Placeholder */}
        <div className="relative bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl overflow-hidden shadow-2xl">
          <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-purple-200/50 to-blue-200/50">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-4 shadow-lg"
            >
              <Play className="mr-2 h-6 w-6 fill-current" />
              Play Video
            </Button>
          </div>
          
          {/* Video Overlay Elements */}
          <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-sm">
            <div className="text-sm font-medium text-foreground">ResolveAI Overview</div>
            <div className="text-xs text-muted-foreground">5:24 min</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;