import { Card, CardContent, CardHeader, CardTitle } from "./card";

import { Input } from "./input";
import { Textarea } from "./textarea";
import { ImageUpload } from "./image-upload";
import { Button } from "./button";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";

import { Sparkles } from "lucide-react";

export const OpinionModal = ({ handleCreateOpinion }) => {
  return (
    <Card>
      {/* Opinion Modal */}
      <CardHeader>
        <CardTitle className="flex items-center gap-3">
          <Sparkles className="size-5 text-primary" />
          <h1 className="">Opinion Details</h1>
        </CardTitle>
      </CardHeader>
      <CardContent className="mt-4">
        <div className=" flex flex-col gap-3">
          <h2 className="text-sm">
            Title
            <span className="text-red-500 ml-2 font-bold">*</span>
          </h2>
          <Input
            placeholder="Will (Specific event) happen by [date]?"
            // value={''}
            // onChange={'(e) => setSearchQuery(e.target.value)'}
            className=""
          />
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          Make it specific and verifiable. Example: "The world will com to an
          end in december 2025?
        </p>
      </CardContent>

      <CardContent className="mt-4">
        <div className=" flex flex-col gap-3">
          <h2 className="text-sm">
            Description <span className="text-red-500 ml-2 font-bold">*</span>
          </h2>
          <Textarea
            id="claim"
            placeholder="Provide context and details about this market..."
            // value=""
            // onChange=""
            rows={4}
            className="resize-none"
          />
        </div>
      </CardContent>

      <CardContent className="mt-4">
        <div className=" flex flex-col gap-3">
          <h2 className="text-sm">Upload Photo (Optional)</h2>
          <ImageUpload />
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          This photo will be visible to admins during validation and displayed
          on the market card once approved
        </p>
      </CardContent>

      <CardContent className="mt-4">
        <div className=" flex flex-col gap-3">
          <h2 className="text-sm">
            Category <span className="text-red-500 ml-2 font-bold">*</span>
          </h2>
          {/* value={isTrue} onValueChange={handleVerifyClaim} */}
          <Select>
            <SelectTrigger
              className="w-full flex-1 h-11 bg-background/50 border-primary/30 text-sm text-muted-foreground"
              {...({} as any)}
            >
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {[
                "Politics",
                "Finance",
                "Sports",
                "Entertainment",
                "Technology",
                "Health",
                "Climate",
                "Celebrity Gossip",
              ].map((category) => (
                <SelectItem value={category}>{category}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardContent>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <h2 className="text-sm mb-3">
              Country <span className="text-red-500 ml-2 font-bold">*</span>
            </h2>
            {/* value={isTrue} onValueChange={handleVerifyClaim} */}
            <Select>
              <SelectTrigger
                className="w-full flex-1 h-11 bg-background/50 border-primary/30 text-sm text-muted-foreground"
                {...({} as any)}
              >
                <SelectValue placeholder="Select country" />
              </SelectTrigger>
              <SelectContent>
                {[
                  "Nigeria",
                  "Kenya",
                  "South Africa",
                  "Ghana",
                  "Morocco",
                  "Senegal",
                  "Egypt",
                  "Tanzania",
                  "Uganda",
                  "Ethiopia",
                ].map((category) => (
                  <SelectItem value={category}>{category}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <p className="text-xs text-muted-foreground mt-2">
              Select country where this event will take place
            </p>
          </div>

          <div>
            <h2 className="text-sm mb-3">
              Keywords
              <span className="text-red-500 ml-2 font-bold">*</span>
            </h2>
            <Input
              placeholder=""
              // value={""}
              // onChange={(e) => setSearchQuery(e.target.value)}
              className="border-primary/30"
            />
            <p className="text-xs text-muted-foreground mt-2">
              Add keywords separated by Comma
            </p>
          </div>
        </div>
      </CardContent>
      <CardContent className="mt-12">
        <Button className="cursor-pointer w-full" onClick={handleCreateOpinion}>
          <Sparkles className="size-5" />
          Share Your Opinion
        </Button>
      </CardContent>
    </Card>
  );
};
