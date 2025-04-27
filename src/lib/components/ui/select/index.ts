import { Select as SelectPrimitive } from "bits-ui";

import GroupHeading from "./select-group-heading.svelte";
import Item from "./select-item.svelte";
import Content from "./select-content.svelte";
import Trigger from "./select-trigger.svelte";
import Separator from "./select-separator.svelte";
import ScrollDownButton from "./select-scroll-down-button.svelte";
import ScrollUpButton from "./select-scroll-up-button.svelte";
import Caret from "./select-caret.svelte";

const Root = SelectPrimitive.Root;
const Group = SelectPrimitive.Group;

export const nativeClass =
	"h-full w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sm:hidden appearance-none";

export {
	Root,
	Group,
	GroupHeading,
	Item,
	Content,
	Trigger,
	Separator,
	ScrollDownButton,
	ScrollUpButton,
	Caret,
	//
	Root as Select,
	Group as SelectGroup,
	GroupHeading as SelectGroupHeading,
	Item as SelectItem,
	Content as SelectContent,
	Trigger as SelectTrigger,
	Separator as SelectSeparator,
	ScrollDownButton as SelectScrollDownButton,
	ScrollUpButton as SelectScrollUpButton,
};
