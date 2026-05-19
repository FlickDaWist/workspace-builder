## Tech
Next js scaffold with T3, Tailwind, Shadcn ui, AI tools Gemini, Copilot

## Building Process
My first idea was to have a 3d ui of a room where user can choose the objects(table, chair, monitor, etc) then on the sidebar will show list products to choose from. But it seems to be quite challenging to built at the moment, moving on to second idea.
My second idea was also inspired from that but instead of a 3d graphic, I used a picture of clean workspace setup as a background to which the user can choose the items from the picture and choose the products to rent.
Then I look for a free clean workspace setup image to use as the base. Then I need to mark each of the items that available for rent. To be able to select the items, I created a layer using SVG as canvas, then I need to create the item masks, the tools that I use is image-map.net. I create the mask using poly then extract the coords of each points. Then use that to form the objects on the SVG canvas.
Next adding the functionality when hovering, clicking the mask, there will be products list to choose for rent on the section below. When a product is selected an indicator bubble will showed up.

## What can be improved
Because I'm using static image for the items selection, making any changes to those items didn't change the actual object visually but only the indicator. So perhaps making the item actually reflecting the images would make the workspace customization more interesting.


